import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlayerNavigation from "../Components/Navigation";
import Home from "../Components/Home";
import PlayerList from "../Components/PlayerList";
import WinnerList from "../Components/WinnerList";
import CountryList from "../Components/Country";
import AddMatch from "../Components/AddMatch";

const RouterConfiguration = () => {
    return (
      <BrowserRouter>
        <PlayerNavigation />
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/players" element={<PlayerList />} />
          <Route path="/aboveavg" element={<WinnerList/>}/>
          <Route path="/country" element={<CountryList/>}/>
         <Route path="/add" element={<AddMatch />} />  
        </Routes>
      </BrowserRouter>
    );
  };
  export default RouterConfiguration;