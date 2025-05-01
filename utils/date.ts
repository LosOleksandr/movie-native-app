import dayjs from 'dayjs'

export const getFormattedDate = (date: dayjs.Dayjs): string => {
    return dayjs(date).format('YYYY-MM-DD')
}
