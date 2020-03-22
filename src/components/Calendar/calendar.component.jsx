import React from 'react';
import { DatePicker } from 'antd';

const onChangeDate = dateString => {
  console.log(dateString);
};

const Calendar = () => {
  return <DatePicker onChange={onChangeDate} />;
};

export default Calendar;
