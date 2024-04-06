    
function addPosterior(){
    let url = 'https://api.sheety.co/e062924c5a972dee5d1a08046e74b444/treino/posteriorEGluteo';
    
    let data = document.getElementById('txt-data-post').value
    let pesoAgachamento = document.getElementById('txt-agachamento-post').value + 'KG'
    let pesoMesa = document.getElementById('txt-mesaFlexora').value + 'KG'
    let pesoCadeira = document.getElementById('txt-cadeiraFlexora').value + 'KG'
    let pesoStiff = document.getElementById('txt-stiff').value + 'KG'
    let pesoAdutora = document.getElementById('txt-adutora').value + 'KG'
    let pesoBulgaro = document.getElementById('txt-bulgaro').value + 'KG'
    let pesoPelvica = document.getElementById('txt-pelvica').value + 'KG'
    
    let body = {
        posteriorEGluteo:{
                "data": data,
                "agachamento": pesoAgachamento,
                "mesaFlexora": pesoMesa,
                "cadeiraFlexora": pesoCadeira,
                "stiff": pesoStiff,
                "adutora": pesoAdutora,
                "bulgáro": pesoBulgaro,
                "elevaçãoPélvica": pesoPelvica
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
        console.log(json.posteriorEGluteo);
        });
        
        document.getElementById('caixa-posterior').style.display = 'none'
}
