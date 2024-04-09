function vizualizar(){
    document.getElementById('tabela').style.display = 'flex'
    var selectCorpo = document.getElementById('corpo');
    var corpo = selectCorpo.options[selectCorpo.selectedIndex].value;
    console.log(corpo)
    


    switch (corpo) {
        case 'abs':
            VerAbdomen();
        case 'biceps':
            VerBiceps();
        case 'dorsais':
            VerDorsais();
        case 'ombro':
            VerOmbro();
        case 'pantu':
            VerPanturrilha();
        case 'peito':
            VerPeito();
        case 'post':
            VerPosterior();
        case 'quad':
            VerQuad();
        case 'triceps':
            VerTriceps();
    }

}

function VerAbdomen(mes) {
    let url = 'https://api.sheety.co/e062924c5a972dee5d1a08046e74b444/treino/abdomen';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
          // Do something with the data
            console.log(json.abdomen[1].data);
            var selectMes = document.getElementById('mes');
            var mes = selectMes.options[selectMes.selectedIndex].value;
            console.log(mes)
            let dt = parseInt("2024" + mes + "01");
            let dtFinal = parseInt("2024" + mes + 31);
            console.log(dt+'p'+dtFinal)
            datainicio = parseInt(dt);
            datafinal = parseInt(dtFinal)
            console.log(datainicio+'p'+datafinal)

            let data_txt;
            let dataSem;
            let contador = 0;

            let paiTtl = document.getElementById("titulos");
            let abdInfra = document.createElement('th');
            let prancha = document.createElement('th');
            let abdSupra = document.createElement('th');
            let abdInfraFlex = document.createElement('th');

            paiTtl.appendChild(abdInfra);
            paiTtl.appendChild(prancha);
            paiTtl.appendChild(abdSupra);
            paiTtl.appendChild(abdInfraFlex);

            abdInfra.innerText = "Abd. Infra";
            prancha.innerText = "Prancha";
            abdSupra.innerText = "Abd. Supra";
            abdInfraFlex.innerText = "Abd. Infra Flex";

            for (let i = datainicio; i <= datafinal; i++) {

                if (json.abdomen[contador].data != null) {
                data_txt = json.abdomen[contador].data;
                abdInfra_txt = json.abdomen[contador].abdominalInfra;
                prancha_txt = json.abdomen[contador].prancha;
                abdSupra_txt = json.abdomen[contador].abdominalSupra;
                abdInfraFlex_txt = json.abdomen[contador].abdominalInfraFlexionadas;
                contador++
                dataSem = data_txt.replace(/\D/g, '');
            }
            if (dataSem <= i) {
                console.log("entrei")
                let tbody = document.getElementById("conteudo");
                let paiCon = document.createElement('tr');
                let txtData = document.createElement('td');
                let txtAbdInfra = document.createElement('td');
                let txtPrancha = document.createElement('td');
                let txtAbdSupra = document.createElement('td');
                let txtAbdInfraFlex = document.createElement('td');
                
                console.log('cheguei')
                tbody.appendChild(paiCon);
                paiCon.appendChild(txtData);
                paiCon.appendChild(txtAbdInfra);
                paiCon.appendChild(txtPrancha);
                paiCon.appendChild(txtAbdSupra);
                paiCon.appendChild(txtAbdInfraFlex);

                txtData.innerText = data_txt;
                txtAbdInfra.innerText = abdInfra_txt;
                txtPrancha.innerText = prancha_txt;
                txtAbdSupra.innerText = abdSupra_txt;
                txtAbdInfraFlex.innerText = abdInfraFlex_txt;
             }
          }
 
       });
 }
 
 function VerDorsais() {
    let url = 'https://api.sheety.co/e062924c5a972dee5d1a08046e74b444/treino/dorsais';
    fetch(url)
       .then((response) => response.json())
       .then(json => {
          // Do something with the data
          console.log(json.dorsais);
       });
 }
 
 function VerOmbro() {
    let url = 'https://api.sheety.co/e062924c5a972dee5d1a08046e74b444/treino/ombro';
    fetch(url)
       .then((response) => response.json())
       .then(json => {
          // Do something with the data
          console.log(json.ombros);
       });
 }
 
 function VerTriceps() {
    let url = 'https://api.sheety.co/e062924c5a972dee5d1a08046e74b444/treino/triceps';
    fetch(url)
       .then((response) => response.json())
       .then(json => {
          // Do something with the data
          console.log(json.triceps);
       });
 }
 
 function VerPanturrilha() {
    let url = 'https://api.sheety.co/e062924c5a972dee5d1a08046e74b444/treino/panturrilha';
    fetch(url)
       .then((response) => response.json())
       .then(json => {
          // Do something with the data
          console.log(json.panturrilhas);
       });
 }
 
 function VerPeito() {
    let url = 'https://api.sheety.co/e062924c5a972dee5d1a08046e74b444/treino/peito';
    fetch(url)
       .then((response) => response.json())
       .then(json => {
          // Do something with the data
          console.log(json.peitos);
       });
 }
 
 function VerPosterior() {
    let url = 'https://api.sheety.co/e062924c5a972dee5d1a08046e74b444/treino/posteriorEGluteo';
    fetch(url)
       .then((response) => response.json())
       .then(json => {
          // Do something with the data
          console.log(json.posteriorEGluteos);
       });
 }
 
 function VerQuad() {
    let url = 'https://api.sheety.co/e062924c5a972dee5d1a08046e74b444/treino/quadriceps';
    fetch(url)
       .then((response) => response.json())
       .then(json => {
          // Do something with the data
          console.log(json.quadriceps);
       });
 }
 
 function VerBiceps() {
    let url = 'https://api.sheety.co/e062924c5a972dee5d1a08046e74b444/treino/biceps';
    fetch(url)
       .then((response) => response.json())
       .then(json => {
          // Do something with the data
          console.log(json.biceps);
       });
 }