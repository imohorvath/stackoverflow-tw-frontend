import "./Loading.css";

// const createRandomHex = () => {
//   const hexValues = [4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//   const hexCode =
//     "#" +
//     [...Array(6)]
//       .map(() => hexValues[Math.floor(Math.random() * hexValues.length)])
//       .join("");

//   return hexCode;
// };

const Loading = () => {
  //   const colorCode = createRandomHex();

  return (
    <div class="lds-grid">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;
