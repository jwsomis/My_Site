import React, { Component } from 'react';

export default class HeaderBar extends Component {
	componentDidMount() {
		console.log('HeaderBar mounted');
		console.log($('.headerBar .ui.middle.button'));
		$('.headerBar .ui.middle.button').popup({
			position:'bottom center', content: "Nothing to put here yet!"
		});
	}

	render() {
		return (
			<div className='headerBar'>
				<div className='colorBar'></div>
				<img src="/img/HeaderLarge.png" />
				{/*<button className='ui middle button'><i className='sidebar icon'></i></button>*/}
				<div className='ui fluid popup headerMenu'>
					Nothing to put here yet!
				</div>
			</div>
		);
	}
}