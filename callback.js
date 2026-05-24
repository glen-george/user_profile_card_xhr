console.log(`Start`);

setTimeout(()=>{
    console.log(`Timer function`);
    
},0)

Promise.resolve().then(()=>{
    console.log(`Promise`);
    
})
console.log(`End`);



