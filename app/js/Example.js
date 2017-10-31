import React , {Component} from 'react';
export default class Example extends Component {
	constructor(){
		super();
		this.name = 'sara';
	}
	render(){
		return(
			<div>
				<p>{this.name}</p>
			</div>
		)
	}
} 