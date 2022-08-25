import React from "react";
import { Layout } from "../../../components/Layout";
import TableauEditor from "../../../components/TableauEditor";
import { PAGE_IDS } from "../../../constants/pageIds";

export const JusticeAndEquity = () => {
  return (
    <Layout title={null}>
      <TableauEditor
        initialValue={initialValue}
        storageId={PAGE_IDS.JUSTICE_AND_EQUITY}
      />
    </Layout>
  );
};

const initialValue = [
  {
    type: "paragraph",
    children: [
      {
        text: "",
      },
    ],
  },
];
