const path = require("path")

const extName = path.extname('04-names.js')

console.log(extName)

const abslPath = path.isAbsolute(__dirname)

console.log(abslPath)

const file = path.join('/filecontent/', '/subfolder/', '/file.js/')

console.log(file)



const baseNamePath = path.basename(file)

console.log(baseNamePath)