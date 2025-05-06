import { useEffect, useState } from "react";

export default function useCustomPointer(customPointer) {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        }
        document.addEventListener("mousemove", updatePosition);

        return () => {
            document.removeEventListener("mousemove", updatePosition);
        }
    }, []);

    return (
        <div style={{ 
            position: "fixed", 
            top: position.y,
            left: position.x,
            transform: "translate(-50%, -50%)",
            cursor: "none"
        }}>
            {customPointer}
        </div >
    )

}