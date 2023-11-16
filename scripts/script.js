// Author: Daniel Carril Miranda (2ºDAW Student)

document.addEventListener("DOMContentLoaded", () => {
    console.log("JS cargado");
    // Parte 1

    function realizarCalculos() {
        // Solicitar datos al usuario
        let nombre = prompt("Introduce tu nombre y apellidos:");
        // nombre [nombreString];
        const dia = prompt("Introduce el día de tu nacimiento:");
        const mes = prompt("Introduce el mes de tu nacimiento:");
        const año = prompt("Introduce el año de tu nacimiento:");
        // Calcular la edad
        const fechaNacimiento = new Date(`${mes} ${dia}, ${año}`);
        const edad = new Date().getFullYear() - fechaNacimiento.getFullYear();

        // Mostrar resultados
        // Saludo
        document.write("Buenos días " + nombre + "<br>");
        // Longitud del nombre
        document.write("Tu nombre tiene " + nombre.length + " caracteres, incluidos espacios." + "<br>");
        // Posición de la primera letra 'A'
        nombre = nombre.toLowerCase(); // Lo paso a minúsculas todo para buscar la letra
        document.write("La primera letra A de tu nombre está en la posición: " + nombre.indexOf('a') + "<br>");
        // Posición de la última letra 'A'
        document.write("La última letra A de tu nombre está en la posición: " + nombre.lastIndexOf('a') + "<br>");
        // Nombre sin las 3 primeras letra
        document.write("Tu nombre menos las 3 primeras letras es: " + nombre.slice(3) + "<br>");
        // Nombre en mayúsculas
        document.write("Tu nombre todo en mayúsculas es: " + nombre.toUpperCase() + "<br>");
        // Edad
        document.write("Tu edad es: " + edad + " años" + "<br>");
        // Fecha de nacimiento
        document.write("Naciste un feliz " + estacion(dia, mes) + " del año " + año + "<br>");
        // Coseno de 180
        document.write("El coseno de 180 es: " + Math.cos(180 * (Math.PI/180)) + "<br>"); //Hay que pasar de grados a radianes
        // Número mayor de la lista
        const numeros = [34, 67, 23, 75, 35, 19];
        document.write("El número mayor de (34, 67, 23, 75, 35, 19) es: " + Math.max(...numeros) + "<br>");
        // Número aleatorio
        document.write("Ejemplo de número al azar entre 0 y 100: " + Math.random()*100 + "<br>");
    }
        
    function estacion(dia, mes){
        //Convertimos el dato a número
        const mesEntero = parseInt(mes);
        const mesString = mesEntero.toString();
        //Si hemos introducido el día sin cero inical para valores inferiores a 10 se le añade 0 al inicio;
        if (dia > 10) dia = "0" + dia;
        //Juntamos (no estamos sumando) el mes y el año
        mesDia = mesString.concat(dia);
        //El resultado de esta concatenación se pasa a número entero
        estac = parseInt(mesDia);

        if (estac > 0){
            //desde el 21 de marzo (321) hasta el 20 de junio (620) es Primavera 
            if (estac >= 321 && estac <=620) {
                return "Primavera"
                //Desde el dia 21 de junio (621) hasta el 22 de septiembre  es verano
            } else if (estac >= 621 && estac <=922){
                return "Verano"
                //Desde el dia 21 de septiembre (921) hasta el 20 de diciembre  es verano
            } else if (estac >= 923 && estac <=1220){
                return "Otoño"
                //El resto es Invierno
            } else {
            return "Invierno"
            }
        }   else {
            return null;
        }
    }
    
    // Llamar a la función principal
    realizarCalculos();

    // Parte 2
    // Crear botón de ventana nueva
    const botonAbrirVentana = document.createElement("button");
    botonAbrirVentana.textContent = "Abrir Ventana";
    document.body.appendChild(botonAbrirVentana);

    botonAbrirVentana.addEventListener("click", abrirVentana);


    function abrirVentana() {
        // Abrir una nueva ventana no redimensionable
        const nuevaVentana = window.open("", "_blank", "width=800,height=600,resizable=no");

        // Escribir contenido en la nueva ventana
        nuevaVentana.document.write("<html><head><title>Ejemplo de Ventana Nueva</title></head><body>");
        nuevaVentana.document.write("<h1>Ejemplo de Ventana Nueva</h1>");
        nuevaVentana.document.write("<p>URL actual: " + window.location.href + "</p>");
        nuevaVentana.document.write("<p>Protocolo utilizado: " + window.location.protocol + "</p>");
        nuevaVentana.document.write("<iframe src='https://forocoches.com/' width='800' height='600'></iframe>");
        nuevaVentana.document.write("</body></html>");
    }

    // Crear el botón "Reiniciar"
    const botonReiniciar = document.createElement("button");
    botonReiniciar.textContent = "Reiniciar";
    document.body.appendChild(botonReiniciar);

    botonReiniciar.addEventListener("click", reiniciar);

    function reiniciar() {
    window.location.href = "/index.html";
}
});