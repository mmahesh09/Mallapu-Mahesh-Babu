// copy-cname.js
import fs from 'fs';
import path from 'path';

const source = path.resolve('CNAME');
const destination = path.resolve('dist', 'CNAME');

try {
  fs.copyFileSync(source, destination);
  console.log('✅ CNAME copied to dist/');
} catch (err) {
  console.error('❌ Failed to copy CNAME:', err.message);
}
