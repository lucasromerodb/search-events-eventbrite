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
  console.log(searchInput, categorySelected, categoryInput.options[categoryInput.selectedIndex].text);
  if (searchInput !== '') {

    eventbrite.getEvents(searchInput, categorySelected)
      .then(data => {
        if (data.events.events.length > 0) {
          console.log(data);
          ui.showEvents(data.events);
        } else {
          ui.clearEventList();
          ui.showMessage('No hay resultados. Busca otro evento.', 'alert alert-danger mt-4')
        }
      })
      .catch((error) => {
        console.log(error);
      })

  } else {
    ui.showMessage('No olvides especificar qué evento buscas...', 'alert alert-danger mt-4')
  }
});
