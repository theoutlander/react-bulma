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
  HeroFoot
} from "./react.bulma";

function App() {
  return (
    <Container fluid>
      <Hero primary link fullheightWithNavbar>
        <HeroBody>asdasdasd</HeroBody>
      </Hero>
      <Media>
        <MediaLeft>
          <p class="image is-64x64">
            <img src="https://bulma.io/images/placeholders/128x128.png" />
          </p>
        </MediaLeft>
        <MediaContent>
          <div class="content">
            <p>
              <strong>John Smith</strong> <small>@johnsmith</small>{" "}
              <small>31m</small>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
              non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </div>
          <nav class="level is-mobile">
            <div class="level-left">
              <a class="level-item">
                <span class="icon is-small">
                  <i class="fas fa-reply" />
                </span>
              </a>
              <a class="level-item">
                <span class="icon is-small">
                  <i class="fas fa-retweet" />
                </span>
              </a>
              <a class="level-item">
                <span class="icon is-small">
                  <i class="fas fa-heart" />
                </span>
              </a>
            </div>
          </nav>
        </MediaContent>
        <MediaRight>
          <button class="delete" />
        </MediaRight>
      </Media>

      <Level mobile>
        <LevelLeft>Left</LevelLeft>
        <LevelRight>Right</LevelRight>
      </Level>

      <Level mobile>
        <LevelItem centered>
          <div>
            <p className="heading">Tweets</p>
            <p className="title">3,456</p>
          </div>
        </LevelItem>
        <LevelItem>Item 2</LevelItem>
      </Level>
      <Columns centered vCentered>
        <Column offset={0} width={5} offsetThreeQuartersMobile2>
          <Columns
            centered
            vCentered
            desktopGap={1}
            mobileGap={10}
            widescreenGap={2}
            fullhdGap={3}
            tabletGap={4}
            mobile
          >
            <Column>
              <p className="notification is-danger">
                Second columnSecond columnSecond columnSecond columnSecond
                columnSecond columnSecond column
              </p>
            </Column>
          </Columns>
        </Column>
        {/* <Column width={2}>TEST</Column>
      <Column offsetOneThirdMobile>TEST</Column> */}
      </Columns>
    </Container>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
