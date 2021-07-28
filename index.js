function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

const argv2 = process.argv[2];
if(argv2=='rgbhex')
{
  const argv3 = process.argv[3];
  const cleanString= argv3.replace(/[rgb()]/g,'');
  const rgb = cleanString.split(',');
  console.log ( rgbToHex ( Number(rgb[0]) , Number(rgb[1]) , Number(rgb[2])) );
}
else{
  console.log(hexToRgb(hexColor));
}