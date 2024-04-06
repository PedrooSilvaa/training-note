
function addBiceps() {
    let url = 'https://api.sheety.co/e062924c5a972dee5d1a08046e74b444/treino/biceps';

    let data = document.getElementById('txt-data-biceps').value
    let pesoRoscaW = document.getElementById('txt-roscaW').value + 'KG'
    let pesoRoscaBI = document.getElementById('txt-roscaBI').value + 'KG'
    let pesoRoscaM = document.getElementById('txt-roscaM').value + 'KG'
    let pesoRoscaS = document.getElementById('txt-roscaS').value + 'KG'

    let body = {
        bicep: {
            "data": data,
            "roscaBarraW": pesoRoscaW,
            "roscaBancoInclinado": pesoRoscaBI,
            "roscaMarteloCorda": pesoRoscaM,
            "roscaScoot": pesoRoscaS
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
        console.log(json.bicep);
    });
    document.getElementById('caixa-biceps').style.display = 'none'
}