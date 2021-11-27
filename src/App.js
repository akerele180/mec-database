import "./App.css";
import { Header } from "./components/header/header";
import StudentPage from "./components/studentspage/StudentPage";
import Flip from "react-reveal/Flip";

function App() {
  return (
    <>
      <Flip bottom>
        <Header />
      </Flip>
      <StudentPage />
    </>
  );
}

export default App;
