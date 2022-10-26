import { useEffect } from "react";
import { useState } from "react";
import Button from "./Button";
import ProductiveBlock from "./ProductiveBlock";
import RestBlock from "./RestBlock";
import Timer from "./Timer";

const TWENTY_FIVE_MINUTES = 1500;
const FIVE_MINUTES = 300;

export default function Timers() {

    const [productiveActive, setProductiveActive] = useState(false);
    const [restActive, setRestActive] = useState(false);
    const [pause, setPause] = useState(false);

    const [roundCompleteAudio, setRoundCompleteAudio] = useState<HTMLAudioElement|null>(null)

    useEffect(() => {
        // set up audio
        setRoundCompleteAudio(new Audio("/round-finished.mp3"));
    }, [])

    const toggle = () => {
        setProductiveActive(!productiveActive);
    }

    const pauseTimer = () => {
        setPause(!pause);
    }

    function productiveFinished() {
        setProductiveActive(false);
        setRestActive(true);
        if (roundCompleteAudio)
            roundCompleteAudio.play();
    }

    function restFinished() {
        setRestActive(false);
        setProductiveActive(true);
        if (roundCompleteAudio)
            roundCompleteAudio.play();
    }


    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="flex flex-row w-full">
                <Timer time={TWENTY_FIVE_MINUTES} active={productiveActive} finished={productiveFinished} paused={pause} />
                <Timer time={FIVE_MINUTES} active={restActive} finished={restFinished} paused={pause} />
            </div>
            { productiveActive || restActive ? 
                <Button ClickHandler={pauseTimer} label={pause ? "resume" : "pause"} /> 
                : 
                <Button ClickHandler={toggle} label={"begin"} /> 
            }
            {/* <div className="flex flex-row w-full h-full">
                {[...Array(44)].map((e, i) => {
                    return <div className="w-full flex flex-col gap-1 h-full mt-2">
                            <RestBlock incomplete={false} />
                            <ProductiveBlock incomplete={false} />
                        </div>
                })}
            </div> */}
        </div>
    )
}
