// code your solution here
function saturdayFun(funActivity = 'roller-skate') {
    return `This Saturday, I want to ${funActivity}!`;
}
console.log(saturdayFun());
console.log(saturdayFun("bathe my dog"))

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}
console.log(mondayWork());
console.log(mondayWork("work from home"))

function wrapAdjective(msg = '*', emphatic = 'a hard worker') {
    return function(name = emphatic) {
    return `You are ${msg}${name}${msg}!`;
}
}

console.log(wrapAdjective("%")())
console.log(wrapAdjective("%")("a dedicated programmer"))