import "./App.css";
import { Navbar } from "./components/Navbar"; // Mi error fue importar Navbar como llaves {} siendo esta un export default, lo cual no era necesario y me generaba un error de importación "Si usas default export, no uses llaves en la importación"

function App() {
  return (
    <>
      <Navbar />
      <h1 className="text-center">Hello World</h1>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        voluptatum.
      </p>
    </>
  );
}

export default App;
