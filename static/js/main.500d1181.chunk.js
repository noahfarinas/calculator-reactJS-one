(this["webpackJsonpcalc-rea"]=this["webpackJsonpcalc-rea"]||[]).push([[0],{11:function(_,e,t){},5:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_noahfarinas_Desktop_calc_rea_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);function App(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(_Users_noahfarinas_Desktop_calc_rea_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),calc=_useState2[0],setCalc=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState4=Object(_Users_noahfarinas_Desktop_calc_rea_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),result=_useState4[0],setResult=_useState4[1],ops=["/","*","-","+"],updateCalc=function updateCalc(value){ops.includes(value)&&""===calc||ops.includes(value)&&ops.includes(calc.slice(-1))||(setCalc(calc+value),ops.includes(value)||setResult(eval(calc+value).toString()))},createDigits=function(){for(var _=[],e=function(e){_.push(Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{onClick:function(){return updateCalc(e.toString())},children:e},e))},t=1;t<10;t++)e(t);return _},calculate=function calculate(){setCalc(eval(calc).toString())},deleteLast=function(){if(""!=calc){var _=calc.slice(0,-1);setCalc(_)}};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"App",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{children:"hi"})})}__webpack_exports__.a=App},6:function(_,e,t){"use strict";t.r(e);var a=t(0),c=t.n(a),s=t(4),r=t.n(s),u=(t(11),t(5)),l=t(1);r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(u.a,{})}),document.getElementById("root"))}},[[6,1,2]]]);
//# sourceMappingURL=main.500d1181.chunk.js.map