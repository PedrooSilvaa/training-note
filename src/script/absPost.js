
function addAbdomen(){
    let url = 'https://api.sheety.co/e062924c5a972dee5d1a08046e74b444/treino/abdomen';
    
    let data = document.getElementById('txt-data-abdomen').value
    let abdominalI = document.getElementById('txt-abdominalI').value + 'REP'
    let prancha = document.getElementById('txt-prancha').value + 'REP'
    let abdominalS = document.getElementById('txt-abdominalS').value + 'REP'
    let abdominalIF = document.getElementById('txt-abdominalIF').value + 'REP'

    let body = {
        abdoman: {
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
            console.log(json.abdoman);
        });
        
    document.getElementById('caixa-abdomen').style.display = 'none'
}