import React from "react";
import Layout from "../../components/Layout";

type Props = {
    title: string;
    date: string;
    slug: string;
    author?: string;
    tags?: string[];
    description?: string;
    children: React.ReactNode;
}

export default function Notes(props: Props) {
    return (
        <Layout>
            <div>
                <h1>Notes</h1>
                <p>
                    this is notes
                </p>
            </div>
        </Layout>
    )
}
