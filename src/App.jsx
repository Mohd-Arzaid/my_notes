import JavascriptFoundationsNotes from "./components/manual/JavascriptFoundationsNotes";
import { Routes, Route, Link } from "react-router-dom";
import NodejsFoundationsNotes from "./components/manual/NodejsFoundationsNotes";
import FilterMapFunctions from "./components/manual/FilterMapFunctions";


function App() {
  return <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/JavascriptFoundationsNotes" element={<JavascriptFoundationsNotes />} />
      <Route path="/NodejsFoundationsNotes" element={<NodejsFoundationsNotes />} />
      <Route path="/FilterMapFunctions" element={<FilterMapFunctions />} />
      
    </Routes>
  </>;
}

export default App;

const Home = () => {
  return <div className="flex flex-col items-center justify-center gap-4 h-screen">
      <Link to="/JavascriptFoundationsNotes">
        <div className="font-geist text-[18px] font-medium underline underline-offset-4">Javascript Foundations Notes</div>
      </Link>
      <Link to="/NodejsFoundationsNotes">
        <div className="font-geist text-[18px] font-medium underline underline-offset-4">Node js Foundations Notes</div>
      </Link>
      <Link to="/FilterMapFunctions">
        <div className="font-geist text-[18px] font-medium underline underline-offset-4">Filter, Map Functions</div>
      </Link>
     
      
  </div>;
};
