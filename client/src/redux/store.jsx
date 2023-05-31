import {createStore, applyMiddleware, compose} from "redux";
import thunkMiddlewate from "redux-thunk";
import reducer from "./reducer.jsx";

const composeEnhancer = window.
__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddlewate)) //esto sirve para que podamos hacer peticiones a una Api/Servidor
);

export default store;   