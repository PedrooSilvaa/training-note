let url = 'https://api.sheety.co/2090c096908a634fb383513960b9d3e6/treino/posteriorEGluteo';
let body = {
    posteriorEGluteo:{
            "data": 1,
            "agachamento": 1,
            "mesaFlexora": 1,
            "cadeiraFlexora": 1,
            "stiff": 1,
            "adutora": 1,
            "bulgáro": 1,
            "elevaçãoPélvica": 1
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
