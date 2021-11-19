function Validar() {
  var nome = document.getElementById('nome').value
  var sobrenome = document.getElementById('sobrenome').value
  var email = document.getElementById('email').value
  var cidade = document.getElementById('cidade').value
  var estado = document.getElementById('estado').value
  var codigoPostal = document.getElementById('cep').value

  if (
    nome == '' ||
    sobrenome == '' ||
    email == '' ||
    cidade == '' ||
    estado == '' ||
    codigoPostal == ''
  ) {
    alert('Campos Obrigatórios')
    return false
  }
}

function Checkbox() {
  var checkbox = document.getElementById('checkbox')

  if (Termos.checked) {
    alert('Os termos foram aceitos')
  } else {
    alert('Você precisa aceitar os termos')
    return false
  }
}

$('#nome, #sobrenome, #email, #cidade, #estado, #cep').change(function () {
  var nome = $('#nome').val()
  //  var sobrenome = $('#sobrenome').val();
  var email = $('#email').val()
  //  var cidade = $('#cidade').val();
  //  var estado = $('#estado').val();
  //  var cep = $('#cep').val();
  if (nome != null && email != null) {
    $('.btn').removeAttr('disabled')
  } else {
    $('.btn').attr('disabled')
  }
})
