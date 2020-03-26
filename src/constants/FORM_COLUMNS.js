import React from 'react';

import { Complete } from '../components/Complete/Complete.component';
import { Delete } from '../components/Delete/Delete.component';
import { Title } from '../components/Title/Title.component';

export const FORM_COLUMNS = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render: (text, record) => {
      return <Title>{text}</Title>;
    }
  },

  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date'
  },

  {
    title: 'Action',
    key: 'action',
    dataIndex: 'action',
    render: (text, record) => {
      return (
        <>
          <Complete text={text} record={record} />
          {' | '}
          <Delete text={text} record={record} />
        </>
      );
    }
  }
];
