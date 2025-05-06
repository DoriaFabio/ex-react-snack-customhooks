import { useEffect, useState } from "react";

export default function useDate() {
    const [currentDate, setCurrentDate] = useState(new Date()); // Inizializza la data corrente con la data attuale
    //! Funzione per aggiornare la data corrente ogni secondo
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date())
        }, 1000);
        return () => clearInterval(interval); // Pulisce l'intervallo quando il componente viene smontato
    }, []);
    return currentDate; 
}