import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Routes, Route ,BrowserRouter} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Navbar />
        <Routes>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/dialogs' element={<Dialogs />}/>
        </Routes>
      </div>
     </BrowserRouter>
  );
}

export default App;
