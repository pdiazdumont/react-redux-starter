class App extends Component {
	render() {
		return (
			<div>
				Ready!
			</div> 
		)
	}
}

function mapStateToProps(state) {
	return state
}

export default Connect(mapStateToProps)(App)
