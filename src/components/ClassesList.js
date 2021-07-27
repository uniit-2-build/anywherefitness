import React from 'react';
import ClassCard from "./ClassCard";

export default function CLassesList(props) {
    const { classes } = props;
    return (
        <ul>
            {classes.map(c => <ClassCard data={c} key={c.id}/>)}
        </ul>
    )
}
