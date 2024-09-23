import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lsection from "./Section";
import style from "./container.module.css";
import Batch from "./batch/Contop";
import Resource from "./resources/Resource";
import Module from "./module/Module";
import Testopt from "./test module/Testoption";
import Alltest from "./test module/Test";
import Createst from "./test module/Createst";
import Result from "./test module/Result";

function box() {
  return (
    <BrowserRouter>
      <div className={style.box}>
        <Lsection></Lsection>
        <Routes>
          <Route path="/" element={<Batch />}></Route>
          <Route path="resources" element={<Resource />}></Route>
          <Route path="module" element={<Module />}></Route>
          <Route path="test" element={<Testopt />}>
            <Route index element={<Alltest />}></Route>
            <Route path="CreateTest" element={<Createst />}></Route>
            <Route path="TestResult" element={<Result />}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default box;
