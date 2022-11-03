import React from 'react';
import HelloWorld from './HelloWorld.tsx';

import ChetoTam from '../assets/169961-lev_chernyj-lev-chernyy-poster-freska-1920x1080.jpg';

const App = () => {
    return (
        <div>
            <img src={ChetoTam} alt="12312312" />
            <HelloWorld text={'Hello World!'} />
        </div>
    );
};

export default App;
