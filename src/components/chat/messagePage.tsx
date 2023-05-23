import React from 'react'
import { Message } from '../../store/reducers/conunterSlice'
import './messagePage.scss'

function MessagePage(props: { historyMessages: Message[] }) {
  return (
    <div className="messages">
      {props.historyMessages.map((item) => (
        <div className={`message ${item.type}`}>{item.textMessage}</div>
      ))}
    </div>
  )
}

export default MessagePage
