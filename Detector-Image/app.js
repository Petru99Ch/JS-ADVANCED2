const formUpload = document.querySelector(".content")
const inputFile = document.querySelector(".content input")
const prewievImg = document.querySelector(".content img")
const result = document.querySelector(".content .result")

let model = null
cocoSsd.load().then(loadedModel => {
    model = loadedModel
})
const onUpload = (e) =>{
    console.dir(inputFile)

    // 1. get the file info
    let fileInfo = inputFile.files[0]

    // 2. convert to adress
    let url = URL.createObjectURL(fileInfo)

    // 3. put the address into the image.src attribe
    prewievImg.src = url

    prewievImg.style = "display: inline-block"

    // 5. detect objects in our image

    setTimeout(()=>{
        prewievImg.width = prewievImg.offsetWidth
        prewievImg.height = prewievImg.offsetHeight
        model.detect(prewievImg)
         .then(predictions => {
            console.log('Predictions: ', predictions);

            result.innerText = `This image upload  containts ${predictions[0].class}`
            
         })

    }, 500)


}

inputFile.addEventListener('change', onUpload)