
function addQuadriceps(){
  let url = 'https://api.sheety.co/2090c096908a634fb383513960b9d3e6/treino/quadriceps';
  let data = document.getElementById('txt-data').value 
  let pesoAga = document.getElementById('txt-agachamento').value 
  let pesoLeg = document.getElementById('txt-leg').value 
  let pesoHack = document.getElementById('txt-hack').value 
  let pesoAbdutora = document.getElementById('txt-abdutora').value 
  let pesoExtensora = document.getElementById('txt-extensora').value 
  let pesoPassada = document.getElementById('txt-passada').value 
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
}