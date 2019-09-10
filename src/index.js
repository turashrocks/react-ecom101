import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import { CSSTransition } from 'react-transition-group'
import { Container} from 'react-bootstrap'
import { createBrowserHistory } from 'history';
import 'bootstrap/dist/css/bootstrap.min.css';
import FixedComponents from './components/FixedComponents'
import Home from './views/home/Home'
import BuildMatFeatured from './views/building-materials/BuildMatFeatured'
import ElecFeatured from './views/electrical-electronics/ElecFeatured'
import IntFeatured from './views/interior-materials/IntFeatured'
import FurFeatured from './views/furniture/FurFeatured'
import './App.css'

const routes = [
   { path: '/', name: 'Home', Component: Home },
   { path: '/building-materials', name: 'Building', Component: BuildMatFeatured },
   { path: '/interior-materials', name: 'Interior', Component: IntFeatured },
   { path: '/electrical-electronics', name: 'Electrical', Component: ElecFeatured },
   { path: '/furniture', name: 'Furniture', Component: FurFeatured }
 ]

var smallMargin = {
  paddingTop: '4rem',
  paddingRight: '0px',
  paddingLeft: '0px'
}

var PadderRemover = {
  paddingRight: '0px',
  paddingLeft: '0px',
  paddingTop: '0px'
}

const browserHistory = createBrowserHistory();

browserHistory.listen((location, action) => {
  window.scrollTo(0, 0);
});


function App() {
  return (
    <Router history={browserHistory}>
      <ScrollToTop>
      <>
      <div className="container-fluid">
          <div className="row">
            <FixedComponents/>
            <main role="main" className="col-md-8 ml-sm-auto col-lg-8" style={smallMargin}>
              <Container className="vt-main-right" style={PadderRemover}>
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
            </main>
            <div className="col-md-2 col-lg-2">

            </div>
          </div>
        </div>
      </>
      </ScrollToTop>
    </Router>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
