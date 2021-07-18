/*jshint esversion: 6 */

function cadastrar() {
    let email = document.getElementById('email').value;  
    let nome = document.getElementById('nome').value;   
let data ={
    email,
    nome,
}
let convertData = JSON.stringify(data);
localStorage.setItem("lead", convertData);
alert('Sucesso! Obrigada.');


}


