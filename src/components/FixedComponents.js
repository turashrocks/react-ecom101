import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { TimelineLite } from 'gsap/all'
import CollapsibleNav from './CollapsibleNav'
import logo from '../svg/logo.svg'
import styled from 'styled-components'

var diePadder = {
    paddingTop: '0px',
    paddingLeft: '2rem',
    paddingRight: '0px',
    position:'relative'
}

const FixedComponents = function () {
    const [toggle, setToggle] = useState(false);
    const [tl] = useState(new TimelineLite({paused: true}));

    let tweenTarget = null;

    const toggleTimeline = () => {
        setToggle(!toggle);
    };

    useEffect(() => {
        tl
        .to(tweenTarget, 0.35, {x: -300})
        .reverse();
    }, []);

    useEffect(() => {
        tl.reversed(!toggle);
    }, [toggle]);
        return (
            <>
                <nav className="navbar fixed-top flex-md-nowrap p-0">
                    <div className="bar-brand col-lg-2 col-md-2" style={diePadder}>
                        <Link to="/" className="navbar-brand">
                            <Logo src={logo} alt="logo"/>
                        </Link>
                        <ToggleSidenav>
                            <div className="button" onClick={toggleTimeline}>
                                <i className="fa fa-bars"></i>
                            </div>
                        </ToggleSidenav>
                    </div>
                    <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/>
                    <ul className="navbar-nav px-3">
                        <li className="nav-item text-nowrap">
                        <a className="nav-link" href="#">Sign out</a>
                        </li>
                    </ul>
                </nav>
                <nav className="col-md-2 d-none d-md-block sidebar">
                <div 
                    className="sidebar-sticky"
                    ref={e => tweenTarget = e}
                >
                    <ul className="nav flex-column">
                        <Link className="nav-item" to="/building-materials" className="nav-link">
                            <CollapsibleNav title="Building Materials">
                                <li><span>Building 1</span></li>
                                <li><span>Building 2</span></li>
                            </CollapsibleNav>
                        </Link>
                        <Link className="nav-item" to="/electrical-electronics" className="nav-link">
                            <CollapsibleNav title="Electrical Electronics">
                                <li><span>Electrical 1</span></li>
                                <li><span>Electrical 2</span></li>
                            </CollapsibleNav>
                        </Link>
                        <Link className="nav-item" to="/interior-materials" className="nav-link">
                            <CollapsibleNav title="Interior Materials">
                                <li><span>Interior 1</span></li>
                                <li><span>Interior 2</span></li>
                            </CollapsibleNav>
                        </Link>
                        <Link className="nav-item" to="/furniture" className="nav-link">
                            <CollapsibleNav title="Furniture Fittings">
                                <li><span>Furniture 1</span></li>
                                <li><span>Furniture 2</span></li>
                            </CollapsibleNav>
                        </Link>
                        <Link className="nav-item" to="/" className="nav-link">
                            <CollapsibleNav title="Item5">
                                <li><span>Building 1</span></li>
                                <li><span>Building 2</span></li>
                            </CollapsibleNav>
                        </Link>
                        <Link className="nav-item" to="/electrical-electronics" className="nav-link">
                            <CollapsibleNav title="Item6">
                                <li><span>Electrical 1</span></li>
                                <li><span>Electrical 2</span></li>
                            </CollapsibleNav>
                        </Link>
                        <Link className="nav-item" to="/interior-materials" className="nav-link">
                            <CollapsibleNav title="Item7">
                                <li><span>Interior 1</span></li>
                                <li><span>Interior 2</span></li>
                            </CollapsibleNav>
                        </Link>
                        <Link className="nav-item" to="/furniture" className="nav-link">
                            <CollapsibleNav title="Item8">
                                <li><span>Furniture 1</span></li>
                                <li><span>Furniture 2</span></li>
                            </CollapsibleNav>
                        </Link>
                    </ul>

                {/* Hot offers commented out  */}
                {/* <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-2 mt-2 mb- text-muted">
                  <span>Hot Offers</span>
                  <a className="d-flex align-items-center text-muted" href="#">
                  </a>
                </h6>
                <ul className="nav flex-column mb-2">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Monthly Discount
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Discount with Bkash
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Avail Coupon Card
                    </a>
                  </li>
                </ul> */}
              </div>
            </nav>
        </>
        )

}

export default FixedComponents

const Logo = styled.img`
    width: 85%;
    height: auto;
    padding-top: 0rem;
    position: relative;
    float: left;
    z-index: 1;
`

const ToggleSidenav = styled.div`
    width: 10%;
    float: right;
    height: 100%;
    position: relative;
    font-size: 1.2rem;
    right: 0.85rem;
    cursor: pointer;
    color: #aaaaaa;
    padding-top: 0.5rem;
`

