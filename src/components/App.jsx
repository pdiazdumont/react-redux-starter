class App extends Component {
	render() {
		return (
			<div>
				Ready
				<button onClick={ this.hi }>asdsad</button>
			</div> 
		)
	}
}

function mapStateToProps(state) {
	return {
		
	}
}

export default Connect(mapStateToProps)(App)
