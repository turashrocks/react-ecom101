import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { Container, Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import BuildMatFeatured from './views/building-materials/BuildMatFeatured'
import ElecFeatured from './views/electrical-electronics/ElecFeatured'
import IntFeatured from './views/interior-materials/IntFeatured'
import './App.css'

const routes = [
   { path: '/', name: 'Building', Component: BuildMatFeatured },
   { path: '/interior-materials', name: 'Interior', Component: IntFeatured },
   { path: '/electrical-electronics', name: 'Electrical', Component: ElecFeatured },
 ]

var removeMargin = {
  marginBlockStart: '0px',
  marginBlockend: '0px',
  paddingInlineStart: '0px'
}

function App() {
  return (
    <Router>
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2">
                <div className="py-2 sticky-top flex-grow-1">
                    <div className="nav flex-sm-column">
                        <ul style={removeMargin}>
                          <li>
                              <Link to="/" className="nav-link">
                                <p>Building Material</p>
                              </Link>
                          </li>
                          <li>
                              <Link to="/electrical-electronics" className="nav-link">
                                <p>Electrical</p>
                              </Link>
                          </li>
                          <li>
                              <Link to="/interior-materials" className="nav-link">
                                <p>Interior Materials</p>
                              </Link>
                          </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-sm-8" id="main">
  
                <Container className="vt-main-right">
                  {routes.map(({ path, Component }) => (
                    <Route key={path} exact path={path}>
                      {({ match }) => (
                        <CSSTransition
                          in={match != null}
                          timeout={300}
                          classNames="page"
                          unmountOnExit
                        >
                          <div className="page">
                            <Component />
                          </div>
                        </CSSTransition>
                      )}
                    </Route>
                  ))} 
                </Container>

            </div>
          </div>
        </div>
      </>
    </Router>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
