import fs from 'node:fs/promises';
await fs.mkdir('dist',{recursive:true});
await fs.cp('public','dist',{recursive:true});
console.log('静的サイトをdistに出力しました。');
