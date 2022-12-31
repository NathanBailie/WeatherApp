import { Component } from 'react';
import ErrorIndicator from '../ErrorIndicator';


export default class ErrorBoundary extends Component {
	state = {
		error: false
	};

	componentDidCatch() {
		this.setState({ error: true });
	};

	render() {
		return this.state.error ? <ErrorIndicator /> : this.props.children
	};
};