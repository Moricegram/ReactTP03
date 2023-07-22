import { Container } from "react-bootstrap";
import "./App.css";
import Saludo from "./components/Saludo.jsx";

function App() {
  const individuo = "my friend";
  return (
    <Container className="text-center">
      <Saludo nombre={individuo} />
    </Container>
  );
}

export default App;
