let input = prompt("Please pick a color from the rainbow!!!");

if (input != null) {
  let hexColor = "#";
  const randomColors = ["", "", ""];
  const rainbowMap = new Map();
  const rainbowColors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "light blue",
    "magenta",
    "light green",
  ];
  const initialColor = 0xff0000;
  const red = initialColor.toString(16).toUpperCase();

  //shifts 0xFF0000 by 8 bits to the right, so it becomes 0x00FF0,
  //each hex number is 4 bits, so i shift 1 byte, padStart adds in leading zeros
  //for up to 6 numbers, because the zero gets removed otherwise
  const green = (initialColor >> 8).toString(16).padStart(6, 0).toUpperCase();
  const blue = (initialColor >> 16).toString(16).padStart(6, 0).toUpperCase();

  //Initial Color, red, is mixed with green to produce yellow.  The logical OR operator
  //is used to mask green and red hex values
  const yellow = (initialColor | parseInt(green, 16))
    .toString(16)
    .padStart(6, 0)
    .toUpperCase();

  rainbowMap.set("red", red);
  rainbowMap.set("orange", "FFA500");
  rainbowMap.set("yellow", yellow);
  rainbowMap.set("green", green);
  rainbowMap.set("blue", blue);
  rainbowMap.set("purple", "6A0DAD");
  rainbowMap.set("light blue", "0CCDFA");
  rainbowMap.set("magenta", "7d2749");
  rainbowMap.set("light green", "44c238");

  if (rainbowColors.includes(input.toLowerCase())) {
    alert("#".concat(rainbowMap.get(input.toLowerCase())));
    document.body.style.background = "#".concat(
      rainbowMap.get(input.toLowerCase())
    );
  } else if (input.toLowerCase() == "random") {
    const randomColor = randomColors.map(() => {
      return Math.ceil(Math.random() * 256).toString(16);
    });
    alert("#".concat(randomColor.join("")).toUpperCase());
    document.body.style.background = "#".concat(
      randomColor.join("").toLowerCase()
    );
  } else {
    alert("Not a rainbow color");
    let newImage = document.createElement("img");
    newImage.src = "images/luckycharms.jpeg";
    document.body.appendChild(newImage);
    document.getElementById("output").innerHTML =
      "Your color is not magically delicious, and you have bad taste in colors!!!".toUpperCase();
  }
}
