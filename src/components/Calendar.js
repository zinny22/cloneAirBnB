import React from "react";
import { useState } from "react";
import moment from 'moment';
import { Grid } from "../elements";

const Calender = () => {
    const [getMoment, setMoment] = useState(moment());
    const today = getMoment //today == moment()
    const nextMonth = getMoment.clone().add(1, 'month')
    const firstWeek = today.clone().startOf('month').week();
    const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();
    const nextMonthFirstWeek = nextMonth.startOf('month').week()
    const nextMonthLastWeek = nextMonth.endOf('month').week() === 1 ? 53 : nextMonth.endOf('month').week();

    const calenderArr =() => {
        let result = [];
        let week = firstWeek;
        for (week; week <= lastWeek; week++) {
            result = result.concat(
                <tr key={week}>
                    {Array(7).fill(0).map((d, idx)=>{
                        let days = 
                        today.clone().startOf('year')
                             .week(week)
                             .startOf('week')
                             .add(idx, 'day');
                            return(
                                    <td key ={idx}>
                                        <span>{days.format('D')}</span>
                                    </td>
                            )
                            
                    })}
                </tr>);
        }
        return result;
    }
    const calenderArrNextMonth =() => {
        let result = [];
        let week = nextMonthFirstWeek;
        for (week; week <= nextMonthLastWeek; week++) {
            result = result.concat(
                <tr key={week}>
                    {Array(7).fill(0).map((d, idx)=>{
                        let days = 
                        nextMonth.startOf('year')
                             .week(week)
                             .startOf('week')
                             .add(idx, 'day');
                            return(
                                    <td key ={idx}>
                                        <span>{days.format('D')}</span>
                                    </td>
                            )
                            
                    })}
                </tr>);
        }
        return result;
    }

    return (
        <React.Fragment>
            <div style={{display: "flex", fontWeight: "600"}}>
            <div style={{margin : "20px"}}>
                <button onClick={()=>{setMoment(getMoment.clone().subtract(1, 'month'))}}>이전달</button>
                <span>{today.format('YYYY 년 MM 월')}</span>
                    <table style={{padding: "10px"}}>
                        <tbody>
                        {calenderArr()}
                        </tbody>   
                    </table>
            </div>
            <div style={{margin: "20px"}}>
                <span>{nextMonth.format('YYYY 년 MM 월')}</span>
                <button onClick={()=>{setMoment(getMoment.clone().add(1, 'month'))}}>다음달</button>
                    <table style={{padding:"10px"}}>
                        <tbody>
                        {calenderArrNextMonth()}
                        </tbody>
                    </table>
            </div>
            </div>
        </React.Fragment>
    )

}

export default Calender;