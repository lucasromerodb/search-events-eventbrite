// instanciar clases
const eventbrite = new EventBrite();
const ui = new Ui();


document.getElementById('buscarBtn').addEventListener('click', (e) => {
  e.preventDefault();

  // guardo valor de input de evento y categoria
  const searchInput = document.getElementById('evento').value;
  const categoryInput = document.getElementById('listado-categorias');
  const categorySelected = categoryInput.options[categoryInput.selectedIndex].value;


  // validar campo de evento requerido
  if (searchInput !== '') {
    console.log(searchInput, categorySelected, categoryInput.options[categoryInput.selectedIndex].text);
    eventbrite.getEvents(searchInput, categorySelected)
      .then(data => {
        console.log(data);
      })
  } else {
    console.log('');
    ui.showMessage('No olvides especificar qué evento buscas...', 'alert alert-danger mt-4')
  }
});
