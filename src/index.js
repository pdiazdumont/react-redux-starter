import { Provider } from "react-redux"
import { BrowserRouter as Router, Route } from "react-router-dom"
import App from "./components/app"
import ReactDOM from "react-dom"
import { setupStore } from "./store"

const store = setupStore()

ReactDOM.render(
	<Provider store={ store }>
		<Router>
			<Route component={ App } />
		</Router>
	</Provider>,
	document.getElementById("app")
)
