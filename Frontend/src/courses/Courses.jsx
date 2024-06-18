import React from "react";
import Navebar from "../components/Navebar";

import Footer from "../components/Footer";
import Course from "../components/Course";

function Courses() {

  return (
    <>
      <Navebar />
      <div className="min-h-screen dark:bg-slate-900 text-white">
        
        <Course />
      </div>
      <Footer />
    </>
  );
}

export default Courses;
