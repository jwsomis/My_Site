import React, { Component } from 'react';

export default class MessageBoardPage extends Component {

	render() {
		return(
			<div className='ui container comments frontPage'>
				<h3 className='ui dividing header'>Messages</h3>
				<CommentList />
				<ReplyBox />
			</div>
		);
	}
}

export class CommentList extends Component {

	getComments() {
		console.log("in get comments");
		let comments = [];
		for (var i=0; i<3; ++i) {
			comments.push(<Comment />)
		}
		return comments;
	}

	render() {
		return(
			<div className='commentBox'>
				{this.getComments()}
			</div>
		);
	}
}

export class Comment extends Component {
	render() {
		return(
			<div className='comment'>
				<div className='content'>
					<div className='author'>Test</div>
					<div className='metadata'><span className='date'>Today</span></div>
					<div className='text'>This is a test!</div>
					<div className='actions'>
						<a className='reply'>Reply</a>
					</div>
				</div>
			</div>
		);
	}
}

export class ReplyBox extends Component {
	render() {
		return (
			<form className="ui reply form">
			  <div className="field">
			    <textarea></textarea>
			  </div>
			  <div className="ui blue labeled submit icon button">
			    <i className="icon edit"></i> Add Messsage
			  </div>
			</form>
 		);
	}
}