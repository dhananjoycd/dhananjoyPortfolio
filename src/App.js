import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import ContactForm from './Components/ContactForm/ContactForm';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Resume from './Components/Resume/Resume';

function App() {
  return (
    <div>
                <Header></Header>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs" element={<Blogs/>} />
        <Route path="resume" element={<Resume/>} />
        <Route path="projects" element={<Projects/>} />
        <Route path="contact" element={<ContactForm/>} />
        <Route path="about" element={<About/>} />
    </Routes>
    </div>
  );
}

export default App;
