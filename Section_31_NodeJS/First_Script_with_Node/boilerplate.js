const fs = require('node:fs');
const folderName = process.argv[2] || 'Project';

// fs.mkdir('Dogs', { recursive: true }, err => {
//   console.log('In the callback');
//   if (err) throw err;
// });
try {
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`, '');
  fs.writeFileSync(`${folderName}/styles.css`, '');
  fs.writeFileSync(`${folderName}/app.js`, '');
} catch (e) {
  console.log('SOMETHING WENT WRONG');
  console.log(e);
}
