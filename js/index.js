
const toggleMenuElement = document.getElementById('toggle-menu');
const mainMenuElement = document.getElementById('main-menu');
const mainNav = document.getElementById('main-nav');
const logo = document.getElementById('logo');

toggleMenuElement.addEventListener('click', () => {
  mainMenuElement.classList.toggle('main-menu--show');
  mainNav.classList.toggle('move-content');
  logo.classList.toggle('hide-content');
})


document.getElementById('form-send-mail').addEventListener('submit', function (event) {
  event.preventDefault();

  // Obtener los datos del formulario
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  const issue = document.getElementById('issue').value;
  const message = document.getElementById('message').value;

  // Crear un objeto con los datos del formulario
  const data = {
    name: name,
    email: email,
    phone: phone,
    address: address,
    issue: issue,
    messageContact: message
  };
  if(!name || !email || !phone){
    alert("Los campos con * son obligatorios");
    return;
  }
  
  fetch('https://innovasit.com/api/api/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
      
    })
    .catch(error => {
      alert("Ocurrió un error al enviar correo");
    });
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('address').value = '';
    document.getElementById('issue').value = '';
    document.getElementById('message').value = '';
});