const fs = require('fs');

function replacePrefix(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const modifiedContent = content.replace(/\/posts\/images/g, '/images');
  fs.writeFileSync(filePath, modifiedContent);
}

const filesToProcess = fs.readdirSync('content/posts')
  .filter(file => file.endsWith('.md'))
  .map(file => `content/posts/${file}`);

filesToProcess.forEach(file => {
  replacePrefix(file);
});
