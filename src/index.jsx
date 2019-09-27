import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.css';

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
	RadioOption,
	Content,
	Tags,
	Tag,
	TagsGroup,
	Delete,
	Title,
	SubTitle,
	BreadCrumbs,
	BreadCrumb
} from './react.bulma';

function App() {
	return (
		<React.Fragment>
			<Hero fullheight>
				<HeroHead primary>
					<Container fluid primary>
						<Level mobile>
							<LevelLeft>
								<LevelItem key="item">
									<Button key="btn" icon="fa-bold">
										Testttt
									</Button>
									<Select
										key="select"
										options={[ 'asd', 'ASD' ]}
										multiple2
										hasIconsLeft
										icon="fa-bath"
										size={0}
										large
									/>
								</LevelItem>
							</LevelLeft>
							<LevelRight>
								<LevelItem>
									<Checkbox disabled={false}>TEST</Checkbox>
									<Radio name="THISTEST">
										<RadioOption>TEST123</RadioOption>
										<RadioOption disabled>TEST123</RadioOption>
									</Radio>
								</LevelItem>
							</LevelRight>
						</Level>
					</Container>
					<Container>
						<BreadCrumbs large centered dotSeparator>
							<BreadCrumb icon="fa-globe">TEST</BreadCrumb>
							<BreadCrumb active>Crumb2</BreadCrumb>
						</BreadCrumbs>
					</Container>
				</HeroHead>
				<HeroBody>
					<Container>
						<Title size={1}>What is this</Title>
						<SubTitle size={3}>What is this</SubTitle>
					</Container>
					{/* <Content large>This is content</Content> */}
					<Section>
						<Tag delete black>
							React
						</Tag>
					</Section>
					<Section>
						<Tags multiline>
							<Tag>React</Tag>
							<Tag>React</Tag>
							<Tag>React</Tag>
							<Tag>React</Tag>
							<Tag>React</Tag>
							<Tag>React</Tag>
							<Tag>React</Tag>
							<Tag primary>Is Primary</Tag>
						</Tags>
						<Tags addons>
							<Tag danger>React</Tag>
							{/* <Delete /> */}
							<a class="tag is-delete" />
						</Tags>
						<TagsGroup multiline>
							<Tags addons>
								<Tag>React</Tag>
								<Tag primary>Is Primary</Tag>
							</Tags>
							<Tags addons>
								<Tag>React</Tag>
								<Tag primary>Is Primary</Tag>
							</Tags>{' '}
							<Tags addons>
								<Tag>React</Tag>
								<Tag primary>Is Primary</Tag>
							</Tags>{' '}
							<Tags addons>
								<Tag>React</Tag>
								<Tag primary>Is Primary</Tag>
							</Tags>{' '}
							<Tags addons>
								<Tag>React</Tag>
								<Tag primary>Is Primary</Tag>
							</Tags>
							<Tags addons>
								<Tag>React</Tag>
								<Tag primary>Is Primary</Tag>
							</Tags>
						</TagsGroup>
					</Section>
				</HeroBody>
			</Hero>
			<Section>
				<Container fluid>
					<Button value="Test" danger large />
				</Container>
			</Section>
		</React.Fragment>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
