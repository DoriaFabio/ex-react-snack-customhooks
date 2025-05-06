import { useState } from "react";

export default function useSwitch(val = false) {
    const [isOn, setIsOn] = useState(val);
    const toggle = () => {
        setIsOn(curr => !curr);
    }

    return [isOn, toggle]

}