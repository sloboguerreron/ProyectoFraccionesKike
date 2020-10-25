let opciones = [
    ["21", "24", "28", "16"],
    ["28", "24", "36", "32"],
    ["50", "15", "45", "36"],
    ["21", "18", "14", "16"],
    ["7", "12", "16", "10"]
];

let solution = ["24", "32", "50", "14", "12"];


function iniciar(){

    localStorage.setItem('puntaje', 0);
    localStorage.setItem('oportunidad', 1);
    localStorage.setItem('interaccion', 1);
    $('.inicio').fadeOut('slow');
    $('.ejercicios').fadeIn('slow');
    var srcImage = "./img/multiplicacion/1.png";
    document.getElementById('img_ejercicio').src= srcImage;
    
    //primero
    document.getElementById('primero').innerText = opciones[0][0];
    //segundo
    document.getElementById('segundo').innerText = opciones[0][1];
    //tercero
    document.getElementById('tercero').innerText = opciones[0][2];
    //cuarto
    document.getElementById('cuarto').innerText = opciones[0][3];
    //this.getProblem(0);

}

function resultado(indicador){
    let v = document.getElementById(indicador).innerText;
    
    let interaccion = localStorage.getItem('interaccion'); 
    let inter = parseInt(interaccion) - 1;


    if(v == solution[inter]){
        document.getElementById("solution_ok").innerHTML = "Respuesta Correcta!";
        $('.error').fadeOut('slow');
        $('.ok').fadeIn('slow');
        $('.botones').fadeOut('slow');
        $('.siguiente').fadeIn('slow');
        let op = localStorage.getItem('puntaje');
        let sum = parseInt(op) + 1;
        localStorage.setItem('puntaje', sum);
        let inter = parseInt(interaccion) + 1;
        localStorage.setItem('interaccion', inter);
    }else{
        document.getElementById("solution_error").innerHTML = "Respuesta Incorrecta!";
        $('.ok').fadeOut('slow');
        $('.error').fadeIn('slow');
        let op = localStorage.getItem('oportunidad');
        let sum = parseInt(op) + 1;
        console.log(sum);
        if(sum > 2){
            $('.botones').fadeOut('slow');
            $('.siguiente').fadeIn('slow');
            let inter = parseInt(interaccion) + 1;
            localStorage.setItem('interaccion', inter);
        }else{
            localStorage.setItem('oportunidad', sum);
        }
    }
}

function siguiente(){
    localStorage.setItem('oportunidad', 1);
    $('.ok').fadeOut('slow');
    $('.error').fadeOut('slow');
    $('.siguiente').fadeOut('slow');

    let interaccion = localStorage.getItem('interaccion');
    console.log("INTERACCION");
    console.log(interaccion);

    if(interaccion>5){
        console.log("TERMINA");
        let puntaje = localStorage.getItem('puntaje');
        console.log(puntaje);

        //----------------------
        $('.ejercicios').fadeOut('slow');
        $('.inicio').fadeIn('slow');
        $('.introduction').fadeOut();
        $('.final').fadeIn('slow');
        let porcentaje = parseInt(puntaje) * 20;
        document.getElementById("res1").value = puntaje;
        document.getElementById("res2").value = 5;
        let clase = "progress-" + porcentaje;
        var element = document.getElementById("porcentaje_progress");
        element.classList.add(clase);
        document.getElementById("percent").innerHTML = porcentaje;
        var srcImage = "./img/proSumaResta/6.png";
        document.getElementById('image_problem').src= srcImage;
        console.log("FINAL");
    }else{

        $('.botones').fadeIn('slow');
     
        var srcImage = "./img/multiplicacion/"+ interaccion +".png";
        document.getElementById('img_ejercicio').src= srcImage;

        let inter = parseInt(interaccion) - 1;

        //primero
        document.getElementById('primero').innerText = opciones[inter][0];
        //segundo
        document.getElementById('segundo').innerText = opciones[inter][1];
        //tercero
        document.getElementById('tercero').innerText = opciones[inter][2];
        //cuarto
        document.getElementById('cuarto').innerText = opciones[inter][3];

    }
}