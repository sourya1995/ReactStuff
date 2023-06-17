import React, { createContext, useState, useCallback, useRef, useEffect, useMemo  } from 'react';
const ExpandableContext = createContext();
const { Provider } = ExpandableContext;

const Expandable = ({children}) => {
    const [expanded, setExpanded] = useState(false);
    const toggle = useCallback(() => setExpanded(prevExpanded => !prevExpanded), []);
    const componentJustMounted = useRef(true)
    useEffect(
        () => {
            if (!componentJustMounted.current){ //current value is retrieved 
                onExpand(expanded)
            }
            componentJustMounted.current = false; 
        }, [expanded]
    ); //set current value - which will remain constant
    const value = useMemo(() => ({ expanded, toggle }), [expanded, toggle]);
    return <Provider value={value}>{children}</Provider>
}

export default Expandable;