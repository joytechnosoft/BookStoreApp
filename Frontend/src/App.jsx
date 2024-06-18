
import { Route, Routes } from "react-router-dom";

import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";

export default function App() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/course" element={<Courses />} />
  <Route path="/" element={<Home />} />
  <Route path="/signup" element={<Signup />} />
</Routes>
</div>
</>
  )
}
