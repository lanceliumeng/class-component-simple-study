import React, { Component } from "react";
import Section from "./style/Section";
import ToggleButton from "./ToggleButton";

class SectionOne extends Component {
  render() {
    return (
      <Section>
        <ToggleButton />
      </Section>
    );
  }
}

export default SectionOne;
