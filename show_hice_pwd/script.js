function togglePassword() {
    let input = document.getElementById("password");
    let eyeIco = document.getElementById("toggleEye");

    if(input.type === 'password') {
        input.type = 'text';
        eyeIco.classList.add('hide');
    } else {
        input.type = 'password';
        eyeIco.classList.remove('hide');
    }
    
}