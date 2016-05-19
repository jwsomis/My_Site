import React, { Component } from 'react';

export default class ContactPage extends Component {
	render() {
		return(
			<div className='ui segments'>
				<div className='ui segment centerMe'>
					<h3 className='ui header'>Contact Info</h3>
					<span>
						Wes Tibbitts<br/>
						Email: <a href="mailto:wtibbitts@gmail.com">wtibbitts@gmail.com</a><br/>
						Cell: <a href="tel:805-807-3393">805-807-3393</a><br/>
					</span>
				</div>
				<div className='ui segment centerMe'>
					<h3 className='ui header'>Send a Message</h3>
					<div className='ui form'>
						<div className='field'>
							<textarea placeholder='Write a message' />
						</div>
						<div className='ui success message'>Success</div>
						<div className='ui submit button'>Submit</div>
					</div>
				</div>
			</div>
		);
	}
}