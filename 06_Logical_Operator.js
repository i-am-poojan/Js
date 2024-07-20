const student= prompt("You are student and you have emergency yes or no?");
const adult=prompt("You are adult +age and you have driving licence select yes or no? ");
if(student=="yes" && adult=="yes"){
console.log("Than you are drive car")
}
else{
    console.log("you can not drive car")
}


const userAge = 22

const isSchoolStudent = (userAge >= 5) && (userAge <= 18)
const isCollegeStudent = (userAge >= 18) && (userAge <= 24)

const isStudent = isSchoolStudent || isCollegeStudent

const andResult = 0 && 2
const orResult = 0 || 2

const andResult2 = '' && 'Hello'
const orResult2 = '' || 'Hello'

const andResult3 = 'Hello' && null
const orResult3 = 'Hello' || null

const andResult4 = 'Hello' && -4 + 4
const orResult4 = undefined || 4 + 8 * 5

const andResult5 = 'Hello' && console.log('hello1')
const orResult5 = undefined || console.log('hello2')