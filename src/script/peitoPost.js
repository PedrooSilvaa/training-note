let url = 'https://api.sheety.co/2090c096908a634fb383513960b9d3e6/treino/peito';
    let body = {
        peito: {
            "data": 1,
            "cruxifixoMaquina": 1,
            "supinoInclinado": 1,
            "supinoReto": 1,
            "supinoMaquina": 1,
            "cruxifixoPoliaCima": 1
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
        console.log(json.peito);
    });