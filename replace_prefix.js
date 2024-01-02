const fs = require('fs');
const glob = require('glob');

function replacePrefix(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const modifiedContent = content.replace(/\/posts\/images/g, '/images');
  fs.writeFileSync(filePath, modifiedContent);
}

const filesToProcess = glob.sync('content/posts/**/*.md');

filesToProcess.forEach(file => {
  replacePrefix(file);
});
