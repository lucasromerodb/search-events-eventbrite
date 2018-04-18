class Ui {
  constructor() {
    // inicializar la app al instanciar
    this.init();
    // leer resultado
    this.list = document.getElementById('resultado-eventos');
  }

  init() {
    this.printCategories();
  }

  printCategories() {
    const categoryList =
      eventbrite.getCategories()
        .then(categories => {
          const categoriesArray = categories.categories.categories;
          const categorySelect = document.getElementById('listado-categorias');
          console.log(categoriesArray);

          categoriesArray.forEach(category => {
            const optionTag = document.createElement('option');
            optionTag.value = category.id;
            optionTag.appendChild(document.createTextNode(category.name_localized));
            categorySelect.appendChild(optionTag);
          })
        })

  }

  // lee respuesta de api e imprime resultados
  showEvents(events) {
    const eventList = events.events;
    console.log('Filtered events:',eventList);
    this.clearEventList();
    eventList.forEach(event => {
      let eventDescription = event.description.text;

      if (eventDescription === null) {
        eventDescription = 'Sin descripción.';
      } else {
        let eventDescriptionLength = eventDescription.length;
        if ( eventDescriptionLength === 0 || eventDescriptionLength === null) {
          eventDescription = 'Sin descripción.';
        } else if ( eventDescriptionLength > 140) {
          eventDescription = `${eventDescription.substring(0,140)} [...]`;
        } else {
          eventDescription = `${eventDescription.substring(0,eventDescriptionLength)} [...]`;
        }
      }

      this.list.innerHTML += `
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="${event.logo !== null ? event.logo.url : ''}" alt="" class="img-fluid mb-2" />
            <div class="card-body">
              <div class="card-text">
                <h3 class="text-left">${event.name.text}</h3>
                <hr />
                <p class="lead">${eventDescription}</p>
                <span class="badge badge-primary">Capacidad: ${event.capacity}</span>
                <span class="badge badge-secondary">Fecha y hora: ${event.start.local}</span>
                <a href="${event.url}" target="_blank" class="btn btn-primary btn-block mt-4">Comprar entradas »</a>
              </div>
            </div>
          </div>
        </div>
      `;
    })
  }

  clearEventList() {
    this.list.innerHTML = '';
  }

  showMessage(message, classes) {
    const alert = document.createElement('div');
    const search = document.getElementById('buscador');
    alert.className = classes;
    alert.appendChild(document.createTextNode(message));
    search.appendChild(alert);
    setTimeout(() => {
      this.clearAlert();
    }, 1500);
  }

  clearAlert() {
    const alert = document.querySelector('.alert');
    if (alert) {
      alert.remove();
    }
  }
}
