export const shadow = () => {
  return (`
    -webkit-box-shadow: 3px 6px 10px 0px rgba(0,0,0,0.41);
    -moz-box-shadow: 3px 6px 10px 0px rgba(0,0,0,0.41);
    box-shadow: 3px 6px 10px 0px rgba(0,0,0,0.41);
  `)
}

export function postitionFixed(top, left, right, bottom) {
  return (`
    position: fixed;
    top: ${top};
    left: ${left};
    right: ${right};
    bottom: ${bottom};
  `)
}

export const marginLeftRight = () => {
  return (`
    margin-left: 160px;
    margin-right: 160px;
  `)
}

// export const MaxWidhtBig = () => {
//   return (`
//     max-width: 1100px;
//   `)
// }

export const StandardSection = () => {
  return(`
    display: flex;
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
  `)
}