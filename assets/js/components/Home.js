import React, { Component } from "react"
import { Redirect, Switch, Route, Link, withRouter } from "react-router-dom"
import Users from "./Users"
import Posts from "./Posts"
import LoginPage from "./routes/LoginPage"
import RegisterPage from "./routes/RegisterPage"
import BookingPage from "./routes/BookingPage"
import ContactPage from "./routes/ContactPage"
import EtablissementListPage from "./routes/EtablissementListPage"
import EtablissementPage from "./routes/EtablissementPage"
import AccountPage from "./routes/AccountPage"
import BookingListPage from "./routes/BookingListPage"

class Home extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className={"navbar-brand"} to={"/"}>
            {" "}
            Symfony React Project{" "}
          </Link>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className={"nav-link"} to={"/posts"}>
                  {" "}
                  Posts{" "}
                </Link>
              </li>

              <li className="nav-item">
                <Link className={"nav-link"} to={"/users"}>
                  {" "}
                  Users{" "}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Redirect exact from="/" to="/users" />
          <Route path="/users" component={Users} />
          <Route path="/posts" component={Posts} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route
            path="/mon-compte/mes-reservations"
            component={BookingListPage}
          />
          <Route path="/mon-compte/administration" component={AccountPage} />
          <Route
            path="/mon-compte/administration/utilisateurs"
            component={AccountPage}
          />
          <Route
            path="/mon-compte/administration/etablissements"
            component={AccountPage}
          />
          <Route
            path="/mon-compte/gestion-de-mon-etablissement"
            component={AccountPage}
          />
          <Route path="/mon-compte" component={AccountPage} />
          <Route path="/reservation" component={BookingPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/etablissement/slug" component={EtablissementPage} />
          <Route
            path="/liste-des-etablissements"
            component={EtablissementListPage}
          />
        </Switch>
      </div>
    )
  }
}

export default Home
