require("react-datepicker/dist/react-datepicker-cssmodules.css");
import React from 'react';

import { storiesOf } from '@storybook/react';
import reducers from "@app/reducers"
import {createStore, combineReducers} from "redux"
import Search from "@app/resource-search"
import {Provider} from "react-redux"
import * as STUB from "@app/scenarios"

const getPage = (events) => {
  const store = createStore(combineReducers(reducers))
  events.forEach(event => store.dispatch(event))
  return <Provider store={store}>
    <Search />
  </Provider>;
}
export const store = createStore(combineReducers(reducers))

const SIMULATION_1 = [
    "PAGE_LOADED",
    "SEARCH_TERMS_CHANGED",
    "SEARCH_RESULTS_REQUESTED",
    "SEARCH_RESULTS_RECEIVED"
]


const base1 = storiesOf('SIMULATION_1', module)
SIMULATION_1.forEach(simulation => base1.add(simulation, 
  () => getPage(STUB[simulation])))

const base2 = storiesOf('SIMULATION_2', module)
SIMULATION_1.forEach(simulation => base2.add(simulation, 
  () => getPage(STUB[simulation])))
