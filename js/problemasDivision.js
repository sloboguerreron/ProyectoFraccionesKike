let problemas = [
    "Un jardinero gasta dos tercios de litro de agua por cada planta que riega, ¿cuantas plantas puede regar si tiene diez litros?",
    "Diego esta organizando una reunion con 12 amigos y dispone de una pizza y media para compartir. Las porciones que sirve son de un sexto de pizza. ¿Sera suficiente la pizza que tiene, o debera comprar mas?",
    "Diana pinta estatuas. Le quedan 7/8 de litro de pintura. Cada estatua requiere 1/20 de litro de pintura.",
    "Una pizza se corta en rebanadas de 1/6 de tamaño del total. Jhon va comerse 1/2 de todo la pizza.",
    "Ana toma leche con chocolate en vasos que contienen 1/8 de litro cada uno. Tiene 7/10 de litro de leche con chocolate en su refigerador."
]

let soluciones = [
    "30/2",
    "18/2",
    "35/2",
    "6/2",
    "28/5"
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
    var srcImage = "./img/proDivision/1.png";
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
    var srcImage = "./img/proDivision/" + sum + '.png';
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

