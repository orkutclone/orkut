document.querySelector('.emailVara').innerHTML = localStorage.email
let cod
fetch(`https://orkut-mailsender.herokuapp.com/2factors/${localStorage.email}`).then(res => res.json()).then(data => mudaCod(data))
function mudaCod(data){
    cod = data.cod
}
document.querySelector('.enviaCod').addEventListener('click', ()=>{
    let userCod = document.querySelector('#cod').value
    if(userCod == cod){
        window.location.href = 'perfil.html'
    }else{
        window.alert('código inválido')
    }
})