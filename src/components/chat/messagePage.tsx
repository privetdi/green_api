import React from "react";
import { MassangeList } from "../../store/reducers/conunterSlice";
import "./messagePage.scss";

function MessagePage(props: { historyMessages: MassangeList[] }) {
  return (
    <div className="messages">
      {props.historyMessages.map((item) => (
        <div className={`message ${item.type}`}>{item.textMessage}</div>
      ))}
    </div>
  );
}

export default MessagePage;
