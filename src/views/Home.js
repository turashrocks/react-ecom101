import React from 'react'
import styled from 'styled-components'

function Home() {
  return (
    <>
      <h1 classNameName="display-4">Display 4</h1>
      <div className="container">
          <h4>Bootstrap 4 and CCS3 Product Cards with Transition - Techhowdy(demonguru18) - Lyoid Lopes</h4>
	      <div className="row" id="ads">
        <div className="col-md-3">
            <div className="card rounded">
                <div className="card-image">
                    <span className="card-notify-badge">Low KMS</span>
                    <span className="card-notify-year">2018</span>
                    <img className="img-fluid" src="https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=USC80HOC011A021001.jpg&width=440&height=262" alt="Alternate Text" />
                </div>
                <div className="card-image-overlay m-auto">
                    <span className="card-detail-badge">Used</span>
                    <span className="card-detail-badge">$28,000.00</span>
                    <span className="card-detail-badge">13000 Kms</span>
                </div>
                <div className="card-body text-center">
                    <div className="ad-title m-auto">
                        <h5>Honda Accord LX</h5>
                    </div>
                    <a className="ad-btn" href="#">View</a>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card rounded">
                <div className="card-image">
                    <span className="card-notify-badge">Fully-Loaded</span>
                    <span className="card-notify-year">2017</span>
                    <img className="img-fluid" src="https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=CAC80HOC021B121001.jpg&width=440&height=262" alt="Alternate Text" />
                </div>
                <div className="card-image-overlay m-auto">
                    <span className="card-detail-badge">Used</span>
                    <span className="card-detail-badge">$28,000.00</span>
                    <span className="card-detail-badge">13000 Kms</span>
                </div>
                <div className="card-body text-center">
                    <div className="ad-title m-auto">
                        <h5>Honda CIVIC HATCHBACK LS</h5>
                    </div>
                    <a className="ad-btn" href="#">View</a>
                </div>
            </div>
        </div>

        <div className="col-md-3">
            <div className="card rounded">
                <div className="card-image">
                    <span className="card-notify-badge">Price Reduced</span>
                    <span className="card-notify-year">2018</span>
                    <img className="img-fluid" src="https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=USC80HOC091A021001.jpg&width=440&height=262" alt="Alternate Text" />
                </div>
                <div className="card-image-overlay m-auto">
                    <span className="card-detail-badge">Used</span>
                    <span className="card-detail-badge">$22,000.00</span>
                    <span className="card-detail-badge">8000 Kms</span>
                </div>
                <div className="card-body text-center">
                    <div className="ad-title m-auto">
                        <h5>Honda Accord Hybrid LT</h5>
                    </div>
                    <a className="ad-btn" href="#">View</a>
                </div>
            </div>
        </div>

        <div className="col-md-3">
            <div className="card rounded">
                <div className="card-image">
                    <span className="card-notify-badge">Price Reduced</span>
                    <span className="card-notify-year">2018</span>
                    <img className="img-fluid" src="https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=USC80HOC091A021001.jpg&width=440&height=262" alt="Alternate Text" />
                </div>
                <div className="card-image-overlay m-auto">
                    <span className="card-detail-badge">Used</span>
                    <span className="card-detail-badge">$22,000.00</span>
                    <span className="card-detail-badge">8000 Kms</span>
                </div>
                <div className="card-body text-center">
                    <div className="ad-title m-auto">
                        <h5>Honda Accord Hybrid LT</h5>
                    </div>
                    <a className="ad-btn" href="#">View</a>
                </div>
            </div>
        </div>


      </div>
    </div>
    </>
  )
}

export default Home
