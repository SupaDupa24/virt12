import React from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import './Canvas.module.css';

export const Canvas = () => {
    const { width, height } = useWindowSize()
        return (
            <Confetti id='confetti' run={true} width={width} height={2000} recycle={true} numberOfPieces={500} />
                
        )
    }