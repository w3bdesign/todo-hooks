import React from 'react';
import { Typography } from 'antd';

const { Paragraph } = Typography;

export const Title = ({ children, record }) => {
  return (
    <Paragraph
      className={
        // Display text-decoration: line-through if TODO is completed (true)
        record.completed === 'true' ? 'true' : 'false'
      }
    >
      {children}
    </Paragraph>
  );
};
