let nombrecompleto= document.getElementById(nombrecompleto)
let edad= document.getElementById(edad)
let tipodedocumento= document.getElementById(tipodedocumento)
let numerodedocumento= document.getElementById(numerodedocumento)

if (edad < 18) {
    console.log("No puede ingresar");
} 
else if (edad>=18 && edad <=25){
    console.log("Usuario beneficiario por cotizante, no puede entrar");
}
else if (edad >=60){
    console.log("Se calculara la pension");
}
else {
    console.log("Puede entrar");
}

let salario= document.getElementById(salario)
let comisiones= document.getElementById(comisiones)
let totaldehorasextra= document.getElementById(totaldehorasextra)
let nivelderiesgo= document.getElementById(nivelderiesgo)

let valorEdad = parseInt(edad.value)
let valorSalario = parseFloat(salario.value)
let valorComisiones = parseFloat(comisiones.value)
let valorHorasExtras = parseFloat(horasextras.value)

alert("Por favor llenar el formulario con su información")

const salariominimolegalvigente=1750905;
const salariominimointegralvigente=22761765;
const subsidiodetransporte=249095;
const unidaddevalortributario=5237;

function calcularPorcentaje (base,porcentaje){
    return base * porcentaje;
}

const riesgominimo=0.522;
const riesgobajo=1.044;
const riesgomedio=2.436;
const riesgoalto=4.350;
const riesgomaximo=6.960;
const porcentajeIBC = 0.7;
const porcentajesalud = 0.04;
const porcentajepension = 0.04;
const porcentajefondosolidaridad= 0.01;

let salarioTotal =(parseFloat(salario.value) || 0) + (parseFloat(comisiones.value) || 0) + (parseFloat(horasExtras.value) || 0)
let IBC = calcularPorcentaje ( salarioTotal, porcentajeIBC );
let fondoSolidaridad = calcularPorcentaje ( IBC, porcentFondoSolidaridad );
let salud = calcularPorcentaje ( IBC, porcentajeSalud);
let pension = calcularPorcentaje ( IBC, porcentajePension);

fondoSolidaridad = IBC >= 4 * salarioMinimoLegalV ? fondoSolidaridad : 0;

let formulario = document.querySelector("form")

formulario.addEventListener("submit", function(event){

    let valorEdad = parseInt(edad.value)
    let valorSalario = parseFloat(salario.value)
    let valorComisiones = parseFloat(comisiones.value)
    let valorHorasExtras = parseFloat(horasExtras.value)

    if(valorSalario <= 0){

        event.preventDefault()

        alert("El salario debe ser mayor a 0")

        return
    }

    if(valorComisiones > valorSalario){

        event.preventDefault()

        alert("Las comisiones no pueden ser mayores al salario")

        return
    }

    if(valorHorasExtras > 2000000){

        event.preventDefault()

        alert("Horas extras demasiado altas")

        return
    }

    if(nombreCompleto.value.trim().length < 3){

        event.preventDefault()

        alert("Nombre demasiado corto")

        return
    }

    if(nombreCompleto.value.trim() === ""){

        event.preventDefault()

        alert("El nombre está vacío")

        return
    }

    if(isNaN(valorEdad)){

        event.preventDefault()

        alert("Edad inválida")

        return
    }

    if(numeroDocumento.value.length < 9){

        event.preventDefault()

        alert("Documento muy corto")

        return
    }

    let regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    if(!regexNombre.test(nombreCompleto.value)){

        event.preventDefault()

        alert("Nombre inválido")

        return
    }

    if(numeroDocumento.value < 0){

        event.preventDefault()

        alert("Documento inválido")

        return
    }

    if(numeroDocumento.value.length > 10){

        event.preventDefault()

        alert("Documento demasiado largo")

        return
    }

    if(valorEdad < 18){

        event.preventDefault()

        alert("El usuario es menor de edad y no puede enviar el formulario")

        return
    }

    else if(valorEdad >= 18 && valorEdad <= 25){

        event.preventDefault()

        alert("Usuario beneficiario por cotizante")

        return
    }

    else if(valorEdad >= 60){

        alert("Se necesita proceso de pensión")

        return
    }

})