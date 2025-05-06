import useDate from "./component/useDate";
import useSwitch from "./component/useSwitch"
import useCustomPointer from "./component/useCustomPointer";

function App() {
  const [isOn, toggle] = useSwitch();
  const currentDate = useDate();
  const customPointer = useCustomPointer(<span className="text-3xl">❤</span>);

  return (
    <>
      {/* Toggle booleano */}
      <div>
        <h1 className="font-bold m-3">Il valore è: {isOn ? "ON" : "OFF"}</h1>
        <button onClick={toggle} className="p-1 border mx-3">Cambia Stato</button>
      </div>
      {/* Data e ora attuali */}
      <div>
        <h1 className="font-bold m-3">Data e ora attuali:</h1>
        <p className="mx-3">{currentDate.toLocaleString()}</p>
      </div>
      {/* Cursore personalizzato */}
      <div>
        <h1 className="font-bold m-3">Sposta il mouse per vedere il cursore personalizzato!</h1>
        {customPointer}
      </div>
    </>

  );
}

export default App;
