import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setNotification } from "../reducers/notifyReducer"


const Notification = () => {
  const dispatch = useDispatch()
  const {message, displayTime } = useSelector(state => state.notification.message)
  // const notification = useSelector(state => state.notification.message)

  useEffect(() => {
    if (message) {
      const notificationTimeout = setTimeout(() => {
        dispatchEvent(setNotification('', 0))
      }, displayTime)

      return () => clearTimeout(notificationTimeout)
    }
  }, [dispatch, message, displayTime])

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if (!message) {
    return null;
  }

  return (
    <div style={style}>
      {message}
    </div>
  )
}

export default Notification