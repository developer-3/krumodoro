import { useEffect, useState } from "react";
import Clock from "./Clock";

export default function Time(props: { time: number; active: boolean, finished: CallableFunction, paused: boolean }) {
    const [active, setActive] = useState(props.active);
    const [remaining, setRemaining] = useState(props.time);
  
    const [minutes, setMinutes] = useState(Math.floor(props.time / 60));
    const [seconds, setSeconds] = useState(props.time % 60);
    
    useEffect(() => {
        if (remaining <= -1)
            return;
        setActive(props.active);
    }, [props.active])
    
    useEffect(() => {
        if (props.paused) {
            return;
        }
        if (remaining <= -1) {
            props.finished();
            setActive(false);
            setRemaining(props.time);
        }
        let interval = 0;
        if (active) {
            interval = window.setInterval(() => {
                setRemaining((remaining) => remaining - 1);
                setMinutes(Math.floor(remaining / 60));
                setSeconds(remaining % 60);
            }, 1000);
        } else if (!active && remaining !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [remaining, active, props.paused]);
  
    return (
      <div className="w-1/2 flex items-center justify-start">
        <Clock paused={props.paused} active={active} minutes={minutes} seconds={seconds} />
      </div>
    );
  }
  