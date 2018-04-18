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

  // mostrar resultados de la busqueda
  async getEvents(event, category) {
    const response = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${event}&sort_by=${this.sortEvents}&categories=${category}&token=${this.token_auth}`)
    // esperar la respuesta del evento y devolverla como json
    const events = await response.json();
    return {events};
  }
}
