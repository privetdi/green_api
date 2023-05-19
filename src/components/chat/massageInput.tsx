import React, { useState } from "react";
import "./massageInput.scss";

function SetInput(props: {cb: Function, numberPhone: string}) {
  let [text, setText] = useState<any>();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target != null) {
      setText(e.target.value);
    }
  };
  const handlClick = () =>{
    console.log('start message')
    props.cb(text, props.numberPhone)
    console.log(text)
  }

  return (
    <div className="inputPage">
      <input
        className="input"
        value={text}
        onChange={(e) => onChange(e)}
      />
      <button onClick={()=> handlClick()}>Отправить</button>
    </div>
  );
}

export default SetInput;
