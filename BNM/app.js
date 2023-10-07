const labels =[]
const rateEur = []
const rateUsd = []



const getRequestBNM = (date) => {
    const URL = `https://www.bnm.md/ro/official_exchange_rates?xml=1&date=${date}`

    let xhr = new XMLHttpRequest()

    xhr.open("GET", URL)

    xhr.onload = () =>{
        let res = xhr.responseText


        let parser = new DOMParser()
        let htmlDoc = parser.parseFromString(res, "text/html")

       
        let eur = htmlDoc.querySelector(`[ id ="47" ]`)
        let usd = htmlDoc.querySelector(`[ id ="44" ]`)

        

        let valueEur = eur.querySelector("value").innerHTML
        let valueUsd = usd.querySelector("value").innerHTML
        

        rateEur.push(valueEur)
        rateUsd.push(valueUsd)

        console.log(rateEur)
        console.log(rateUsd)
    }
    

    xhr.send()
}


const getRates = (fromDate, toDate) => { 
    for(let date = fromDate; date <= toDate; date++){

        if(date < 10)
        date = "0" + date
    labels.push(`${date}.09.2023`)
        getRequestBNM(`${date}.09.2023`)
    }
}

getRates(1, 20)

const plotData = ()=>{
    const ctx = document.getElementById('myChart')

     new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: 'BNM Exchange Rates EUR ',
            
            data: rateEur,
           
            borderWidth: 1
          },
          {
           
            label: 'BNM Exchange Rates USD ',
            
            data: rateUsd,
            borderWidth: 1
          }
        
        ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: false
            }
          }
        }
      })
      
}
setTimeout(plotData, 1000)


