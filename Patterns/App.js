import React from 'react'
import useExpanded from './useExpanded.js'
import './App.css'
import useEffectAfterMount from './useEffectAfterMount.js'

function App () {
    const { expanded, toggle } = useExpanded()
    useEffectAfterMount(
        () => {
            console.log('Yay! button clicked!');
        }, [expanded]
    )
    return (
      <div style={{ marginTop: '3rem' }}>
        <button onClick={toggle}>Click to view awesomeness...</button>
        {expanded ? <p>{'😎'.repeat(50)}</p> : null}
      </div>
    )
}


export default App