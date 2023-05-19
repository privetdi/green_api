import React, { ReactElement, useEffect } from "react";
import { api, bodyI } from "../api/api";
import { useDispatch } from "react-redux";
import { setListChats } from "../store/reducers/conunterSlice";
import { API_TOKEN_INSTANCE, WA_INSTANCE } from "../api/authorization";
import ChatPreview from "./chatPreview";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import "./chats.scss";

function Chats(props: { cb: Function }) {
  let messageList = useSelector((state: RootState) => state.store.chatsList);
  const dispatch = useDispatch();

  async function lastIncomingMessages(): Promise<any> {
    let res = await api<[], bodyI>(
      `https://api.green-api.com/${WA_INSTANCE}/lastIncomingMessages/${API_TOKEN_INSTANCE}?minutes=${
        7 * 24 * 60
      }`,
      { method: "GET" }
    );
    return res;
  }
  async function LastOutgoingMessages(): Promise<any> {
    let res = await api<[], bodyI>(
      `https://api.green-api.com/${WA_INSTANCE}/LastOutgoingMessages/${API_TOKEN_INSTANCE}?minutes=${
        7 * 24 * 60
      }`,
      { method: "GET" }
    );

    return res;
  }

  useEffect(() => {
    const IM = lastIncomingMessages();
    IM.then((list) => dispatch(setListChats({ chatsList: list })));
    const LM = LastOutgoingMessages();
    LM.then((list) => dispatch(setListChats({ chatsList: list })));
  }, []);

  return (
    <div className="chats">
      {Array.from(
        new Set(messageList.map((message): string => message.chatId))
      ).map(
        (item): ReactElement => (
          <ChatPreview number={item} cb={props.cb} />
        )
      )}
    </div>
  );
}

export default Chats;
