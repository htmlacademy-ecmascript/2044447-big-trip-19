import FilterView from './view/filters.js';
import SortView from './view/sort.js';
import {render} from './render.js';
import RoutePresenter from './presenter/route-presenter.js';

const siteHeaderElement = document.querySelector('.trip-controls__filters');
const siteMainElement = document.querySelector('.trip-events');
const routePresenter = new RoutePresenter({routeContainer: siteMainElement});

render(new FilterView(), siteHeaderElement);
render(new SortView(), siteMainElement);

routePresenter.init();
