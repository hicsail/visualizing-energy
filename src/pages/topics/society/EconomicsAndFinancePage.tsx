import React from "react";
import { Layout } from "../../../components/Layout";
import TableauEditor from "../../../components/TableauEditor";

export const EconomicsAndFinance = () => {
    return (
        <Layout title={null}>
            <TableauEditor
                initialValue={initialValue}
                storageId="economicsandfinance"
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
