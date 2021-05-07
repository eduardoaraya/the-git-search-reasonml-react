let reasonReactBlue = "#48a9dc";
// The {j|...|j} feature is just string interpolation, from
// bucklescript.github.io/docs/en/interop-cheatsheet#string-unicode-interpolation
// This allows us to conveniently write CSS, together with variables, by
// constructing a string
let style = {j|
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  body {
    width: 100%;
    background: #F1F1EF;
  }
  header.header {
    padding:10px 20px;
    background: #FFF;
    box-shadow: 0px 4px 4px rgba(47, 37, 68, 0.15);
  }
  #app {
    box-shadow: inset 0px 0px 20px -3px rgba(0, 0, 0, .25);
    min-height: 100vh;
  }
  button {
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }
  input {
    position: relative;
    padding: 10px;
    width: 100%;
    margin: 0 10px;
    max-height: 35px;
  }
  .d-flex {
    display: flex;
  }
  .d-flex.row {
    flex-direction: row;
  }
  .d-flex.column {
    flex-direction: column;
  }
  .d-flex.center {
    justify-content: center;
  }
  .d-flex.between {
    justify-content: space-between;
  }
  .d-flex.around {
    justify-content: space-around;
  }
  .d-flex.align-center {
    align-items: center;
  }
  .d-flex.wrapper {
    flex-wrap: wrap;
  }
  .content {
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
|j};
