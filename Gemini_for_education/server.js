const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;
const WORKSPACE_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

const server = http.createServer((req, res) => {
  const safeUrl = req.url.split('?')[0];
  let filePath = path.join(WORKSPACE_DIR, safeUrl === '/' ? 'index.html' : safeUrl);
  
  const extname = path.extname(filePath);
  let contentType = MIME_TYPES[extname] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>404 Not Found</h1>', 'utf-8');
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType + '; charset=utf-8' });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log('\n  \x1b[32m➜\x1b[0m  \x1b[1mLocal:\x1b[0m   \x1b[36mhttp://localhost:' + PORT + '/\x1b[0m');
  console.log('  \x1b[90m➜  Network: use --host to expose\x1b[0m');
  console.log('  \x1b[90m➜  press h + enter to show help\x1b[0m\n');
});

// Listen to keyboard inputs to simulate full developer experience (Vite shortcuts)
process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const input = data.toString().trim().toLowerCase();
  
  if (input === 'h') {
    console.log('\n  \x1b[1mShortcuts:\x1b[0m');
    console.log('  \x1b[32mo\x1b[0m + enter      เปิดในเว็บเบราว์เซอร์ (open in browser)');
    console.log('  \x1b[32mq\x1b[0m + enter      ปิดการทำงานเซิร์ฟเวอร์ (quit)');
    console.log('  \x1b[32mh\x1b[0m + enter      แสดงตัวช่วยลัด (show help)\n');
  } else if (input === 'q') {
    console.log('\n  \x1b[31mStopping server...\x1b[0m');
    process.exit(0);
  } else if (input === 'o') {
    const url = `http://localhost:${PORT}/`;
    console.log(`\n  \x1b[32m➜\x1b[0m  กำลังเปิด ${url} ในเบราว์เซอร์...`);
    const exec = require('child_process').exec;
    const startCmd = process.platform === 'win32' ? 'start' : process.platform === 'darwin' ? 'open' : 'xdg-open';
    exec(`${startCmd} ${url}`);
  }
});

