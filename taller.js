let formulario = document.getElementById("registro-usuario")

let nombreCompleto = document.getElementById("nombreCompleto")
let edad = document.getElementById("edad")
let tipoDocumento = document.getElementById("tipodedocumento")
let numeroDocumento = document.getElementById("numerodedocumento")

let salario = document.getElementById("salario")
let comisiones = document.getElementById("comisiones")
let horasExtras = document.getElementById("horasExtras")
let nivelRiesgo = document.getElementById("nivelRiesgo")

const salarioMinimoLegal = 1750905

const porcentajeIBC = 0.7
const porcentajeSalud = 0.04
const porcentajePension = 0.04
const porcentajeFondoSolidaridad = 0.01

function calcularPorcentaje(base, porcentaje) {
    return base * porcentaje
}

alert("Por favor llena el formulario con tu información")

formulario.addEventListener("submit", function (event) {

    event.preventDefault()

    let valorEdad = parseInt(edad.value)
    let valorSalario = parseFloat(salario.value) || 0
    let valorComisiones = parseFloat(comisiones.value) || 0
    let valorHorasExtras = parseFloat(horasExtras.value) || 0

    let valorNombre = nombreCompleto.value.trim()
    let valorDocumento = numeroDocumento.value.trim()


    if (valorNombre.length < 3) {
        alert("Nombre inválido")
        return
    }

    if (isNaN(valorEdad)) {
        alert("Edad inválida")
        return
    }

    if (valorEdad < 18) {
        alert("No puede ingresar (menor de edad)")
        return
    }

    if (valorEdad >= 18 && valorEdad <= 25) {
        alert("Usuario beneficiario por cotizante")
        return
    }

    if (valorSalario <= 0) {
        alert("Salario inválido")
        return
    }

    if (valorComisiones > valorSalario) {
        alert("Comisiones no pueden ser mayores al salario")
        return
    }

    if (valorHorasExtras > 2000000) {
        alert("Horas extras demasiado altas")
        return
    }

    if (valorDocumento.length < 9 || valorDocumento.length > 10) {
        alert("Documento inválido")
        return
    }


    let salarioTotal =
        valorSalario + valorComisiones + valorHorasExtras

    let ibc = calcularPorcentaje(salarioTotal, porcentajeIBC)

    let salud = calcularPorcentaje(ibc, porcentajeSalud)
    let pension = calcularPorcentaje(ibc, porcentajePension)

    let fondoSolidaridad = 0

    if (ibc >= 4 * salarioMinimoLegal) {
        fondoSolidaridad = calcularPorcentaje(ibc, porcentajeFondoSolidaridad)
    }

    let totalDeducciones =
        salud + pension + fondoSolidaridad

    let totalRecibir =
        salarioTotal - totalDeducciones

    console.log("===== RESULTADOS =====")
    console.log("Nombre:", valorNombre)
    console.log("Edad:", valorEdad)
    console.log("Salario total:", salarioTotal)
    console.log("IBC:", ibc)
    console.log("Salud:", salud)
    console.log("Pensión:", pension)
    console.log("Fondo solidaridad:", fondoSolidaridad)
    console.log("Total deducciones:", totalDeducciones)
    console.log("Total a recibir:", totalRecibir)

    alert("Cálculo realizado correctamente ✔")
})