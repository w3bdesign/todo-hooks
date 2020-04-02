import React from 'react';
import { Col, DatePicker, Form } from 'antd';

// <DatePicker onChange={onChangeDate} />

const onChangeDate = (_,dateString, setForm ) => {
  console.log('Date change!');  
  console.log(dateString); 
  console.log(setForm); 
};

export const Calendar = ({setForm}) => (
  <Col>
    <Form.Item label="Date picker">
      <DatePicker onChange={(_, dateString) => setForm(dateString)} />
    </Form.Item>
  </Col>
);
