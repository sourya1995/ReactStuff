import React from 'react'
import useExpanded from './useExpanded.js'
import './App.css'
import useEffectAfterMount from './useEffectAfterMount.js'

function App () {
    const { expanded, toggle } = useExpanded(true)
    useEffectAfterMount(
        () => {
            console.log('Yay! button clicked!');
        }, [expanded]
    )
    return (
      <div style={{ marginTop: '3rem' }}>
        <button {...getTogglerProps({
            id: 'my-btn-id',
            'aria-label': 'custom toggler',
            onClick: customClickHandler
        })}>Click to view awesomeness...</button>
        {expanded ? <p>{'😎'.repeat(50)}</p> : null}
      </div>
    )
}


export default App