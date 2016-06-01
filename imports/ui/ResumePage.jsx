import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class AboutPage extends Component {
	render() {
		return (
			<div className='ui centered grid container frontPage'>
				<span>Download:<a href='/files/Resume.pdf' download> PDF</a>
							   <a href='/files/Resume.docx' download> Word</a></span>
				<div className='row'>
					<ExperienceSection />
				</div>
				<div className='row'>
					<h3 className='ui header'>Education</h3>
					<div className='ui segment'>
						<h4 className='ui header'>Bachelor of Science, Joint Mathematics & Economics with a Computer Science Minor</h4>
						<div>University of California, San Diego    --   GPA:3.45</div>
					</div>
				</div>
				<div className='row'>
					<SkillsList />
				</div>
			</div>
		);
	}
}

export class ExperienceSection extends Component {
	render() {
		return (
			<div>
			<h3 className='ui header'>Experience</h3>
			<div className='ui segment'>
				<h4 className='ui header'>Software Engineer - BAE Systems, San Diego, CA</h4>
				<span className='metadata'>December 2013 - Present</span>
				<div className='ui centered stackable grid container'>
					<div className='five wide column centerMe'>
					<h5 className='ui header'>Cloud-Based Search Engine</h5>
						<div className='ui list'>
							<div className='item'>As lead cloud architect, I set up and managed a cloud environment in AWS
								for development of a search engine application to propose as a replacement for a
								legacy system. This included managing accounts, developer boxes, production servers, and
								their security for a team of more than 20 people.
							</div>
							<div className='item'>As lead UI developer, I drove the choice to use the Meteor platform with
								React and the lead the rapid DevOps development of the interface with a very small team.
								Utilized Semantic UI and Bootstrap to develop a modern website to fluidly interact with the
								backend search services our team developed through Java RESTful servlets.
							</div>
						</div>	
					</div>
					<div className='five wide column centerMe'>
					<h5 className='ui header'>Cloud-Based Web App (R&D)</h5>
						<div className='ui list'>
							<div className='item'>As the Semantic Web/Linked Data lead for this R&D project I created and
								managed Allegrograph RDF stores and tested multiple other RDF store options, including TitanDb
								backed by DynamoDB. I also guided multiple other projects as they explored the use of RDF. 
							</div>
							<div className='item'>As the font-end lead, developed our UI to seamlessly integrate Linked Data
								query results (non-graph based display) using HTML, CSS, and Javascript and later lead the push
								to move to Meteor.  Utilized Cesium and Bootstrap for visualization and built RESTful APIs to
								interact with back-end services.
							</div>
							<div className='item'>This project was entirely done in Amazon Web Services and a DevOps environment,
								where I gained familiarity with cloud architecting and security.
							</div>
						</div>
					</div>
					<div className='five wide column centerMe'>
					<h5 className='ui header'>Web App (R&D)</h5>
						<div className='ui list'>
							<div className='item'>Developed a knowledge base using Allegrograph (an RDF store) with YAGO, AIS, and 
							other data sources.
							</div>
							<div className='item'>Developed a basic recommender to determine Objects of Interest and sort the known
							information about those objects. 
							</div>
							<div className='item'>Set-up a server through Django to serve webpages built with Bootstrap, Leaflet,
							OpenStreetMaps, and Timeglider using Python, HTML, CSS, Javascript, and AJAX.
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
		);
	}
}

export class SkillsList extends Component {
	render() {
		let style = {listStyle:'none'}
		let skillsSrc = [
			{src: 'html-css', title:'HTML/CSS'},
			{src: 'javascript', title:'Javascript'},
			{src: 'react', title:'React'},
			{src: 'meteor', title:'Meteor'},
			{src: 'java', title:'Java'},
			{src: 'python', title:'Python'},
			{src: 'c-plus', title:'C/C++'},
			{src: 'rdf', title:'RDF'},
			{src: 'sql', title:'SQL'},
			{src: 'linux', title:'Linux'},
			{src: 'windows', title:'Windows'},
			{src: 'bash', title:'Bash'}/*,
			{src: '', title:'jQuery'}*/
		];
		let skills = skillsSrc.map((img) => <Skill img={img} />);
		console.log(skills);
		return (
			<ul>
				{skills}
			</ul>
		);
	}
}

export class Skill extends Component {
	render () {
		let img = this.props.img;
		return(
				<li className='skillItem'>
					<div className='popUp'>
						<img src={'/img/Resume-Skills/'+img.src+'.png'} title={img.title} />
						<div className='skillName'>{img.title}</div>
					</div>
				</li>
		);
	}
}