import React from 'react';
import {HashLink as Link} from 'react-router-hash-link'
import '../App.css'
import sea from '../images/sea.png'

const Footer = () => {
  return (
  <footer className="footer-distributed" id="footer">
		<div className="footer-left">
		<Link smooth to="#home">
      <img src={sea} alt="sea" />
    </Link>
		</div>
		<div className="footer-center">
			<h2>Support &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Terms and Condition</h2><br/> 
			<h2>&nbsp;&nbsp;About Us &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Return and Refunnd Policy             </h2><br/>
			<h2>&nbsp;&nbsp;Privacy Policy &nbsp;&nbsp; Shipping and Delivery Policy</h2>

			<div className="part">
				<br/>
				<br/>
				<br/>
		
				<Link smooth to="#home">Your table is over here</Link>
			</div>
		</div>
 
		<div className="footer-right">
			<h2>Follow us on</h2>
			<div className="footer-icons">
				<a href="https://www.facebook.com/mohd.raqif.5" target="_blank" rel="noopener noreferrer">FB</a>
				<a href="https://www.instagram.com/mohd_codes" target="_blank" rel="noopener noreferrer">INS</a>
				<a href="https://twitter.com/mohdraqif1" target="_blank" rel="noopener noreferrer">TW</a>
				<a href="https://www.youtube.com/channel/UC8OaiXv5oTYm_0wJ0R7KKyg" target="_blank" rel="noopener noreferrer">YT</a>
				<a href="https://medium.com/@mohdraqif1" target="_blank" rel="noopener noreferrer">MD</a>
			</div>
		</div>
		<div className="footer-bottom">
		

		</div>
	</footer>
  );
}

export default Footer;
