
let dataQuad = '20/03/2024';


function addCarga(){
  let url = 'https://api.sheety.co/2090c096908a634fb383513960b9d3e6/treino/quadriceps';
    let body = {
        quadricep: {
        'data': dataQuad,
        'agachamento': '23',
        'legPress': '200',
        'hack': '20',
        'abdutora': '10',
        'extensora': '100',
        'passada': '100'
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
      console.log(json.quadricep.DATA);
    });
}