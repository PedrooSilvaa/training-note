
function addQuadriceps(){
    let url = 'https://api.sheety.co/2090c096908a634fb383513960b9d3e6/treino/quadriceps';
    let data = document.getElementById('txt-data-quad').value 
    let pesoAga = document.getElementById('txt-agachamento-quad').value + 'kg'
    let pesoLeg = document.getElementById('txt-leg').value + 'kg'
    let pesoHack = document.getElementById('txt-hack').value + 'kg'
    let pesoAbdutora = document.getElementById('txt-abdutora').value + 'kg'
    let pesoExtensora = document.getElementById('txt-extensora').value + 'kg'
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