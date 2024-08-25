function enviarFormulario() {
  const formulario = document.getElementById("body");
  const datosFormulario = {
    nombre: formulario.nombre.value,
    correo: formulario.email.value,
    opcion: formulario.opcion.value,
    texto: formulario.texto.value,
  };
  console.log(JSON.stringify(datosFormulario, null, 2));
}
