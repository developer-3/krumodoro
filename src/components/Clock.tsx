interface ClockProps {
    paused: boolean,
    active: boolean,
    minutes: number,
    seconds: number
}

export default function Clock(props: ClockProps) {
    if (props.active) {
        if (props.paused) {
            return (
                <p className="text-[17vw] font-bold text-timer-paused-primary">
                    {props.minutes >= 10 ? 
                        props.minutes 
                    : 
                        <span className="text-timer-paused-secondary">0
                            { props.minutes != 0 ? 
                                <span className="text-timer-paused-primary">{props.minutes}</span> 
                                : 
                                <span className="text-timer-paused-secondary">{props.minutes}</span>
                                }
                        </span> 
                    }
                    :
                    {props.seconds >= 10 ? props.seconds : "0" + props.seconds}
                </p> 
            )
        }
        return (
            <p className="text-[17vw] font-bold text-timer-active-primary">
                    {props.minutes >= 10 ? 
                        props.minutes 
                    : 
                        <span className="text-timer-active-secondary">0
                            { props.minutes != 0 ? 
                                <span className="text-timer-active-primary">{props.minutes}</span> 
                                : 
                                <span className="text-timer-active-secondary">{props.minutes}</span>
                                }
                        </span> 
                    }
                    :
                    {props.seconds >= 10 ? props.seconds : "0" + props.seconds}
                </p> 
        )
    }

    return (
        <p className="text-[17vw] font-bold text-timer-inactive-primary">
          {props.minutes >= 10 ? props.minutes : "0" + props.minutes }
          :
          {props.seconds >= 10 ? props.seconds : "0" + props.seconds}
        </p>
    )
}