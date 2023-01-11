import moment from "moment";

export const useLectiveYear = () => {
    const month = moment().format('MM');
    const lectiveYear = new Date().getFullYear();
    if (month === '01') return lectiveYear;
    else return lectiveYear + 1;
}
