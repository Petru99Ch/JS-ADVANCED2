// getNumbers -> maxNumber-> renderNumber

const pGetNumbers = (size = 10) =>{ return new Promise ((resolve, reject)=>{
    let numbers =[] 
    

    setTimeout(()=>{
        while(numbers.length < size){
            numbers.push( Math.ceil(-5 + Math.random() * 10))
        }
        resolve(numbers)
   
    }, Math.random() *3000)

})
}



const pMaxNumber = (numbers) =>{ 
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            let maxNumber = Math.max.apply(Math, numbers)
            resolve(maxNumber)
        }, Math.random() * 3000)
})
}



const renderNumber = (number)=>{
    return new Promise ((resolve, reject)=>{
       let result = ''

       setTimeout(()=>{
        result = `{number: ${number}}`
        resolve(result)
       }, Math.random() *1000)
    })
    
}

/////////////////

function execute(){
    
pGetNumbers(5)
    .then((numbers) =>{
        return pMaxNumber(numbers)
    })
    .then((result) =>renderNumber(result))
}
