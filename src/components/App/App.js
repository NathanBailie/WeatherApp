import 'normalize.css';
import './app.scss';
import Spinner from '../Spinner';
import ErrorBoundary from '../ErrorBoundary';
import Application from '../pages/Application';

const App = () => {
	return (
		<div className="app">
			<div className="container">
				<Application />
			</div>
		</div>
	);
};

export default App;