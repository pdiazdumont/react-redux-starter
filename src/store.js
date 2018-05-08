import { createStore, applyMiddleware, compose } from "redux"
import initialState from "./state"
import reducers from "./reducers"

const setupStore = () => createStore(reducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export {
	setupStore
}
