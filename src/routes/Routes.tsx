import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomeView } from '../views/homeView//HomeView'
import { MemoryView } from '../views/memoryView/MemoryView'
import RoutingPath from './RoutingPath'

export const Routes = (props: { children?: React.ReactChild }) => {
  return (
    <Router>
      {props.children}
      <Switch>
        <Route exact path={RoutingPath.homeView} component={HomeView} />
        <Route exact path={RoutingPath.memoryView} component={MemoryView} />
      </Switch>
    </Router>
  )
}
