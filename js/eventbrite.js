class EventBrite {
  constructor() {
    this.token_auth = 'OGTYHBUPKVUM3ZWJMBP6',
    this.sortEvents = 'date'
  }

  // obtiene las categorías en init()
  async getCategories() {
    // consulta las categorías a la rest api de event EventBrite
    const apiCategories = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);
    // esperar respueste de categorias y devolver json
    const categories = await apiCategories.json();
    return { categories };
  }
}
