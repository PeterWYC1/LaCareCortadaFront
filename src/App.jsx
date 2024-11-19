import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserContextProvider } from './context/endpoints.jsx';  // Asegúrate de importar el provider

import Home from './Pages/Home';
import Models from './Pages/Models';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import Events from './Pages/Events';
import PhotoSales from './Pages/PhotoSales';
import Memberships from './Pages/Memberships';
import AdminDashboard from './Pages/AdminDashboard';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import ManageModels from './Pages/ManageModels';
import ManageProducts from './Pages/ManageProducts';
import ManageEvents from './Pages/ManageEvents';
import Layout from './Components/Layout';
import ManagePhotos from './Pages/ManagePhotos';
import ManageMemberships from './Pages/ManageMemberships';
import ContactUs from './Pages/ContactUs';

function App() {
  return (
    <UserContextProvider> 
      <Router>
        <Layout>
          <div style={{ paddingTop: '4rem' }}> {/* To avoid content overlapping with Navbar */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/models" element={<Models />} />
              <Route path="/products" element={<Products />} />
              <Route path="/events" element={<Events />} />
              <Route path="/photos" element={<PhotoSales />} />
              <Route path="/memberships" element={<Memberships />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/manage-models" element={<ManageModels />} />
              <Route path="/manage-products" element={<ManageProducts />} />
              <Route path="/manage-events" element={<ManageEvents />} />
              <Route path="/manage-photos" element={<ManagePhotos />} />
              <Route path="/manage-memberships" element={<ManageMemberships />} />
              <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
          </div>
        </Layout>
      </Router>
    </UserContextProvider>  
  );
}

export default App;
