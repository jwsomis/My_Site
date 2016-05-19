import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import MenuBar from './MenuBar.jsx';
import AboutPage from './AboutPage.jsx';

export default class Content extends Component {

	componentDidMount() {
		ReactDOM.render(<AboutPage />, document.getElementById('content-target'));
	}

	render() {
		return (
			<div className='ui container content'>
				<MenuBar />
				<div id='content-target'></div>
			</div>
		);
	}
}