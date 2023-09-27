// getNumbers -> maxNumber-> renderNumber

const getNumbers = (cb, size = 10) => {
    let numbers =[] 

    setTimeout(()=>{
        while(numbers.length < size){
            numbers.push( Math.ceil(-5 + Math.random() * 10))
        }
        cb(numbers)
   
    }, Math.random() *3000)
}

const maxNumber = (cb, numbers) =>{
    // HW: think another way so get the max value

    setTimeout(()=>{
        let maxNumber = Math.max.apply(Math, numbers)
        cb(maxNumber)
    }, Math.random() * 3000)
    
}

const renderNumber = (number)=>{
    console.log(">>>>", number)
}

/////////////////
getNumbers((numbers)=>{
    maxNumber(renderNumber, numbers)
})

