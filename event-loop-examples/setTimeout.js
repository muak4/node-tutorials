// started operating system process
console.log('first');
setTimeout(() => {
    console.log('second');
}, 0)
console.log('third');
console.log('fourth');
console.log('fifth');
setTimeout(() => {
    console.log('sixth');
}, 0)
console.log('seventh');
// completed annd exited operating system process