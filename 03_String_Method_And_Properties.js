const msg="  Hello world!  "

//String Properties
console.log(msg.length);

//String Method without argument
console.log(msg.toUpperCase());
console.log(msg.toLowerCase());
console.log(msg.trim());
console.log(msg.trim().length);
console.log(msg.trimStart());
console.log(msg.trimStart().length);
console.log(msg.trimEnd());
console.log(msg.trimEnd().length);

//String Method with argument

const finalMsg="i am not run without am argument";

// includes()
console.log(finalMsg.includes('not')); //It is return value true and false if include in finalmsg
console.log(finalMsg.includes('Not')); // It is check complately same

// indexOf()
console.log(finalMsg.indexOf('without')); //If string or charcter include than return index number else return -1 if not exist
console.log((finalMsg.indexOf('z')));

// replace()
const replaceMsg=finalMsg.replace("am","is")
console.log(replaceMsg); //if searchvalue does not exist than return without replace

// replaceAll()
const replaceAll=finalMsg.replaceAll("am","is")
console.log(replaceAll); // it is replaceAll value of searchValue if it is exist

// concat()
console.log(finalMsg.concat(replaceAll)); // it is working like same finalMsg + replaceAll

// padStart()
// now padStart() & padEnd() is not working
// const lastFourDigits=7458;
// let padStart=lastFourDigits.padStart(12,'*')
// console.log(padStart);

// padEnd()
// const firstFourDigits=7458;
// let padEnd=firstFourDigits.padEnd(14,"*")
// console.log(padEnd);

// charAt()
let CharAt=finalMsg.charAt(3) //It is use for finding string charcter according number
console.log(CharAt)

// charCodeAt()
let CharCodeAt=finalMsg.charCodeAt(3) // It is use whenever we require return value of "Ascii code" of character
console.log(CharCodeAt)

//SPlit()
let Split=finalMsg.split() // It can be use for convert string to array according to our requirement
console.log(Split)
let Split2=finalMsg.split(' ')
console.log(Split2)

// Template Literals
console.log(`hi how are you what's up ${Split}`) // whenever we use ` ` (Backtick) and ${} according to our requirement is is called Template literals