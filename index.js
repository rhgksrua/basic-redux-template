import { createStore } from 'redux';
import counter from './reducers/reducers';

import { increase, decrease } from './actions/actionTypes';

let store = createStore(counter);

document.getElementById('increase').addEventListener('click', () => {
    console.log(increase);
    store.dispatch(increase());
});
document.getElementById('decrease').addEventListener('click', () => {
    store.dispatch(decrease());
});

const render = () => {
    console.log('counter', store.getState());
    document.getElementById('counter').textContent = store.getState();
};
render();

store.subscribe(render);
