import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VehiclePage from './pages/Vehicles/Vehicle';
import DriverPage from './pages/Drivers';
import NotFound from './pages/NotFound';
import Home from './pages/Home'

function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/motoristas" element={<DriverPage />} />
                <Route path="/veiculos" element={<VehiclePage />} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </Router>
    )
}

export default AppRoutes