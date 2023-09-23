const randomD = () => parseInt(Math.random()  * 3)
const randomShineS = () => Math.random() *0.62 + 1
const randomShineE = () => Math.random()  *0.41 +1 



const addRay = (number) =>{
    let container = document.querySelector("body > div.background.container")
    let delay = randomD()
    let shineS = randomShineS()
    let shineE = randomShineE()



    container.innerHTML += `
    <div class="ray ray-${number}"
        style="
        --shine-start-angle:-${shineS}turn;
        --shine-end-angle:-${shineE}turn;
        --ray-delay:${delay}s;
        "
    "></div>
    
    `

}

const addShine = () => {
    for(let i = 1; i<=5 ; i++){
        let number = i
        addRay(number)
    }
}
addShine() 