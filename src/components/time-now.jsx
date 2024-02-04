import { useState } from "react";

function TimeNow() {
    const [now, setNow] = useState(new Date());

    setInterval(() => setNow(new Date()), 1000);

    return <h3 id="timeNow">{now.toLocaleTimeString()}</h3>
}

export default TimeNow;