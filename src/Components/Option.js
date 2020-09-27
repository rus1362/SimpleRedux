import React, { Component } from "react";

export default class Option extends Component {
  render() {
    const { name, items, onchange } = this.props;
    const onchangedproxy = (e) => {
      console.log("reached in compo", e.target.value);
      onchange(e);
    };
    return (
      <div style={{ margin: "1rem" }}>
        <label htmlFor={name}>{name + " :"}</label>
        <select onChange={onchangedproxy} style={{ 'margin-left': "1.5rem" }} name={name}>
          {items.map((i) => {
            return (
              <option key={i.value + "_item"} value={i.value}>
                {i.desc}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
