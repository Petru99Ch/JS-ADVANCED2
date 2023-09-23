const  randomLeaf = () => parseInt(Math.random() * 4 + 1)
const  randomPercentL = () => parseInt( Math.random() * 101 )
const  randomDuration = () => parseInt( Math.random() * 20 + 15 )
const  randomTurnX = () => Math.random() * 4 + 1
const  randomDelay= () => Math.random() * 7 + 1



const addLeaf = (number)=> {
    let parent = document.querySelector(`.layer-${number}`)

    let leaf = randomLeaf()
    let leftStart = randomPercentL()
    let leftEnd= randomPercentL()
    let duration = randomDuration()
    let turnX = randomTurnX()
    let delay = randomDelay()
    
    parent.innerHTML += `
        <div class="leaf leaf-${leaf}"
            style = "
            --fall-start-left:${leftStart}%;
            --fall-end-left:${leftEnd}%;
            --fall-duration: ${duration}s;
            --fall-end-rx: ${turnX}turn;
            --fall-delay:${delay}s;
            "
        ></div>
    `
}

const addLeaves = () => {
    for(let i = 0; i <= 100; i++){
        let number = parseInt(Math.random() * 3 + 1)
        addLeaf(number)
    }
}

addLeaves()