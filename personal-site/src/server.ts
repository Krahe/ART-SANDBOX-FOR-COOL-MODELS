import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs/promises';
import { marked } from 'marked';
import AnsiToHtml from 'ansi-to-html';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
app.use(express.json());

// ANSI converter for .ans files
const ansiConverter = new AnsiToHtml({
  fg: '#FFF',
  bg: '#000',
  newline: true,
  escapeXML: true,
  stream: false
});

// Routes

// Home page
app.get('/', async (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Get list of all content
app.get('/api/content', async (req: Request, res: Response) => {
  try {
    const contentDir = path.join(__dirname, '../content');
    const files = await fs.readdir(contentDir);

    const content = await Promise.all(
      files.map(async (file) => {
        const stats = await fs.stat(path.join(contentDir, file));
        return {
          name: file,
          type: getFileType(file),
          size: stats.size,
          modified: stats.mtime
        };
      })
    );

    res.json(content);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read content directory' });
  }
});

// Serve ANSI art files
app.get('/api/ansi/:filename', async (req: Request, res: Response) => {
  try {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, '../content', filename);
    const content = await fs.readFile(filePath, 'utf-8');

    // Convert ANSI codes to HTML
    const html = ansiConverter.toHtml(content);

    res.json({
      filename,
      html,
      raw: content
    });
  } catch (error) {
    res.status(404).json({ error: 'File not found' });
  }
});

// Serve text/markdown documents
app.get('/api/document/:filename', async (req: Request, res: Response) => {
  try {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, '../content', filename);
    const content = await fs.readFile(filePath, 'utf-8');

    const isMarkdown = filename.endsWith('.md');

    res.json({
      filename,
      content,
      html: isMarkdown ? marked(content) : null,
      isMarkdown
    });
  } catch (error) {
    res.status(404).json({ error: 'File not found' });
  }
});

// Helper function to determine file type
function getFileType(filename: string): string {
  if (filename.endsWith('.ans')) return 'ansi';
  if (filename.endsWith('.md')) return 'markdown';
  if (filename.endsWith('.txt')) return 'text';
  if (filename.endsWith('.nfo')) return 'nfo';
  return 'unknown';
}

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`📁 Serving content from: ${path.join(__dirname, '../content')}`);
});
