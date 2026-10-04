import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import {load} from 'cheerio';
const root=path.resolve('dist');let count=0;
async function walk(dir){for(const entry of await fs.readdir(dir,{withFileTypes:true})){const file=path.join(dir,entry.name);if(entry.isDirectory()){await walk(file);continue;}if(!file.endsWith('.html'))continue;const html=await fs.readFile(file,'utf8');const $=load(html);assert.equal($('h1').length,1,`${file}: h1`);assert.equal($('html').attr('lang'),'ja');assert(!$('script[src*="shopify"],link[href*="shopify"],form').length,`${file}: Shopify依存`);assert($('title').text().trim());assert(!/cdn\.shopify|\/cdn\/shop\//.test(html),`${file}: 外部素材`);
for(const el of $('a[href],img[src],link[href],script[src]').toArray()){const ref=$(el).attr(el.tagName==='img'||el.tagName==='script'?'src':'href');if(!ref?.startsWith('/')||ref.startsWith('//'))continue;const url=new URL(ref,'http://localhost');const target=path.join(root,decodeURIComponent(url.pathname));const stat=await fs.stat(target).catch(()=>null);assert(stat,`${file}: 存在しない参照 ${ref}`);if(stat.isDirectory())assert(await fs.stat(path.join(target,'index.html')).catch(()=>null),`${file}: ページなし ${ref}`);if(url.hash){const targetFile=stat.isDirectory()?path.join(target,'index.html'):target;const target$=load(await fs.readFile(targetFile,'utf8'));assert(target$(`[id="${url.hash.slice(1)}"]`).length,`${file}: アンカーなし ${ref}`);}}
count++;}}
await walk(root);
const home=load(await fs.readFile('dist/index.html','utf8'));assert(home('main').text().includes('大切な日を迎えていただくために'));assert.equal(load(await fs.readFile('dist/pages/faq/index.html','utf8'))('details').length,4);for(const name of ['refund-policy','privacy-policy'])assert(load(await fs.readFile(`dist/policies/${name}/index.html`,'utf8'))('main').text().length>100,`${name}: 本文不足`);
console.log(`${count}ページの内部リンク・画像・見出し・Shopify依存除去を検証しました。`);
