import { useEffect, useState, useRef } from "react";


export default function useTypingEffect(
    textToType,
    interKeyStrokeDurationInMs
) {
    const [currentPosition, setCurrentPosition] = useState(0);
    const currentPositionRef = useRef(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentPosition((value) => value + 1);
            currentPositionRef.current += 1;
            if (currentPositionRef.current > textToType.lenght) {
                clearInterval(intervalId);
            }
        }, interKeyStrokeDurationInMs);
        return () => {
            clearInterval(intervalId);
            currentPositionRef.current = 0;
            setCurrentPosition(0);
        }
    }, [interKeyStrokeDurationInMs, textToType]);
    return textToType.substring(0, currentPosition);
}