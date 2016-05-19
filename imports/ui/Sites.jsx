import React, { Component } from 'react';

import HeaderBar from './HeaderBar.jsx';
import Content from './Content.jsx';

export default class Sites extends Component {
	render() {
		return (
			<div className='site'>
				<HeaderBar />
				{/*<MenuBar />*/}
				<Content />
			</div>
		);
	}
}