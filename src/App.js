import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <div className="Wrapper">
      <Navbar />
      <section className="Content">
        <Routes>
          <Route path={"/profile"} element={<Profile />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
