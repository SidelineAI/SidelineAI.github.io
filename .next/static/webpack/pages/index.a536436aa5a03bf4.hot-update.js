"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/hero/index.tsx":
/*!***********************************!*\
  !*** ./components/hero/index.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Hero: function() { return /* binding */ Hero; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\n/* harmony import */ var _styles_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/box */ \"./components/styles/box.ts\");\n/* harmony import */ var _styles_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/flex */ \"./components/styles/flex.ts\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./firebase-config */ \"./components/hero/firebase-config.jsx\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Hero = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleInputChange = (event)=>{\n        setEmail(event.target.value);\n    };\n    const handleJoinWaitlist = async (event)=>{\n        //event.preventDefault(); // Prevent the form from refreshing the page\n        // Basic email validation\n        if (email.match(/^\\S+@\\S+\\.\\S+$/)) {\n            try {\n                // Adding the email to Firestore collection\n                const docRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.db, \"waitlist\"), {\n                    email: email\n                });\n                console.log(\"Document written with ID: \", docRef.id);\n                alert(\"Thanks for joining the waitlist!\");\n            } catch (error) {\n                console.error(\"Error adding document: \", error);\n                alert(\"Failed to join the waitlist. Please try again.\");\n            }\n        } else {\n            alert(\"Please enter a valid email address.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_flex__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                css: {\n                    gap: \"$3\",\n                    px: \"$6\",\n                    flexDirection: \"column\",\n                    alignContent: \"center\",\n                    justifyContent: \"center\",\n                    alignItems: \"center\",\n                    width: \"100%\",\n                    marginBottom: \"100px\",\n                    \"@sm\": {\n                        flexDirection: \"row\",\n                        mt: \"$20\"\n                    }\n                },\n                justify: \"center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_box__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        css: {\n                            pt: \"$13\",\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            gap: \"$5\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_box__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                                css: {\n                                    maxWidth: \"600px\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                    h1: true,\n                                    css: {\n                                        display: \"inline\",\n                                        fontSize: \"90px\"\n                                    },\n                                    children: \"Sideline\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ayushpai/sideline/sideline-landing-page/components/hero/index.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/ayushpai/sideline/sideline-landing-page/components/hero/index.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 16\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                css: {\n                                    color: \"$accents8\",\n                                    maxWidth: \"400px\"\n                                },\n                                size: \"$lg\",\n                                span: true,\n                                children: \"All-in-one search platform for sports scouting and coaching.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ayushpai/sideline/sideline-landing-page/components/hero/index.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 16\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_flex__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                                css: {\n                                    gap: \"$8\",\n                                    pt: \"$4\"\n                                },\n                                wrap: \"wrap\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                                        placeholder: \"Enter your email address\",\n                                        size: \"lg\",\n                                        value: email,\n                                        onChange: handleInputChange\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ayushpai/sideline/sideline-landing-page/components/hero/index.tsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                        css: {\n                                            backgroundColor: \"#C9082A\",\n                                            color: \"white\"\n                                        },\n                                        onClick: handleJoinWaitlist,\n                                        children: \"Join Waitlist\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ayushpai/sideline/sideline-landing-page/components/hero/index.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ayushpai/sideline/sideline-landing-page/components/hero/index.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 16\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ayushpai/sideline/sideline-landing-page/components/hero/index.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_box__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        css: {\n                            \"& img\": {\n                                width: \"775px\",\n                                objectFit: \"contain\"\n                            }\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"sideline.png\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ayushpai/sideline/sideline-landing-page/components/hero/index.tsx\",\n                            lineNumber: 110,\n                            columnNumber: 16\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/ayushpai/sideline/sideline-landing-page/components/hero/index.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ayushpai/sideline/sideline-landing-page/components/hero/index.tsx\",\n                lineNumber: 37,\n                columnNumber: 10\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Divider, {\n                css: {\n                    position: \"absolute\",\n                    inset: \"0p\",\n                    left: \"0\",\n                    mt: \"$10\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/ayushpai/sideline/sideline-landing-page/components/hero/index.tsx\",\n                lineNumber: 113,\n                columnNumber: 10\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Hero, \"qu4bovk5U4+JuhY7vxbmswqixrc=\");\n_c = Hero;\nvar _c;\n$RefreshReg$(_c, \"Hero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlcm8vaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUN5QjtBQUM3QjtBQUNFO0FBQ0M7QUFDaUI7QUFFakQsTUFBTVcsT0FBTzs7SUFDakIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdaLCtDQUFRQSxDQUFDO0lBRW5DLE1BQU1hLG9CQUFvQixDQUFDQztRQUN4QkYsU0FBU0UsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQzlCO0lBRUEsTUFBTUMscUJBQXFCLE9BQU9IO1FBQzdCLHNFQUFzRTtRQUN0RSx5QkFBeUI7UUFDekIsSUFBSUgsTUFBTU8sS0FBSyxDQUFDLG1CQUFtQjtZQUMvQixJQUFJO2dCQUNBLDJDQUEyQztnQkFDM0MsTUFBTUMsU0FBUyxNQUFNViwwREFBTUEsQ0FBQ0QsOERBQVVBLENBQUNELGdEQUFFQSxFQUFFLGFBQWE7b0JBQ3BESSxPQUFPQTtnQkFDWDtnQkFDQVMsUUFBUUMsR0FBRyxDQUFDLDhCQUE4QkYsT0FBT0csRUFBRTtnQkFDbkRDLE1BQU07WUFDVixFQUFFLE9BQU9DLE9BQU87Z0JBQ1pKLFFBQVFJLEtBQUssQ0FBQywyQkFBMkJBO2dCQUN6Q0QsTUFBTTtZQUNWO1FBQ0osT0FBTztZQUNIQSxNQUFNO1FBQ1Y7SUFDSjtJQUVELHFCQUNHOzswQkFDRyw4REFBQ2pCLDhDQUFJQTtnQkFDRm1CLEtBQUs7b0JBQ0ZDLEtBQUs7b0JBQ0xDLElBQUk7b0JBQ0pDLGVBQWU7b0JBQ2ZDLGNBQWM7b0JBQ2RDLGdCQUFnQjtvQkFDaEJDLFlBQVk7b0JBQ1pDLE9BQU87b0JBQ1BDLGNBQWM7b0JBQ2QsT0FBTzt3QkFDSkwsZUFBZTt3QkFDZk0sSUFBSTtvQkFDUDtnQkFDSDtnQkFDQUMsU0FBUzs7a0NBRVQsOERBQUM5Qiw0Q0FBR0E7d0JBQ0RvQixLQUFLOzRCQUNGVyxJQUFJOzRCQUNKQyxTQUFTOzRCQUNUVCxlQUFlOzRCQUNmRixLQUFLO3dCQUNSOzswQ0FFQSw4REFBQ3JCLDRDQUFHQTtnQ0FDRG9CLEtBQUs7b0NBQ0ZhLFVBQVU7Z0NBQ2I7MENBRUEsNEVBQUNsQyxtREFBSUE7b0NBQ0ZtQyxFQUFFO29DQUNGZCxLQUFLO3dDQUNGWSxTQUFTO3dDQUNURyxVQUFVO29DQUNiOzhDQUNGOzs7Ozs7Ozs7OzswQ0FLSiw4REFBQ3BDLG1EQUFJQTtnQ0FDRnFCLEtBQUs7b0NBQ0ZnQixPQUFPO29DQUNQSCxVQUFVO2dDQUNiO2dDQUNBSSxNQUFNO2dDQUNOQyxJQUFJOzBDQUNOOzs7Ozs7MENBSUQsOERBQUNyQyw4Q0FBSUE7Z0NBQ0ZtQixLQUFLO29DQUNGQyxLQUFLO29DQUNMVSxJQUFJO2dDQUNQO2dDQUNBUSxNQUFNOztrREFFTiw4REFBQ3pDLG9EQUFLQTt3Q0FBQzBDLGFBQVk7d0NBQTJCSCxNQUFLO3dDQUFLMUIsT0FBT0w7d0NBQU9tQyxVQUFVakM7Ozs7OztrREFDaEYsOERBQUNaLHFEQUFNQTt3Q0FBQ3dCLEtBQUs7NENBQUVzQixpQkFBaUI7NENBQVdOLE9BQU87d0NBQVE7d0NBQUdPLFNBQVMvQjtrREFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLaEcsOERBQUNaLDRDQUFHQTt3QkFDRG9CLEtBQUs7NEJBQ0YsU0FBUztnQ0FDTk8sT0FBTztnQ0FDUGlCLFdBQVc7NEJBQ2Q7d0JBQ0g7a0NBRUEsNEVBQUNDOzRCQUFJQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHZiw4REFBQ2pELHNEQUFPQTtnQkFDTHVCLEtBQUs7b0JBQUMyQixVQUFVO29CQUFZQyxPQUFPO29CQUFNQyxNQUFNO29CQUFLcEIsSUFBSTtnQkFBSzs7Ozs7Ozs7QUFJekUsRUFBRTtHQTlHV3hCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVyby9pbmRleC50c3g/M2IxMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24sIERpdmlkZXIsIElucHV0LCBUZXh0IH0gZnJvbSAnQG5leHR1aS1vcmcvcmVhY3QnO1xuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vc3R5bGVzL2JveCc7XG5pbXBvcnQgeyBGbGV4IH0gZnJvbSAnLi4vc3R5bGVzL2ZsZXgnO1xuaW1wb3J0IHsgZGIgfSBmcm9tICcuL2ZpcmViYXNlLWNvbmZpZyc7XG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBhZGREb2MgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuXG5leHBvcnQgY29uc3QgSGVybyA9ICgpID0+IHtcbiAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuXG4gICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgIHNldEVtYWlsKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICB9O1xuXG4gICBjb25zdCBoYW5kbGVKb2luV2FpdGxpc3QgPSBhc3luYyAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB7XG4gICAgICAgIC8vZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gUHJldmVudCB0aGUgZm9ybSBmcm9tIHJlZnJlc2hpbmcgdGhlIHBhZ2VcbiAgICAgICAgLy8gQmFzaWMgZW1haWwgdmFsaWRhdGlvblxuICAgICAgICBpZiAoZW1haWwubWF0Y2goL15cXFMrQFxcUytcXC5cXFMrJC8pKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIC8vIEFkZGluZyB0aGUgZW1haWwgdG8gRmlyZXN0b3JlIGNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgICBjb25zdCBkb2NSZWYgPSBhd2FpdCBhZGREb2MoY29sbGVjdGlvbihkYiwgXCJ3YWl0bGlzdFwiKSwge1xuICAgICAgICAgICAgICAgICAgICBlbWFpbDogZW1haWxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRvY3VtZW50IHdyaXR0ZW4gd2l0aCBJRDogXCIsIGRvY1JlZi5pZCk7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ1RoYW5rcyBmb3Igam9pbmluZyB0aGUgd2FpdGxpc3QhJyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgZG9jdW1lbnQ6IFwiLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ0ZhaWxlZCB0byBqb2luIHRoZSB3YWl0bGlzdC4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzLicpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgICA8RmxleFxuICAgICAgICAgICAgY3NzPXt7XG4gICAgICAgICAgICAgICBnYXA6ICckMycsXG4gICAgICAgICAgICAgICBweDogJyQ2JyxcbiAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgICAgICAgYWxpZ25Db250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzEwMHB4JywgLy8gQWRkZWQgbWFyZ2luQm90dG9tIGhlcmVcbiAgICAgICAgICAgICAgICdAc20nOiB7XG4gICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgICAgICAgICAgICAgIG10OiAnJDIwJyxcbiAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAganVzdGlmeT17J2NlbnRlcid9XG4gICAgICAgICA+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgICAgIHB0OiAnJDEzJyxcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgICAgICAgICAgZ2FwOiAnJDUnLFxuICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICc2MDBweCcsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgIGgxXG4gICAgICAgICAgICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICc5MHB4JyxcbiAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+ICBcbiAgICAgICAgICAgICAgICAgICAgIFNpZGVsaW5lXG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICckYWNjZW50czgnLFxuICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICc0MDBweCcsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgc2l6ZT17JyRsZyd9XG4gICAgICAgICAgICAgICAgICBzcGFuXG4gICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBBbGwtaW4tb25lIHNlYXJjaCBwbGF0Zm9ybSBmb3Igc3BvcnRzIHNjb3V0aW5nIGFuZCBjb2FjaGluZy5cbiAgICAgICAgICAgICAgIDwvVGV4dD5cblxuICAgICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICAgICAgICAgZ2FwOiAnJDgnLFxuICAgICAgICAgICAgICAgICAgICAgcHQ6ICckNCcsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgd3JhcD17J3dyYXAnfVxuICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzXCIgc2l6ZT1cImxnXCIgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGNzcz17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjQzkwODJBJywgY29sb3I6ICd3aGl0ZScgfX0gb25DbGljaz17aGFuZGxlSm9pbldhaXRsaXN0fT5cbiAgICAgICAgICAgICAgICAgICAgIEpvaW4gV2FpdGxpc3RcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgICAgICcmIGltZyc6IHtcbiAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNzc1cHgnLFxuICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiAnY29udGFpbicsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgIDxpbWcgc3JjPVwic2lkZWxpbmUucG5nXCIgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgPERpdmlkZXJcbiAgICAgICAgICAgIGNzcz17e3Bvc2l0aW9uOiAnYWJzb2x1dGUnLCBpbnNldDogJzBwJywgbGVmdDogJzAnLCBtdDogJyQxMCd9fVxuICAgICAgICAgLz5cbiAgICAgIDwvPlxuICAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkRpdmlkZXIiLCJJbnB1dCIsIlRleHQiLCJCb3giLCJGbGV4IiwiZGIiLCJjb2xsZWN0aW9uIiwiYWRkRG9jIiwiSGVybyIsImVtYWlsIiwic2V0RW1haWwiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVKb2luV2FpdGxpc3QiLCJtYXRjaCIsImRvY1JlZiIsImNvbnNvbGUiLCJsb2ciLCJpZCIsImFsZXJ0IiwiZXJyb3IiLCJjc3MiLCJnYXAiLCJweCIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkNvbnRlbnQiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJ3aWR0aCIsIm1hcmdpbkJvdHRvbSIsIm10IiwianVzdGlmeSIsInB0IiwiZGlzcGxheSIsIm1heFdpZHRoIiwiaDEiLCJmb250U2l6ZSIsImNvbG9yIiwic2l6ZSIsInNwYW4iLCJ3cmFwIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImJhY2tncm91bmRDb2xvciIsIm9uQ2xpY2siLCJvYmplY3RGaXQiLCJpbWciLCJzcmMiLCJwb3NpdGlvbiIsImluc2V0IiwibGVmdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/hero/index.tsx\n"));

/***/ })

});