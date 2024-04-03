let url = 'https://api.sheety.co/2090c096908a634fb383513960b9d3e6/treino/ombro';
let body = {
    ombro: {
        "data": 1,
        "cruxifixoInvertido": 1,
        "elevaçãoLateralHalter": 1,
        "desenvolvimento": 1,
        "elevaçãoFrontal": 1
    }
    }
    fetch(url, {
    method: 'POST',
    body: JSON.stringify(body)
    })
    .then((response) => response.json())
    .then(json => {
    // Do something with object
    console.log(json.ombro);
    });