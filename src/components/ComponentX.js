import React from 'react'
import ComponentY from './ComponentY'

export const UserName = React.createContext()
export const ChannelName = React.createContext()

function ComponentX() {

  return (
    <div>
      <UserName.Provider value={'Viswas'}>
        <ChannelName.Provider value={'Codevolution'}>
          <ComponentY />
        </ChannelName.Provider>
      </UserName.Provider>
    </div>
  )
}

export default ComponentX