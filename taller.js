let nombrecompleto="";
let edad=0;
let tipodedocumento="";
let numerodedocumento="";

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

let salariototal= salario + comisiones + horasextras;
let IBC= salariototal * porcentajeIBC;
let salud = IBC * porcentajesalud;
let pension = IBC * porcentajepension;

