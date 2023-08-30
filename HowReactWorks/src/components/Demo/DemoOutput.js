import React from 'react';
import MyParagraph from './MyParagraph';

const DemoOutput = (props) => {
    return <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>;
};

export default React.memo(DemoOutput); 
//react should check the new value for the props that this component gets 
//and then update and revaluate components