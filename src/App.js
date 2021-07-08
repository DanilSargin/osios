import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from './page/main'
import Wrapper from './components/wrapper'

function App() {
	return (
		<Router>
			<Switch>
				<Wrapper>
					<Switch>
						<Route path='/' component={Main} />
					</Switch>
				</Wrapper>
			</Switch>
		</Router>
	)
}

export default App
