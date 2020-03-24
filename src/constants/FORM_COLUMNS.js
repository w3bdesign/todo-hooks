import React from 'react';
import { Complete } from '../components/Complete/Complete.component';

export const FORM_COLUMNS = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title'
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
    render: (_, record) => {
      return (
        <>
          <Complete />
        </>
      );
    }
  }
];
