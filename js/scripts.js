//Jquery
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
  });

  function handleNomeCompleto(){
    var nomeCompleto = document.getElementById("nomeCompleto").value;
    //Verifica se a entrada possui apenas caracteres do alfabeto.
    if(nomeCompleto.match(/[^a-z ]/gi) != null){
        //Caso exista algum caracterece diferente de [a-z][A-Z]
        document.getElementById("nomeCompleto").style.borderBottomColor = "rgb(255,0,0,0.7)";
    }else{
        document.getElementById("nomeCompleto").style.borderBottomColor = "rgb(0,255,0,0.7)";
    }
}

$(document).ready(function(){
    var $cpf = $("#cpf");
    $cpf.mask('000.000.000-00', {reverse: true});
});


$(document).ready(function(){
    var $contato = $("#contato");
    $contato.mask('00 00 0 00000000', {reverse: true});

});

function handleCpf(){
    var cpf = document.getElementById("cpf").value;
    cpf = cpf.replace(/[^0-9]/g, '');
    if(validarCPF(cpf)){
        document.getElementById("cpf").style.borderBottomColor = "rgb(0,255,0,0.7)";
    }else{
        document.getElementById("cpf").style.borderBottomColor = "rgb(255,0,0,0.7)";
    }
    
}

function handleDataNascimento(){
    var dataNascimento = new Date (document.getElementById("dataNascimento").value);
    var dataAtual = new Date();

    //Verifica se e maior de 18 anos
    if(dataNascimento.getFullYear() > (dataAtual.getFullYear() - 18)){
        document.getElementById("dataNascimento").style.borderBottomColor = "rgb(255,0,0,0.7)";
    }else{
        document.getElementById("dataNascimento").style.borderBottomColor = "rgb(0,255,0,0.7)";
    }
}

function handleContato(){
    var contato = document.getElementById("contato").value;
    contato = contato.replace(/[^0-9]/g, '');
    console.log(contato.substring(4,5))
    console.log(contato.length)
    //verifica se o número possui menos que 8 digítos
    if(contato.length < 8){
        document.getElementById("contato").style.borderBottomColor = "rgb(255,0,0,0.7)";
        return;
    }else{
        if(contato.length == 11 && contato.substring(3,4) != "9"){
     
            document.getElementById("contato").style.borderBottomColor = "rgb(255,0,0,0.7)";
            return;
        }

        if(contato.length == 13 && contato.substring(4,5) != "9"){
            document.getElementById("contato").style.borderBottomColor = "rgb(255,0,0,0.7)";
            return;
        }
        document.getElementById("contato").style.borderBottomColor = "rgb(0,255,0,0.7)";
    }
}

function handleEndereco(){
    var endereco = document.getElementById("endereco").value;
    //Se o endereço for vazio
    if(endereco == ""){
        document.getElementById("endereco").style.borderBottomColor = "rgb(255,0,0,0.7)";
    }else{
        document.getElementById("endereco").style.borderBottomColor = "rgb(0,255,0,0.7)";
    }
}

function handleForm(){
    var nomeCompleto = document.getElementById("nomeCompleto").value;
    var cpf = document.getElementById("cpf").value;
    var dataNascimento = document.getElementById("dataNascimento").value;
    var endereco = document.getElementById("endereco").value;
    var contato = document.getElementById("contato").value;

    var tipoContato = []
    //Radio
    var tipoContatoWhatsApp = document.getElementById("tipoContatoWhatsApp").checked;
    var tipoContatoTelegram = document.getElementById("tipoContatoTeleGram").checked;
    var tipoContatoMesseger = document.getElementById("tipoContatoMesseger").checked;
    if(tipoContatoWhatsApp){
        tipoContato[0] = 'WhatsApp';  
    }
    if(tipoContatoTelegram){
        tipoContato[1] = 'Telegram'; 
    }
    if(tipoContatoMesseger){
        tipoContato[2] = 'Messeger'; 
    }


    var email = document.getElementById("email").value;
    var formacaoExperiencia = document.getElementById("formacaoExperiencia").value;

    //Array de dados
    var data = [nomeCompleto,
                cpf,
                dataNascimento,
                endereco,
                contato,
                tipoContato,
                email,
                formacaoExperiencia];

    alert('Inscrito: ' + data);
}


//Função externas

function validarCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "00000000000") return false;

  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}