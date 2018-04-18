// instanciar clases
const eventbrite = new EventBrite();
const ui = new Ui();


document.getElementById('buscarBtn').addEventListener('click', (e) => {
  e.preventDefault();

  // guardo valor de input de evento y categoria
  const searchInput = document.getElementById('evento').value;
  const categoryInput = document.getElementById('listado-categorias');
  const categoryValue = categoryInput.options[categoryInput.selectedIndex].value;


  // validar campo de evento requerido
  if (searchInput !== '') {
    console.log(searchInput, categoryValue, categoryInput.options[categoryInput.selectedIndex].text);
  } else {
    console.log('');
    ui.showMessage('No olvides especificar qué evento buscas...', 'alert alert-danger mt-4')
  }
});
