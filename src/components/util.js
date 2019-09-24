let viewports = ["mobile", "desktop", "widescreen", "fullhd", "tablet"];
let ignoreList = ["children", "width", "offset", "gap"];
let gapList = [
  "mobileGap",
  "desktopGap",
  "widescreenGap",
  "tabletGap",
  "fullhdGap"
];

function mapClasses(props) {
  let keys = Object.keys(props);

  let filter = keys
    .filter(
      k =>
        // k !== "children" &&
        // k !== "width" &&
        // k !== "offset" &&
        // k !== "gap" &&
        !ignoreList.includes(k) &&
        !viewports.includes(k) &&
        !gapList.includes(k)
    )
    .map(k =>
      k
        .toLowerCase()
        .replace("one", "one-")
        .replace("two", "two-")
        .replace("three", "three-")
        .replace("four", "four-")
        .replace("offset", "offset-")
        .replace("mobile$", "-mobile")
        .replace("tablet$", "-tablet")
        .replace("desktop$", "-desktop")
        .replace("widescreen$", "-widescreen")
        .replace("fullhd$", "-fullhd")
        .replace("fullheightwithnavbar", "fullheight-with-navbar")
    )
    .map(k => `is-${k}`);

  if (props["gap"] !== undefined) {
    filter.push(`is-${props["gap"]}`);
  }

  if (props["offset"] !== undefined) {
    filter.push(`is-${"offset"}-${props["offset"]}`);
  }

  if (props["width"] !== undefined) {
    filter.push(`is-${props["width"]}`);
  }

  let foundGap = false;
  gapList.forEach(g => {
    if (props[g]) {
      foundGap = true;
      let viewport = g.replace("Gap", "");
      filter.push(`is-${props[g]}-${viewport}`);
    }
  });
  if (foundGap) {
    filter.push(`is-variable`);
  }

  viewports.forEach(v => {
    if (props[v]) {
      filter.push(`is-${v}`);
    }
  });

  console.log(filter.join(" "));
  return filter.join(" ");
}

// function splitMap(props, term) {
//   if (!props) {
//     return "";
//   }

//   let keys = Object.keys(props);
//   // console.log("keys123:", keys);

//   let filter = keys
//     .filter(k => k !== term)
//     .filter(k => k.indexOf(term) >= 0)
//     .filter(k => k !== "children")
//     .map(k =>
//       k
//         .toLocaleLowerCase()
//         .split(term)
//         .join(`is-${term}-`)
//         .split("one")
//         .join("one-")
//         .split("two")
//         .join("two-")
//         .split("three")
//         .join("three-")
//         .split("four")
//         .join("four-")
//         .split("mobile")
//         .join("-mobile")
//         .split("tablet")
//         .join("-tablet")
//         .split("desktop")
//         .join("-desktop")
//         .split("widescreen")
//         .join("-widescreen")
//         .split("fullhd")
//         .join("-fullhd")
//     );

//   if (props[term]) {
//     filter.push(`is-${term}-${props[term]}`);
//   }

//   console.log(filter.join());
// }

export { mapClasses };
