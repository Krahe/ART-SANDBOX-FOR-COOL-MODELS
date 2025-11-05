# Krahe's Personal Portfolio

A beautiful portfolio site for hosting ASCII/ANSI art, policy papers, and philosophical writings.

## Features

- **ANSI Art Viewer**: Properly displays .ANS files with full 132-column support
- **Document Gallery**: Browse all your content with file type indicators
- **Markdown Rendering**: Automatic rendering of .md files
- **Responsive Design**: Works on desktop and mobile
- **Zoom Controls**: Adjust text size for optimal viewing
- **Dark Theme**: Easy on the eyes, perfect for code art

## Tech Stack

- **Backend**: Express.js + TypeScript
- **ANSI Rendering**: ansi-to-html library
- **Markdown**: marked.js
- **Frontend**: Vanilla JavaScript (no frameworks needed!)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Server starts at http://localhost:3000

### Production Build

```bash
npm run build
npm start
```

### Adding Content

Place your files in the `content/` directory:
- `.ans` files for ANSI art
- `.md` files for markdown documents
- `.txt` files for plain text
- `.nfo` files for NFO art

The site automatically detects and categorizes them!

## Deployment Options

### Option 1: Railway.app (Recommended - Free)

1. Create account at https://railway.app
2. Install Railway CLI: `npm install -g @railway/cli`
3. Login: `railway login`
4. Initialize: `railway init`
5. Deploy: `railway up`

Railway automatically detects Node.js projects and deploys them!

### Option 2: Vercel (Free)

1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel`
3. Follow prompts to deploy

Note: Add `vercel.json` for proper routing:
```json
{
  "version": 2,
  "builds": [
    { "src": "dist/server.js", "use": "@vercel/node" }
  ],
  "routes": [
    { "src": "/(.*)", "dest": "dist/server.js" }
  ]
}
```

### Option 3: Render (Free)

1. Create account at https://render.com
2. Connect your GitHub repo
3. Create new Web Service
4. Build command: `npm install && npm run build`
5. Start command: `npm start`

### Option 4: Self-Hosted (VPS)

On your server:

```bash
# Install dependencies
npm install

# Build
npm run build

# Install PM2 for process management
npm install -g pm2

# Start with PM2
pm2 start dist/server.js --name krahe-portfolio

# Save PM2 config
pm2 save
pm2 startup
```

### Option 5: Docker

Create `Dockerfile`:

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t krahe-portfolio .
docker run -p 3000:3000 krahe-portfolio
```

## Environment Variables

- `PORT`: Server port (default: 3000)

## Project Structure

```
personal-site/
├── src/
│   └── server.ts          # Express server
├── public/
│   ├── index.html         # Frontend HTML
│   ├── styles.css         # Styling
│   └── app.js            # Frontend JavaScript
├── content/               # Your content files
│   ├── *.ans             # ANSI art
│   ├── *.md              # Markdown docs
│   └── *.txt             # Text files
├── dist/                  # Compiled TypeScript (generated)
└── package.json
```

## API Endpoints

- `GET /` - Home page
- `GET /api/content` - List all content files
- `GET /api/ansi/:filename` - Get ANSI art (converted to HTML)
- `GET /api/document/:filename` - Get text/markdown document

## Future Enhancements

Ideas for expansion:
- Add Solitaire cipher API endpoint
- User comments system
- Search functionality
- Tags/categories for content
- RSS feed
- Analytics dashboard
- API rate limiting
- Content versioning
- Multi-language support

## Learning Concepts Covered

This project teaches:
- Express.js server setup
- TypeScript configuration
- REST API design
- File system operations
- ANSI escape code handling
- Markdown parsing
- Responsive web design
- Deployment strategies

## License

MIT

## Author

Krahe - https://github.com/Krahe

Built with Claude Code
