const tvSettings1 = {
  display: {
    colors: {
      red: 80,
      green: 79,
      blue: 70,
    },
    brightness: 35,
    contrast: 55,
  },
  connections: {
    wifi: {
      connetionName: 'Telia-54654',
      connectionPassword: 's6d54g65sdf4g6',
    },
    devices: [
      { name: 'Tevelis', privateKey: '6465a654b64c45d45e454f45d45e4a' },
      { name: 'Sunelis', privateKey: '6465a656541654651654111645e4a' },
      { name: 'Mamyte', privateKey: '5444b654c6465e654e6454f45d45e4a' },
    ]
  },
  programns: {
    netflix: {
      user: {
        name: 'Serbentautas',
        surname: 'Bordiūras',
        card: {
          number: '4578 4512 4748 9789',
          cve: '541',
          expirationDate: '26/9'
        }
      }
    }
  }
};

const tvSettings2 = {
  display: {
    colors: {
      red: 88,
      green: 89,
      blue: 88,
    },
    brightness: 45,
    contrast: 77,
  },
  connections: {
    wifi: {
      connetionName: 'Meganet-3000',
      connectionPassword: '1223334444',
    },
    devices: [
      { name: 'Grabnikas-ApplePhone', privateKey: 'ab4c5d4b6da6b4b0b5c4d40' },
      { name: 'Tevelis', privateKey: '6465a654b64c45d45e454f45d45e4a' },
    ]
  },
  programns: {
    netflix: {
      user: {
        name: 'Serbentautas',
        surname: 'Bordiūras',
        card: {
          number: '4578 4512 4748 9789',
          cve: '541',
          expirationDate: '26/9'
        }
      }
    }
  }
};

const displayConnectedDevices = ({ connections }) => {
  const deviceNames = connections.devices.map(({ name }) => name);
  console.log(deviceNames);
};

displayConnectedDevices(tvSettings1);
displayConnectedDevices(tvSettings2);


const deviceColorsToHEX = ({ display }) => {
  // const red = display.colors.red;
  // const green = display.colors.green;
  // const blue = display.colors.blue;
  const { red, green, blue } = display.colors;

  const r = Math.round(red * 255 / 100).toString(16);;
  const g = Math.round(green * 255 / 100).toString(16);
  const b = Math.round(blue * 255 / 100).toString(16);

  return `#${r}${g}${b}`;
}

const hexUser1 = deviceColorsToHEX(tvSettings1);
const hexUser2 = deviceColorsToHEX(tvSettings2);
console.log(hexUser1);
console.log(hexUser2);

// ------------------------------------

const getBrightestColor = ({ display }) => {
  const [[colorName]] = Object.entries(display.colors)
    .sort(([_, colorPrec1], [__, colorPrec2]) => colorPrec2 - colorPrec1);

  return colorName;
}


const brightestColor1 = getBrightestColor(tvSettings1);
const brightestColor2 = getBrightestColor(tvSettings2);
console.log(brightestColor1);
console.log(brightestColor2);

