document.getElementById('registroForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
  
    const formData = {
      nombre,
      apellido,
      fechaNacimiento
    };
  
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data); // Imprimir la respuesta del servidor en la consola
      alert('Registro exitoso. ID del usuario: ' + data.id);
    })
    .catch(error => {
      console.error('Error en la solicitud:', error);
    });
  });
  