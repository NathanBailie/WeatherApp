import './main.scss';
import main from '../../../resources/img'

const Main = () => {


	return (
		<div className="main">
			<img src={main} alt="main" />
			<div className="main__finder">
				<input type="text" placeholder='just type your city' />
				<button>Get weather</button>
			</div>
		</div>
	);
};

export default Main;