(this.webpackJsonpsetportal173=this.webpackJsonpsetportal173||[]).push([[0],{110:function(e,n,s){},111:function(e,n,s){},120:function(e,n,s){},121:function(e,n,s){},122:function(e,n,s){"use strict";s.r(n);var a=s(1),t=s.n(a),c=s(19),r=s.n(c),i=(s(86),s(29)),l=s(7),j=(s(123),s(87),s(88),s(110),s(8)),o=(s(111),s(67),s(0)),u=[{id:0,name:"Reginald C. Recario",subject:"CMSC 128 Lecture",isDone:"task-rate",section:"D"},{id:1,name:"Kendal Jean G. Jaen",subject:"CMSC 128 Lab",isDone:"task-rate",section:"D-3L"},{id:2,name:"Juan Miguel Bawagan",subject:"CMSC 142 Lecture",isDone:"task-rate",section:"X"},{id:3,name:"John Patrick Albacea",subject:"CMSC 142 Laboratory",isDone:"task-rate",section:"X-2L"}],d=t.a.createContext(),b=function(e){var n=e.children,s=Object(a.useState)(u),t=Object(j.a)(s,2),c=t[0],r=t[1];return Object(o.jsx)(d.Provider,{value:{tasks:c,setTasks:r},children:n})},h=d,m=[{id:0,name:"Rosario Baria",subject:"Wika 1",isDone:"task-rate",section:"W1"},{id:1,name:"Eileen Meneses",subject:"Comm 10",isDone:"task-rate",section:"Y2"},{id:2,name:"Quan Phan",subject:"HK12 Tai Chi Chuan",isDone:"task-rate-done",section:"AB12"}],O=t.a.createContext(),x=function(e){var n=e.children,s=Object(a.useState)(m),t=Object(j.a)(s,2),c=t[0],r=t[1];return Object(o.jsx)(O.Provider,{value:{GEtasks:c,setGETasks:r},children:n})},p=O;function w(e){var n=Object(a.useContext)(h),s=n.tasks,t=(n.setTasks,Object(a.useContext)(p)),c=t.GEtasks;t.setGETasks;if(!e.show)return null;return Object(o.jsxs)("div",{className:"modal-container",children:[Object(o.jsx)("div",{className:"modal-content",children:Object(o.jsx)("h3",{children:" Are you sure you want to submit? "})}),Object(o.jsxs)("div",{className:"choices-content",children:[Object(o.jsx)(i.b,{to:"/home",children:Object(o.jsx)("button",{className:"modalBtn",onClick:function(){"MAJOR"===e.type?s[e.id].isDone="task-rate-done":"GE"===e.type&&(c[e.id].isDone="task-rate-done")},children:" Confirm "})}),"\xa0\xa0",Object(o.jsx)("button",{className:"modalBtn",onClick:e.onClose,children:" Cancel "})]})]})}function v(e){return e.show?Object(o.jsxs)("div",{className:"modal-container",children:[Object(o.jsx)("div",{className:"modal-content-missing",children:Object(o.jsx)("h3",{children:" Some questions are not yet answered "})}),Object(o.jsx)("div",{className:"choices-content",children:Object(o.jsx)("button",{onClick:e.onClose,children:" Ok "})})]}):null}function f(e){return e.show?Object(o.jsxs)("div",{className:"modal-container",children:[Object(o.jsxs)("div",{className:"modal-content",children:[Object(o.jsx)("h3",{children:" Are you sure you want to go back to home? "}),Object(o.jsx)("h6",{children:" Your progress will not be saved "})]}),Object(o.jsxs)("div",{className:"choices-content",children:[Object(o.jsx)(i.b,{to:"/home",children:Object(o.jsx)("button",{className:"modalBtn",children:" Confirm "})}),"\xa0\xa0",Object(o.jsx)("button",{className:"modalBtn",onClick:e.onClose,children:" Cancel "})]})]}):null}function N(e){var n=e.location.prof,s=Object(a.useState)(null),t=Object(j.a)(s,2),c=t[0],r=t[1],i=function(e,n){c[n]=parseInt(e.target.value)};Object(a.useEffect)((function(){!function(){var e=new Array(20).fill(-1);r(e)}()}),[]);var u=Object(a.useState)(!1),d=Object(j.a)(u,2),b=d[0],h=d[1],m=Object(a.useState)(!1),O=Object(j.a)(m,2),x=O[0],p=O[1],N=Object(a.useState)(!1),C=Object(j.a)(N,2),g=C[0],y=C[1],k=Object(a.useState)(1),T=Object(j.a)(k,2),D=T[0],q=T[1];return null==n?Object(o.jsx)(l.a,{to:"/home"}):Object(o.jsxs)("div",{className:"pageMainCont",children:[Object(o.jsxs)("div",{className:"infoHeader",children:[Object(o.jsx)("h4",{children:"Evaluating"}),Object(o.jsxs)("h5",{className:"currentProf",children:[" ",n.name]}),"  ",Object(o.jsxs)("p",{className:"currentSubj",children:[" ",n.subject," "]})," ",Object(o.jsxs)("div",{className:"instruction",children:[Object(o.jsx)("p",{className:"redText",children:"*\xa0"}),Object(o.jsx)("p",{className:"rateP",children:" Rate your professor/instructor with 5 being the highest and 1 being the lowest"})]})]}),Object(o.jsxs)("div",{className:"bodyCont",children:[Object(o.jsxs)("div",{className:"outline",children:[Object(o.jsx)("button",{className:1===D?"buttonLined":"buttonNormal",onClick:function(e){e.preventDefault(),q(1)},children:"Part I: Preparedness"}),Object(o.jsx)("button",{className:2===D?"buttonLined":"buttonNormal",onClick:function(e){e.preventDefault(),q(2)},children:"Part II: Student-Faculty Relationship"}),Object(o.jsx)("button",{className:3===D?"buttonLined":"buttonNormal",onClick:function(e){e.preventDefault(),q(3)},children:"Part III: Time Management"}),Object(o.jsx)("button",{className:4===D?"buttonLined":"buttonNormal",onClick:function(e){e.preventDefault(),q(4)},children:"Part IV: Quality of Requirements"})]}),Object(o.jsxs)("div",{className:"formCont",children:[Object(o.jsxs)("center",{children:[Object(o.jsxs)("div",{className:1===D?"category":"categoryHide",children:[Object(o.jsxs)("div",{className:"formCard",children:[Object(o.jsx)("p",{className:"question",children:" The faculty-in-charge is always ready with their lesson plans. "}),Object(o.jsxs)("div",{className:"answers",children:[Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"1",name:"1answer1",onChange:function(e){return i(e,0)}})," 1 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"2",name:"1answer1",onChange:function(e){return i(e,0)}})," 2 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"3",name:"1answer1",onChange:function(e){return i(e,0)}})," 3 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"4",name:"1answer1",onChange:function(e){return i(e,0)}})," 4 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"5",name:"1answer1",onChange:function(e){return i(e,0)}})," 5 "]})]})]}),Object(o.jsxs)("div",{className:"formCard",children:[Object(o.jsx)("p",{className:"question",children:" The faculty-in-charge always discusses the objectives of every lesson. "}),Object(o.jsxs)("div",{className:"answers",children:[Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"1",name:"1answer2",onChange:function(e){return i(e,1)}})," 1 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"2",name:"1answer2",onChange:function(e){return i(e,1)}})," 2 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"3",name:"1answer2",onChange:function(e){return i(e,1)}})," 3 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"4",name:"1answer2",onChange:function(e){return i(e,1)}})," 4 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"5",name:"1answer2",onChange:function(e){return i(e,1)}})," 5 "]})]})]}),Object(o.jsxs)("div",{className:"formCard",children:[Object(o.jsx)("p",{className:"question",children:"The faculty-in-charge clearly discussed the course curriculum at the beginning of classes."}),Object(o.jsxs)("div",{className:"answers",children:[Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"1",name:"1answer3",onChange:function(e){return i(e,2)}})," 1 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"2",name:"1answer3",onChange:function(e){return i(e,2)}})," 2 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"3",name:"1answer3",onChange:function(e){return i(e,2)}})," 3 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"4",name:"1answer3",onChange:function(e){return i(e,2)}})," 4 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"5",name:"1answer3",onChange:function(e){return i(e,2)}})," 5 "]})]})]}),Object(o.jsxs)("div",{className:"formCard",children:[Object(o.jsx)("p",{className:"question",children:" The faculty-in-charge always provides the course materials and/or handouts for each lesson. "}),Object(o.jsxs)("div",{className:"answers",children:[Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"1",name:"1answer4",onChange:function(e){return i(e,3)}})," 1 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"2",name:"1answer4",onChange:function(e){return i(e,3)}})," 2 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"3",name:"1answer4",onChange:function(e){return i(e,3)}})," 3 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"4",name:"1answer4",onChange:function(e){return i(e,3)}})," 4 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"5",name:"1answer4",onChange:function(e){return i(e,3)}})," 5 "]})]})]}),Object(o.jsxs)("div",{className:"formCard",children:[Object(o.jsx)("p",{className:"question",children:" The faculty-in-charge knows what they were discussing."}),Object(o.jsxs)("div",{className:"answers",children:[Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"1",name:"1answer5",onChange:function(e){return i(e,4)}})," 1 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"2",name:"1answer5",onChange:function(e){return i(e,4)}})," 2 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"3",name:"1answer5",onChange:function(e){return i(e,4)}})," 3 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"4",name:"1answer5",onChange:function(e){return i(e,4)}})," 4 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"5",name:"1answer5",onChange:function(e){return i(e,4)}})," 5 "]})]})]})]}),Object(o.jsxs)("div",{className:2===D?"category":"categoryHide",children:[Object(o.jsxs)("div",{className:"formCard",children:[Object(o.jsx)("p",{className:"question",children:" The faculty-in-charge is always available during consultation hours "}),Object(o.jsxs)("div",{className:"answers",children:[Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"1",name:"2answer1",onChange:function(e){return i(e,5)}})," 1 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"2",name:"2answer1",onChange:function(e){return i(e,5)}})," 2 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"3",name:"2answer1",onChange:function(e){return i(e,5)}})," 3 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"4",name:"2answer1",onChange:function(e){return i(e,5)}})," 4 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"5",name:"2answer1",onChange:function(e){return i(e,5)}})," 5 "]})]})]}),Object(o.jsxs)("div",{className:"formCard",children:[Object(o.jsx)("p",{className:"question",children:" The faculty-in-charge always acknowledges their students\u2019 skills and abilities"}),Object(o.jsxs)("div",{className:"answers",children:[Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"1",name:"2answer2",onChange:function(e){return i(e,6)}})," 1 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"2",name:"2answer2",onChange:function(e){return i(e,6)}})," 2 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"3",name:"2answer2",onChange:function(e){return i(e,6)}})," 3 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"4",name:"2answer2",onChange:function(e){return i(e,6)}})," 4 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"5",name:"2answer2",onChange:function(e){return i(e,6)}})," 5 "]})]})]}),Object(o.jsxs)("div",{className:"formCard",children:[Object(o.jsx)("p",{className:"question",children:" The faculty-in-charge always encourages their students to share their ideas in class"}),Object(o.jsxs)("div",{className:"answers",children:[Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"1",name:"2answer3",onChange:function(e){return i(e,7)}})," 1 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"2",name:"2answer3",onChange:function(e){return i(e,7)}})," 2 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"3",name:"2answer3",onChange:function(e){return i(e,7)}})," 3 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"4",name:"2answer3",onChange:function(e){return i(e,7)}})," 4 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"5",name:"2answer3",onChange:function(e){return i(e,7)}})," 5 "]})]})]}),Object(o.jsxs)("div",{className:"formCard",children:[Object(o.jsx)("p",{className:"question",children:" The faculty-in-charge provides appropriate feedback about my outputs and performance"}),Object(o.jsxs)("div",{className:"answers",children:[Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"1",name:"2answer4",onChange:function(e){return i(e,8)}})," 1 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"2",name:"2answer4",onChange:function(e){return i(e,8)}})," 2 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"3",name:"2answer4",onChange:function(e){return i(e,8)}})," 3 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"4",name:"2answer4",onChange:function(e){return i(e,8)}})," 4 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"5",name:"2answer4",onChange:function(e){return i(e,8)}})," 5 "]})]})]}),Object(o.jsxs)("div",{className:"formCard",children:[Object(o.jsx)("p",{className:"question",children:" The faculty-in-charge always prioritizes their students\u2019 welfare "}),Object(o.jsxs)("div",{className:"answers",children:[Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"1",name:"2answer5",onChange:function(e){return i(e,9)}})," 1 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"2",name:"2answer5",onChange:function(e){return i(e,9)}})," 2 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"3",name:"2answer5",onChange:function(e){return i(e,9)}})," 3 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"4",name:"2answer5",onChange:function(e){return i(e,9)}})," 4 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"5",name:"2answer5",onChange:function(e){return i(e,9)}})," 5 "]})]})]})]}),Object(o.jsxs)("div",{className:3===D?"category":"categoryHide",children:[Object(o.jsxs)("div",{className:"formCard",children:[Object(o.jsx)("p",{className:"question",children:" The faculty-in-charge starts the classes on time. "}),Object(o.jsxs)("div",{className:"answers",children:[Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"1",name:"3answer1",onChange:function(e){return i(e,10)}})," 1 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"2",name:"3answer1",onChange:function(e){return i(e,10)}})," 2 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"3",name:"3answer1",onChange:function(e){return i(e,10)}})," 3 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"4",name:"3answer1",onChange:function(e){return i(e,10)}})," 4 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"5",name:"3answer1",onChange:function(e){return i(e,10)}})," 5 "]})]})]}),Object(o.jsxs)("div",{className:"formCard",children:[Object(o.jsx)("p",{className:"question",children:" The faculty-in-charge ends the classes on time"}),Object(o.jsxs)("div",{className:"answers",children:[Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"1",name:"3answer2",onChange:function(e){return i(e,11)}})," 1 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"2",name:"3answer2",onChange:function(e){return i(e,11)}})," 2 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"3",name:"3answer2",onChange:function(e){return i(e,11)}})," 3 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"4",name:"3answer2",onChange:function(e){return i(e,11)}})," 4 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"5",name:"3answer2",onChange:function(e){return i(e,11)}})," 5 "]})]})]}),Object(o.jsxs)("div",{className:"formCard",children:[Object(o.jsx)("p",{className:"question",children:" The faculty-in-charge responds to the students\u2019 queries on time "}),Object(o.jsxs)("div",{className:"answers",children:[Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"1",name:"3answer3",onChange:function(e){return i(e,12)}})," 1 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"2",name:"3answer3",onChange:function(e){return i(e,12)}})," 2 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"3",name:"3answer3",onChange:function(e){return i(e,12)}})," 3 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"4",name:"3answer3",onChange:function(e){return i(e,12)}})," 4 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"5",name:"3answer3",onChange:function(e){return i(e,12)}})," 5 "]})]})]}),Object(o.jsxs)("div",{className:"formCard",children:[Object(o.jsx)("p",{className:"question",children:" The faculty-in-charge uses the time effectively and meaningfully"}),Object(o.jsxs)("div",{className:"answers",children:[Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"1",name:"3answer4",onChange:function(e){return i(e,13)}})," 1 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"2",name:"3answer4",onChange:function(e){return i(e,13)}})," 2 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"3",name:"3answer4",onChange:function(e){return i(e,13)}})," 3 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"4",name:"3answer4",onChange:function(e){return i(e,13)}})," 4 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"5",name:"3answer4",onChange:function(e){return i(e,13)}})," 5 "]})]})]}),Object(o.jsxs)("div",{className:"formCard",children:[Object(o.jsx)("p",{className:"question",children:" The faculty-in-charge does not use the time for personal interests "}),Object(o.jsxs)("div",{className:"answers",children:[Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"1",name:"3answer5",onChange:function(e){return i(e,14)}})," 1 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"2",name:"3answer5",onChange:function(e){return i(e,14)}})," 2 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"3",name:"3answer5",onChange:function(e){return i(e,14)}})," 3 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"4",name:"3answer5",onChange:function(e){return i(e,14)}})," 4 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"5",name:"3answer5",onChange:function(e){return i(e,14)}})," 5 "]})]})]})]}),Object(o.jsxs)("div",{className:4===D?"category":"categoryHide",children:[Object(o.jsxs)("div",{className:"formCard",children:[Object(o.jsx)("p",{className:"question",children:" Instructions are organized and easy to understand. "}),Object(o.jsxs)("div",{className:"answers",children:[Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"1",name:"4answer1",onChange:function(e){return i(e,15)}})," 1 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"2",name:"4answer1",onChange:function(e){return i(e,15)}})," 2 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"3",name:"4answer1",onChange:function(e){return i(e,15)}})," 3 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"4",name:"4answer1",onChange:function(e){return i(e,15)}})," 4 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"5",name:"4answer1",onChange:function(e){return i(e,15)}})," 5 "]})]})]}),Object(o.jsxs)("div",{className:"formCard",children:[Object(o.jsx)("p",{className:"question",children:" The goal of each requirement is clearly discussed "}),Object(o.jsxs)("div",{className:"answers",children:[Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"1",name:"4answer2",onChange:function(e){return i(e,16)}})," 1 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"2",name:"4answer2",onChange:function(e){return i(e,16)}})," 2 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"3",name:"4answer2",onChange:function(e){return i(e,16)}})," 3 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"4",name:"4answer2",onChange:function(e){return i(e,16)}})," 4 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"5",name:"4answer2",onChange:function(e){return i(e,16)}})," 5 "]})]})]}),Object(o.jsxs)("div",{className:"formCard",children:[Object(o.jsx)("p",{className:"question",children:" The requirements are relevant and useful "}),Object(o.jsxs)("div",{className:"answers",children:[Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"1",name:"4answer3",onChange:function(e){return i(e,17)}})," 1 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"2",name:"4answer3",onChange:function(e){return i(e,17)}})," 2 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"3",name:"4answer3",onChange:function(e){return i(e,17)}})," 3 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"4",name:"4answer3",onChange:function(e){return i(e,17)}})," 4 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"5",name:"4answer3",onChange:function(e){return i(e,17)}})," 5 "]})]})]}),Object(o.jsxs)("div",{className:"formCard",children:[Object(o.jsx)("p",{className:"question",children:" The deadlines of the requirements are just"}),Object(o.jsxs)("div",{className:"answers",children:[Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"1",name:"4answer4",onChange:function(e){return i(e,18)}})," 1 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"2",name:"4answer4",onChange:function(e){return i(e,18)}})," 2 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"3",name:"4answer4",onChange:function(e){return i(e,18)}})," 3 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"4",name:"4answer4",onChange:function(e){return i(e,18)}})," 4 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"5",name:"4answer4",onChange:function(e){return i(e,18)}})," 5 "]})]})]}),Object(o.jsxs)("div",{className:"formCard",children:[Object(o.jsx)("p",{className:"question",children:" The grading system is appropriate "}),Object(o.jsxs)("div",{className:"answers",children:[Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"1",name:"4answer5",onChange:function(e){return i(e,19)}})," 1 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"2",name:"4answer5",onChange:function(e){return i(e,19)}})," 2 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"3",name:"4answer5",onChange:function(e){return i(e,19)}})," 3 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"4",name:"4answer5",onChange:function(e){return i(e,19)}})," 4 "]}),Object(o.jsxs)("label",{className:"answer",children:[" ",Object(o.jsx)("input",{type:"radio",value:"5",name:"4answer5",onChange:function(e){return i(e,19)}})," 5 "]})]})]})]})]}),Object(o.jsx)("button",{className:"goHomeBtn",onClick:function(){y(!0)},children:"Back To Home"}),Object(o.jsx)("button",{className:"submitBtn",onClick:function(){console.log(c),c.includes(-1)?(console.log("There is a radio button left unchecked"),p(!0)):h(!0)},children:"Submit"})]}),Object(o.jsx)(w,{onClose:function(){return h(!1)},show:b,id:n.id,type:n.type}),Object(o.jsx)(v,{onClose:function(){return p(!1)},show:x}),Object(o.jsx)(f,{onClose:function(){return y(!1)},show:g})]})]})}s(68);var C=s(146);function g(e){return"task-rate"===e.isDone?Object(o.jsx)(i.b,{to:{pathname:"/evaluate",prof:{name:e.name,subject:e.subject,id:e.id,type:e.type}},children:Object(o.jsxs)("div",{className:e.isDone,children:[Object(o.jsx)("div",{className:"check-icon",children:Object(o.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(o.jsx)("rect",{x:"1",y:"1",width:"16",height:"16",stroke:"#008D85",strokeOpacity:"0.56",strokeWidth:"2"})})}),Object(o.jsx)(C.a,{title:"Evaluate",id:"tooltip",arrow:!0,placement:"bottom-end",style:{margin:"0"},children:Object(o.jsxs)("div",{className:"task-text",children:[Object(o.jsx)("h1",{className:"subject",children:e.subject}),Object(o.jsx)("h2",{className:"section",children:e.section}),Object(o.jsx)("h2",{className:"prof",children:e.name})]})})]})}):Object(o.jsxs)("div",{className:e.isDone,children:[Object(o.jsx)("div",{className:"check-icon",children:Object(o.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(o.jsx)("path",{d:"M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.11 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z",fill:"#D3D3D3"})})}),Object(o.jsxs)("div",{className:"task-text",children:[Object(o.jsx)("h1",{className:"subject",children:e.subject}),Object(o.jsx)("h2",{className:"section",children:e.section}),Object(o.jsx)("h2",{className:"prof",children:e.name})]})]})}function y(){var e=Object(a.useContext)(h),n=e.tasks;e.setTasks;return Object(o.jsxs)("div",{className:"task-list",children:[Object(o.jsx)("h1",{id:"major-course-eval",children:"Major Course Evaluation/s:"}),Object(o.jsx)("div",{className:"cardContainer",children:n.map((function(e,n){return Object(o.jsx)(g,{id:e.id,name:e.name,subject:e.subject,isDone:e.isDone,section:e.section,type:"MAJOR"},n)}))})]})}function k(){var e=Object(a.useContext)(p),n=e.GEtasks;e.setGETasks;return Object(o.jsxs)("div",{className:"task-list",children:[Object(o.jsx)("h1",{id:"ge-eval",children:"Elective Course Evaluation/s:"}),Object(o.jsx)("div",{className:"cardContainer",children:n.map((function(e,n){return Object(o.jsx)(g,{id:e.id,name:e.name,subject:e.subject,isDone:e.isDone,section:e.section,type:"GE"},n)}))})]})}s(120);function T(){var e=Object(a.useState)(!1),n=Object(j.a)(e,2),s=n[0],t=n[1];return Object(o.jsxs)("div",{className:"homeMainCont",style:D,children:[Object(o.jsxs)("div",{className:"homeLeft",style:q,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{className:"textName",children:"Welcome, User"}),Object(o.jsx)("p",{className:"semester",children:"2nd Semester"}),Object(o.jsx)("p",{className:"schoolyear",children:"AY 2020-2021"})]}),Object(o.jsxs)("div",{className:"dropdown",children:[s?Object(o.jsx)("div",{className:"signout",children:Object(o.jsx)("a",{href:"/login",children:"Sign out"})}):null,Object(o.jsxs)("button",{className:"profileBttn",onClick:function(e){e.preventDefault(),t(!s)},children:[Object(o.jsx)("svg",{width:"3rem",height:"3rem",viewBox:"0 0 60 60",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(o.jsx)("path",{d:"M30 5C16.2 5 5 16.2 5 30C5 43.8 16.2 55 30 55C43.8 55 55 43.8 55 30C55 16.2 43.8 5 30 5ZM17.675 45.7C18.75 43.45 25.3 41.25 30 41.25C34.7 41.25 41.275 43.45 42.325 45.7C38.925 48.4 34.65 50 30 50C25.35 50 21.075 48.4 17.675 45.7ZM45.9 42.075C42.325 37.725 33.65 36.25 30 36.25C26.35 36.25 17.675 37.725 14.1 42.075C11.55 38.725 10 34.55 10 30C10 18.975 18.975 10 30 10C41.025 10 50 18.975 50 30C50 34.55 48.45 38.725 45.9 42.075ZM30 15C25.15 15 21.25 18.9 21.25 23.75C21.25 28.6 25.15 32.5 30 32.5C34.85 32.5 38.75 28.6 38.75 23.75C38.75 18.9 34.85 15 30 15ZM30 27.5C27.925 27.5 26.25 25.825 26.25 23.75C26.25 21.675 27.925 20 30 20C32.075 20 33.75 21.675 33.75 23.75C33.75 25.825 32.075 27.5 30 27.5Z",fill:"#008D85"})}),Object(o.jsx)("strong",{children:"User McUsersson"}),Object(o.jsx)("svg",{className:"threeDot",width:"2.2rem",height:"2.2rem",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(o.jsx)("path",{d:"M9 15C7.35 15 6 16.35 6 18C6 19.65 7.35 21 9 21C10.65 21 12 19.65 12 18C12 16.35 10.65 15 9 15ZM27 15C25.35 15 24 16.35 24 18C24 19.65 25.35 21 27 21C28.65 21 30 19.65 30 18C30 16.35 28.65 15 27 15ZM18 15C16.35 15 15 16.35 15 18C15 19.65 16.35 21 18 21C19.65 21 21 19.65 21 18C21 16.35 19.65 15 18 15Z",fill:"#008D85"})})]})]})]}),Object(o.jsxs)("div",{className:"homeRight",style:M,children:[Object(o.jsx)(y,{}),Object(o.jsx)(k,{})]})]})}var D={width:"100vw",minHeight:"100vh",display:"flex",flexDirection:"row",backgroundImage:'url("https://static.overlay-tech.com/assets/26585e5b-baf0-4fe7-9544-a87704893b4c.png")',overflowX:"hidden"},q={width:"28vw",height:"100vh",paddingTop:"23vh",paddingRight:"3vw",textAlign:"right"},M={width:"72vw",height:"auto",display:"flex",flexDirection:"row",background:"rgba(0, 141, 133, 0.06)",justifyContent:"space-evenly"},S=(s(121),s.p+"static/media/up-logo.0fb86db8.png");function L(){return Object(o.jsx)("div",{className:"login-main-container",children:Object(o.jsxs)("div",{className:"middle-container",children:[Object(o.jsxs)("div",{className:"login-header",children:[Object(o.jsx)("img",{src:S,alt:"UP Logo",id:"uplogo"}),Object(o.jsx)("h1",{children:"University of the Philippines"}),Object(o.jsx)("h2",{children:"SET Portal"})]}),Object(o.jsx)("a",{href:"/home",children:Object(o.jsx)("button",{className:"sais-sign-in",children:" Sign in with SAIS"})}),Object(o.jsx)("a",{href:"/home",children:Object(o.jsx)("button",{className:"login-button",children:"Sign In with UP Mail"})})]})})}var B=s(144),E=s(145);s(19),window.React2=s(1);var P=Object(B.a)();var I=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(E.a,{theme:P,children:Object(o.jsx)(i.a,{children:Object(o.jsxs)(l.d,{children:[Object(o.jsx)(l.b,{path:"/login",render:function(){return Object(o.jsx)(L,{})}}),Object(o.jsx)(l.b,{path:"/evaluate",component:N}),Object(o.jsx)(l.b,{path:"/home",render:function(){return Object(o.jsx)(T,{})}}),Object(o.jsx)(l.a,{exact:!0,from:"/",to:"/login"}),Object(o.jsx)(l.a,{to:"/not-found"})]})})})})},A=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,147)).then((function(n){var s=n.getCLS,a=n.getFID,t=n.getFCP,c=n.getLCP,r=n.getTTFB;s(e),a(e),t(e),c(e),r(e)}))};r.a.render(Object(o.jsx)(t.a.StrictMode,{children:Object(o.jsx)(x,{children:Object(o.jsx)(b,{children:Object(o.jsx)(I,{})})})}),document.getElementById("root")),A()},67:function(e,n,s){},68:function(e,n,s){},86:function(e,n,s){}},[[122,1,2]]]);
//# sourceMappingURL=main.9f7ec9ee.chunk.js.map