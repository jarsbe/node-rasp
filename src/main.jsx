import React, { Component } from "react"
import ReactDOM from "react-dom"

class Comp extends React.Component {
  render() {
    return (
      <div>
        Hello From React
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', render)

function render() {
  ReactDOM.render(
    <Comp />,
    document.getElementById("app")
  )
}
