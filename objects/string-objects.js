let isValidPassword = function (string){
 return (string.length >=8 && !string.includes('password'));

}
console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123!@#$%^&'))
console.log(isValidPassword('asjcdnpassword'))

