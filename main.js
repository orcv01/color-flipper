import "./style.css";

const COLOR_PALETTE = {
  "#28262C": "Raisin Black",
  "#998FC7": "Blue Bell",
  "#D4C2FC": "Lavender Blue",
  "#F9F5FF": "Magnolia",
  "#14248A": "Resolution Blue",
};

const addOptionsToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");
  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.innerText = COLOR_PALETTE[color];
    colorPickerSelect.append(option);
  });
};

const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");
  colorPickerSelect.addEventListener("change", (event) => {
    const newColor = event.target.value;
    //Almacenamos el código de color
    document.body.style.backgroundColor = newColor;
    //Le aplicamos el background color con el código de color seleccionado
    //Le asignamos a nuestro h2 el valor de la clave que hay almacenada en newColor al igual que hemos hecho en la primera función
    colorname.innerText = COLOR_PALETTE[newColor];
    //Le asignamos a nuestro h2 el valor de la clave que hay almacenada en newColor al igual que hemos hecho en la primera función
    colorname.innerText = COLOR_PALETTE[newColor];

    const colorNameText = `${COLOR_PALETTE[newColor]} | ${newColor}`;
    colorname.innerText = COLOR_PALETTE[newColor] ? colorNameText : "-";
  });
};

addOptionsToColorPicker();
addEventListenerToColorPicker();
