import { createElement } from '../render.js';

function createRouteListViewTemplate () {
  return '<ul class="trip-events__list"></ul>';
}

export default class RouteListView {
  getTemplate() {
    return createRouteListViewTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}

