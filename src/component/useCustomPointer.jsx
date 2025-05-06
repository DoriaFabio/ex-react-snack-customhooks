import { useEffect, useState } from "react";

export default function useCustomPointer(customPointer) {
    const [position, setPosition] = useState({ x: 0, y: 0 }); // Inizializza la posizione del cursore a (0, 0)

    useEffect(() => {
        //! Funzione per aggiornare la posizione del cursore
        const updatePosition = (e) => { 
            setPosition({ x: e.clientX, y: e.clientY }); // Aggiorna la posizione del cursore con le coordinate del mouse
        }
        document.addEventListener("mousemove", updatePosition); // Aggiungi un event listener per il movimento del mouse

        return () => {
            document.removeEventListener("mousemove", updatePosition); // Rimuovi l'event listener quando il componente viene smontato
        }
    }, []);

    return (
        <div style={{ 
            position: "fixed",  // Posiziona il cursore in modo fisso
            top: position.y, // Posizione verticale del cursore
            left: position.x, // Posizione orizzontale del cursore
            transform: "translate(-50%, -50%)", // Centra il cursore rispetto alla posizione del mouse
            cursor: "none" // Nascondi il cursore predefinito del mouse
        }}>
            {customPointer} 
        </div >
    )
}