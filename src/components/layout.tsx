import React, { useState } from 'react'
import Chats from './chats'
import { api, Body } from '../api/api'
import Chat from './chat/chat'
import './layout.scss'
import { API_TOKEN_INSTANCE, WA_INSTANCE } from '../api/authorization'
import { Message } from '../store/reducers/conunterSlice'

function Layout() {
  async function lastIncomingMessages(): Promise<Message[]> {
    let res = await api<Message[], Body>(
      `https://api.green-api.com/${WA_INSTANCE}/lastIncomingMessages/${API_TOKEN_INSTANCE}`,
      { method: 'GET' }
    )
    return res
  }
  async function LastOutgoingMessages(): Promise<Message[]> {
    let res = await api<Message[], Body>(
      `https://api.green-api.com/${WA_INSTANCE}/LastOutgoingMessages/${API_TOKEN_INSTANCE}`,
      { method: 'GET' }
    )
    return res
  }

  const [targetPhoneNumber, setTargetPhoneNumber] = useState<string | null>(
    null
  )

  let targetChat: Function = (callNumber: string): void => {
    setTargetPhoneNumber(callNumber)
  }

  return (
    <div className="layout">
      <Chats cb={targetChat} />
      {targetPhoneNumber != null ? (
        <Chat activePhoneNumber={targetPhoneNumber} />
      ) : (
        <div>null targetPhoneNumber</div>
      )}
    </div>
  )
}

export default Layout
