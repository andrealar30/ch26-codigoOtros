const baseEndpoint = 'https://api.github.com'; /* esto es una url  donde se quiere usar una api fetch que muestre los datos en un html*/
/* Se definen las constantes */
const usersEndpoint = `${baseEndpoint}/users`;/* Estamos trayendo la url  */
/* Las constantes deben cambiar de nombre para que se les hable, es decir n debe ser name, b debe ser blog y l debe ser location */
const $name = document.querySelector('.name'); /* es una clase por lo que lleva punto*/
const $blog = document.querySelector('.blog');/* es una clase por lo que lleva punto*/
const $location = document.querySelector('.location');/* es una clase por lo que lleva punto*/
/* Como lo siguiente es un await necesitamos poner un async */
async function displayUser(username) {
  $name.textContent = 'cargando...'; /* Se cambia n a name */
  const response = await fetch(`${usersEndpoint}/${username}`);
  /* queremos extraer los datos por lo que necesitamos el metodo JSON */
  const data = await response.json();
  console.log(data);
  $name.textContent = `${data.name}`; /* comillas invertidas no apostrofes y name en lugar de n*/
  $blog.textContent = `${data.blog}`;/* comillas invertidas y blog */
  $location.textContent = `${data.location}`;/* comillas invertidas y location */
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  /* Signo de pesos y un punto y coma */
  $n.textContent = `Algo salió mal: ${err};`
}

displayUser('stolinski').catch(handleError);