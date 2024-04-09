import DemoComponent from "./DemoComponent";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Details from "./components/Details";
import VerifyMail from "./components/VerifyMail";

function App() {
  return (
    <Routers>
      <Routes>
        <Route path="/" element={<DemoComponent />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/details" element={<Details />}></Route>
        <Route path="/verifymail" element={<VerifyMail />}></Route>
      </Routes>
    </Routers>
  );
}

export default App;
