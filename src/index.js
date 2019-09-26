import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.css";

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
  Select,
  Checkbox,
  Radio,
  RadioOption
} from "./react.bulma";

function App() {
  return (
    <React.Fragment>
      <Hero fullheight>
        <HeroHead primary>
          <Container fluid primary>
            <Level mobile>
              <LevelLeft>
                <LevelItem>
                  <Select
                    options={["asd", "ASD"]}
                    multiple2
                    hasIconsLeft
                    icon="fa-bath"
                    size={0}
                    large
                  />
                </LevelItem>
              </LevelLeft>{" "}
              <LevelRight>
                <LevelItem>
                  <Checkbox disabled={false}>TEST</Checkbox>
                </LevelItem>
                <LevelItem>
                  <Radio name="THISTEST">
                    <RadioOption>TEST123</RadioOption>
                    <RadioOption disabled>TEST123</RadioOption>
                  </Radio>
                </LevelItem>
              </LevelRight>
            </Level>
          </Container>
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
