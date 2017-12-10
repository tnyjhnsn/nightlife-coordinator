import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Landing from './landing/LandingContainer'
import Venues from './venues/VenuesContainer'
import GetUser from './venues/GetUser'
import Progress from './common/Progress'

const Routes = ({ progress }) => {
  return (
    <Router>
      <div>
        <section>
          <Route exact path="/" component={Landing} />
          <Route exact path="/venues" component={Venues} />
          <Route exact path="/success/:userId" component={GetUser} />
        </section>
        <Progress progress={progress} />
      </div>
    </Router>
  )
}

export default Routes
