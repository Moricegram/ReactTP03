import { Button } from "react-bootstrap";
import { useState } from "react";
const Saludo = ({ nombre }) => {
  const [msj, setMsj] = useState("");

  return (
    <>
      <h1>
        Hello {nombre} {msj}!
      </h1>
      <Button variant="light" onClick={() => setMsj(" (from changed state)")}>
        Click me
      </Button>
      <hr />
    </>
  );
};

export default Saludo;
