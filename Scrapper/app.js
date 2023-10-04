const URL = "https://en.wikipedia.org/wiki/List_of_programming_languages"
 
const scrapper = () =>{


    let xhr = new XMLHttpRequest()

    xhr.open("GET", URL )

    xhr.onload = () => {
        let html = xhr.responseText
       

        let parser = new DOMParser()
        let htmlDoc = parser.parseFromString(html , "text/html")

   
        let div = htmlDoc.querySelectorAll('.div-col')
  

        let J_Lang = div[9].innerText

        let output = document.querySelector(".output")

        output.innerText = J_Lang
    }

    xhr.send()
}