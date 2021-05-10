let primary = "#8C56C2";
let secundary = "#03CADA";

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
  a.link {
    color: $secundary;
  }
  header.header {
    padding:10px 20px;
    background: #FFF;
    box-shadow: 0px 4px 4px rgba(47, 37, 68, 0.15);
    position: fixed;
    width: 100%;
    top: 0;
  }
  .header.header .header-area {
    max-width: 1290px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  #app {
    box-shadow: inset 0px 0px 20px -3px rgba(0, 0, 0, .25);
    min-height: 100vh;
  }
  button.btn {
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    background: $primary;
    box-shadow: -2px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bolder;
  }
  button.btn.btn-void {
    border: solid 1px $primary;
    color: $primary;
    background: #FFF;
  }
  input {
    position: relative;
    padding: 10px;
    width: 100%;
    margin: 0 10px;
    max-height: 36px;
    background: #FFFFFF;
    border: 1px solid #E1DFE0;
    // box-shadow: 0px 4px 4px rgba(47, 37, 68, 0.15);
    outline: none;
  }
  #card-list {
    justify-content: flex-start;
  }
  @media (max-width: 1298px) {
    #card-list {
      justify-content: center;
    }
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
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .body-wrapper {
    min-height: calc(100vh - 36px);
    padding-top: 104px;
  }
  footer {
    position: relative;
    height: 36px;
    background: #FFF;
    box-shadow: 0px -4px 4px rgba(47, 37, 68, 0.15);
  }
  .card .card-content {
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
  .card .card-content span {
    margin:5px 0px;
  }
  .card .card-content .btn {
    margin-top: 20px;
    border-radius: 20px;
    height: 36px;
  }
  ul, ol {
    list-style: none;
  }
  .overlayer {
    display: none;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.3);
    z-index: 99;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
  .overlayer.show {
    display: flex;
  }
  .modal {
    width: 100%;
    max-width: 980px;
    background: #FFF;
    padding: 20px;
    border-radius: 10px;
    transform: translate3d(0, -14px, 0);
    box-shadow: 0px 0px 6px rgba(47, 37, 68, 0.55);
  }
  .modal .modal-content {
    padding: 20px;
    min-height: 300px;
  }
  .modal .modal-content .modal-picture {
    width: 100%;
    max-width: 300px;
    height: 266px;
    background: #222;
    margin-right: 20px;
    overflow: hidden;
    box-shadow:0px 0px 16px rgba(47, 37, 68, 0.25);
  }
  .modal .modal-content .modal-info {
    width: 100%;
  }
  .modal .modal-content .modal-info h1{
    font-size: 18px;
  }
  .modal .modal-content .modal-info-header {
    width: 100%;
    padding: 10px 0px;
    border-bottom: solid 1px #E1DFE0;
  }
  .modal .modal-content .modal-info-body {
    padding: 10px 0px;
    display: flex;
    flex-direction: row;
  } 
  .modal .modal-content .modal-info-body ul{
    display: flex;
    flex-direction: column;
    flex: 1;
  } 
  .modal .modal-content .modal-info-body ul li{
    margin: 10px 0;
    display: flex;
    flex-direction: column;
  }
  .modal .modal-content .modal-info-body ul li p .modal-info-value{
    color: #7B6490;
  }
  .modal .modal-content .modal-info-body ul.right p{
    text-align: end;
  }
  .modal .modal-content .modal-info .modal-info-footer {
    display: flex;
    flex-direction: row-reverse;
  }
|j};
