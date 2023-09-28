const form = document.querySelector("#form")

const input = form.children[2].firstElementChild

const clearOutput = ()=> {
    

    if(input.value.length == 0 ){
        let output = document.querySelector(".output")
        output.innerText=''
    }
}
// HW*: clear output when another value is entered
form.addEventListener('keydown', clearOutput)



form.addEventListener('submit', (e)=>{
   
    e.preventDefault()

    let name = input.value
// HW: Do not using space for name
    if(input.value[0]==" "){
        let output = document.querySelector(".output")
        output.innerHTML = `
        The name entered must start with a letter but not a space
        `
    }else {
        let xhr = new XMLHttpRequest()

    xhr.open("GET", `https://api.nationalize.io?name=${name}`)
    xhr.send()

    xhr.onload = ()=> {
        let response = xhr.response
        let data = JSON.parse(response)

        
        
        let output = document.querySelector(".output")
        //  HW: Name inexistent
        if(data.country == ""){
            
            output.innerHTML = `
            You are most likely not from our planet, because this name does not exist.
        `
        }else {
            let nationality = data.country[0].country_id
            output.innerHTML = `
            You are most probably from <strong>${nationality}</strong>
        `
        }
        
       
    }
    }

    

   
})


