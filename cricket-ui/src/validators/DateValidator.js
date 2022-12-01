const currentDate = new Date();
// const today = `${currentDate.getMonth()+1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;

let day = currentDate.getDate();
const month = currentDate.getMonth()+1;
const ZERO = '0';

const DayValidator = () => {
    if (day.toString().length === 1){
        day = ZERO + day;
    }
    return day;
}

const MonthValidator =() => {
    if(month.toString().length === 1){
        month = ZERO + month;
    }
    return month
}

const CurrentDate = ()=> {
    const todaysDate = `${MonthValidator()}/${DayValidator()}/${currentDate.getFullYear()}`;
    return todaysDate;
}

export default CurrentDate;