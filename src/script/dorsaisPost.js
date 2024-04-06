
function addDorsais(){
    let url = 'https://api.sheety.co/e062924c5a972dee5d1a08046e74b444/treino/dorsais';

    let data = document.getElementById('txt-data-ombro').value
    let pesoPuxadaA = document.getElementById('txt-puxadaA').value + 'KG'
    let pesoRemadaB = document.getElementById('txt-remadaB').value + 'KG'
    let pesoPuxadaU = document.getElementById('txt-puxadaU').value + 'KG'
    let pesoRemadaC = document.getElementById('txt-remadaC').value + 'KG'
    let pesoRemadaS = document.getElementById('txt-remadaS').value + 'KG'

    
    let body = {
            dorsai: {
                "data": data,
                "puxadaAltaAberta": pesoPuxadaA,
                "remadaBaixa": pesoRemadaB,
                "puxadaUnilateral": pesoPuxadaU,
                "remadaCurvada": pesoRemadaC,
                "remadaSerrote": pesoRemadaS
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
            console.log(json.dorsai);
        });
        
    document.getElementById('caixa-dorsais').style.display = 'none'
}