var selEstado = document.querySelector("#selEstado"); //Select do Estado
var selCidade = document.querySelector("#selCidade"); //Select da Cidade
var options = document.getElementsByTagName("option"); //Todos os options
var map, info;
var markerPetrolina, markerRecife, markerJoaoPessoa,
markerSpCapital, markerSpInterior; //Marcadores das cidades

selCidade.disabled = true;

//Função para ocultar as cidades que não fazem parte do estado
function ocultarOption(option) {
  option.style.display = "none";
}

//Função para exibir as cidades que fazem parte do estado
function exibirOption(option) {
  option.style.display = "block";
}

selEstado.addEventListener("change", function (){
  if(this.value == "estado") {
    selCidade.disabled = "true";
  }
  if(this.value == "pernambuco") {
    selCidade.disabled = false;
    ocultarOption(options[9]); //São Paulo Interior
    ocultarOption(options[8]); //São Paulo Capital
    ocultarOption(options[7]); //João Pessoa
    exibirOption(options[6]);
    exibirOption(options[5]);
  }
  if(this.value == "paraiba") {
    selCidade.disabled = false;
    ocultarOption(options[9]); //São Paulo interior
    ocultarOption(options[8]); //São Paulo capital
    exibirOption(options[7]);
    ocultarOption(options[6]); //Recife
    ocultarOption(options[5]); //Petrolina
  }
  if(this.value == "spEstado") {
    selCidade.disabled = false;
    exibirOption(options[9]);
    exibirOption(options[8]);
    ocultarOption(options[7]); //João Pessoa
    ocultarOption(options[6]); //Recife
    ocultarOption(options[5]); //Petrolina
  }
});

//Função para mudar o ícone para 'não-selecionado'
function mudarIcone(marker) {
  marker.setIcon('assets/img/marker-nao-selecionado.png');
}

selCidade.addEventListener("change", function() {
    //Mudança de cor do pino de acordo com o clique da cidade
  if(this.value == "recife") {
    markerRecife.setIcon('assets/img/pin-selecionado.png');
    mudarIcone(markerJoaoPessoa);
    mudarIcone(markerPetrolina);
    mudarIcone(markerSpInterior);
    mudarIcone(markerSpCapital);
    // Janela de Informações da Unidade de Recife - chamando o método para abrir no clique da cidade
    info.setContent('<h3>Empresa 2 - Unidade Recife</h3><br><p>Endereço: R. Adélino Frutuoso, 2-100<br>Cordeiro, Recife - PE, 50721-200<br>Responsável: Rodrigo Silva<br>Telefone: (81)3012-1481<br><button class="btn btn-default">Saiba Mais</button><p>');
    info.open(map, markerRecife);
  }

  if (this.value == "petrolina") {
    markerPetrolina.setIcon('assets/img/pin-selecionado.png');
    mudarIcone(markerJoaoPessoa);
    mudarIcone(markerSpInterior);
    mudarIcone(markerRecife);
    mudarIcone(markerSpCapital);
    //Janela de Informações da Unidade de Petrolina - chamando o método para abrir no clique da cidade
    info.setContent('<h3>Empresa 1 - Unidade Petrolina</h3><br><p>Endereço: Av. José de Sá Maniçoba, S/N<br> Centro, Petrolina - PE, 56304-917<br>Responsável: Tiago Souza<br>Telefone: (87)3827-1231<br><button class="btn btn-default">Saiba Mais</button><p>');
    info.open(map, markerPetrolina);
  }

  if (this.value == "joaoPessoa") {
    markerJoaoPessoa.setIcon('assets/img/pin-selecionado.png');
    mudarIcone(markerSpInterior);
    mudarIcone(markerPetrolina);
    mudarIcone(markerRecife);
    mudarIcone(markerSpCapital);
    //Janela de Informações da Unidade de João Pessoa - chamando o método para abrir no clique da cidade
    info.setContent('<h3>Empresa 3 - Unidade João Pessoa</h3><br><p>Endereço: Av. Epitacio Pessoa<br>Estados, João Pessoa - PB, 58030-000<br>Responsável: Tiago Melo<br>Telefone: (83)3122-4582<br><button class="btn btn-default">Saiba Mais</button><p>');
    info.open(map, markerJoaoPessoa);
  }

  if (this.value == "spCapital") {
    markerSpCapital.setIcon('assets/img/pin-selecionado.png');
    mudarIcone(markerJoaoPessoa);
    mudarIcone(markerPetrolina);
    mudarIcone(markerRecife);
    mudarIcone(markerSpInterior);
    //Janela de Informações da Unidade de SP Capital - chamando o método para abrir no clique da cidade
    info.setContent('<h3>Empresa 4 - Unidade São Paulo Capital</h3><br><p>Endereço: R. Barão de Paranapiacaba, 20<br>Sé, São Paulo - SP, 01004-000<br>Responsável: José Rodrigues<br>Telefone: (11)4002-0881<br><button class="btn btn-default">Saiba Mais</button><p>');
    info.open(map, markerSpCapital);
  }

  if (this.value == "spInterior") {
    markerSpInterior.setIcon('assets/img/pin-selecionado.png');
    mudarIcone(markerJoaoPessoa);
    mudarIcone(markerPetrolina);
    mudarIcone(markerRecife);
    mudarIcone(markerSpCapital);
    //Janela de Informações da Unidade de SP Interior - chamando o método para abrir no clique da cidade
    info.setContent('<h3>Empresa 5 - Unidade São Paulo Interior</h3><br><p>Endereço: Av. Dr. Francisco Junqueira, 150<br>Campos Elísios, Ribeirão Preto - SP, 14080-140<br>Responsável: Marcos Torres<br>Telefone: (11)2021-1145<br><button class="btn btn-default">Saiba Mais</button><p>');
    info.open(map, markerSpInterior);
  }

  if(this.value == "cidade") {
    mudarIcone(markerJoaoPessoa);
    mudarIcone(markerPetrolina);
    mudarIcone(markerRecife);
    mudarIcone(markerSpCapital);
    mudarIcone(markerSpInterior);
    info.close(map);
  }
});

