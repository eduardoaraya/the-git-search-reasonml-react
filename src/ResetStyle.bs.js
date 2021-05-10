'use strict';


var primary = "#8C56C2";

var secundary = "#03CADA";

var style = "\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Roboto', sans-serif;\n  }\n  body {\n    width: 100%;\n    background: #F1F1EF;\n  }\n  a.link {\n    color: " + secundary + ";\n  }\n  header.header {\n    padding:10px 20px;\n    background: #FFF;\n    box-shadow: 0px 4px 4px rgba(47, 37, 68, 0.15);\n    position: fixed;\n    width: 100%;\n    top: 0;\n  }\n  .header.header .header-area {\n    max-width: 1290px;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n  }\n  #app {\n    box-shadow: inset 0px 0px 20px -3px rgba(0, 0, 0, .25);\n    min-height: 100vh;\n  }\n  button.btn {\n    padding: 10px 20px;\n    border: none;\n    cursor: pointer;\n    background: " + primary + ";\n    box-shadow: -2px 0px 4px rgba(0, 0, 0, 0.25);\n    border-radius: 4px;\n    color: #FFF;\n    text-transform: uppercase;\n    font-weight: bolder;\n  }\n  button.btn.btn-void {\n    border: solid 1px " + primary + ";\n    color: " + primary + ";\n    background: #FFF;\n  }\n  input {\n    position: relative;\n    padding: 10px;\n    width: 100%;\n    margin: 0 10px;\n    max-height: 36px;\n    background: #FFFFFF;\n    border: 1px solid #E1DFE0;\n    // box-shadow: 0px 4px 4px rgba(47, 37, 68, 0.15);\n    outline: none;\n  }\n  #card-list {\n    justify-content: flex-start;\n  }\n  @media (max-width: 1298px) {\n    #card-list {\n      justify-content: center;\n    }\n  }\n  .d-flex {\n    display: flex;\n  }\n  .d-flex.row {\n    flex-direction: row;\n  }\n  .d-flex.column {\n    flex-direction: column;\n  }\n  .d-flex.center {\n    justify-content: center;\n  }\n  .d-flex.between {\n    justify-content: space-between;\n  }\n  .d-flex.around {\n    justify-content: space-around;\n  }\n  .d-flex.align-center {\n    align-items: center;\n  }\n  .d-flex.wrapper {\n    flex-wrap: wrap;\n  }\n  .content {\n    max-width: 1300px;\n    margin: 0 auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .body-wrapper {\n    min-height: calc(100vh - 36px);\n    padding-top: 104px;\n  }\n  footer {\n    position: relative;\n    height: 36px;\n    background: #FFF;\n    box-shadow: 0px -4px 4px rgba(47, 37, 68, 0.15);\n  }\n  .card .card-content {\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n  }\n  .card .card-content span {\n    margin:5px 0px;\n  }\n  .card .card-content .btn {\n    margin-top: 20px;\n    border-radius: 20px;\n    height: 36px;\n  }\n  ul, ol {\n    list-style: none;\n  }\n  .overlayer {\n    display: none;\n    width: 100%;\n    height: 100vh;\n    position: fixed;\n    top: 0;\n    left: 0;\n    background: rgba(0,0,0,0.3);\n    z-index: 99;\n    justify-content: center;\n    align-items: center;\n    z-index: 999;\n  }\n  .overlayer.show {\n    display: flex;\n  }\n  .modal {\n    width: 100%;\n    max-width: 980px;\n    background: #FFF;\n    padding: 20px;\n    border-radius: 10px;\n    transform: translate3d(0, -14px, 0);\n    box-shadow: 0px 0px 6px rgba(47, 37, 68, 0.55);\n  }\n  .modal .modal-content {\n    padding: 20px;\n    min-height: 300px;\n  }\n  .modal .modal-content .modal-picture {\n    width: 100%;\n    max-width: 300px;\n    height: 266px;\n    background: #222;\n    margin-right: 20px;\n    overflow: hidden;\n    box-shadow:0px 0px 16px rgba(47, 37, 68, 0.25);\n  }\n  .modal .modal-content .modal-info {\n    width: 100%;\n  }\n  .modal .modal-content .modal-info h1{\n    font-size: 18px;\n  }\n  .modal .modal-content .modal-info-header {\n    width: 100%;\n    padding: 10px 0px;\n    border-bottom: solid 1px #E1DFE0;\n  }\n  .modal .modal-content .modal-info-body {\n    padding: 10px 0px;\n    display: flex;\n    flex-direction: row;\n  } \n  .modal .modal-content .modal-info-body ul{\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n  } \n  .modal .modal-content .modal-info-body ul li{\n    margin: 10px 0;\n    display: flex;\n    flex-direction: column;\n  }\n  .modal .modal-content .modal-info-body ul li p .modal-info-value{\n    color: #7B6490;\n  }\n  .modal .modal-content .modal-info-body ul.right p{\n    text-align: end;\n  }\n  .modal .modal-content .modal-info .modal-info-footer {\n    display: flex;\n    flex-direction: row-reverse;\n  }\n";

exports.primary = primary;
exports.secundary = secundary;
exports.style = style;
/* No side effect */
