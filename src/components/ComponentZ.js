import React, { useContext } from 'react'
import { UserName, ChannelName } from '../components/ComponentX'
const ComponentZ = () => {
  const user = useContext(UserName)
  const channel = useContext(ChannelName)
  return (
    <div>
        Component Z <br />
        user name is- {user} and channel name is -{channel}
    </div>
  )
}

export default ComponentZ