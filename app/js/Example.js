import React , {Component} from 'react';
export default class Example extends Component {
	value(){
		return 'saravyas';
	}
	temp(name){
		return 'gomal' +name;
	}
	render(){
		const i=1;
		const name = "sara";
		return(
			<div>
				<p>{this.value()}</p>
				<p>{this.temp('vyas')}</p>
				<p>my name is {name} </p>
				<h1>sara</h1>
				<p>{2+3}</p>
				<p>{i===1?'true':'false'}</p>
				<p>{(function() {return 3;})()}</p>
			</div>
		)
	}
} 