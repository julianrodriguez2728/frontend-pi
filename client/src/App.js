import './App.css';
import {Routes, Route, useLocation} from "react-router-dom"
import Detail from './components/Detail/Detail';
import DogDetail from './components/Detail/DogDetail';
import Form from './components/Form/Form';
import CardDogs from "./components/Card/CardDogs";
import Navbar from './components/NavBar/NavBar';
import MyDogs from './components/NavBar/apibutons/MyDogs';
import ApiDogs from "./components/NavBar/apibutons/ApiDogs"
import Present from './components/Present/Present';
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
