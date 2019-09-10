import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import Styles from '../../styles/slider.css';

var removePadding = {
    paddingRight: '0.9rem',
    paddingLeft: '0.9rem',
    marginRight: '0px',
    marginLeft: '0px'
  }

var SmallMar = {
    marginTop: '2rem',
    paddingLeft: '1.82rem',
    paddingRight: '1.82rem' 
}
  
var reallySmallMar = {
    paddingTop: '1.5rem', 
}


function IntFeatured() {
  return (
    <>
    <div className="interior-pro">
       {/* <div className="container">
                    <div className="row justify-content-center">
                        <h1 classNameName="display-4 center">Interior Materials</h1>
                    </div>
                </div> */}
                <div className="container-fluid" style={removePadding}>
                    <div className="row" style={removePadding}>
                    <AwesomeSlider cssModules={Styles}>
                        <div data-src={"./images/sliders/interior1.jpg"}>
                        <p>Interior Material Caption 1</p>
                        </div>
                        <div data-src={"./images/sliders/category1-2.jpg"}>
                        <p>Interior Material Caption 2</p>
                        </div>
                    </AwesomeSlider>
                    </div>
                    <div className="row" style={SmallMar}>
                        <div className="vt-box-header">
                            <span>Interior Material Sub Categories</span>
                        </div>
                        <ul className="vt-categories" style={reallySmallMar}>
                            <li>
                                <div className="vt-cat-ttitle">
                                    <span>Interior 1</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/012-money.svg"} alt="test"/>
                                </div>
                            </li>
                            <li>
                                <div className="vt-cat-ttitle">
                                    <span>Interior 2</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/001-newspaper.svg"} alt="test"/>
                                </div>
                            </li>
                            <li>
                                <div className="vt-cat-ttitle">
                                    <span>Interior 3</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/010-building.svg"} alt="test"/>
                                </div>
                            </li>
                            <li>
                                <div className="vt-cat-ttitle">
                                    <span>Interior 4</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/014-briefcase.svg"} alt="test"/>
                                </div>
                            </li>
                            <li>
                                <div className="vt-cat-ttitle">
                                    <span>Interior 5</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/014-briefcase.svg"} alt="test"/>
                                </div>
                            </li>
                            <li>
                                <div className="vt-cat-ttitle">
                                    <span>Interior 6</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/010-building.svg"} alt="test"/>
                                </div>
                            </li>
                            <li>
                                <div className="vt-cat-ttitle">
                                    <span>Interior 7</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/010-building.svg"} alt="test"/>
                                </div>
                            </li>
                            <li>
                                <div className="vt-cat-ttitle">
                                    <span>Interior 8</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/014-briefcase.svg"} alt="test"/>
                                </div>
                            </li>
                            <li>
                                <div className="vt-cat-ttitle">
                                    <span>Interior 9</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/014-briefcase.svg"} alt="test"/>
                                </div>
                            </li>
                            <li>
                                <div className="vt-cat-ttitle">
                                    <span>Interior 10</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/010-building.svg"} alt="test"/>
                                </div>
                            </li>
                            <li>
                                <div className="vt-cat-ttitle">
                                    <span>Interior 5</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/014-briefcase.svg"} alt="test"/>
                                </div>
                            </li>
                            <li>
                                <div className="vt-cat-ttitle">
                                    <span>Interior 6</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/010-building.svg"} alt="test"/>
                                </div>
                            </li>
                            <li>
                                <div className="vt-cat-ttitle">
                                    <span>Interior 7</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/010-building.svg"} alt="test"/>
                                </div>
                            </li>
                            <li>
                                <div className="vt-cat-ttitle">
                                    <span>Interior 8</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/014-briefcase.svg"} alt="test"/>
                                </div>
                            </li>
                            <li>
                                <div className="vt-cat-ttitle">
                                    <span>Interior 9</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/014-briefcase.svg"} alt="test"/>
                                </div>
                            </li>
                            <li>
                                <div className="vt-cat-ttitle">
                                    <span>Interior 10</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/010-building.svg"} alt="test"/>
                                </div>
                            </li>
                            <li>
                                <div className="vt-cat-ttitle">
                                    <span>Interior 5</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/014-briefcase.svg"} alt="test"/>
                                </div>
                            </li>
                            <li>
                                <div className="vt-cat-ttitle">
                                    <span>Interior 6</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/010-building.svg"} alt="test"/>
                                </div>
                            </li>
                            <li>
                                <div className="vt-cat-ttitle">
                                    <span>Interior 7</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/010-building.svg"} alt="test"/>
                                </div>
                            </li>
                            <li>
                                <div className="vt-cat-ttitle">
                                    <span>Interior 8</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/014-briefcase.svg"} alt="test"/>
                                </div>
                            </li>
                            <li>
                                <div className="vt-cat-ttitle">
                                    <span>Interior 9</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/014-briefcase.svg"} alt="test"/>
                                </div>
                            </li>
                            <li>
                                <div className="vt-cat-ttitle">
                                    <span>Interior 10</span>
                                </div>
                                <div className="vt-cat-logo">
                                    <img src={"./images/services/010-building.svg"} alt="test"/>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="row" style={SmallMar}>
                        <div className="vt-box-header">
                            <span>Top Products</span>
                        </div>
                    </div>
                    <div className="row" id="ads" style={reallySmallMar}>
                        <div className="col-md-3">
                            <div className="card rounded">
                                <div className="card-image">
                                    <span className="card-notify-badge">5%</span>
                                    {/* <span className="card-notify-year">2018</span> */}
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
                                    <span className="card-notify-year">2018</span> */}
                                    <img className="img-fluid" src={"./images/build3.png"} alt="Alternate Text" />
                                </div>
                                {/* <div className="card-image-overlay m-auto">
                                    <span className="card-detail-badge">Used</span>
                                    <span className="card-detail-badge">$22,000.00</span>
                                    <span className="card-detail-badge">8000 Kms</span>
                                </div> */}
                                <div className="card-body text-center">
                                    <span>Product 3</span>
                                    <p><small>৳200</small></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card rounded">
                                <div className="card-image">
                                    {/* <span className="card-notify-badge">Price Reduced</span>
                                    <span className="card-notify-year">2018</span> */}
                                    <img className="img-fluid" src={"./images/build5.jpg"} alt="Alternate Text" />
                                </div>
                                {/* <div className="card-image-overlay m-auto">
                                    <span className="card-detail-badge">Used</span>
                                    <span className="card-detail-badge">$22,000.00</span>
                                    <span className="card-detail-badge">8000 Kms</span>
                                </div> */}
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
                                    {/* <span className="card-notify-badge">Low KMS</span> */}
                                    <span className="card-notify-year">Limited</span>
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
                                    <img className="img-fluid" src="https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=USC80HOC091A021001.jpg&width=440&height=262" alt="Alternate Text" />
                                </div>
                                {/* <div className="card-image-overlay m-auto">
                                    <span className="card-detail-badge">Used</span>
                                    <span className="card-detail-badge">$22,000.00</span>
                                    <span className="card-detail-badge">8000 Kms</span>
                                </div> */}
                                <div className="card-body text-center">
                                    <span>Product 7</span>
                                    <p><small>৳200</small></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card rounded">
                                <div className="card-image">
                                    <span className="card-notify-badge">20%</span>
                                    {/* <span className="card-notify-year">2018</span> */}
                                    <img className="img-fluid" src="https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=USC80HOC091A021001.jpg&width=440&height=262" alt="Alternate Text" />
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

export default IntFeatured
