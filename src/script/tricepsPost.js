
function addTriceps(){
    let url = 'https://api.sheety.co/2090c096908a634fb383513960b9d3e6/treino/triceps';
    let body = {
        tricep: {
            "data": 1,
            "trciepsPolia": 1,
            "tricepsFrances": 1,
            "tricepsTesta": 11,
            "tricepsCoice": 1
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
        console.log(json.tricep);
    });
}