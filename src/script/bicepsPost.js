
function addBiceps() {
    let url = 'https://api.sheety.co/2090c096908a634fb383513960b9d3e6/treino/biceps';

    let data = document.getElementById('txt-data-biceps').value
    let pesoRoscaW = document.getElementById('txt-roscaW').value + 'kg'
    let pesoRoscaBI = document.getElementById('txt-roscaBI').value + 'kg'
    let pesoRoscaM = document.getElementById('txt-roscaM').value + 'kg'
    let pesoRoscaS = document.getElementById('txt-roscaS').value + 'kg'

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