import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import AddCreator from './pages/AddCreator';
import Home from './pages/Home';
import EditCreator from './pages/EditCreator'
import ShowCreators from './pages/ShowCreators'
import ViewCreator from './pages/ViewCreator'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddCreator" element={<AddCreator />} />
        <Route path="/EditCreator/:id" element={<EditCreator />} />
        <Route path="/ShowCreators" element={<ShowCreators />} />
        <Route path="/ViewCreator/:id" element={<ViewCreator />} />
      </Routes>
    </Router>
  );
}

export default App;