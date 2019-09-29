import '@fortawesome/fontawesome-free/css/all.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {
	BreadCrumb,
	BreadCrumbs,
	Button,
	Checkbox,
	Container,
	Dropdown,
	DropdownItem,
	Hero,
	HeroBody,
	HeroHead,
	Level,
	LevelItem,
	LevelLeft,
	LevelRight,
	Modal,
	ModalCard,
	ModalCardBody,
	ModalCardFooter,
	ModalCardHeader,
	Radio,
	RadioOption,
	Section,
	Select,
	SubTitle,
	Tag,
	Tags,
	TagsGroup,
	Title
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
					<Container hide>
						<Modal>
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
						</Modal>

						<ModalCard>
							<ModalCardHeader>This is the header</ModalCardHeader>
							<ModalCardBody>This is the body</ModalCardBody>
							<ModalCardFooter>This is the footer</ModalCardFooter>
						</ModalCard>
					</Container>
					<Container>
						<Title size={1}>What is this</Title>
						<SubTitle size={3}>What is this</SubTitle>
					</Container>
					<Container>
						<Dropdown title="WHAT" up>
							<DropdownItem>
								<p>
									You can insert <strong>any type of content</strong> within the dropdown menu.
								</p>
							</DropdownItem>
						</Dropdown>
					</Container>
					<Container hide>
						<div className="card">
							<div className="card-content">
								<p className="title">
									“There are two hard things in computer science: cache invalidation, naming things,
									and off-by-one errors.”
								</p>
								<p className="subtitle">Jeff Atwood</p>
							</div>
							<footer className="card-footer">
								<p className="card-footer-item">
									<span>
										View on{' '}
										<a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
									</span>
								</p>
								<p className="card-footer-item">
									<span>
										Share on <a href="#">Facebook</a>
									</span>
								</p>
							</footer>
						</div>
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
							<a className="tag is-delete" />
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
