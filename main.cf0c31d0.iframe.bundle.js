(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{472:function(module,exports,__webpack_require__){__webpack_require__(473),__webpack_require__(634),__webpack_require__(635),__webpack_require__(834),__webpack_require__(835),__webpack_require__(840),__webpack_require__(841),__webpack_require__(839),__webpack_require__(836),__webpack_require__(842),__webpack_require__(837),__webpack_require__(838),__webpack_require__(843),module.exports=__webpack_require__(830)},540:function(module,exports){},635:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(338)},830:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(338).configure)([__webpack_require__(831),__webpack_require__(832)],module,!1)}).call(this,__webpack_require__(191)(module))},831:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=831},832:function(module,exports,__webpack_require__){var map={"./stories/Button.stories.js":844,"./stories/Stack.stories.js":845};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=832},843:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var client_api=__webpack_require__(852),esm=__webpack_require__(4),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))},844:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Red",(function(){return Red})),__webpack_require__.d(__webpack_exports__,"Green",(function(){return Green})),__webpack_require__.d(__webpack_exports__,"Small",(function(){return Small})),__webpack_require__.d(__webpack_exports__,"Large",(function(){return Large})),__webpack_require__.d(__webpack_exports__,"LongLabel",(function(){return LongLabel}));var objectSpread2=__webpack_require__(55),jsx_runtime=__webpack_require__(96);function Button(_ref){var label=_ref.label,_ref$backgroundColor=_ref.backgroundColor,backgroundColor=void 0===_ref$backgroundColor?"red":_ref$backgroundColor,_ref$size=_ref.size,size=void 0===_ref$size?"md":_ref$size,handleClick=_ref.handleClick,scale=1;"sm"===size&&(scale=.75),"lg"===size&&(scale=1.5);var style={backgroundColor:backgroundColor,padding:"".concat(.5*scale,"rem ").concat(1*scale,"rem"),border:"none"};return Object(jsx_runtime.jsx)("button",{onClick:handleClick,style:style,children:label})}Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{backgroundColor:{defaultValue:{value:"'red'",computed:!1},type:{name:"string"},required:!1,description:""},size:{defaultValue:{value:"'md'",computed:!1},type:{name:"enum",value:[{value:'"sm"',computed:!1},{value:'"md"',computed:!1},{value:'"lg"',computed:!1}]},required:!1,description:""},label:{type:{name:"string"},required:!1,description:""},handleClick:{type:{name:"func"},required:!1,description:""}}};var components_Button=Button;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Button.js"]={name:"Button",docgenInfo:Button.__docgenInfo,path:"src\\components\\Button.js"});__webpack_exports__.default={title:"Components/Button",component:components_Button,argTypes:{handleClick:{action:"asdf"}}};var Button_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(components_Button,Object(objectSpread2.a)({},args))},Red=Button_stories_Template.bind({});Red.args={backgroundColor:"red",label:"Press me",size:"md"};var Green=Button_stories_Template.bind({});Green.args={backgroundColor:"green",label:"Press me",size:"md"};var Small=Button_stories_Template.bind({});Small.args={backgroundColor:"red",label:"Press me",size:"sm"};var Large=Button_stories_Template.bind({});Large.args={backgroundColor:"red",label:"Press me",size:"lg"};var LongLabel=Button_stories_Template.bind({});LongLabel.args={backgroundColor:"red",label:"This is a long label",size:"md"},Red.parameters=Object(objectSpread2.a)({storySource:{source:"args => <Button {...args} />"}},Red.parameters),Green.parameters=Object(objectSpread2.a)({storySource:{source:"args => <Button {...args} />"}},Green.parameters),Small.parameters=Object(objectSpread2.a)({storySource:{source:"args => <Button {...args} />"}},Small.parameters),Large.parameters=Object(objectSpread2.a)({storySource:{source:"args => <Button {...args} />"}},Large.parameters),LongLabel.parameters=Object(objectSpread2.a)({storySource:{source:"args => <Button {...args} />"}},LongLabel.parameters)},845:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Horizontal",(function(){return Horizontal})),__webpack_require__.d(__webpack_exports__,"Vertical",(function(){return Vertical})),__webpack_require__.d(__webpack_exports__,"NoSpacing",(function(){return NoSpacing})),__webpack_require__.d(__webpack_exports__,"WrapOverflow",(function(){return WrapOverflow})),__webpack_require__.d(__webpack_exports__,"Empty",(function(){return Empty}));var objectSpread2=__webpack_require__(55),toConsumableArray=__webpack_require__(452),objectWithoutProperties=__webpack_require__(451),jsx_runtime=__webpack_require__(96);function Stack(_ref){var children=_ref.children,_ref$spacing=_ref.spacing,spacing=void 0===_ref$spacing?2:_ref$spacing,_ref$direction=_ref.direction,direction=void 0===_ref$direction?"row":_ref$direction,_ref$wrap=_ref.wrap,wrap=void 0===_ref$wrap?"false":_ref$wrap,style={display:"flex",gap:"".concat(.25*spacing,"rem"),flexWrap:wrap?"wrap":"nowrap",flexDirection:direction};return Object(jsx_runtime.jsx)("div",{style:style,children:children})}Stack.__docgenInfo={description:"",methods:[],displayName:"Stack",props:{spacing:{defaultValue:{value:"2",computed:!1},type:{name:"number"},required:!1,description:""},direction:{defaultValue:{value:'"row"',computed:!1},type:{name:"enum",value:[{value:"'row'",computed:!1},{value:"'column'",computed:!1}]},required:!1,description:""},wrap:{defaultValue:{value:'"false"',computed:!1},type:{name:"bool"},required:!1,description:""}}};var components_Stack=Stack;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Stack.js"]={name:"Stack",docgenInfo:Stack.__docgenInfo,path:"src\\components\\Stack.js"});var _excluded=["numberOfChildren"],Stack_stories_Template=(__webpack_exports__.default={title:"Components/Stack",component:components_Stack,argTypes:{numberOfChildren:{type:"number",defaultValue:4}}},function Template(_ref){var numberOfChildren=_ref.numberOfChildren,args=Object(objectWithoutProperties.a)(_ref,_excluded);return Object(jsx_runtime.jsx)(components_Stack,Object(objectSpread2.a)(Object(objectSpread2.a)({},args),{},{children:Object(toConsumableArray.a)(Array(numberOfChildren).keys()).map((function(n){return Object(jsx_runtime.jsx)("div",{style:{width:"50px",height:"50px",backgroundColor:"red",display:"flex",justifyContent:"center",alignItems:"center"},children:n+1})}))}))}),Horizontal=Stack_stories_Template.bind({});Horizontal.args={direction:"row",spacing:2,wrap:!1};var Vertical=Stack_stories_Template.bind({});Vertical.args={direction:"column",spacing:2,wrap:!1};var NoSpacing=Stack_stories_Template.bind({});NoSpacing.args={direction:"row",spacing:0,wrap:!1};var WrapOverflow=Stack_stories_Template.bind({});WrapOverflow.args={numberOfChildren:40,direction:"row",spacing:2,wrap:!0};var Empty=Stack_stories_Template.bind({});Empty.args={numberOfChildren:0,direction:"row",spacing:0,wrap:!1},Horizontal.parameters=Object(objectSpread2.a)({storySource:{source:"({ numberOfChildren, ...args }) => (\r\n  <Stack {...args}>\r\n    {[...Array(numberOfChildren).keys()].map((n) => (\r\n      <div\r\n        style={{\r\n          width: '50px',\r\n          height: '50px',\r\n          backgroundColor: 'red',\r\n          display: 'flex',\r\n          justifyContent: 'center',\r\n          alignItems: 'center',\r\n        }}\r\n      >\r\n        {n + 1}\r\n      </div>\r\n    ))}\r\n  </Stack>\r\n)"}},Horizontal.parameters),Vertical.parameters=Object(objectSpread2.a)({storySource:{source:"({ numberOfChildren, ...args }) => (\r\n  <Stack {...args}>\r\n    {[...Array(numberOfChildren).keys()].map((n) => (\r\n      <div\r\n        style={{\r\n          width: '50px',\r\n          height: '50px',\r\n          backgroundColor: 'red',\r\n          display: 'flex',\r\n          justifyContent: 'center',\r\n          alignItems: 'center',\r\n        }}\r\n      >\r\n        {n + 1}\r\n      </div>\r\n    ))}\r\n  </Stack>\r\n)"}},Vertical.parameters),NoSpacing.parameters=Object(objectSpread2.a)({storySource:{source:"({ numberOfChildren, ...args }) => (\r\n  <Stack {...args}>\r\n    {[...Array(numberOfChildren).keys()].map((n) => (\r\n      <div\r\n        style={{\r\n          width: '50px',\r\n          height: '50px',\r\n          backgroundColor: 'red',\r\n          display: 'flex',\r\n          justifyContent: 'center',\r\n          alignItems: 'center',\r\n        }}\r\n      >\r\n        {n + 1}\r\n      </div>\r\n    ))}\r\n  </Stack>\r\n)"}},NoSpacing.parameters),WrapOverflow.parameters=Object(objectSpread2.a)({storySource:{source:"({ numberOfChildren, ...args }) => (\r\n  <Stack {...args}>\r\n    {[...Array(numberOfChildren).keys()].map((n) => (\r\n      <div\r\n        style={{\r\n          width: '50px',\r\n          height: '50px',\r\n          backgroundColor: 'red',\r\n          display: 'flex',\r\n          justifyContent: 'center',\r\n          alignItems: 'center',\r\n        }}\r\n      >\r\n        {n + 1}\r\n      </div>\r\n    ))}\r\n  </Stack>\r\n)"}},WrapOverflow.parameters),Empty.parameters=Object(objectSpread2.a)({storySource:{source:"({ numberOfChildren, ...args }) => (\r\n  <Stack {...args}>\r\n    {[...Array(numberOfChildren).keys()].map((n) => (\r\n      <div\r\n        style={{\r\n          width: '50px',\r\n          height: '50px',\r\n          backgroundColor: 'red',\r\n          display: 'flex',\r\n          justifyContent: 'center',\r\n          alignItems: 'center',\r\n        }}\r\n      >\r\n        {n + 1}\r\n      </div>\r\n    ))}\r\n  </Stack>\r\n)"}},Empty.parameters)}},[[472,2,3]]]);