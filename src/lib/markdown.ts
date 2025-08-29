import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export interface MarkdownContent {
  content: string;
  frontmatter: {
    title: string;
    date: string;
    author?: string;
    excerpt?: string;
    [key: string]: string | undefined;
  };
}

export async function getMarkdownContent(filePath: string): Promise<MarkdownContent> {
  const fullPath = path.join(contentDirectory, filePath);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(content);

  return {
    content: processedContent.toString(),
    frontmatter: data as MarkdownContent['frontmatter']
  };
}

export async function getNotesFromDirectory(dir: 'left' | 'right'): Promise<MarkdownContent[]> {
  const notesDirectory = path.join(contentDirectory, 'notes', dir);
  const filenames = fs.readdirSync(notesDirectory);
  
  const notes = await Promise.all(
    filenames
      .filter(name => name.endsWith('.md'))
      .sort()
      .map(async (filename) => {
        return await getMarkdownContent(`notes/${dir}/${filename}`);
      })
  );

  return notes;
}
