function criarCampanha(){
    if (!$('#form-cadastro')[0].checkValidity()) {
        msg("Preencha o formulário corretamente.");
        return;
    }
}

function msg(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}