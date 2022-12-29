import './main.scss';
import img1 from './img/img1.jpg';

const Main = () => {


	return (
		<div className="main">
			<img src={img1} alt="img1" />
			<div className="main__finder">
				<input type="text" placeholder='just type your city' />
				<button>Get weather</button>
			</div>
		</div>
	);
};

export default Main;