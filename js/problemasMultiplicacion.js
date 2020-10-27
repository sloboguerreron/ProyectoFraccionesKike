let problemas = [
    "Martha tiene un negocio en el cual vende huevos empacados por docena. Uno de sus clientes le pide solamente 5/6 de docena, ¿cuantos huevos debevenderle Martha?",    "Diego esta organizando una reunion con 12 amigos y dispone de una pizza y media para compartir. Las porciones que sirve son de un sexto de pizza. ¿Sera suficiente la pizza que tiene, o debera comprar mas?",
    "En una fiesta se comparte un pastel y al final solo queda 2/5 del mismo. Si andres se come 1/4 de lo que queda,¿que fraccion del totl se comio?",
    "Observa este otro tipo de ejercicio: Carlos, a quien le encanta cocinar, usa tres cuartos de kilo de harina para elaborar una torta.  ¿Cuántos necesitará para hacer tres tortas y media?",
    "Una lata de refresco cuesta 2/9 de euro. ¿Cuánto tendré que pagar por 72 latas?",
    "Cuánto pesan 40 sacos de patatas Un saco de patatas pesa 2/5 kg. ¿Cuánto pesarán 40 sacos?"
]

let soluciones = [
    "60/6",
    "1/10",
    "21/8",
    "144/9",
    "80/5"
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
    var srcImage = "./img/proMultiplicacion/1.png";
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
    var srcImage = "./img/proMultiplicacion/" + sum + '.png';
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
        var srcImage = "./img/proMultiplicacion/6.png";
    document.getElementById('image_problem').src= srcImage;
    }else{
        this.getProblem(int);
        localStorage.setItem('interaccion', sum);
    }

}

