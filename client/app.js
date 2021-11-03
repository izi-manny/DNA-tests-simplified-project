const paternalRegBtn = document.getElementById('region-button')
const regionForm = document.getElementById('region-form')
const regionSelection = document.getElementById('region')
const haploResults = document.getElementById('prediction-results')
const distribution = document.getElementById('distribution')
const funFact = document.getElementById('fun-fact')


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
    haploResults.innerHTML = ''
    distribution.innerHTML = ''
    funFact.innerHTML = ''
    
    if (regionSelection.value !== 'choose-region'){
        const haploCard = document.createElement('div')
        haploCard.innerHTML = `<p>You are...</p>`
        haploResults.appendChild(haploCard)
    }

    for (let key in event.data.distribution){
            const haploCard = document.createElement('div')
            haploCard.innerHTML = `<p><strong>${event.data.distribution[key]}%</strong> likely to belong to haplogroup <strong>${key}</strong></p>`
            distribution.appendChild(haploCard)
    }


    if (event.data.region === 'Northern-Europe'){
        const haploCard = document.createElement('div')

        haploCard.innerHTML = `<br><p><strong>Fun fact:</strong> While Haplogroup I1 is native to Europe, Haplogroup R1b, which is the most common in modern Europe, actually originated in the Pontic-Caspian Steppes (southern Russia). It spread throughout Europe in the Bronze Age — some 4,500 years ago!</p><img src="/assets/Yamnaya_migration.PNG" class="haplo-image">`
        funFact.appendChild(haploCard)
    } else if (event.data.region === 'Southern-Europe') {
        const haploCard = document.createElement('div')

        haploCard.innerHTML = `<br><p><strong>Fun fact:</strong> Haplogroups J2 and G2a are believed to have arrived in Europe from the Near East with early Neolithic farmers some 6,000 years ago!</p><img src="/assets/farming_spread.jpg" class="haplo-image">`
        funFact.appendChild(haploCard)
    } else if (event.data.region === 'Middle-East') {
        const haploCard = document.createElement('div')

        haploCard.innerHTML = `<br><p><strong>Fun fact:</strong> Haplogroup E1b is an Afro-Asiatic lineage. It arrived in the Middle-East some 20,000 years ago from Africa!</p><img src="/assets/E1b1b1.png" class="haplo-image">`
        funFact.appendChild(haploCard)
    } else if (event.data.region === 'Sub-Saharan-Africa') {
        const haploCard = document.createElement('div')

        haploCard.innerHTML = `<br><p><strong>Fun fact:</strong> Haplogroup R1b is a very rare marker in Sub-Saharan Africa. It's mainly found in Southern Europe, and is a case of back-migration into Africa some 8,000 years ago. It's even believed that King Tut, the ancient Egyptian pharaoh, belonged to this haplogroup!</p><img src="/assets/haplogroup_R1b_V88.JPG" class="haplo-image">`
        funFact.appendChild(haploCard)
    } else if (event.data.region === 'North-Africa') {
        const haploCard = document.createElement('div')

        haploCard.innerHTML = `<br><p><strong>Fun fact:</strong> North Africans who belong to Haplogroup R1b are likely descendants of Iberians (residents of modern Spain and Portugal).</p><img src="/assets/Iberian_R1b.JPG" class="haplo-image">`
        funFact.appendChild(haploCard)
    }
}



