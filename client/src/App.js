import './App.css';
import {Routes, Route, useLocation} from "react-router-dom"
import Detail from './components/Detail/Detail.jsx';
import DogDetail from './components/Detail/DogDetail.jsx';
import Form from './components/Form/Form.jsx';
import CardDogs from "./components/Card/CardDogs.jsx";
import Navbar from './components/NavBar/NavBar.jsx';
import MyDogs from './components/NavBar/apibutons/MyDogs.jsx';
import ApiDogs from "./components/NavBar/apibutons/ApiDogs.jsx"
import Present from './components/Present/Present.jsx';
function App() {
  const {pathname} = useLocation();
  return (
    <div className="App">
      {pathname !== "/" && <Navbar />}
      <Routes>
        <Route path="/" element={<Present />}/>
        <Route path="/home" element={<CardDogs />}/>
        <Route path="/form" element={<Form />}/>
        <Route path="/myDogs" element={<MyDogs />}/>
        <Route path="/apiDogs" element={< ApiDogs/>}/>
        <Route path="/dogs/:id" element={<Detail />}/>
        <Route path="/dogFound" element={<DogDetail/>}/>

      </Routes>
    </div>
  );
}

export default App;
