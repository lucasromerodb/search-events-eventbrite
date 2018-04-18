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
}
