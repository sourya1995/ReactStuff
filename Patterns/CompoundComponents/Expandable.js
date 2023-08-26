import React, { createContext, useState, useCallback, useRef, useEffect, useMemo } from 'react';
import './Expandable.css'
import Header from './Header';
export const ExpandableContext = createContext();
const { Provider } = ExpandableContext;

const Expandable = ({ children, onExpand, className = '', shouldExpand,  ...otherProps }) => {
    const isExpandControlled = shouldExpand !== undefined
    const [expanded, setExpanded] = useState(false);
    const toggle = useCallback(() => setExpanded(prevExpanded => !prevExpanded), []);
    const getToggle = isExpandControlled ? onExpand : toggle
    const componentJustMounted = useRef(true)
    useEffect(
        () => {
            if (!componentJustMounted && !isExpandControlled) { //current value is retrieved 
                onExpand(expanded)
                componentJustMounted.current = false;
            }
            
        }, [expanded, onExpand, isExpandControlled]
    ); //set current value - which will remain constant
    const value = useMemo(() => ({ expanded: getState, toggle: getToggle }), [getState, getToggle]);
    const getState = isExpandControlled ? shouldExpand : expanded
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