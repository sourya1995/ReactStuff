import { useCallback, useMemo, useState } from 'react'

const callFunctionsInSequence = (...fns) => (...args) => 
    fns.forEach(fn => fn && fn(...args));

    const internalReducer = (state, action) => {
        switch(action.type){
           case useExpanded.types.toggleExpand:
               return {
                   ...state,
                   expanded: !state.expanded
               }
           case useExpanded.types.reset:
               return {
                   ...state,
                   expanded: action.payload
               }
            case useExpanded.types.override:
                return {
                    ...state,
                    expanded: !state.expanded
                }
           default:
               throw new Error(`Unknown action ${action.type}! cannot be handled`)
           }
           
   }
export default function useExpanded(initialExpanded = false, userReducer = (s, a) => a.internalChanges){
    const initialState = {expanded: initialExpanded}
    //const [expanded, setExpanded] = useState(initialExpanded);
    const resolveChangesReducer = (currentInternalState, action) => {
        const internalChanges = internalReducer(currentInternalState, action)
        const userChanges = userReducer(currentInternalState, {
            ...action,
            internalChanges
        })
        return userChanges
    }
    
    const [{ expanded }, setExpanded] = useReducer(resolveChangesReducer, initialState)
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
        () => setExpanded({type: useExpanded.types.toggleExpand }),
        []
    )

    const override = useCallback(
        () => setExpanded({type: useExpanded.types.override}),
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

    const value = useMemo(() => ({ expanded, toggle, getTogglerProps, reset, resetDep: resetRef.current, override }), [expanded, toggle, getTogglerProps, reset, resetDep, override])

    return value
}

useExpanded.types = {
    toggleExpand: 'EXPAND',
    reset: 'RESET',
    override: 'OVERRIDE'
}