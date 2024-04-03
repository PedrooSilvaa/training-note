    

function addPanturrilha(){
    let url = 'https://api.sheety.co/2090c096908a634fb383513960b9d3e6/treino/panturrilha';
        let body = {
            panturrilha: {
                "data": 1,
                "gemeosSentado": 1,
                "gemeosEmPe": 1,
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
            console.log(json.panturrilha);
        });
}