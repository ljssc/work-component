import {Card} from "./Card";
import React from 'react'; 
import cards from '../data.json';

export function Set() {
    const [step, setStep] = React.useState(0);
    return (
        <div >
            <h2>Set name</h2>
            <Card front={cards[step].front} back={cards[step].back}/> 
            <div>Controls</div>
        </div>
    );
}