import React, { Component } from 'react'
import AwesomeSlider from 'react-awesome-slider';
// import Captioned from '../../../node_modules/react-awesome-slider/src';
//import CaptionedStyles from '../../../node_modules/react-awesome-slider/src/styles';
// import AwesomeFrame from '../../../node_modules/react-awesome-slider/src/components/react-awesome-frame';
// import AwsFrameStyles from '../../../node_modules/react-awesome-slider/src/components/react-awesome-frame/styles.scss';
import Styles from '../../styles/slider.css'

var SmallMar = {
  marginTop: '2rem',
  paddingLeft: '1.82rem',
  paddingRight: '1.82rem' 
}

var reallySmallMar = {
    paddingTop: '2rem', 
  }

var removePadding = {
    paddingRight: '0.9rem',
    paddingLeft: '0.9rem',
    marginRight: '0px',
    marginLeft: '0px'
  }

// const StartupScreen = (
//     <div>
//       <img src="../images/slider2.jpg" />
//     </div>
//   );

class Home extends Component {
    render() {
        return (
            <>
            <div className="build-mat">
                <div className="container-fluid" style={removePadding}>
                    <div className="row" style={removePadding}>
                        <AwesomeSlider cssModules={Styles}>
                            <div data-src={"./images/sliders/category2.jpg"}>
                            <p>Home Caption 1</p>
                            </div>
                            <div data-src={"./images/sliders/category5.jpg"}>
                            <p>Home Caption 2</p>
                            </div>
                        </AwesomeSlider>
                    </div>
                    <div className="row" style={SmallMar}>
                        <div className="vt-box-header">
                            <span>Welcome to Vitabari.com. <br/> <small>Site under development</small></span>
                        </div>
                    </div>
                {/*
                    <div className="row justify-content-center">
                        <h2 classNameName="center">Buiilding Materials</h2>
                    </div>
                */}
                    <div className="row" style={SmallMar}>
                        <div className="vt-box-header">
                            <span>Our Services</span>
                        </div>
                        <ul className="vt-services" style={reallySmallMar}>
                            <li className="vt-service">
                                <div className="serv-logo">
                                    <img src={"./images/services/001-newspaper.svg"} alt="test"/>
                                </div>
                                <div className="serv-title">
                                    <span>Design Service</span>
                                </div>
                            </li>
                            <li className="vt-service">
                                <div className="serv-logo">
                                    <img src={"./images/services/014-briefcase.svg"} alt="test"/>
                                </div>
                                <div className="serv-title">
                                    <span>Legal Service</span>
                                </div>
                            </li>
                            <li className="vt-service">
                                <div className="serv-logo">
                                    <img src={"./images/services/004-bank.svg"} alt="test"/>
                                </div>
                                <div className="serv-title">
                                    <span>Banking Service</span>
                                </div>
                            </li>
                            <li className="vt-service">
                                <div className="serv-logo">
                                    <img src={"./images/services/010-building.svg"} alt="test"/>
                                </div>
                                <div className="serv-title">
                                    <span>Construction Service</span>
                                </div>
                            </li>
                            <li className="vt-service">
                                <div className="serv-logo">
                                    <img src={"./images/services/012-money.svg"} alt="test"/>
                                </div>
                                <div className="serv-title">
                                    <span>EMI Service</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="row" style={SmallMar}>
                        <div className="vt-box-header">
                            <span>Our Products</span>
                        </div>
                        <ul className="vt-categories" style={reallySmallMar}>
                            <li>
                                <div className="vt-cat-ttitle">
                                    <span>Building Materials</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/012-money.svg"} alt="test"/>
                                </div>
                            </li>
                            <li>
                                <div className="vt-cat-ttitle">
                                    <span>Interior Materials</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/001-newspaper.svg"} alt="test"/>
                                </div>
                            </li>
                            <li>
                                <div className="vt-cat-ttitle">
                                    <span>Electrical and Electronics</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/010-building.svg"} alt="test"/>
                                </div>
                            </li>
                            <li>
                                <div className="vt-cat-ttitle">
                                    <span>Furniture Fittings</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/014-briefcase.svg"} alt="test"/>
                                </div>
                            </li>
                            <li>
                                <div className="vt-cat-ttitle">
                                    <span>Item 5</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/014-briefcase.svg"} alt="test"/>
                                </div>
                            </li>
                            <li>
                                <div className="vt-cat-ttitle">
                                    <span>Item 6</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/010-building.svg"} alt="test"/>
                                </div>
                            </li>
                            <li>
                            <div className="vt-cat-ttitle">
                                    <span>Item 7</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/001-newspaper.svg"} alt="test"/>
                                </div>
                            </li>
                            <li>
                                <div className="vt-cat-ttitle">
                                    <span>Item 8</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/012-money.svg"} alt="test"/>
                                </div>
                            </li>
                            {/*  */}
                            <li>
                                <div className="vt-cat-ttitle">
                                    <span>Item 9</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/012-money.svg"} alt="test"/>
                                </div>
                            </li>
                            <li>
                                <div className="vt-cat-ttitle">
                                    <span>Item 10</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/001-newspaper.svg"} alt="test"/>
                                </div>
                            </li>
                            <li>
                                <div className="vt-cat-ttitle">
                                    <span>Item 11</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/010-building.svg"} alt="test"/>
                                </div>
                            </li>
                            <li>
                                <div className="vt-cat-ttitle">
                                    <span>Item 12</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/014-briefcase.svg"} alt="test"/>
                                </div>
                            </li>
                            <li>
                                <div className="vt-cat-ttitle">
                                    <span>Item 13</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/014-briefcase.svg"} alt="test"/>
                                </div>
                            </li>
                            <li>
                                <div className="vt-cat-ttitle">
                                    <span>Item 14</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/010-building.svg"} alt="test"/>
                                </div>
                            </li>
                            <li>
                            <div className="vt-cat-ttitle">
                                    <span>Item 15</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/001-newspaper.svg"} alt="test"/>
                                </div>
                            </li>
                            <li>
                                <div className="vt-cat-ttitle">
                                    <span>Item 16</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/012-money.svg"} alt="test"/>
                                </div>
                            </li>
                            {/*  */}
                            <li>
                                <div className="vt-cat-ttitle">
                                    <span>Item 17</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/012-money.svg"} alt="test"/>
                                </div>
                            </li>
                            <li>
                                <div className="vt-cat-ttitle">
                                    <span>Item 18</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/001-newspaper.svg"} alt="test"/>
                                </div>
                            </li>
                            <li>
                                <div className="vt-cat-ttitle">
                                    <span>Item 19</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/010-building.svg"} alt="test"/>
                                </div>
                            </li>
                            <li>
                                <div className="vt-cat-ttitle">
                                    <span>Item 20</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/014-briefcase.svg"} alt="test"/>
                                </div>
                            </li>
                            <li>
                                <div className="vt-cat-ttitle">
                                    <span>Item 21</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/014-briefcase.svg"} alt="test"/>
                                </div>
                            </li>
                            <li>
                                <div className="vt-cat-ttitle">
                                    <span>Item 22</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/010-building.svg"} alt="test"/>
                                </div>
                            </li>
                            <li>
                            <div className="vt-cat-ttitle">
                                    <span>Item 23</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/001-newspaper.svg"} alt="test"/>
                                </div>
                            </li>
                            <li>
                                <div className="vt-cat-ttitle">
                                    <span>Item 24</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/012-money.svg"} alt="test"/>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="row" style={SmallMar}>
                        <div className="vt-box-header">
                            <span>Month Special</span>
                        </div>
                    </div>
                    <div className="row" id="ads" style={reallySmallMar}>
                        <div className="col-md-3">
                            <div className="card rounded">
                                <div className="card-image">
                                    {/* <span className="card-notify-badge">Low KMS</span> */}
                                    <span className="card-notify-year">Hot</span>
                                    <img className="img-fluid" src={"./images/build2.jpg"} alt="Alternate Text" />
                                </div>
                                {/* <div className="card-image-overlay m-auto">
                                    <span className="card-detail-badge">Used</span>
                                    <span className="card-detail-badge">$28,000.00</span>
                                    <span className="card-detail-badge">13000 Kms</span>
                                </div> */}
                                <div className="card-body text-center">
                                    <span>Product 1</span>
                                    <p><small>৳200</small></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card rounded">
                                <div className="card-image">
                                    {/* <span className="card-notify-badge">Fully-Loaded</span>
                                    <span className="card-notify-year">2017</span> */}
                                    <img className="img-fluid" src={"./images/build1.png"} alt="Alternate Text" />
                                </div>
                                {/* <div className="card-image-overlay m-auto">
                                    <span className="card-detail-badge">Used</span>
                                    <span className="card-detail-badge">$28,000.00</span>
                                    <span className="card-detail-badge">13000 Kms</span>
                                </div> */}
                                <div className="card-body text-center">
                                    <span>Product 2</span>
                                    <p><small>৳200</small></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card rounded">
                                <div className="card-image">
                                    {/* <span className="card-notify-badge">Price Reduced</span> 
                                    <span className="card-notify-year">2018</span>*/}
                                    <img className="img-fluid" src={"./images/build3.png"} alt="Alternate Text" />
                                </div>
                                <div className="card-image-overlay m-auto">
                                    {/* <span className="card-detail-badge">Used</span>
                                    <span className="card-detail-badge">$22,000.00</span>
                                    <span className="card-detail-badge">8000 Kms</span> */}
                                </div>
                                <div className="card-body text-center">
                                    <span>Product 3</span>
                                    <p><small>৳200</small></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card rounded">
                                <div className="card-image">
                                    {/* <span className="card-notify-badge">Price Reduced</span> */}
                                    <span className="card-notify-year">10%</span>
                                    <img className="img-fluid" src={"./images/build5.jpg"} alt="Alternate Text" />
                                </div>
                                <div className="card-image-overlay m-auto">
                                    {/* <span className="card-detail-badge">Used</span>
                                    <span className="card-detail-badge">$22,000.00</span>
                                    <span className="card-detail-badge">8000 Kms</span> */}
                                </div>
                                <div className="card-body text-center">
                                    <span>Product 4</span>
                                    <p><small>৳200</small></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row" id="ads">
                        <div className="col-md-3">
                            <div className="card rounded">
                                <div className="card-image">
                                    {/* <span className="card-notify-badge">Low KMS</span>
                                    <span className="card-notify-year">2018</span> */}
                                    <img className="img-fluid" src={"./images/build4.jpg"} alt="Alternate Text" />
                                </div>
                                {/* <div className="card-image-overlay m-auto">
                                    <span className="card-detail-badge">Used</span>
                                    <span className="card-detail-badge">$28,000.00</span>
                                    <span className="card-detail-badge">13000 Kms</span>
                                </div> */}
                                <div className="card-body text-center">
                                    <span>Product 5</span>
                                    <p><small>৳200</small></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card rounded">
                                <div className="card-image">
                                    {/* <span className="card-notify-badge">Fully-Loaded</span>
                                    <span className="card-notify-year">2017</span> */}
                                    <img className="img-fluid" src={"./images/build1.png"} alt="Alternate Text" />
                                </div>
                                {/* <div className="card-image-overlay m-auto">
                                    <span className="card-detail-badge">Used</span>
                                    <span className="card-detail-badge">$28,000.00</span>
                                    <span className="card-detail-badge">13000 Kms</span>
                                </div> */}
                                <div className="card-body text-center">
                                    <span>Product 6</span>
                                    <p><small>৳200</small></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card rounded">
                                <div className="card-image">
                                    {/* <span className="card-notify-badge">Price Reduced</span>
                                    <span className="card-notify-year">2018</span> */}
                                    <img className="img-fluid" src={"./images/build4.jpg"} alt="Alternate Text" />
                                </div>
                                {/* <div className="card-image-overlay m-auto">
                                    <span className="card-detail-badge">Used</span>
                                    <span className="card-detail-badge">$22,000.00</span>
                                    <span className="card-detail-badge">8000 Kms</span>
                                </div> */}
                                <div className="card-body text-center">
                                    <span>Product 7</span>
                                    <p><small>৳500</small></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card rounded">
                                <div className="card-image">
                                    {/* <span className="card-notify-badge">Price Reduced</span> */}
                                    <span className="card-notify-year">20%</span>
                                    <img className="img-fluid" src={"./images/build1.png"} alt="Alternate Text" />
                                </div>
                                {/* <div className="card-image-overlay m-auto">
                                    <span className="card-detail-badge">Used</span>
                                    <span className="card-detail-badge">$22,000.00</span>
                                    <span className="card-detail-badge">8000 Kms</span>
                                </div> */}
                                <div className="card-body text-center">
                                    <span>Product 8</span>
                                    <p><small>৳200</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>   
            </>
        )
    }
}

export default Home