/**
 * Frontend cryptography utilities using Web Crypto API
 * Uses AES-256-GCM for secure encryption/decryption
 */

// Convert string to ArrayBuffer
function stringToArrayBuffer(str: string): ArrayBuffer {
  const encoder = new TextEncoder();
  return encoder.encode(str).buffer;
}

// Convert ArrayBuffer to string
function arrayBufferToString(buffer: ArrayBuffer): string {
  const decoder = new TextDecoder();
  return decoder.decode(buffer);
}

// Convert ArrayBuffer to hex string
function arrayBufferToHex(buffer: ArrayBuffer): string {
  const byteArray = new Uint8Array(buffer);
  const hexCodes = [...byteArray].map(value => {
    const hexCode = value.toString(16);
    return hexCode.padStart(2, '0');
  });
  return hexCodes.join('');
}

// Convert hex string to ArrayBuffer
function hexToArrayBuffer(hex: string): ArrayBuffer {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.substr(i, 2), 16);
  }
  return bytes.buffer;
}

// Derive a key from a password using PBKDF2
async function deriveKey(password: string, salt: ArrayBuffer): Promise<CryptoKey> {
  const passwordBuffer = stringToArrayBuffer(password);
  
  // Import password as key material
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    passwordBuffer,
    'PBKDF2',
    false,
    ['deriveKey']
  );
  
  // Derive the actual key
  return crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: salt,
      iterations: 100000,
      hash: 'SHA-256'
    },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
}

/**
 * Encrypt a message using AES-256-GCM
 * @param message - The message to encrypt
 * @param password - The password/key for encryption
 * @returns Promise<string> - Hex-encoded encrypted data (salt:iv:ciphertext)
 */
export async function encryptMessage(message: string, password: string): Promise<string> {
  try {
    // Generate random salt and IV
    const salt = crypto.getRandomValues(new Uint8Array(16));
    const iv = crypto.getRandomValues(new Uint8Array(12));
    
    // Derive key from password
    const key = await deriveKey(password, salt.buffer);
    
    // Encrypt the message
    const messageBuffer = stringToArrayBuffer(message);
    const encryptedBuffer = await crypto.subtle.encrypt(
      { name: 'AES-GCM', iv: iv },
      key,
      messageBuffer
    );
    
    // Combine salt, IV, and encrypted data
    const saltHex = arrayBufferToHex(salt.buffer);
    const ivHex = arrayBufferToHex(iv.buffer);
    const encryptedHex = arrayBufferToHex(encryptedBuffer);
    
    return `${saltHex}:${ivHex}:${encryptedHex}`;
  } catch (err) {
    throw new Error('Encryption failed: ' + (err as Error).message);
  }
}

/**
 * Decrypt a message using AES-256-GCM
 * @param encryptedData - Hex-encoded encrypted data (salt:iv:ciphertext)
 * @param password - The password/key for decryption
 * @returns Promise<string> - The decrypted message
 */
export async function decryptMessage(encryptedData: string, password: string): Promise<string> {
  try {
    // Parse the encrypted data
    const parts = encryptedData.split(':');
    if (parts.length !== 3) {
      throw new Error('Invalid encrypted data format');
    }
    
    const [saltHex, ivHex, encryptedHex] = parts;
    const salt = hexToArrayBuffer(saltHex);
    const iv = hexToArrayBuffer(ivHex);
    const encryptedBuffer = hexToArrayBuffer(encryptedHex);
    
    // Derive key from password
    const key = await deriveKey(password, salt);
    
    // Decrypt the message
    const decryptedBuffer = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv: new Uint8Array(iv) },
      key,
      encryptedBuffer
    );
    
    return arrayBufferToString(decryptedBuffer);
  } catch {
    throw new Error('Decryption failed: Invalid key or corrupted data');
  }
}
