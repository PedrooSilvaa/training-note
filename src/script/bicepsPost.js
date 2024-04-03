let url = 'https://api.sheety.co/2090c096908a634fb383513960b9d3e6/treino/biceps';
let body = {
    bicep: {
        "data": 1,
        "roscaBarraW": 1,
        "roscaBancoInclinado": 1,
        "roscaMarteloCorda": 1,
        "id": 2
    }
    }
    fetch(url, {
    method: 'POST',
    body: JSON.stringify(body)
    })
    .then((response) => response.json())
    .then(json => {
    // Do something with object
    console.log(json.bicep);
});