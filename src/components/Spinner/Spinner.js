import './spinner.scss'
import globe from './globe.gif';


const Spinner = () => {
	return (
		<div className='spinner'>
			<img src={globe} alt="spinner" />
			<p>Loading...</p>
		</div>
	)
};

export default Spinner;