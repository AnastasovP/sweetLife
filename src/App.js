import { Routes, Route } from 'react-router-dom'; // Routes replaces Switch in ver.6
import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard'; // in Routes element is new component
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Create from './components/Create/Create';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';
import MyRecipes from './components/MyRecipes/MyRecipes';
import Logout from './components/Logout/Logout';
import Footer from './components/Footer/Footer';
import GuardRouter from './components/GuardRouter/GuardRouter';
import Notification from './components/Common/ConfirmDialog/Notification';

import 'bootstrap/dist/css/bootstrap.min.css';
//import ErrorBoundary from './components/Common/ConfirmDialog/ErrorBoundary';
//<ErrorBoundary></ErrorBoundary>

function App() {

  return (
    
      <AuthProvider>
        <NotificationProvider>
        <div id="container">

          <Header />

          <Notification />
          
          <main id="site-content">
            <Routes>
              <Route path="/*" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/create" element= {<GuardRouter> <Create /> </GuardRouter>} />
              <Route path="/details/:recipeId" element={<Details />} />
              <Route path="/edit/:recipeId" element={<Edit />} />
              <Route path="/my-recipes" element={<GuardRouter> <MyRecipes /> </GuardRouter>} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </main>
          

         <Footer />

        </div>
        </NotificationProvider>
      </AuthProvider>
    
  );
}

export default App;
