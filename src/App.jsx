import JavascriptFoundationsNotes from "./components/manual/JavascriptFoundationsNotes";
import { Routes, Route, Link } from "react-router-dom";
import { Button } from "./components/ui/button";
function App() {
  return <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/JavascriptFoundationsNotes" element={<JavascriptFoundationsNotes />} />
    </Routes>
  </>;
}

export default App;

const Home = () => {
  return <div className="flex flex-col items-center justify-center gap-4 h-screen">
      <Link to="/JavascriptFoundationsNotes">
        <div className="font-geist text-[18px] font-medium underline underline-offset-4">Javascript Foundations Notes</div>
      </Link>
      
  </div>;
};
