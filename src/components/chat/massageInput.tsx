import React, { useState } from 'react'
import './massageInput.scss'

function SetInput(props: { cb: Function; numberPhone: string }) {
  let [text, setText] = useState<string>()
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
  const handlClick = () => {
    props.cb(text, props.numberPhone)
  }

  return (
    <div className="inputPage">
      <input className="input" value={text} onChange={() => onChange} />
      <button onClick={() => handlClick}>Отправить</button>
    </div>
  )
}

export default SetInput
