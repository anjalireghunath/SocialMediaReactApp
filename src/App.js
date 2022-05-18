import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AddPost from './components/AddPost';
import SearchPost from './components/SearchPost';
function App() {
  return (
   <div>
<AddPost/>
<SearchPost/>
   </div>
  );
}

export default App;
