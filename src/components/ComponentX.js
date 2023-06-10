import React from 'react'
import ComponentY from './ComponentY'

function ComponentX() {
  const userName = React.createContext()
  const channelName = React.createContext()
  return (
    <div>
      <channelName.Provider value={'Codevolution'}>
        <userName.Provider value={'Viswas'}>
          <ComponentY/>
        </userName.Provider>
      </channelName.Provider>
    </div>
  )
}

export default ComponentX