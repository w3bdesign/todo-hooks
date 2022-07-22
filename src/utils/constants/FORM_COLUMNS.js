import React from "react";

import { Complete } from "../../components/Complete/Complete.component";
import { Delete } from "../../components/Delete/Delete.component";
import { Title } from "../../components/Title/Title.component";

export const FORM_COLUMNS = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    filters: [
      {
        text: "Hide Completed",
        value: "hide",
      },
    ],
    onFilter: (_, record) => record.completed === "false",
    render: (text, record) => {
      return <Title record={record}>{text}</Title>;
    },
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    render: (text, record) => {
      return <Title record={record}>{text}</Title>;
    },
  },
  {
    title: "Action",
    key: "action",
    dataIndex: "action",
    render: (_, record) => {
      return (
        <>
          <Complete record={record} />
          <Delete record={record} />
        </>
      );
    },
  },
];
