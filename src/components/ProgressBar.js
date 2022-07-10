import React from 'react'
import '../styles/progressBar.css'
export default function ProgressBar(props) {
  return <progress value={props.value} max='60'></progress>
}
