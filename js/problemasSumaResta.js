let problemas = [
    "Un cultivador siembra 2/5 de su granja con maíz, y 3/7 con soya.  ¿En total qué fracción de la granja sembró?",
    "María se ha gastado 1/3 de dinero que le dieron de paga por sus abuelos en comprar un libro de aventuras. También se ha gastado 1/9 de la paga en comprar una bolsa de dulces.¿Qué fracción de su paga  se ha gastado María?"
]

let soluciones = [
    "29/35",
    "4/9"
]

function getProblem(numero){
    document.getElementById("description").innerHTML = problemas[numero];
}

function verify(){
    var numero = localStorage.getItem('interaccion');
    let numeroSolucion = parseInt(numero) - 1;
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    let solucion = num1 + "/" + num2;
    console.log(solucion);

    if(solucion == soluciones[numeroSolucion]){

        document.getElementById("solution_ok").innerHTML = "Respuesta Correcta!";
        $('.error').fadeOut('slow');
        $('.ok').fadeIn('slow');
        $('.verificar').fadeOut('slow');
        $('.siguiente').fadeIn('slow');
        let op = localStorage.getItem('puntaje');
        let sum = parseInt(op) + 1;
        localStorage.setItem('puntaje', sum);

    }else{

        document.getElementById("solution_error").innerHTML = "Respuesta Incorrecta!";
        $('.ok').fadeOut('slow');
        $('.error').fadeIn('slow');
        let op = localStorage.getItem('oportunidad');
        let sum = parseInt(op) + 1;
        console.log(sum);
        if(sum > 2){
            $('.verificar').fadeOut('slow');
            $('.siguiente').fadeIn('slow');
        }else{
            localStorage.setItem('oportunidad', sum);
        }

    }

}

function init(){

    localStorage.setItem('puntaje', 0);
    localStorage.setItem('oportunidad', 1);
    localStorage.setItem('interaccion', 1);
    $('.introduction').fadeOut('slow');
    $('.problem').fadeIn('slow');
    this.getProblem(0);

}

function otherProblem(){

    document.getElementById("num1").value = 0;
    document.getElementById("num2").value = 0;

    let op = localStorage.getItem('puntaje');

    localStorage.setItem('oportunidad', 1);
    $('.siguiente').fadeOut('slow');
    $('.verificar').fadeIn('slow');
    $('.ok').fadeOut('slow');
    $('.error').fadeOut('slow');

    var int = localStorage.getItem('interaccion');
    let sum = parseInt(int) + 1;

    if(int == 5){
        $('.problem').fadeOut('slow');
        $('.final').fadeIn('slow');
        document.getElementById("puntaje").innerHTML = op + '/5';
    }else{
        this.getProblem(int);
        localStorage.setItem('interaccion', sum);
    }

}
