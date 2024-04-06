    
function addPeito(){
    let url = 'https://api.sheety.co/2090c096908a634fb383513960b9d3e6/treino/peito';

    let data = document.getElementById('txt-data-ombro').value
    let pesoCruxifixoM = document.getElementById('txt-cruxifixoM').value + 'KG'
    let pesoSupinoI = document.getElementById('txt-supinoI').value + 'KG'
    let pesoSupinoR = document.getElementById('txt-supinoR').value + 'KG'
    let pesoSupinoM = document.getElementById('txt-supinoM').value + 'KG'
    let pesoCruxifixoC = document.getElementById('txt-cruxifixoC').value + 'KG'
    let pesoCruxifixoB = document.getElementById('txt-cruxifixoB').value + 'KG'
    
    let body = {
            peito: {
                "data": data,
                "cruxifixoMaquina": pesoCruxifixoM,
                "supinoInclinado": pesoSupinoI,
                "supinoReto": pesoSupinoR,
                "supinoMaquina": pesoSupinoM,
                "cruxifixoPoliaCima": pesoCruxifixoC,
                "cruxifixoPoliaBaixo": pesoCruxifixoB
            }
        }
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then((response) => response.json())
        .then(json => {
            // Do something with object
            console.log(json.peito);
        });
}