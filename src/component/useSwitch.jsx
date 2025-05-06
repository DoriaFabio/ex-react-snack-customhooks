import { useState } from "react";

export default function useSwitch(val = false) {
    const [isOn, setIsOn] = useState(val); // Inizializza lo stato isOn con il valore passato come argomento (default: false)
    //! Funzione per cambiare lo stato di isOn
    const toggle = () => {
        setIsOn(curr => !curr);
    }

    return [isOn, toggle]

}