const sumTotal = ( el1, el2 ) => parseFloat(el1.innerText.replace("$", "")) * el2.value;

export default sumTotal;
