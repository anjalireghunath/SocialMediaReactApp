import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AddPost from './components/AddPost';
import SearchPost from './components/SearchPost';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
   <div>
<BrowserRouter>
<Routes>
  <Route path='/' exact element={<AddPost/>}/>
  <Route path='/search' exact element={<SearchPost/>}/>
</Routes>
</BrowserRouter>
   </div>
  );
}

export default App;
