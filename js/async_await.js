const fs = require('fs');
const path = require('path')
const { promisify } = require('util')
const basePath = './txts/'

const readfileAsync = promisify(fs.readFile)

console.log('Início' + '\n');

(async function(){
    try{
        const titulo = await readfileAsync(path.resolve(basePath,'title.txt'), {encoding: 'utf-8'});
        console.log(titulo, '\n');
        const prim_estrofe = await readfileAsync(path.resolve(basePath, 'verse_1.txt'), {encoding: 'utf-8'});
        console.log(prim_estrofe,'\n');
        const seg_estrofe = await readfileAsync(path.resolve(basePath, 'verse_2.txt'), {encoding: 'utf-8'});
        console.log(seg_estrofe, '\n');
        const refrao = await readfileAsync(path.resolve(basePath, 'refrain.txt'), {encoding: 'utf-8'});
        console.log(refrao, '\n');
    }catch(err){
        console.error(err);
    }
console.log('Fim')
})()