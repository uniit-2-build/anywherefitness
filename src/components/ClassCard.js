import React from 'react'

export default function ClassCard(props) {
    const { data } = props;
    return (
        <li>
            {data.name}
        </li>
    )
}
