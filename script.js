let nombre;
let horas=0;
let valorHora=0;
let sueldo=0;
let sueldoFormato=0;

nombre = prompt('Ingrese nombre empleado: ');
horas = Number(prompt('Ingrese cantidad de horas trabajadas: '));
valorHora = Number(prompt('Ingrese el valor de la hora: '));

sueldo = horas*valorHora;
sueldoFormato = sueldo.toLocaleString("en-ES", {
    style: "currency",
    currency: "COP"
});
alert(`El sueldo del empleado ${nombre} es ${sueldoFormato}`);