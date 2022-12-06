import EditFormView from '../view/edit-form.js';
import RouteListView from '../view/route-list-view.js';
import NewPointView from '../view/route-point.js';
import {render} from '../render.js';


export default class RoutePresenter {

  routeListComponent = new RouteListView();

  constructor({routeContainer}) {
    this.routeContainer = routeContainer;
  }

  init() {
    render(this.routeListComponent, this.routeContainer);
    render(new EditFormView(), this.routeListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new NewPointView(), this.routeListComponent.getElement());
    }
  }
}
