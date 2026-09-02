function describeValue (value){
    let truthiness;
    const type = typeof value;
    if(value){
        truthiness = "truthy";
    }else{
        truthiness= "falsy";
    }

   return `${type} | ${truthiness}`
}

console.log(describeValue("hello"))
console.log(describeValue(""))
console.log(describeValue(5))
console.log(describeValue(true))         
console.log(describeValue(0));           
console.log(describeValue(true));         
console.log(describeValue(null));         
console.log(describeValue(undefined));