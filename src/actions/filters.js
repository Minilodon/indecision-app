//SET TEXT FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

//SET SORT BY
export const sortByAmount = ()=>({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
});

export const sortByDate = ()=>({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
});

//SET START DATE
export const setStartDate = (startDate)=>({
    type: 'SET_START_DATE',
    startDate
});

//SET END DATE
export const setEndDate = (endDate)=>({
    type: 'SET_END_DATE',
    endDate
});