import React from "react";
import ReactDOM from "react-dom";

import {
  Columns,
  Column,
  Container,
  Level,
  LevelItem,
  LevelLeft,
  LevelRight,
  Media,
  MediaContent,
  MediaLeft,
  MediaRight,
  Hero,
  HeroBody,
  HeroHead,
  HeroFoot,
  Control,
  Help,
  Input,
  Label,
  TextArea,
  Box,
  Button,
  Section,
  Icon,
  Select
} from "./react.bulma";

function App() {
  return (
    <React.Fragment>
      <Hero fullheight primary>
        <HeroHead>
          <Level mobile2>
            <LevelLeft>
              <LevelItem>
                <Select options={["asd", "ASD"]} multiple size={1} />
              </LevelItem>
            </LevelLeft>
            {/* <LevelItem>What</LevelItem> */}
          </Level>
        </HeroHead>
        <HeroBody>Testing</HeroBody>
      </Hero>
      <Section>
        <Container fluid>
          <Button value="Test" danger large />
        </Container>
      </Section>
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
