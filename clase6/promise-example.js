const task = new Promise((resolve, reject) => {
  const exito = true;
  if (exito) {
    resolve("Todo bien");
  } else {    
    reject("USER_NOT_FOUND 2");
  }
});


console.log("linea 1");

task
  .then((result) =>{ console.log(result); })
  .catch(e => console.log("Hubo un error", e))
  .finally(() => console.log("Finalizo"));

