import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setNotification } from "../reducers/notifyReducer"


const Notification = () => {
  const message = useSelector(state => state.notification.message)
  console.log('message: ', message)
  // const notification = useSelector(state => state.notification.message)

  if (!message) {
    return null;
  }

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  return (
    <div style={style}>
      {message}
    </div>
  )
}

export default Notification