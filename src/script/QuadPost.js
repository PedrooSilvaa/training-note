
function addQuadriceps(){
    let url = 'https://api.sheety.co/e062924c5a972dee5d1a08046e74b444/treino/quadriceps';
    let data = document.getElementById('txt-data-quad').value 
    let pesoAga = document.getElementById('txt-agachamento-quad').value + 'KG'
    let pesoLeg = document.getElementById('txt-leg').value + 'KG'
    let pesoHack = document.getElementById('txt-hack').value + 'KG'
    let pesoAbdutora = document.getElementById('txt-abdutora').value + 'KG'
    let pesoExtensora = document.getElementById('txt-extensora').value + 'KG'
    let pesoPassada = document.getElementById('txt-passada').value + 'rep'

    let body = {
        quadricep: {
        'data': data,
        'agachamento': pesoAga,
        'legPress': pesoLeg,
        'hack': pesoHack,
        'abdutora': pesoAbdutora,
        'extensora': pesoExtensora,
        'passada': pesoPassada
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
      console.log(json.quadricep);
    });
    document.getElementById('caixa-quadriceps').style.display = 'none'
}