const paternalRegBtn = document.getElementById('paternal-region-button')
const regionForm = document.getElementById('region-form')
const regionSelection = document.getElementById('region')
const haploResults = document.getElementById('haplogroup-results')

regionForm.addEventListener('submit', getRegionData)

function getRegionData(event){
    event.preventDefault()
    event.stopPropagation()
    axios.get(`http://localhost:5000/app/region?regionName=${regionSelection.value}`)
        .then((res) => {
            // console.log(res)
            createHaploPrediction(res)
        })
}

function createHaploPrediction(event){
    // event = event
    // console.log(event)
    haploResults.innerHTML = ''

    const haploCard = document.createElement('section')
    haploCard.innerHTML = `<p>You are...</p>`
    haploResults.appendChild(haploCard)

    for (let id in event.data){
        const haploCard = document.createElement('section')
        haploCard.innerHTML = `<p>${event.data[id]}% likely to belong to haplogroup ${id}</p>`
        haploResults.appendChild(haploCard)
    }

    if(event.data.region === 'Northern-Europe'){
        haploCard.innerHTML = `<p><strong>Fun fact:</strong> Haplogroup R1b, which is the most common in modern Europe, actually originated in the Pontic-Caspian Steppes (southern Russia). It spread throughout Europe in the Bronze Age — some 4,000 years ago!</p>`
        haploResults.appendChild(haploCard)
    }
}