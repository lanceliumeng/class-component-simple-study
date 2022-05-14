import React, { Component } from "react";
import Button from "./style/Button";
import AnotherButton from "./style/AnotherButton";

class ToggleButton extends Component {
  render() {
    return (
      <>
        <Button>Show Pokemon</Button>
        <AnotherButton> Hide Pokemon</AnotherButton>
      </>
    );
  }
}

export default ToggleButton;
