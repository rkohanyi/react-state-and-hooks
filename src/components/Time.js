import { useState, useEffect } from 'react'

let startCount = 0
let stopCount = 0

function Time({ color, timeZone }) {
    const [datetime, setDatetime] = useState(null)

    useEffect(() => {
        console.log("startCount", startCount++)

        async function getTime() {
            const response = await fetch(`http://worldtimeapi.org/api/timezone/${timeZone}`)
            const json = await response.json()
            setDatetime(json.datetime.slice(11, 19))
        }

        getTime()
        return () => {
            setDatetime(null)
            console.log("stopCount", stopCount++)
        }
    }, [timeZone])

    return <>
        <h1 style={{ backgroundColor: color }}>{timeZone}</h1>
        <h2>{datetime ? datetime : 'Loading ...'}</h2>
    </>
}

export default Time
