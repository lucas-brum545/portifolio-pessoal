const form = document.querySelector('.formulario')

let usuarios = []

function registrar(usuario) {
    usuarios.push(usuario)
}

form.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const usuario = {
        nome: document.querySelector('#nome'),
        email: document.querySelector('#email'),
        mensagem: document.querySelector('#mensagem')
    }

    try{
        registrar(usuario)
        console.log(usuario)
        alert('Mensagem enviada com sucesso, logo entrarei em contato! :)')
    }catch(erro){
        throw new Error('Algo deu errado')
    }

})