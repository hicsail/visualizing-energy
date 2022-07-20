import React from "react";
import { Layout } from "../../../components/Layout";
import TableauEditor from "../../../components/TableauEditor";

export const Generation = () => {
    return (
        <Layout title={null}>
            <TableauEditor initialValue={initialValue} storageId="generation" />
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
