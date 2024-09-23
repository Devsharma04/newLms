import { faHourglass1 } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Head from "./Header";
import { lazy, Suspense } from "react";
const Load = lazy(() => import("./Container"));
function App() {
  return (
    <div>
      <Head></Head>
      <Suspense fallback={<h1>Loading....</h1>}>
        <Load></Load>
      </Suspense>
    </div>
  );
}

export default App;
