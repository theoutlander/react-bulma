import '@fortawesome/fontawesome-free/css/all.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {
	BreadCrumb,
	Box,
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
	Title,
	Panel,
	PanelBlock,
	PanelHeading,
	PanelTabs,
	Pagination,
	PaginationEllipses,
	PaginationPrevious,
	PaginationNext,
	PaginationLink,
	PaginationList,
	Navbar,
	NavbarBrand,
	NavbarDropdown,
	NavbarEnd,
	NavbarStart,
	NavbarLink,
	NavbarBurger,
	NavbarItem,
	NavbarMenu,
	Card,
	CardContent,
	CardFooterItem,
	CardFooter,
	CardHeader,
	CardImage,
	Column,
	Columns,
	Content,
	Control,
	Delete,
	MessageBody,
	MessageHeader,
	MenuList,
	Message,
	MenuLabel,
	Menu,
	Media,
	MediaContent,
	MediaLeft,
	MediaRight,
	MenuItem,
	TextArea,
	Tile,
	Icon,
	HeroFoot,
	Help,
	Footer,
	Input,
	Label
} from './react.bulma';

function App() {
	return (
		<React.Fragment>
			<Hero fullHeightWithNavbar>
				<HeroBody>
					<Title>This</Title>
					<SubTitle>asdasd</SubTitle>
				</HeroBody>
			</Hero>
		</React.Fragment>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
