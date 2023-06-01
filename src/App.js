import './App.css';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import { Routes, Route} from 'react-router-dom';
import User from './components/home/User';
import AddUser from './Pages/addUser/AddUser';
import UpdateUser from './Pages/updateUser/UpdateUser';


function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className='container'>
        <Sidebar />
        <Routes>
            <Route path='/' element={ <User/>} />
            <Route path='/add-user' element={ <AddUser/>} />
            <Route path='/update-user/:bookid' element={<UpdateUser/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
