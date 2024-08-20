import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Pricing from './PricingPage/Pricing';
import SignIn from './Authentication/SignIn/signin';
import FeaturesPage from './FeaturesPage/FeaturesPage';
import Register from './Authentication/Register/Register';


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Pricing" element={<Pricing />} />
        <Route exact path="/Login" element={<SignIn/>} />
        <Route exact path="/Register" element={<Register/>} />
        <Route exact path="/Features" element={<FeaturesPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
