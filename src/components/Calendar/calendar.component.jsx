import React from 'react';
import { Col, DatePicker, Form } from 'antd';

const onChangeDate = dateString => {
  console.log('Date change!');
  console.log(dateString);
};

export const Calendar = () => (
  <Col>
    <Form.Item label="Date picker">
      <DatePicker onChange={onChangeDate} />
    </Form.Item>
  </Col>
);
