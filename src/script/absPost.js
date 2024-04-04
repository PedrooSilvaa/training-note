
function addAbdomen(){
    let url = 'https://api.sheety.co/2090c096908a634fb383513960b9d3e6/treino/abdomen';
    
    let body = {
        abdomen: {
            "data": 1,
            "abdominalInfra": 1,
            "prancha": 1,
            "abdominalSupra": 1,
            "abdominalInfraFlexionadas": 1
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
            console.log(json.abdomen);
        });
}