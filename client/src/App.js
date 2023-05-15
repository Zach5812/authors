import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import New from './views/New';
import Edit from './views/Edit';
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Authors</h1>
      <p>
        <Link style={{textDecoration: "none", color: "blue"}} to="/New">New Author</Link>
      </p>

      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/new" element={<New/>}/>
        <Route path="/authors/:id/edit" element={<Edit/>}/>
      </Routes>
    </div>
  );
}


export default App;
