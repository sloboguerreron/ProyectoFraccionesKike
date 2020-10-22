let problemas = [
    "Un cultivador siembra 2/5 de su granja con papa, y 3/7 con cebolla.  ¿En total qué fracción de la granja sembró?",
    "María se ha gastado 1/3 de dinero que le dieron de paga por sus abuelos en comprar un libro de aventuras. También se ha gastado 1/9 de la paga en comprar una bolsa de dulces.¿Qué fracción de su paga  se ha gastado María?",
    "Acabo de hechar gasolina y ahora el indicador de combustible del auto marca 8/10. Lo que quiere decir que no se ha llenado el deposito. Si al llegar a la gasolinera marcaba 4/10, ¿Qué parte del deposito llegue en la gasolinera?",
    "Daniela corrió 3/4 de KM en la mañana y 7/5 de KM en la tarde. ¿Cuánto corrió en total?",
    "Si tengo $ 3/4, ¿Cuánto me hace falta para tener 2?"
]

let soluciones = [
    "29/35",
    "4/9",
    "4/10",
    "43/20",
    "5/4"
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
    var srcImage = "./img/proSumaResta/1.png";
    document.getElementById('image_problem').src= srcImage;
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

    //lol
    var srcImage = "./img/proSumaResta/" + sum + '.png';
    document.getElementById('image_problem').src= srcImage;

    if(int == 5){
        $('.problem').fadeOut('slow');
        $('.final').fadeIn('slow');
        let porcentaje = parseInt(op) * 20;
        document.getElementById("res1").value = op;
        document.getElementById("res2").value = 5;
        let clase = "progress-" + porcentaje;
        var element = document.getElementById("porcentaje_progress");
        element.classList.add(clase);
        document.getElementById("percent").innerHTML = porcentaje;
        var srcImage = "./img/proSumaResta/6.png";
    document.getElementById('image_problem').src= srcImage;
    }else{
        this.getProblem(int);
        localStorage.setItem('interaccion', sum);
    }

}

