    
function addPosterior(){
    let url = 'https://api.sheety.co/2090c096908a634fb383513960b9d3e6/treino/posteriorEGluteo';
    
    let data = document.getElementById('txt-data-post').value
    let pesoAgachamento = document.getElementById('txt-agachamento-post').value + 'kg'
    let pesoMesa = document.getElementById('txt-mesaFlexora').value + 'kg'
    let pesoCadeira = document.getElementById('txt-cadeiraFlexora').value + 'kg'
    let pesoStiff = document.getElementById('txt-stiff').value + 'kg'
    let pesoAdutora = document.getElementById('txt-adutora').value + 'kg'
    let pesoBulgaro = document.getElementById('txt-bulgaro').value + 'kg'
    let pesoPelvica = document.getElementById('txt-pelvica').value + 'rep'
    
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
