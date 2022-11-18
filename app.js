const msj = document.getElementById('p__input');
const img = document.getElementById('img__error');
const email = document.getElementById('input');

form.addEventListener('submit', e  => {
    e.preventDefault()
    let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!regEmail.test(email.value) ){
        img.className = 'icon__error';
        msj.classList = 'input__error';
    } else {
        img.classList = 'no__error';
        msj.classList = 'no__error';
    }
})