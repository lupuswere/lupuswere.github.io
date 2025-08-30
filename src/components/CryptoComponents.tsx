'use client';

import { useState, useRef, useEffect } from 'react';
import { encryptMessage, decryptMessage } from '@/lib/crypto';

export function CryptoComponents() {
  // Sign In Form (Encryption)
  const [signInMessage, setSignInMessage] = useState('');
  const [signInKey, setSignInKey] = useState('');
  const [signInResult, setSignInResult] = useState('');
  const [signInLoading, setSignInLoading] = useState(false);

  // Subscribe Form (Decryption)
  const [subscribeMessage, setSubscribeMessage] = useState('');
  const [subscribeKey, setSubscribeKey] = useState('');
  const [subscribeResult, setSubscribeResult] = useState('');
  const [subscribeLoading, setSubscribeLoading] = useState(false);

  // Refs for secure clearing
  const signInMessageRef = useRef<HTMLInputElement>(null);
  const signInKeyRef = useRef<HTMLInputElement>(null);
  const subscribeMessageRef = useRef<HTMLInputElement>(null);
  const subscribeKeyRef = useRef<HTMLInputElement>(null);

  // Security: Clear sensitive data when component unmounts
  useEffect(() => {
    // Capture ref values inside the effect
    const signInMessageElement = signInMessageRef.current;
    const signInKeyElement = signInKeyRef.current;
    const subscribeMessageElement = subscribeMessageRef.current;
    const subscribeKeyElement = subscribeKeyRef.current;
    
    return () => {
      // Clear all state
      setSignInMessage('');
      setSignInKey('');
      setSignInResult('');
      setSubscribeMessage('');
      setSubscribeKey('');
      setSubscribeResult('');
      
      // Clear DOM values using captured references
      if (signInMessageElement) signInMessageElement.value = '';
      if (signInKeyElement) signInKeyElement.value = '';
      if (subscribeMessageElement) subscribeMessageElement.value = '';
      if (subscribeKeyElement) subscribeKeyElement.value = '';
    };
  }, []);

  // Security: Clear sensitive variables from memory
  const secureClear = (setter: (value: string) => void, ref: React.RefObject<HTMLInputElement | null>) => {
    setter('');
    if (ref.current) {
      ref.current.value = '';
      ref.current.blur();
    }
  };

  // Security: Clear clipboard after delay
  const copyToClipboardSecure = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // Clear clipboard after 30 seconds
      setTimeout(async () => {
        try {
          await navigator.clipboard.writeText('');
        } catch {
          // Clipboard clearing failed, but that's ok
        }
      }, 30000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      textArea.remove();
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!signInMessage.trim() || !signInKey.trim()) return;

    setSignInLoading(true);
    setSignInResult('');
    
    try {
      const encrypted = await encryptMessage(signInMessage, signInKey);
      setSignInResult(encrypted);
      
      // Security: Clear inputs after successful encryption
      setTimeout(() => {
        secureClear(setSignInMessage, signInMessageRef);
        secureClear(setSignInKey, signInKeyRef);
      }, 100);
    } catch {
      setSignInResult('Authentication failed. Please check your credentials.');
    } finally {
      setSignInLoading(false);
    }
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscribeMessage.trim() || !subscribeKey.trim()) return;

    setSubscribeLoading(true);
    setSubscribeResult('');
    
    try {
      const decrypted = await decryptMessage(subscribeMessage, subscribeKey);
      setSubscribeResult(decrypted);
      
      // Security: Clear inputs after successful decryption
      setTimeout(() => {
        secureClear(setSubscribeMessage, subscribeMessageRef);
        secureClear(setSubscribeKey, subscribeKeyRef);
      }, 100);
    } catch {
      setSubscribeResult('Invalid email format or subscription token.');
    } finally {
      setSubscribeLoading(false);
    }
  };



  return (
    <div className="space-y-8">
      {/* Sign In Form (Encryption) */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-serif text-gray-900 mb-4 border-b border-gray-100 pb-2">
          Site Search
        </h3>
        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Search terms
            </label>
            <input
              ref={signInMessageRef}
              id="username"
              type="text"
              value={signInMessage}
              onChange={(e) => setSignInMessage(e.target.value)}
              placeholder="Search terms"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-sm"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              data-form-type="other"
              data-lpignore="true"
              onBlur={() => {
                // Optional: Clear on blur for extra security
                // secureClear(setSignInMessage, signInMessageRef);
              }}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Max result per page
            </label>
            <input
              ref={signInKeyRef}
              id="passphrase"
              type="text"
              value={signInKey}
              onChange={(e) => setSignInKey(e.target.value)}
              placeholder="10"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-sm"
              autoComplete="new-password"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              data-form-type="other"
              data-lpignore="true"
              data-1p-ignore="true"
              onBlur={() => {
                // Optional: Clear on blur for extra security
                // secureClear(setSignInKey, signInKeyRef);
              }}
            />
          </div>
          <button
            type="submit"
            disabled={signInLoading || !signInMessage.trim() || !signInKey.trim()}
            className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-gray-300 text-white px-4 py-2 rounded-md font-medium transition-colors text-sm"
          >
            {signInLoading ? 'Authenticating...' : 'Enter the Scriptorium'}
          </button>
        </form>
        
        {signInResult && (
          <div className="mt-4 p-3 bg-gray-50 rounded-md">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-gray-600">Access Token:</span>
              <button
                onClick={() => copyToClipboardSecure(signInResult)}
                className="text-xs text-amber-600 hover:text-amber-700"
              >
                Copy (clears in 30s)
              </button>
            </div>
            <div className="text-xs text-gray-800 font-mono break-all bg-white p-2 rounded border">
              {signInResult}
            </div>
          </div>
        )}
      </div>

      {/* Subscribe Form (Decryption) */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-serif text-gray-900 mb-4 border-b border-gray-100 pb-2">
          Manuscript Updates
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Subscribe to receive notifications of new illuminated manuscripts and scholarly discoveries.
        </p>
        <form onSubmit={handleSubscribe} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              ref={subscribeMessageRef}
              id="newsletter-data"
              type="text"
              value={subscribeMessage}
              onChange={(e) => setSubscribeMessage(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-sm"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              data-form-type="other"
              data-lpignore="true"
              onBlur={() => {
                // Optional: Clear on blur for extra security
                // secureClear(setSubscribeMessage, subscribeMessageRef);
              }}
            />
          </div>
          <div>
            <label htmlFor="preferences" className="block text-sm font-medium text-gray-700 mb-1">
              Notification Preferences
            </label>
            <input
              ref={subscribeKeyRef}
              id="newsletter-preferences"
              type="text"
              value={subscribeKey}
              onChange={(e) => setSubscribeKey(e.target.value)}
              placeholder="Weekly digest"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-sm"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              data-form-type="other"
              data-lpignore="true"
              data-1p-ignore="true"
              onBlur={() => {
                // Optional: Clear on blur for extra security
                // secureClear(setSubscribeKey, subscribeKeyRef);
              }}
            />
          </div>
          <button
            type="submit"
            disabled={subscribeLoading || !subscribeMessage.trim() || !subscribeKey.trim()}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white px-4 py-2 rounded-md font-medium transition-colors text-sm"
          >
            {subscribeLoading ? 'Processing...' : 'Subscribe to Updates'}
          </button>
        </form>
        
        {subscribeResult && (
          <div className="mt-4 p-3 bg-gray-50 rounded-md">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-gray-600">Subscription Status:</span>
              <button
                onClick={() => copyToClipboardSecure(subscribeResult)}
                className="text-xs text-blue-600 hover:text-blue-700"
              >
                Copy (clears in 30s)
              </button>
            </div>
            <div className="text-xs text-gray-800 break-all bg-white p-2 rounded border">
              {subscribeResult}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
