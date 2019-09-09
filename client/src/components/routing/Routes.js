import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from '../auth/Login'
import Register from '../auth/Register'
import Alert from '../layout/Alert'
import Dashboard from '../dashboard/Dashboard'
import CreateProfile from '../profile-forms/CreateProfile'
import EditProfile from '../profile-forms/EditProfile'
import AddExperience from '../profile-forms/AddExperience'
import AddEducation from '../profile-forms/AddEducation'
import PrivateRoute from '../routing/PrivateRoute'
import Profiles from '../profiles/Profiles'
import Profile from '../profile/Profile'
import Posts from '../posts/Posts'
import Post from '../post/Post'

const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profiles" component={Profiles} />
        <Route exact path="/profile/:id" component={Profile} />
      </Switch>
      <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
      <Switch>
        <PrivateRoute exact path="/create-profile" component={CreateProfile} />
      </Switch>
      <Switch>
        <PrivateRoute exact path="/edit-profile" component={EditProfile} />
      </Switch>
      <Switch>
        <PrivateRoute exact path="/add-experience" component={AddExperience} />
      </Switch>
      <Switch>
        <PrivateRoute exact path="/add-education" component={AddEducation} />
      </Switch>
      <Switch>
        <PrivateRoute exact path="/posts" component={Posts} />
      </Switch>
      <Switch>
        <PrivateRoute exact path="/posts/:id" component={Post} />
      </Switch>
    </section>
  )
}

export default Routes
