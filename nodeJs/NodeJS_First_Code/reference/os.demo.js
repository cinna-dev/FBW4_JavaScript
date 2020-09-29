const os = require('os')

//console.log(os)

//PlatForm
console.log(os.platform());
//returns  : win32 ,darwin, linux

//CPU Arch
console.log(os.arch())
//Posiible values are "arm", "arm64","ia32", "mips", "mipsel" , "ppc" , 'ppc64','s390', 's390x', x32',and 'x64'.


//CPU Core Info
console.log(os.cpus());

//Free memory
console.log(os.freemem())
//returns the amount of free system memory in bytes  as an integer. 1 byte === 8 bits  1024bytes === 1 kilobyte

//Total memory
console.log(os.totalmem());
//Returns the total amount of system memory in bytes as an integer.

//Home dir
console.log(os.homedir());

//Uptime
console.log(os.uptime());