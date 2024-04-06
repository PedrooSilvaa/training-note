

function addOmbro(){
    let url = 'https://api.sheety.co/e062924c5a972dee5d1a08046e74b444/treino/ombro';
    
    let data = document.getElementById('txt-data-ombro').value
    let pesoCruxifixo = document.getElementById('txt-cruxifixoI').value + 'KG'
    let pesoElevaL = document.getElementById('txt-elevacaoL').value + 'KG'
    let pesoDesen = document.getElementById('txt-desenvolvimento').value + 'KG'
    let pesoElevaF = document.getElementById('txt-elevacaoF').value + 'KG'

    let body = {
        ombro: {
            "data": data,
            "cruxifixoInvertido": pesoCruxifixo,
            "elevaçãoLateralHalter": pesoElevaL,
            "desenvolvimento": pesoDesen,
            "elevaçãoFrontal": pesoElevaF,
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
        console.log(json.ombro);
        });
}