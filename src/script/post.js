
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

function addBiceps() {
    let url = 'https://api.sheety.co/e062924c5a972dee5d1a08046e74b444/treino/biceps';

    let data = document.getElementById('txt-data-biceps').value
    let pesoRoscaW = document.getElementById('txt-roscaW').value + 'KG'
    let pesoRoscaBI = document.getElementById('txt-roscaBI').value + 'KG'
    let pesoRoscaM = document.getElementById('txt-roscaM').value + 'KG'
    let pesoRoscaS = document.getElementById('txt-roscaS').value + 'KG'

    let body = {
        bicep: {
            "data": data,
            "roscaBarraW": pesoRoscaW,
            "roscaBancoInclinado": pesoRoscaBI,
            "roscaMarteloCorda": pesoRoscaM,
            "roscaScoot": pesoRoscaS
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
        console.log(json.bicep);
    });
    document.getElementById('caixa-biceps').style.display = 'none'
}

function addDorsais(){
    let url = 'https://api.sheety.co/e062924c5a972dee5d1a08046e74b444/treino/dorsais';

    let data = document.getElementById('txt-data-ombro').value
    let pesoPuxadaA = document.getElementById('txt-puxadaA').value + 'KG'
    let pesoRemadaB = document.getElementById('txt-remadaB').value + 'KG'
    let pesoPuxadaU = document.getElementById('txt-puxadaU').value + 'KG'
    let pesoRemadaC = document.getElementById('txt-remadaC').value + 'KG'
    let pesoRemadaS = document.getElementById('txt-remadaS').value + 'KG'

    
    let body = {
            dorsai: {
                "data": data,
                "puxadaAltaAberta": pesoPuxadaA,
                "remadaBaixa": pesoRemadaB,
                "puxadaUnilateral": pesoPuxadaU,
                "remadaCurvada": pesoRemadaC,
                "remadaSerrote": pesoRemadaS
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
        
    document.getElementById('caixa-dorsais').style.display = 'none'
}

function addPanturrilha(){
    let url = 'https://api.sheety.co/e062924c5a972dee5d1a08046e74b444/treino/panturrilha';
    
    let data = document.getElementById('txt-data-pantu').value
    let pesoGemeosS = document.getElementById('txt-gemeosS').value + 'KG'
    let pesoGemeosP = document.getElementById('txt-gemeosP').value + 'KG'
    
    let body = {
            panturrilha: {
                "data": data,
                "gemeosSentado": pesoGemeosS,
                "gemeosEmPe": pesoGemeosP,
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
        document.getElementById('caixa-panturrilha').style.display = 'none'
}
    
function addPeito(){
    let url = 'https://api.sheety.co/e062924c5a972dee5d1a08046e74b444/treino/peito';

    let data = document.getElementById('txt-data-ombro').value
    let pesoCruxifixoM = document.getElementById('txt-cruxifixoM').value + 'KG'
    let pesoSupinoI = document.getElementById('txt-supinoI').value + 'KG'
    let pesoSupinoR = document.getElementById('txt-supinoR').value + 'KG'
    let pesoSupinoM = document.getElementById('txt-supinoM').value + 'KG'
    let pesoCruxifixoC = document.getElementById('txt-cruxifixoC').value + 'KG'
    let pesoCruxifixoB = document.getElementById('txt-cruxifixoB').value + 'KG'
    
    let body = {
            peito: {
                "data": data,
                "cruxifixoMaquina": pesoCruxifixoM,
                "supinoInclinado": pesoSupinoI,
                "supinoReto": pesoSupinoR,
                "supinoMaquina": pesoSupinoM,
                "cruxifixoPoliaCima": pesoCruxifixoC,
                "cruxifixoPoliaBaixo": pesoCruxifixoB
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
        document.getElementById('caixa-peito').style.display = 'none'
}
    
function addPosterior(){
    let url = 'https://api.sheety.co/e062924c5a972dee5d1a08046e74b444/treino/posteriorEGluteo';
    
    let data = document.getElementById('txt-data-post').value
    let pesoAgachamento = document.getElementById('txt-agachamento-post').value + 'KG'
    let pesoMesa = document.getElementById('txt-mesaFlexora').value + 'KG'
    let pesoCadeira = document.getElementById('txt-cadeiraFlexora').value + 'KG'
    let pesoStiff = document.getElementById('txt-stiff').value + 'KG'
    let pesoAdutora = document.getElementById('txt-adutora').value + 'KG'
    let pesoBulgaro = document.getElementById('txt-bulgaro').value + 'KG'
    let pesoPelvica = document.getElementById('txt-pelvica').value + 'KG'
    
    let body = {
        posteriorEGluteo: {
            "data": data,
            "agachamento": pesoAgachamento,
            "mesaFlexora":pesoMesa,
            "cadeiraFlexora": pesoCadeira,
            "stiff": pesoStiff,
            "adutora": pesoAdutora,
            "bulgáro": pesoBulgaro,
            "elevaçãoPélvica": pesoPelvica,
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
        
        document.getElementById('caixa-posterior').style.display = 'none'
}

function addQuadriceps(){
    let url = 'https://api.sheety.co/e062924c5a972dee5d1a08046e74b444/treino/quadriceps';
    let data = document.getElementById('txt-data-quad').value 
    let pesoAga = document.getElementById('txt-agachamento-quad').value + 'KG'
    let pesoLeg = document.getElementById('txt-leg').value + 'KG'
    let pesoHack = document.getElementById('txt-hack').value + 'KG'
    let pesoAbdutora = document.getElementById('txt-abdutora').value + 'KG'
    let pesoExtensora = document.getElementById('txt-extensora').value + 'KG'
    let pesoPassada = document.getElementById('txt-passada').value + 'rep'

    let body = {
        quadricep: {
        'data': data,
        'agachamento': pesoAga,
        'legPress': pesoLeg,
        'hack': pesoHack,
        'abdutora': pesoAbdutora,
        'extensora': pesoExtensora,
        'passada': pesoPassada
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
      console.log(json.quadricep);
    });
    document.getElementById('caixa-quadriceps').style.display = 'none'
}

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
function addOmbro(){
    let url = 'https://api.sheety.co/e062924c5a972dee5d1a08046e74b444/treino/ombro';
    
    let data = document.getElementById('txt-data-ombro').value
    let pesoCruxifixo = document.getElementById('txt-cruxifixoI').value + 'KG'
    let pesoElevaL = document.getElementById('txt-elevacaoL').value + 'KG'
    let pesoDesen = document.getElementById('txt-desenvolvimento').value + 'KG'
    let pesoElevaF = document.getElementById('txt-elevacaoF').value + 'KG'

    let body = {
        ombro: {
            "data": data,
            "cruxifixoInvertido": pesoCruxifixo,
            "elevaçãoLateralHalter": pesoElevaL,
            "desenvolvimento": pesoDesen,
            "elevaçãoFrontal": pesoElevaF,
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
        console.log(json.ombro);
        });
        document.getElementById('caixa-ombro').style.display = 'none'
}