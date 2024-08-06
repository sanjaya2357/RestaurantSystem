import './App.css';
import Addfood from './Components/Addfood';
import Fooddetails from './Components/Fooddetails';
import Home from './Components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Searchfood from './Components/Searchfood';
import Updatefood from './Components/Updatefood';
import Orders from './Components/Orders';
import Navbar from './Components/Navbar';

function App() {
	return (
		<Router>
			<div className="App">

				<Navbar />

				<Switch>

					<Route exact path="/">
						<Home />
					</Route >

					<Route path="/addfood">
					// <Addfood></Addfood>
						// <Addfood />
					</Route>

					<Route path="/fooddetails:id">
						<Fooddetails />
					</Route>

					<Route path="/search/:searchKey">
						<Searchfood />
					</Route>

					<Route path="/update:id">
						<Updatefood/>
					</Route>

					<Route path="/orders">
						<Orders/>
					</Route>

				</Switch>
			</div>
		</Router>

	);
}

export default App;