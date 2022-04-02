import LandingPage from '../routes/LandingPage'
import LoginPage from '../routes/LoginPage'
import RegisterPage from '../routes/RegisterPage'
import LoggoutPage from '../routes/LoggoutPage'
import BookingListPage from '../routes/BookingListPage'
import AccountPage from '../routes/AccountPage'
import ContactPage from '../routes/ContactPage'
import EtablissementListPage from '../routes/EtablissementListPage'
import BookingPage from '../routes/BookingPage'
import EtablissementPage from '../routes/EtablissementPage'

const pages = [
  {
    name: 'Acceuil',
    path: '/',
    access: 'public',
    component: LandingPage,
  },
  {
    name: 'Etablissements',
    path: '/liste-des-etablissements',
    access: 'public',
    component: EtablissementListPage,
  },
  {
    name: 'Etablissement',
    path: '/liste-des-etablissements/slug',
    access: 'public',
    component: EtablissementPage,
  },
  {
    name: 'Contact',
    path: '/contact',
    access: 'public',
    component: ContactPage,
  },
  {
    name: 'Réserver',
    path: '/reservation',
    access: 'public',
    component: BookingPage,
  },
  {
    name: 'Mes Mon compte',
    path: '/mon-compte',
    access: 'user',
    component: AccountPage,
  },
  {
    name: 'Mes informations',
    path: '/mon-compte/mes-informations',
    access: 'user',
    component: AccountPage,
  },
  {
    name: 'Mes reservations',
    path: '/mon-compte/mes-reservations',
    access: 'user',
    component: BookingListPage,
  },
  {
    name: 'gestion',
    path: '/mon-compte/gestion',
    access: 'gerant',
    component: AccountPage,
  },
  {
    name: 'Gestion des suites',
    path: '/mon-compte/gestion/suites',
    access: 'gerant',
    component: AccountPage,
  },
  {
    name: 'Administration',
    path: '/mon-compte/administration',
    access: 'admin',
    component: AccountPage,
  },
  {
    name: 'Administration Utilisateurs',
    path: '/mon-compte/administration/users',
    access: 'admin',
    component: AccountPage,
  },
  {
    name: 'Administration Etablissements',
    path: '/mon-compte/administration/etablissements',
    access: 'admin',
    component: AccountPage,
  },
  {
    name: 'Deconnection',
    path: '/mon-compte/loggout',
    access: 'user',
    component: LoggoutPage,
  },
  {
    name: 'Se Connecter',
    path: '/login',
    access: 'public',
    component: LoginPage,
  },
  {
    name: 'Inscription',
    path: '/register',
    access: 'public',
    component: RegisterPage,
  },
]

export default pages
