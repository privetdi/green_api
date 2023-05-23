import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import './chatPreview.scss'

function ChatPreview(props: { number: string; cb: Function }) {
  return (
    <div className="chatPreview" onClick={() => props.cb(props.number)}>
      +{props.number.slice(0, props.number.indexOf('@'))}
    </div>
  )
}

export default ChatPreview
