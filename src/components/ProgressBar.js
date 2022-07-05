import React from 'react'

export default function ProgressBar(props) {
  return <progress value={props.value} max='60'></progress>
}
