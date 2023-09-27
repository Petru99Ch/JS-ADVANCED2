// getNumbers -> maxNumber-> renderNumber

const pGetNumbers = (size = 10) =>{ return new Promise ((resolve, reject)=>{
    let numbers =[] 
        while(numbers.length < size){
            numbers.push( Math.ceil(-5 + Math.random() * 10))
        }
        resolve(numbers)
})
}



const pMaxNumber = (numbers) =>{ 
    return new Promise((resolve, reject) =>{
            let maxNumber = Math.max.apply(Math, numbers)
            resolve(maxNumber)
})
}



const renderNumber = (number)=>{
    return new Promise ((resolve, reject)=>{
       let result = ''
        result = `{number: ${number}}`
        resolve(result)
      
    })
    
}

/////////////////

async function execute(){

    let numbers = await pGetNumbers(5)
    let max_Number = await pMaxNumber(numbers)
    let result = await renderNumber(max_Number)
    console.log(result)
}
