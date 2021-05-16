let email = document.querySelector('input[name="email"]')
let password = document.querySelector('input[name="senha"]')
document.querySelector('.btnEntrar').addEventListener('click', evt =>{
    evt.preventDefault()
    if(email.value.length==0){
        window.alert("Por favor digite um e-mail")
    }else{
        if(password.value!='senha123'){
            window.alert("Senha Incorreta")
        }else{
            localStorage.setItem('email', email.value)
            localStorage.setItem('senha', password.value)
            window.location.href = 'verificar.html'
        }
    }
})