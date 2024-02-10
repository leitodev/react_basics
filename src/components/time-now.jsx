import { useEffect, useState } from "react";

function TimeNow() {
    const [now, setNow] = useState(new Date());

    //  Example how to get rid of memory leak
    useEffect(() => {
        const interval = setInterval(() => setNow(new Date()), 1000);
        return () => { // after component remove clear interval!
            clearInterval(interval)
        }
    });

    

    return <h3 id="timeNow">{now.toLocaleTimeString()}</h3>
}

export default TimeNow;