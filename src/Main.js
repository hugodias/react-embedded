import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Builder from './Containers/Builder'
import Embedded from './Containers/Embedded'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Builder}/>
      <Route path="/embedded/:id" component={Embedded}/>
    </Switch>
  </main>
)

export default Main
