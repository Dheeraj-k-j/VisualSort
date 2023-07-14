import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import SortingVisualizer from "./SortingVisualizer/SortingVisualizer";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import HowTo from "./Components/HowTo/HowTo";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/VisualSort" element={<Outlet />}>
          <Route index element={<SortingVisualizer/>} />
          <Route path="/VisualSort/HowTo" element={<HowTo/>} />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );

  // return (
  //   <>
  //   
  //   <SortingVisualizer/>
  //   
  //   </>
  // )
}

export default App;
