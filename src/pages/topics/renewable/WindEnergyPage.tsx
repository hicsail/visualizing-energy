import React from "react";
import { Layout } from "../../../components/Layout";
import TableauEditor from "../../../components/TableauEditor";
import { PAGE_IDS } from "../../../constants/pageIds";

export const WindEnergy = () => {
  return (
    <Layout title={null}>
      <TableauEditor initialValue={initialValue} storageId={PAGE_IDS.WIND} />
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
