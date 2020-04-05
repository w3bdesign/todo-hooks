import React from 'react';
import { Row, Col, Button } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';

import { FirebaseContext } from '../../utils/firebase/context';

export const Google = () => {
  return (
    <Row type="flex" justify="center">
      <Col xs={12} sm={12} md={12} lg={12} xl={12}>
        <Button icon={<GoogleOutlined />} block>
          Google Login
        </Button>
        <FirebaseContext.Consumer>
          {(firebase) => {
            return <div>I've access to Firebase and render something.</div>;
          }}
        </FirebaseContext.Consumer>
      </Col>
    </Row>
  );
};
