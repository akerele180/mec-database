import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/header/header";
import StudentCard from "./components/studentcards/StudentCard";
import students from "./studentInfo";

function App() {
  return (
    <div>
      <Header />
      <StudentCard students={students} />
    </div>
  );
}

export default App;
