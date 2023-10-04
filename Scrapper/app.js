const URL = "https://en.wikipedia.org/wiki/List_of_programming_languages"
let languages = []
 
const scrapper = () =>{


   

    let xhr = new XMLHttpRequest()

    xhr.open("GET", URL )

    xhr.onload = () => {
        let html = xhr.responseText
        
        let parser = new DOMParser()
        let htmlDoc = parser.parseFromString(html, "text/html")


        let list = htmlDoc.querySelectorAll(".div-col")        
        let li_9 = list[9]        
        let result = li_9.firstElementChild.children
        
        for(let i = 0 ; i< result.length; i++){
            languages.push(result[i].innerText)
        }

    }
    xhr.send()

}


//  HW :  render the gathered info into a HTML table 
//         using DOM OOP approach
const addLang =() =>{
    let output = document.querySelector('.output')
    let ul = document.createElement('ul')
    for(let i = 0; i<languages.length;i++){
        
        let li = document.createElement('li')
        
       
         li.innerText = languages[i]
         
        
         ul.appendChild(li)
        
    }

    output.appendChild(ul)
}

scrapper()

addLang()