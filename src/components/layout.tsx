import React, { useState } from "react";
import Chats from "./chats";
import { api, bodyI } from "../api/api";
import Chat from "./chat/chat";
import "./layout.scss";
import { API_TOKEN_INSTANCE, WA_INSTANCE } from "../api/authorization";

function Layout() {
  async function lastIncomingMessages(): Promise<any> {
    let res = await api<[], bodyI>(
      `https://api.green-api.com/${WA_INSTANCE}/lastIncomingMessages/${API_TOKEN_INSTANCE}`,
      { method: "GET" }
    );
    return res;
  }
  async function LastOutgoingMessages(): Promise<any> {
    let res = await api<[], bodyI>(
      `https://api.green-api.com/${WA_INSTANCE}/LastOutgoingMessages/${API_TOKEN_INSTANCE}`,
      { method: "GET" }
    );
    return res;
  }

  const [targetPhoneNumber, setTargetPhoneNumber] = useState<string | null>(null);

  let targetChat: Function = (callNumber: string): void => {
    setTargetPhoneNumber(callNumber);
  };

  return (
    <div className="layout">
      <Chats cb={targetChat} />
      {targetPhoneNumber != null ? (
        <Chat activePhoneNumber={targetPhoneNumber} />
      ) : (
        <div>null targetPhoneNumber</div>
      )}
    </div>
  );
}

export default Layout;
