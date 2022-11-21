import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Info from "./components/Info";
import Basics from "./components/Basics";
import Know from "./components/Know";
import Components from "./components/Components";
import State from "./components/State";
import ConditionalRendering from "./components/ConditionalRendering";
import EventListeners from "./components/EventListeners";
import RouterSection from "./components/RouterSection";
import ContextApi from "./components/ContextApi";
import UseReducer from "./components/UseReducer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/info" element={<Info />} />
        <Route path="/needToKnow" element={<Know />} />
        <Route path="/basics" element={<Basics />} />
        <Route path="/components" element={<Components />} />
        <Route path="/state"  element={<State />} />
        <Route path="/conditionalRendering" element={<ConditionalRendering />}/>
        <Route path="/eventListeners" element={<EventListeners />} />
        <Route path="/routerSection" element={<RouterSection />} />
        <Route path="/contextApi" element={<ContextApi />}/>
        <Route path="/useReducer" element={<UseReducer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
