import React from 'react';
import { Popconfirm } from 'antd';

import { HandleComplete } from '../components/Form/HandleComplete';

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
      //const findMe = element => element.key === record.key;
      //const foundCompleted = completed.find(findMe) ?? 'false';

      return (
        // Add className to span so we can hide action if completed
        <>
          <a
            href="#complete"
            onClick={() => HandleComplete(record.key, record.dataIndex)}
          >
            <span>Complete | </span>
          </a>

          <Popconfirm title="Are you sure you want to delete?">
            <a href="#delete"> Delete </a>
          </Popconfirm>
        </>
      );
    }
  }
];
