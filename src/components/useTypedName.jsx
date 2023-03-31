import React, { useEffect, useState } from 'react'

const Phase = {
    Typing : '',
    Pausing: '',
    Deleting: ''
}
 
const TYPING_INTERVAL = 150
const PAUSE_MS = 500
const DELETING_INTERVAL = 50

export const useTypedName = (careers) => {
    const [phase, setPhase] = useState(Phase.Typing)
  const [typedName, setTypedName] = useState('')
  useEffect(() => {
    switch(phase) {
        case Phase.Typing: {
            const nextTypedName = careers[0].slice(0, typedName.length + 1   )
          
            if (nextTypedName === typedName) {
                setPhase(Phase.Pausing)
                return
            }
          
            const timeout =  setTimeout(() => {
                  setTypedName(nextTypedName)
              }, TYPING_INTERVAL)
          
              return () => clearTimeout(timeout)
        }
        case Phase.Deleting: {
            
            if (!typedName) {
                setPhase(Phase.Typing)
                return
            }
            const nextRemaining = careers[0].slice(0, typedName.length - 1   )
          
            const timeout =  setTimeout(() => {
                  setTypedName(nextRemaining)
              }, DELETING_INTERVAL)
          
              return () => clearTimeout(timeout)
        }
        case Phase.Pausing:
        default: 
        const timeout =  setTimeout(() => {
                  setPhase(Phase.Deleting)
              }, PAUSE_MS )
          
              return () => clearTimeout(timeout)
    }
  }, [careers, typedName, phase])

  return typedName 
}
