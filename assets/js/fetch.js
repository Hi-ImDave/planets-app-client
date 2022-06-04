document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const planetName = document.querySelector('input').value
    try {
        const response = await fetch(`https://hso-planet-api.herokuapp.com/api/${planetName}`)
        const data = await response.json()
        console.log(data)
        console.log(data.name)
        document.querySelector('#planetName').innerText = data.name
        document.querySelector('#planetType').innerText = data.planetType
        document.querySelector('#planetSize').innerText = data.diameter
        document.querySelector('#distFromSun').innerText = data.distanceFromSun
        document.querySelector('#lengthOfYear').innerText = data.LengthOfYear
    } catch {
        console.log(error)
    }
}