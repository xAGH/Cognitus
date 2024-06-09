function obtenerCarroObj() {
  return {
    m: 2022,
    serie: 2138627352,
    nombre: "R8",
    marca: "Audi",
    anio: 2021,
  };
}

function obtenerCarroArray() {
  return ["Audi", "R8", 2022];
}

const carroObj = obtenerCarroObj();
const { m: modelObj } = obtenerCarroObj();

const carroArray = obtenerCarroArray();
const [modeloArray] = obtenerCarroArray();
