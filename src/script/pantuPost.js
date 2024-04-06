    

function addPanturrilha(){
    let url = 'https://api.sheety.co/2090c096908a634fb383513960b9d3e6/treino/panturrilha';
    
    let data = document.getElementById('txt-data-pantu').value
    let pesoGemeosS = document.getElementById('txt-gemeosS').value + 'KG'
    let pesoGemeosP = document.getElementById('txt-gemeosP').value + 'KG'
    
    let body = {
            panturrilha: {
                "data": data,
                "gemeosSentado": pesoGemeosS,
                "gemeosEmPe": pesoGemeosP,
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
            console.log(json.panturrilha);
        });
}