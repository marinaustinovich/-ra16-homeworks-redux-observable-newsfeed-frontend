import dayjs from 'dayjs';
import 'dayjs/locale/ru'; 
dayjs.locale('ru');

export const formatDate = (timestamp) => {
    const date = dayjs.unix(timestamp);
    const day = date.format('D'); 
    const month = date.format('MMM'); 
    const time = date.format('H.mm'); 

    return `${day} ${month} в ${time}`;
};