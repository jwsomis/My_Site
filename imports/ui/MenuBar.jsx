import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ResumePage from './ResumePage.jsx';
import AboutPage from './AboutPage.jsx';
import ContactPage from './ContactPage.jsx';
import MessageBoardPage from './MessageBoardPage.jsx';

export default class MenuBar extends Component {

	handleTabChange(event) {
		$(event.target.parentNode.children).removeClass('active');
		$("a:contains('"+event.target.innerText+"')").addClass('active');
		let PageTxt = event.target.innerText;
		let Page;
		switch (PageTxt) {
			case "About":
				Page = (<AboutPage />);
				break;
			case "Resume":
				Page = (<ResumePage />);
				break;
			case "Contact":
				Page = (<ContactPage />);
				break;
			/*case "Message Board":
				Page = (<MessageBoardPage />);
				break;*/
		}
		ReactDOM.render(Page, document.getElementById('content-target'));
	}

	componentDidMount() {
		console.log("component did mount");
		$('.menu.menuBar .item').bind("click", this.handleTabChange);
	}

	render() {
		return (
			<div className="ui pointing menu menuBar">
				<a className="active item">
				  About
				</a>
				<a className="item">
				  Resume
				</a>
				{/*<a className="item">
				  Message Board
				</a>*/}
				<a className="item">
				  Contact
				</a>
				<div className="right menu">
				  <div className="item">
				    <div className="ui transparent icon input">
				      <input type="text" placeholder="Search..." />
				      <i className="search link icon"></i>
				    </div>
				  </div>
				</div>
			</div>
		);
	}
}