const os = require('os');

//Info about the current user
const user = os.userInfo()
console.log(user)

//The Method displays the uptime for the system in seconds

console.log(`The System has been up for ${os.uptime()} seconds.`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOs);