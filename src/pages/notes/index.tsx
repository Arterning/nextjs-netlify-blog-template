import React from "react";

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
        <div>
            <h1>Notes</h1>
            <p>
                this is notes
            </p>
        </div>
    )
}
