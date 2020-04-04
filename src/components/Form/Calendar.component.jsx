import React from 'react';
import { Col, DatePicker, Form } from 'antd';

// <DatePicker onChange={onChangeDate} />

const onChangeDate = (_,dateString ) => {
  console.log('Date change!');  
  console.log(dateString); 
  
};

export const Calendar = ({setDate}) => (
  <Col>
    <Form.Item label="Date picker">
      <DatePicker onChange={(_, dateString) => setDate(dateString)} />
    </Form.Item>
  </Col>
);
