import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import AddCreator from './AddCreator';
import Home from './Home';
import EditCreator from './EditCreator'
import ShowCreators from './ShowCreators'
import ViewCreator from './ViewCreator'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/add-creator" element={<AddCreator />} />
        <Route path="/edit-creator/:id" element={<EditCreator />} />
        <Route path="/show-creators" element={<ShowCreators />} />
        <Route path="/view-creator/:id" element={<ViewCreator />} />
      </Routes>
    </Router>
  );
}

export default App;