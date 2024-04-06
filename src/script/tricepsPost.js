
function addTriceps(){
    let url = 'https://api.sheety.co/e062924c5a972dee5d1a08046e74b444/treino/triceps';
    
    let data = document.getElementById('txt-data-triceps').value
    let pesoTricepsP = document.getElementById('txt-tricepsP').value + 'KG'
    let pesoTricepsF = document.getElementById('txt-tricepsF').value + 'KG'
    let pesoTricepsT = document.getElementById('txt-tricepsT').value + 'KG'
    let pesoTricepsC = document.getElementById('txt-tricepsC').value + 'KG'
    let pesoParalela = document.getElementById('txt-paralela').value + 'KG'

    let body = {
        tricep: {
            "data": data,
            "trciepsPolia": pesoTricepsP,
            "tricepsFrances": pesoTricepsF,
            "tricepsTesta": pesoTricepsT,
            "tricepsCoice": pesoTricepsC,
            "paralela": pesoParalela
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
    document.getElementById('caixa-triceps').style.display = 'none'
}