const { readFileSync, writeFileSync } = require('fs')

const firstText = readFileSync('./temporary/fileA.txt', 'utf8')
// const secondText = readFileSync('./temporary/fileB.txt', 'utf8')

writeFileSync(
    './temporary/files-sync.txt',
    `final texts are : ${firstText}`,
    {flag: 'a'}
)