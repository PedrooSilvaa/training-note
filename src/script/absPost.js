
function addAbdomen(){
    let url = 'https://api.sheety.co/2090c096908a634fb383513960b9d3e6/treino/abdomen';
    
    let data = document.getElementById('txt-data-abdomen').value
    let abdominalI = document.getElementById('txt-abdominalI').value + 'KG'
    let prancha = document.getElementById('txt-prancha').value + 'KG'
    let abdominalS = document.getElementById('txt-abdominalS').value + 'KG'
    let abdominalIF = document.getElementById('txt-abdominalIF').value + 'KG'

    let body = {
        abdomen: {
            "data": data,
            "abdominalInfra": abdominalI,
            "prancha": prancha,
            "abdominalSupra": abdominalS,
            "abdominalInfraFlexionadas": abdominalIF
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