import useDate from "./component/useDate";
import useSwitch from "./component/useSwitch"

function App() {
  const [isOn, toggle] = useSwitch();
  const currentDate = useDate();

  return (
    <>
      <div>
        <h1 className="font-bold m-3">Il valore è: {isOn ? "ON" : "OFF"}</h1>
        <button onClick={toggle} className="p-1 border mx-3">Cambia Stato</button>
      </div>
      <div>
        <h1 className="font-bold m-3">Data e ora attuali:</h1>
        <p className="mx-3">{currentDate.toLocaleString()}</p>
      </div>
    </>

  );
}

export default App;
