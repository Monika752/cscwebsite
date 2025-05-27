import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';
import Review from './pages/Review';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ADAD from './components/courses/ADAD';
import ADCP from './components/courses/ADCP';
import ADDA from './components/courses/ADDA';
import ADJP from './components/courses/ADJP';
import ADMS from './components/courses/ADMS';
import ADPP from './components/courses/ADPP';
import CCAE from './components/courses/CCAE';
import DBDA from './components/courses/DBDA';
import DCAprogramming from './components/courses/DCAProgramming';
import DCATally from './components/courses/DCATally';
import DCC from './components/courses/DCC';
import DFJD from './components/courses/DFJD';
import DFPD from './components/courses/DFPD';
import DMO from './components/courses/DMO';
import DPFD from './components/courses/DPFD';
import HDCAProgramming from './components/courses/HDCAProgramming';
import HDCATally from './components/courses/HDCATally';
import HDFD from './components/courses/HDFD';
import MDSA from './components/courses/MDSA';
import NET from './components/courses/NET';
import TallyPrime from './components/courses/TallyPrime';


function App() {
  return (
    <div>

      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/contact' element={<ContactUs />} />
            <Route path='/review' element={<Review />} />

            {/* Route each course dynamically */}
            <Route path="/courses/ADAD" element={<ADAD />} />
            <Route path="/courses/ADCP" element={<ADCP />} />
            <Route path="/courses/ADDA" element={<ADDA />} />
            <Route path="/courses/ADJP" element={<ADJP />} />
            <Route path="/courses/ADMS" element={<ADMS />} />
            <Route path="/courses/ADPP" element={<ADPP />} />
            <Route path="/courses/CCAE" element={<CCAE />} />
            <Route path="/courses/DBDA" element={<DBDA />} />
            <Route path="/courses/DCAProgramming" element={<DCAprogramming />} />
            <Route path="/courses/DCATally" element={<DCATally />} />
            <Route path="/courses/DCC" element={<DCC />} />
            <Route path="/courses/DFJD" element={<DFJD />} />
            <Route path="/courses/DFPD" element={<DFPD />} />
            <Route path="/courses/DMO" element={<DMO />} />
            <Route path="/courses/DPFD" element={<DPFD />} />
            <Route path="/courses/HDCAProgramming" element={<HDCAProgramming />} />
            <Route path="/courses/HDCATally" element={<HDCATally />} />
            <Route path="/courses/HDFD" element={<HDFD />} />
            <Route path="/courses/MDSA" element={<MDSA />} />
            <Route path="/courses/NET" element={<NET />} />
            <Route path="/courses/TallyPrime" element={<TallyPrime />} />


          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
