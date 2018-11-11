const formulario = document.getElementById('formulario');
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('btnEnviar');
const btnReset = document.getElementById('btnReset');

cargarEventListeners()

function cargarEventListeners(){
    btnReset.addEventListener('click', borrarForm);

    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    btnEnviar.addEventListener('click', enviarMail);
}

function validarCampo(){

    validarLongitud(this);

    if (this.type == 'email') {
        validarMail(this);
    }

    let errores = document.querySelectorAll('.is-invalid');

    if (email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
        if (errores.length === 0) {
            btnEnviar.disabled = false;
        }
    }
}

function validarLongitud(campo){
    if (campo.value.length === 0) {
        campo.classList.add('is-invalid');
        campo.classList.remove('is-valid');
    }
    else{
        campo.classList.add('is-valid');
        campo.classList.remove('is-invalid');
    }
}

function validarMail(campo){
    const mensaje = campo.value;
    if (mensaje.indexOf('@') !== -1) {
        campo.className = 'form-control is-valid';
    }
    else{
        campo.className = 'form-control is-invalid';
    }
}

function borrarForm(e){
    e.preventDefault();
    formulario.reset();
    btnEnviar.disabled = true;
    email.className = 'form-control';
    asunto.className = 'form-control';
    mensaje.className = 'form-control';
}

function enviarMail(e){
    e.preventDefault();
    let cargando = document.getElementById('imgCargando');
    let enviado = document.getElementById('imgEnviado');
    cargando.style.display = 'block';
    cargando.removeAttribute('style');
    setTimeout(() => {
        cargando.style.display = 'none';
        enviado.style.display = 'block';
        enviado.removeAttribute('style');
        setTimeout(() => {
            enviado.style.display = 'none';
            borrarForm(e);
        }, 4000);
        
    }, 3000);

}