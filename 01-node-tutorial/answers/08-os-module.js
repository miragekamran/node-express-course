const os = require("os")

const user = os.userInfo()
console.log(user)

const host = os.hostname()
console.log(host)

const ver = os.version()
console.log(ver)
