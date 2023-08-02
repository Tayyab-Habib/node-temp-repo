//OS module
// As it is built in module so we do not have to install it also it is required differently as compared to other modules

const os = require("os");

//Info about the current user
const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds
console.log(`The system uptime is: ${os.uptime()} seconds`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOs.name);
