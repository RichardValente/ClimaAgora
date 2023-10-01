'use strict'

const key = "81fe08d1c5dfaf51257bfc631148a534";

function colocarDadosNaTela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = dados.name
    document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) + "ºC"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".humidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"

}

async function buscarCidade(cidade){

   const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then (resposta => resposta.json());
   
   colocarDadosNaTela(dados)

}

function ClicarBotao(){

    const cidade = document.querySelector(".input-cidade").value;
   
    buscarCidade(cidade)
}

''