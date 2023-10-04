

let site = [
    {   
        name: "TV8 News",
        url: 'https://tv8.md/ro/search',
        param: 'query',

        domMaping:{
            title : "h1 ~ a >div>div",
            image: "h1 ~ a >  img",
            link: "h1 ~ a "
        }

    }
]



const form = document.querySelector('#form')
const inputElement = form.firstElementChild

const contentElement =  document.querySelector('#content')



const onSubmit = (e)=>{
    e.preventDefault()
    let keyPhrase = inputElement.value
    search(site[0], keyPhrase)
}

const render = (data, parent) => { 
    for(let i = 0; i < data.length; i++){
        let div = document.createElement('div')
        let a = document.createElement('a')
        a.href= data[i].link

        let h3 = document.createElement('h3')
        h3.innerText = data[i].title

        let img = document.createElement('img')
        img.src = data[i].img_src
        let link = document.createElement('div')

        link.appendChild(h3)
        link.appendChild(img)

        a.appendChild(link)
        div.appendChild(a)
       
      
        parent.appendChild(div)
        console.log(div)
        // 
    }
}

const search = (portal, keyPhrase) =>{
    //1. prep the connection object
    let xhr = new XMLHttpRequest()

    // 2. setup
    xhr.open("GET", portal.url + "?" + portal.param + "=" + keyPhrase)

    // 3. callback

    xhr.onload = ()=> {
        let html = xhr.responseText
        let parser = new DOMParser()
        let htmlDoc = parser.parseFromString(html, "text/html")
       
        
        let titleElements = htmlDoc.querySelectorAll(portal.domMaping.title)
        let imageElements = htmlDoc.querySelectorAll(portal.domMaping.image)
        let hrefElements = htmlDoc.querySelectorAll(portal.domMaping.link)

        let news =[]

        for(let i = 0; i<titleElements.length; i++){
            news.push({
                title: titleElements[i].innerText,
                img_src: imageElements[i].src,
                href: hrefElements[i].href
                
            })
        }

        render(news, contentElement )
        console.log(news)
      
    
    }

    // 4 send
    xhr.send()
}

form.addEventListener("submit", onSubmit)