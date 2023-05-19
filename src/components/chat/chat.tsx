import React, { useEffect, useState } from "react";
import MessagePage from "./messagePage";
import { api, bodyI } from "../../api/api";
import { MassangeList } from "../../store/reducers/conunterSlice";
import SetInput from "./massageInput";
import { API_TOKEN_INSTANCE, WA_INSTANCE } from "../../api/authorization";

function Chat(props: { activePhoneNumber: string }) {
  let [history, setHistory] = useState<MassangeList[]>([]);

  async function getChatHistory(callNumber: string): Promise<any> {
    if (callNumber != null) {
      let res = await api<[], bodyI>(
        `https://api.green-api.com/${WA_INSTANCE}/GetChatHistory/${API_TOKEN_INSTANCE}`,
        { method: "POST" },
        { chatId: callNumber, count: 10 }
      );
      return res;
    }
  }

  async function sendMessageText(
    text: string,
    numberPhone: string
  ): Promise<any> {
    if (text !== "") {
      let res = await api<[], bodyI>(
        `https://api.green-api.com/${WA_INSTANCE}/SendMessage/${API_TOKEN_INSTANCE}`,
        { method: "POST" },
        {
          chatId: numberPhone,
          message: text,
        }
      );
      return res;
    }
  }

  useEffect(() => {
    console.log(props.activePhoneNumber);
    const res = getChatHistory(props.activePhoneNumber);
    res.then((res) => {
      setHistory([...res]);
    });
  }, [props.activePhoneNumber]);

  return (
    <div className="chat">
      <MessagePage historyMessages={history} />
      <SetInput cb={sendMessageText} numberPhone={props.activePhoneNumber} />
    </div>
  );
}

export default Chat;
