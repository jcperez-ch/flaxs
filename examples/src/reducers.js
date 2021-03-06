import { flaxs } from 'flaxs';
import routesReducer, * as routes from './reducers/routes';
import routingReducer, * as routing from './reducers/routing';
import counterReducer, * as counter from './reducers/counter';

flaxs.createReducer(routing.namespace, routingReducer, routing.initialState);
flaxs.createReducer(routes.namespace, routesReducer, routes.initialState);
flaxs.createReducer(counter.namespace, counterReducer, counter.initialState);
