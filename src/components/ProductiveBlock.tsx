import { useEffect, useState } from "react"

export default function ProductiveBlock(props: {incomplete: boolean}) {

    const [style, setStyle] = useState("");

    useEffect(() => {
        if (!props.incomplete) {
            setStyle("w-[2vw] h-5/6 bg-gray-300 rounded-md");
        }
        else {
            setStyle("w-[2vw] h-5/6 bg-yellow-400 rounded-md");
        }
    }, [props.incomplete])

    return (
        <div className={style}></div> 
    )
}