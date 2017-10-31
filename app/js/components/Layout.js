import React  from 'react';

import Header from './Header';
import Footer from './Footer';

export default class Layout extends React.Component {
	constructor(){
		super();
		this.state = {name:"sara"}
	}
	render(){
		setTimeout(() => {
			this.setState({name:"gomal"})
		},1000);
		return(
			<div>
				{this.state.name}
				<Header/>
			 	<Footer/>
			</div>
		)
	}
} 