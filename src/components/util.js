let viewports = [
	'mobile',
	'desktop',
	'widescreen',
	'fullhd',
	'tablet'
];
let ignoreList = [
	'children',
	'width',
	'offset',
	'gap',
	'fixedSize'
];
let gapList = [
	'mobileGap',
	'desktopGap',
	'widescreenGap',
	'tabletGap',
	'fullhdGap'
];

function mapClasses(props) {
	let keys = Object.keys(props);

	let filter = keys
		.filter(
			(k) =>
				// k !== "children" &&
				// k !== "width" &&
				// k !== "offset" &&
				// k !== "gap" &&
				!ignoreList.includes(k) && !viewports.includes(k) && !gapList.includes(k)
		)
		.map((k) =>
			k
				.toLowerCase()
				.replace('one', 'one-')
				.replace('two', 'two-')
				.replace('three', 'three-')
				.replace('four', 'four-')
				.replace('offset', 'offset-')
				.replace('mobile$', '-mobile')
				.replace('tablet$', '-tablet')
				.replace('desktop$', '-desktop')
				.replace('widescreen$', '-widescreen')
				.replace('fullhd$', '-fullhd')
				.replace('fullheightwithnavbar', 'fullheight-with-navbar')
		)
		.map((k) => `is-${k}`);

	if (props['gap'] !== undefined) {
		filter.push(`is-${props['gap']}`);
	}

	if (props['offset'] !== undefined) {
		filter.push(`is-${'offset'}-${props['offset']}`);
	}

	if (props['width'] !== undefined) {
		filter.push(`is-${props['width']}`);
	}

	let foundGap = false;
	gapList.forEach((g) => {
		if (props[g]) {
			foundGap = true;
			let viewport = g.replace('Gap', '');
			filter.push(`is-${props[g]}-${viewport}`);
		}
	});
	if (foundGap) {
		filter.push(`is-variable`);
	}

	viewports.forEach((v) => {
		if (props[v]) {
			filter.push(`is-${v}`);
		}
	});

	console.log(filter.join(' '));
	return filter.join(' ');
}

function mapComposite(props) {
	let filter = props.filter();

	return filter.join(' ');
}

// export { mapClasses, mapComposite };
