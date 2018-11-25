// Generated by BUCKLESCRIPT VERSION 4.0.6, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Random = require("bs-platform/lib/js/random.js");
var ReasonReact = require("reason-react/lib/js/src/ReasonReact.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var Text$BsReactNative = require("bs-react-native/lib/js/src/components/text.js");
var View$BsReactNative = require("bs-react-native/lib/js/src/components/view.js");
var Style$BsReactNative = require("bs-react-native/lib/js/src/style.js");
var Button$BsReactNative = require("bs-react-native/lib/js/src/components/button.js");
var SafeAreaView$BsReactNative = require("bs-react-native/lib/js/src/components/safeAreaView.js");

var container = Style$BsReactNative.style(/* :: */[
      Style$BsReactNative.marginTop(/* Pt */Block.__(0, [50.0])),
      /* :: */[
        Style$BsReactNative.alignItems(/* Center */2),
        /* :: */[
          Style$BsReactNative.justifyContent(/* Center */2),
          /* [] */0
        ]
      ]
    ]);

var Styles = /* module */[/* container */container];

var component = ReasonReact.statelessComponent("App");

function make(navigation, _) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function () {
              var getRandStr = String(Random.$$int(1123));
              var title = "Go to details screen with params" + getRandStr;
              return ReasonReact.element(undefined, undefined, Curry.app(SafeAreaView$BsReactNative.make, [
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              /* array */[ReasonReact.element(undefined, undefined, View$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Js_primitive.some(container), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* array */[
                                          ReasonReact.element(undefined, undefined, Text$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */["Params : " + navigation[/* state */2][/* params */1]])),
                                          ReasonReact.element(undefined, undefined, Button$BsReactNative.make(undefined, undefined, undefined, (function () {
                                                        return Curry._1(navigation[/* push */0], /* Details */["Params " + getRandStr]);
                                                      }), undefined, title)(/* array */[])),
                                          ReasonReact.element(undefined, undefined, Button$BsReactNative.make(undefined, undefined, undefined, (function () {
                                                        return Curry._1(navigation[/* goBack */1], /* () */0);
                                                      }), undefined, "Go back")(/* array */[])),
                                          ReasonReact.element(undefined, undefined, Text$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */["Details screen key: " + navigation[/* state */2][/* key */0]]))
                                        ]))]
                            ]));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.Styles = Styles;
exports.component = component;
exports.make = make;
/* container Not a pure module */
