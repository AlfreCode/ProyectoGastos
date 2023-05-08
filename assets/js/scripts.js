import { v4 as uuidv4 } from "https://jspm.dev/uuid";
let formPresupuesto = document.getElementById("formPresupuesto");
let inputPptto = 0;
function Gasto(nombre, valor = 0, id) {
  this.nombre = nombre;

  this.valor = valor;

  this.id = id;
}
formPresupuesto.addEventListener("submit", (event) => {
  event.preventDefault(); //no se recarga la pagina

  inputPptto = pptto.value; //asi accedemos al valor del input
  console.log(inputPptto);

  tablaPpto.innerHTML = inputPptto; //tabla del index se modifica con valor de inputpptto
});

let formGasto = document.getElementById("formGasto");
let inputGasto = 0;
let arrayGastos = [];
formGasto.addEventListener("submit", (event) => {
  event.preventDefault(); //no se recarga la pagina
  let idGasto = uuidv4().slice(0, 6);
  let gastoIngresado = new Gasto(nombreGasto.value, montoGasto.value, idGasto);
  inputGasto = pptto.value; //asi accedemos al valor del input
  tablaPpto.innerHTML = inputGasto; //tabla del index se modifica con valor de inputGasto {} [] =/ \ "" '' $)
  arrayGastos.push(gastoIngresado);
  rellenarTablaGastos();
});
function rellenarTablaGastos() {
  displayGastos.innerHTML = "";
  arrayGastos.forEach((gasto) => {
    displayGastos.innerHTML += `
<tr>
<td >${gasto.nombre}</td>
<td >${gasto.valor}</td>
<td ><button type="submit" class="btn btn-danger"><i class="bi bi-trash3-fill"></i></button></td>

</tr>

`;
  })

}

  /*function rellenarTotalGastos() {
    let totalgasto = [];

    totalgasto.push(montoGasto.value);
    console.log(totalgasto);
  }
*/
  /*  totalg.innerHTML="";
totalgasto.forEach((montoGasto))
contador ++
totalg.innerHTML =`
<tr>
<tr>
<th scope="col">Total</th>
<th scope="col">${contador}</th>
</tr>

</tr>
https://codeshare.io/MNQzdW
`;
}
*/

