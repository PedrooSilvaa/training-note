
function addTriceps(){
    let url = 'https://api.sheety.co/2090c096908a634fb383513960b9d3e6/treino/triceps';
    
    let data = document.getElementById('txt-data-triceps').value
    let pesoTricepsP = document.getElementById('txt-tricepsP').value
    let pesoTricepsF = document.getElementById('txt-tricepsF').value
    let pesoTricepsT = document.getElementById('txt-tricepsT').value
    let pesoTricepsC = document.getElementById('txt-tricepsC').value
    let pesoParalela = document.getElementById('txt-paralela').value

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