let nombrecompleto="";
let edad=0;
let tipodedocumento="";
let numerodedocumento="";

if (edad < 18) {
    console.log("No puede entrar");
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

let salario=0;
let comisiones="";
let totaldehorasextra="";
let clasificaciondenivelderiesgo="";

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

let salariototal= salario + comisiones + horasextras;
let IBC= calcularPorcentaje (salariototal, porcentajeIBC);
let salud = calcularPorcentaje(IBC,porcentajesalud);
let pension = calcularPorcentaje(IBC,porcentajepension);
let fondosolidaridad= calcularPorcentaje(IBC,porcentajefondosolidaridad);
IBC>=4*salariominimolegalvigente ? fondosolidaridad: fondosolidaridad=0;
