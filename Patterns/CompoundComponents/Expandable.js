import React, { createContext, useState, useCallback, useRef, useEffect, useMemo } from 'react';
import './Expandable.css'
import Header from './Header';
export const ExpandableContext = createContext();
const { Provider } = ExpandableContext;

const Expandable = ({ children, onExpand, className = '', ...otherProps }) => {
    const [expanded, setExpanded] = useState(false);
    const toggle = useCallback(() => setExpanded(prevExpanded => !prevExpanded), []);
    const componentJustMounted = useRef(true)
    useEffect(
        () => {
            if (!componentJustMounted.current) { //current value is retrieved 
                onExpand(expanded)
            }
            componentJustMounted.current = false;
        }, [expanded]
    ); //set current value - which will remain constant
    const value = useMemo(() => ({ expanded, toggle }), [expanded, toggle]);
    const combinedClassName = ['Expandable', className].join(' ');
    return (
        <Provider value={value}>
            <div className={combinedClassName}{...otherProps}>
                {children}
            </div>
        </Provider>
    )
}

Expandable.Header = Header
Expandable.Body = Body
Expandable.Icon = Icon

export default Expandable;