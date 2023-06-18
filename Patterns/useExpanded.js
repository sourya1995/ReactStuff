import { useCallback, useMemo, useState } from 'react'

const callFunctionsInSequence = (...fns) => (...args) => 
    fns.forEach(fn => fn && fn(...args));

export default function useExpanded(initialExpanded = false){
    const [expanded, setExpanded] = useState(initialExpanded);
    const resetRef = useRef(0)
    const [resetDep, setResetDep] = useState(0)
    const reset = useCallback(
        () => {
            setExpanded(initialExpanded)
            ++resetRef.current
        },
        [initialExpanded]
    )
    const toggle = useCallback(
        () => setExpanded(prevExpanded => !prevExpanded),
        []
    )

    const getTogglerProps = useCallback(
        ({ onClick, ...customProps }) => ({
           
            'aria-expanded': expanded,
            onClick: callFunctionsInSequence(toggle, onClick),
            ...customProps
        }),
        [toggle, expanded]
    )

    const value = useMemo(() => ({ expanded, toggle, getTogglerProps, reset, resetDep: resetRef.current }), [expanded, toggle, getTogglerProps, reset, resetDep])

    return value
}