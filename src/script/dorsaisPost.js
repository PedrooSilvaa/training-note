
function addDorsais(){
    let url = 'https://api.sheety.co/2090c096908a634fb383513960b9d3e6/treino/dorsais';
        let body = {
            dorsai: {
                "data": 1,
                "puxadaAltaAberta": 1,
                "remadaBaixa": 1,
                "puxadaUnilateral": 1,
                "remadaCurvada": 1,
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
            console.log(json.dorsai);
        });
}