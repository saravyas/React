import React  from 'react';

import Header from './Header';
import Footer from './Footer';

export default class Layout extends React.Component {
	render(){
 		const name = "saravyas";
		return(
			<div>
				<Header name={name}/>
				<Header name={"myothername"}/>				
			 	<Footer/>
			</div>
		)
	}
} 