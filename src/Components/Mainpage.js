import React from "react";
import Grid from '@material-ui/core/Grid';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

import logo from "../logo.png";
import phone from "../phone.png";
import user from "../user.png";
function Mainpage(){
	const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
        defaultZoom = { 13 }
      >
      </GoogleMap>
   ));
return (
<div>
	<header>
		<div className="container">
			<nav className="navbar navbar-expand-lg navbar-light">
				<a className="navbar-brand">
					<img src={logo} />
				</a>
				<a className="" href="#">
					<img src={user} alt="" className="user-image-mobile" />
				</a>
				<button  type="button" className="navbar-toggler-img" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<div className="col-12 text-center menu"><a href="#" className="menu_a">মেনু</a> | <a href="#">এইটা কোথায়?</a> | <a href="#">রিওয়ার্ড প্রোগ্রাম</a>  | <a href="#about">ফিডব্যাক</a>
				</div>
				
				<ul className="navbar-nav">
					<li className="nav-item">
						<a className="nav-link" href="#">
							<img src={user} alt="" className="user-image" />
						</a>
					</li>
				</ul>
			</div>
			<div className="mobile_menu" id="navbarSupportedContent">
				<div className="col-12 text-center menu py-4"><a href="#" className="menu_a">মেনু</a> | <a href="#">এইটা কোথায়?</a> | <a href="#">রিওয়ার্ড প্রোগ্রাম</a>  | <a href="#about">ফিডব্যাক</a>
			</div>
		</div>
	</nav>
</div>
</header>
<hr />
<section className="pickup py-5">
<div className="container">
	<Grid container spacing={3}>
		<Grid item xs={12}>
			<h1 className="display-5 text-center">পিকআপ সেন্টার</h1>
		</Grid>
	</Grid>
</div>
</section>
<hr/>
<section className="pickup-content mb-5">
<div className="container">
	<div className="row">
		<div className="col-md-4  offset-md-1">
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<div className="card">
						<div className="card-body">
							<h5 className="card-title text-center font-weight-bold py-2 custom-line-height">মিরপুর কমার্স কলেজ এক্সপ্রেস আউটলেট</h5>
							<p className="card-text text-center"> কমার্স কলেজ রোড, কমার্স কলেজ এর বিপরীতে</p>
							<p className="muted">এখন খোলা রাত ৯:৩০ প্রজ্জন্থ খোলা থাকবে</p>
							<a href="#" className="card-link mt-2"><u>ম্যাপ এর লিংক</u></a>
							<a href="#" className="card-link float-right">
							<img src={phone}  className="" alt="" /><u>01706908611</u></a>
							
							<div className="clearfix"></div>
							<br />
							<p className="text-center">
								<a href="#" className="btn btn-outline-secondary btn-lg custom-btn text-center"> অর্ডার করুন </a>
							</p>
						</div>
						
					</div>
				</Grid>
			</Grid>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<div className="card">
						<div className="card-body">
							<h5 className="card-title text-center font-weight-bold py-2 custom-line-height">মিরপুর কমার্স কলেজ এক্সপ্রেস আউটলেট</h5>
							<p className="card-text text-center"> কমার্স কলেজ রোড, কমার্স কলেজ এর বিপরীতে</p>
							<p className="text-muted">এখন খোলা রাত ৯:৩০ প্রজ্জন্থ খোলা থাকবে</p>
							<a href="#" className="card-link mt-2"><u>ম্যাপ এর লিংক </u></a>
							<a href="#" className="card-link float-right" >
							<img src={phone}  className="" alt="" /><u>01706908611</u></a>
							
							<div className="clearfix"></div>
							<br/>
							<p className="text-center"><a href="#" className="btn btn-lg  text-center custom-btn">অর্ডার করুন</a></p>
						</div>
					</div>
				</Grid>
			</Grid>
		</div>
		
		<div className="col-md-6 d-none d-sm-none d-md-block">
			<GoogleMapExample
          containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
		</div>
	</div>
</div>
</section>
</div>
)
}
export default Mainpage;