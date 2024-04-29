import Reac, {useState, useEffect} from "react"
import './index.css' ;
function DigitalClock(){
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        //interval that update evry second
        const intervalid = setInterval(() => {
            setTime(new Date())
        }, 1000);
        // add cleanup | clear interval
        return () => {
            clearInterval(intervalid);
        }
    }, [])

    function FormatTime(){
        //get hrs min & sec of time
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const maridiem = hours >= 12 ? "PM" : "AM";

        // convert from millitary time
        hours = hours % 12 || 12;

return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${maridiem}`;
    }
    function padZero(number){
        return (number < 10 ? "0" : "") + number;
    }
    return(
    <div className="clock-container">
        <h1>CHECK THE TIME</h1>
        <div className="clock">
            <span>{FormatTime()}</span>
        </div>
    </div>)
}
export default DigitalClock