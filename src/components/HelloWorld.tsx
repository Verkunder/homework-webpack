import React, {FC} from 'react';

interface IProps {
    text: string;
}

const HelloWorld: FC<IProps> = ({text}) => {
    return (
        <div>
            <h1>{text}</h1>
        </div>
    );
};

export default HelloWorld;