import moment from "moment";

export const useLectiveYear = () => {
    const month = moment().format('MM');
    const lectiveYear = new Date().getFullYear();
    if (month === '01' || month === '02' ||
        month === '03' || month === '04' ||
        month === '05' || month === '06' ||
        month === '07') return lectiveYear;
    else return lectiveYear + 1;
}
