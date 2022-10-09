import React, {FC} from 'react';
import {IDevelopers} from "../types/type";

interface IProps {
    text: string;
}

const HelloWorld: FC<IProps> = ({text}) => {
    const developers: IDevelopers = {
        name: 'Text',
        age: 17
    }
    return (
        <div>
            <h1>{text}</h1>
            {developers.name}, {developers.age}
        </div>
    );
};

export default HelloWorld;