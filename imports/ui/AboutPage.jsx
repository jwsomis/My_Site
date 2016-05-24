import React, { Component } from 'react';

export default class AboutPage extends Component {
	render() {
		return (
				<div className='ui items frontPage'>
					<div className='item'>
						<div className='image'>
							<img className="ui medium circular image" src="/img/linkedinProfilePic.jpg"/>
						</div>
						<div className='content'>
							<a className='header'>About Me</a>
							<div className='description'>
								Hello, I am Wes Tibbitts, a full-stack developer who graduated with a Bachelor
								of Science in Mathematics and Economics (as a joint major) and have spent most of 
								the past 2 and a half years working in Research and Development. During my senior year at
								college, I discovered programming. It fulfills my love of logic and problem solving,
								but offered a more creative outlet than Math.
							</div>
						</div>
					</div>

					<div className='item'>
						<div className='content'>
							<a className='header'>Front-End Development</a>
							<div className='description'>
								In front-end development I express my creativity and appreciation for aesthetics.
								The left brain work is both stuimulating and pleasing. The rapid advancement of new
								technologies and languages in the field, require diligence to stay on abreast of.
								However, new technologies such as React and Meteor have dramatically increased the ease
								(and pleasure) of creating an attractive and functional UI/UX.
							</div>
						</div>
						<div className='image right'>
							<img className="ui medium circular image" src="/img/React.png"/>
						</div>
					</div>

					<div className='item'>
						<div className='image'>
							<img className="ui medium circular image" src="/img/java.jpg"/>
						</div>
						<div className='content'>
							<a className='header'>Back-End Development</a>
							<div className='description'>
								As I learned programming at school, it was entirely focused around computer programming.
								Initially, I learned in C and then C++, but most of my classes as I progressed were focused
								on writing code in Java to understand principles such as OOP and data structures, as well as
								numerous classes focused on algorithm development and analysis which my mathematics background
								provided me an excellent platform.
							</div>
						</div>
					</div>

					<div className='item'>
						<div className='content'>
							<a className='header'>Cloud Development</a>
							<div className='description'>
								Due to my extensive work in R&D, I have had extensive experience in the cloud. Initially
								gaining familiarity with AWS under the guide of BAE Systems cloud expert on a project I worked for
								nearly a yeaer and a half. This lead me into being the lead cloud architect for rapidly developed 
								proposal project where I setup and managed a cloud environment for 20+ people.
							</div>
						</div>
						<div className='image right'>
							<img className="ui medium circular image" src="/img/aws-graphic.jpg"/>
						</div>
					</div>

					<div className='item'>
						<div className='image'>
							<img className="ui medium circular image" src="/img/rdf.png"/>
						</div>
						<div className='content'>
							<a className='header'>Semantic Web Development</a>
							<div className='description'>
								I have extensive experience working in RDF, primarily with Allegrograh
								as the database. I have lead multiple projects and trained colleagues in
								utilizing Linked Data as a tool.
							</div>
						</div>
					</div>

					{/*<div className='item'>
						<div className='content'>
							<a className='header'>Mobile Development</a>
							<div className='description'>
								This will be a paragraph about mobile experience.
							</div>
						</div>
						<div className='image right'>
							<img className="ui medium circular image" src="/img/android-wave.jpg"/>
						</div>
					</div>*/}
				</div>
		);
	}
}