function initMap() {
       
  map = new google.maps.Map(document.querySelector('.mapa'), {
      center: {lat: -14.235, lng: -51.9253},
      zoom: 4
  });

  info = new google.maps.InfoWindow();

  //Marcador da cidade Petrolina
  markerPetrolina = new google.maps.Marker({
  position: {lat: -9.3835, lng: -40.5079},
  map: map,
  title: 'Petrolina-PE',
  icon: 'assets/img/marker-nao-selecionado.png',
  });

  // markerPetrolina.addListener('click', function() {
  //   info.setContent('<h3>Empresa 1 - Unidade Petrolina</h3><br><p>Endereço: Av. José de Sá Maniçoba, S/N<br> Centro, Petrolina - PE, 56304-917<br>Responsável: Tiago Souza<br>Telefone: (87)3827-1231<br><button class="btn btn-default">Saiba Mais</button><p>');
  //   info.open(map, markerPetrolina);
  // });

  //Marcador da cidade Recife
  markerRecife = new google.maps.Marker({
  position: {lat: -8.0475, lng: -34.877},
  map: map,
  title: 'Recife-PE',
  icon: 'assets/img/marker-nao-selecionado.png',
  });

  // markerRecife.addListener('click', function() {
  //   info.setContent('<h3>Empresa 2 - Unidade Recife</h3><br><p>Endereço: R. Adélino Frutuoso, 2-100<br>Cordeiro, Recife - PE, 50721-200<br>Responsável: Rodrigo Silva<br>Telefone: (81)3012-1481<br><button class="btn btn-default">Saiba Mais</button><p>');
  //   info.open(map, markerRecife);
  // });

  //Marcador da cidade João Pessoa
  markerJoaoPessoa = new google.maps.Marker({
  position: {lat: -7.1195, lng: -34.845},
  map: map,
  title: 'João Pessoa-PB',
  icon: 'assets/img/marker-nao-selecionado.png',
  });

  // markerJoaoPessoa.addListener('click', function() {
  //   info.setContent('<h3>Empresa 3 - Unidade João Pessoa</h3><br><p>Endereço: Av. Epitacio Pessoa<br>Estados, João Pessoa - PB, 58030-000<br>Responsável: Tiago Melo<br>Telefone: (83)3122-4582<br><button class="btn btn-default">Saiba Mais</button><p>');
  //   info.open(map, markerJoaoPessoa);
  // });

  //Marcador da cidade São Paulo capital
  markerSpCapital = new google.maps.Marker({
  position: {lat: -23.5505, lng: -46.6333},
  map: map,
  title: 'São Paulo Capital-SP',
  icon: 'assets/img/marker-nao-selecionado.png',
  });

  // markerSpCapital.addListener('click', function() {
  //   info.setContent('<h3>Empresa 4 - Unidade São Paulo Capital</h3><br><p>Endereço: R. Barão de Paranapiacaba, 20<br>Sé, São Paulo - SP, 01004-000<br>Responsável: José Rodrigues<br>Telefone: (11)4002-0881<br><button class="btn btn-default">Saiba Mais</button><p>');
  //   info.open(map, markerSpCapital);
  // });

  //Marcador da cidade São Paulo interior
  markerSpInterior = new google.maps.Marker({
  position: {lat: -21.1666, lng: -47.8833},
  map: map,
  title: 'São Paulo Interior-SP',
  icon: 'assets/img/marker-nao-selecionado.png',
  });

  // markerSpInterior.addListener('click', function() {
  //   info.setContent('<h3>Empresa 5 - Unidade São Paulo Interior</h3><br><p>Endereço: Av. Dr. Francisco Junqueira, 150<br>Campos Elísios, Ribeirão Preto - SP, 14080-140<br>Responsável: Marcos Torres<br>Telefone: (11)2021-1145<br><button class="btn btn-default">Saiba Mais</button><p>');
  //   info.open(map, markerSpInterior);
  // });        
}