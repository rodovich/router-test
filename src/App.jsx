import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

console.warn('App.jsx');

// Home component
function Home() {
  console.log('Home');
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the React Router experiment!</p>
    </div>
  )
}

// About component
function About() {
  console.log('About');
  return (
    <div>
      <h2>About Page</h2>
      <p>This is a simple React Router experiment.</p>
    </div>
  )
}

// Contact component
function Contact() {
  console.log('Contact');
  return (
    <div>
      <h2>Contact Page</h2>
      <p>Contact us at example@example.com</p>
    </div>
  )
}

function App() {
  return <>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>

    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </>;
}

export default App
