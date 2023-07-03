"use strict";(self.webpackChunkwhereintheworld=self.webpackChunkwhereintheworld||[]).push([[376],{1376:function(e,i,n){n.r(i),n.d(i,{default:function(){return q}});var a=n(1413),t=n(9439),s=n(4165),r=n(5861),l=n(1044),c=n(2791),u=n(1933),o=n(5772),d=n(7510),m=n(3433),f="QuizAnswers_container__CP8vK",h="QuizAnswers_btnContainer__Hl6jL",p="QuizAnswers_quizBtn__TeiWt",x="QuizAnswers_selectedCorrect__t72S0",j="QuizAnswers_selectedIncorrect__cLDzf",v="QuizAnswers_forwardBtnContainer__Lm2AN",_="QuizAnswers_forwardBtn__LMyFk",g="QuizAnswers_forwardIcon__4uQ5s",y=n(1928),N=n(184),C=function(e){var i=e.correct,n=e.incorrect,a=e.updateStage,s=e.handleResults,r=(0,c.useState)([]),l=(0,t.Z)(r,2),u=l[0],o=l[1],C=(0,c.useState)(null),I=(0,t.Z)(C,2),S=I[0],w=I[1];c.useEffect((function(){i&&o([].concat((0,m.Z)(n.map((function(e){return{value:e,isCorrect:!1}}))),[{value:i,isCorrect:!0}]).sort((function(){return Math.random()-.5})))}),[i,n]);return(0,N.jsx)(N.Fragment,{children:(0,N.jsxs)("div",{className:f,children:[(0,N.jsx)("div",{className:h,children:u.map((function(e){return(0,N.jsx)(d.E.button,{onClick:function(){return function(e){s(e.isCorrect),w(e)}(e)},className:"".concat(p," quiz-btn ").concat(S?"disabled":"","\n            ").concat(S&&e.isCorrect&&x,"\n            ").concat(!(null!==S&&void 0!==S&&S.isCorrect)&&e===S&&j,"\n            "),disabled:!!S,initial:{opacity:0},animate:{opacity:1},children:e.value},e.value+e.isCorrect)}))}),(0,N.jsx)("div",{className:v,children:S&&(0,N.jsx)(d.E.button,{animate:{scale:[0,1.5,1.5,1]},transition:{type:"tween",duration:.5},initial:{scale:0},onClick:function(){s(null),w(null),a()},className:"".concat(_," element-full"),children:(0,N.jsx)(y.yr4,{className:g})})})]})})},I=n(3791),S=n(6856),w=n(8014),Q={wrapper:"ResultTracker_wrapper__9JlVJ",numericContainer:"ResultTracker_numericContainer__J7ENQ",numericStageContainer:"ResultTracker_numericStageContainer__PFGCy",resultsContainer:"ResultTracker_resultsContainer__Ya6V0",iconContainer:"ResultTracker_iconContainer__UaHgQ",iconTransform:"ResultTracker_iconTransform__cnjjO"},F=function(e){var i=e.difficulty,n=e.questionIndex,s=e.questionStage,r=e.isCorrect,l=e.cacheResults,u=(0,c.useState)({easy:Array.from({length:10}).fill("pending"),medium:Array.from({length:10}).fill("pending"),difficult:Array.from({length:10}).fill("pending"),currentIndex:null,currentStage:null}),o=(0,t.Z)(u,2),f=o[0],h=o[1],p={initial:{},animate:{y:[50,0],x:[75,0],scale:[2,1],rotateX:[180,0],rotateY:[360,250,180,90,0],rotate:[360,180,90,0]},exit:{y:[50,0],x:[50,0]}};(0,c.useEffect)((function(){!0!==r&&!1!==r||x(n,r,s),9===f.currentIndex&&(1===f.currentStage&&"easy"===i?l(f.easy):2===f.currentStage&&"medium"===i?l(f.easy,f.medium):3===f.currentStage&&"difficult"===i&&l(f.easy,f.medium,f.difficult))}),[r,s]);var x=function(e,i,n){var t=[];1===n?((t=(0,m.Z)(f.easy))[e]=i,h((0,a.Z)((0,a.Z)({},f),{},{easy:t,currentIndex:e,currentStage:n}))):2===n?((t=(0,m.Z)(f.medium))[e]=i,h((0,a.Z)((0,a.Z)({},f),{},{medium:t,currentIndex:e,currentStage:n}))):3===n&&((t=(0,m.Z)(f.difficult))[e]=i,h((0,a.Z)((0,a.Z)({},f),{},{difficult:t,currentIndex:e,currentStage:n})))};return(0,N.jsx)(I.M,{children:(0,N.jsxs)(d.E.div,{className:"".concat(Q.wrapper," element-full"),initial:{opacity:0},animate:{opacity:1},transition:{delay:.3,duration:.3},children:[(0,N.jsxs)(d.E.div,{className:"".concat(Q.numericContainer," element-border "),initial:{scale:0},animate:{scale:1},transition:{delay:.3},children:[(0,N.jsx)("span",{className:"numeric-stage-filler"}),(0,N.jsx)("span",{children:"I"}),(0,N.jsx)("span",{children:"II"}),(0,N.jsx)("span",{children:"III"}),(0,N.jsx)("span",{children:"IV"}),(0,N.jsx)("span",{children:"V"}),(0,N.jsx)("span",{children:"VI"}),(0,N.jsx)("span",{children:"VII"}),(0,N.jsx)("span",{children:"VIII"}),(0,N.jsx)("span",{children:"IX"}),(0,N.jsx)("span",{children:"X"})]}),(0,N.jsxs)(d.E.div,{className:"".concat(Q.resultsContainer," element-border"),initial:{scale:0},animate:{scale:1},transition:{delay:.3},children:[(0,N.jsx)("span",{className:"".concat(Q.numericStageContainer," numeric-stage-filler"),children:"easy"===i?(0,N.jsx)("span",{children:"I"}):"medium"===i?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("span",{children:"I"}),(0,N.jsx)("span",{children:"II"})]}):"difficult"===i?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("span",{children:"I"}),(0,N.jsx)("span",{children:"II"}),(0,N.jsx)("span",{children:"III"})]}):(0,N.jsx)(N.Fragment,{})}),f.easy&&"easy"===i&&f.easy.map((function(e,i){return(0,N.jsx)("span",{className:"".concat(Q.iconContainer," ").concat(Q.iconTransform),children:(0,N.jsxs)(d.E.span,{variants:p,initial:"initial",animate:i===f.currentIndex&&n===i?"animate":"initial",exit:"exit",className:Q.easy,children:["pending"===f.easy[i]&&(0,N.jsx)(S.FAs,{}),!0===f.easy[i]&&(0,N.jsx)(w.pkh,{}),!1===f.easy[i]&&(0,N.jsx)(w.FUQ,{})]},"icon-wrapper-".concat(r))},i)})),f.medium&&"medium"===i&&f.medium.map((function(e,i){return(0,N.jsxs)("span",{className:Q.iconContainer,children:[(0,N.jsx)("span",{className:Q.iconTransform,children:(0,N.jsx)(d.E.span,{variants:p,initial:"initial",animate:i===f.currentIndex&&n===i&&1===f.currentStage&&f.currentStage===s?"animate":"initial",exit:"exit",className:Q.easy,children:"pending"===f.easy[i]?(0,N.jsx)(S.FAs,{}):!0===f.easy[i]?(0,N.jsx)(w.pkh,{}):!1===f.easy[i]?(0,N.jsx)(w.FUQ,{}):(0,N.jsx)(N.Fragment,{})})}),(0,N.jsx)("span",{className:Q.iconTransform,children:(0,N.jsx)(d.E.span,{variants:p,initial:"initial",animate:i===f.currentIndex&&n===i&&2===f.currentStage&&f.currentStage===s?"animate":"initial",exit:"exit",className:Q.medium,children:"pending"===f.medium[i]?(0,N.jsx)(S.FAs,{}):!0===f.medium[i]?(0,N.jsx)(w.pkh,{}):!1===f.medium[i]?(0,N.jsx)(w.FUQ,{}):(0,N.jsx)(N.Fragment,{})})})]},"icon-wrapper-".concat(i,"-").concat(r))})),f&&"difficult"===i&&f.medium.map((function(e,i){return(0,N.jsxs)("span",{className:Q.iconContainer,children:[(0,N.jsx)("span",{className:Q.iconTransform,children:(0,N.jsx)(d.E.span,{variants:p,initial:"initial",animate:i===f.currentIndex&&n===i&&1===f.currentStage&&f.currentStage===s?"animate":"initial",exit:"exit",className:Q.easy,children:"pending"===f.easy[i]?(0,N.jsx)(S.FAs,{}):!0===f.easy[i]?(0,N.jsx)(w.pkh,{}):!1===f.easy[i]?(0,N.jsx)(w.FUQ,{}):(0,N.jsx)(N.Fragment,{})})}),(0,N.jsx)("span",{className:Q.iconTransform,children:(0,N.jsx)(d.E.span,{variants:p,initial:"initial",animate:i===f.currentIndex&&n===i&&2===f.currentStage&&f.currentStage===s?"animate":"initial",exit:"exit",className:Q.medium,children:"pending"===f.medium[i]?(0,N.jsx)(S.FAs,{}):!0===f.medium[i]?(0,N.jsx)(w.pkh,{}):!1===f.medium[i]?(0,N.jsx)(w.FUQ,{}):(0,N.jsx)(N.Fragment,{})})}),(0,N.jsx)("span",{className:Q.iconTransform,children:(0,N.jsx)(d.E.span,{variants:p,initial:"initial",animate:i===f.currentIndex&&n===i&&3===f.currentStage&&f.currentStage===s?"animate":"initial",exit:"exit",className:Q.difficult,children:"pending"===f.difficult[i]?(0,N.jsx)(S.FAs,{}):!0===f.difficult[i]?(0,N.jsx)(w.pkh,{}):!1===f.difficult[i]?(0,N.jsx)(w.FUQ,{}):(0,N.jsx)(N.Fragment,{})})})]},"icon-wrapper-".concat(i,"-").concat(r))}))]})]})})},E="Challenges_wrapper__i06uE",Z="Challenges_container__9rlLS",R="Challenges_resultimgWrapper__hj18h",z="Challenges_resultTrackerWrapper__En0XH",b="Challenges_imgWrapper__VcYd9",A="Challenges_imgContainer__NsToA",k="Challenges_challengeHeadline__YdUJ-",P=function(e){var i,n,a=e.challengeArr,s=e.wrongArr,r=e.counter,l=e.updateCounter,u=e.level,o=e.cacheResults,m=(0,c.useState)(null),f=(0,t.Z)(m,2),h=f[0],p=f[1],x=(0,c.useState)({easy:[],medium:[],difficult:[]}),j=(0,t.Z)(x,2),v=j[0],_=j[1],g=(0,c.useState)({easy:"",medium:"",difficult:0}),y=(0,t.Z)(g,2),I=y[0],S=y[1],w=(0,c.useState)(1),Q=(0,t.Z)(w,2),P=Q[0],T=Q[1],H=(0,c.useState)(null),U=(0,t.Z)(H,2),V=U[0],W=U[1],Y=(0,c.useRef)(""),q={initial:{opacity:0},animate:{opacity:1}};(0,c.useEffect)((function(){var e,i,n;(a&&p(a),h)&&S({easy:null===(e=h[r])||void 0===e?void 0:e.name.common,medium:null===(i=h[r])||void 0===i?void 0:i.capital[0],difficult:null===(n=h[r])||void 0===n?void 0:n.population});if(I.easy&&_({easy:L(s,"easy"),medium:L(s,"medium"),difficult:L(s,"difficult")}),h){var t,l;if(Y.current===(null===(t=h[r])||void 0===t?void 0:t.flags.svg))return;Y.current=h?null===(l=h[r])||void 0===l?void 0:l.flags.svg:"";var c=new Image;c.onload=function(){var e=c.width/c.height;document.documentElement.style.setProperty("--aspect-ratio","".concat(e))},c.src=Y.current}}),[a,h,r,s,I.easy]);var L=function(e,i){var n=[];e.forEach((function(e){e.name.common!==I.easy&&e.capital&&e.population&&("easy"===i?n.push(e.name.common):"medium"===i?n.push(e.capital[0]):"difficult"===i&&n.push((new Intl.NumberFormat).format(e.population)))}));for(var a=[];a.length<3;){var t=Math.floor(Math.random()*n.length);a.includes(n[t])||a.push(n[t])}return a},M=function(){1===P&&("easy"===u?l():"medium"!==u&&"difficult"!==u||T(2)),2===P&&("medium"===u?(l(),T(1)):"difficult"===u&&T(3)),3===P&&(l(),T(1))},B=function(e){W(e)};return(0,N.jsx)("div",{className:E,children:(0,N.jsx)("div",{className:Z,children:h&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)("div",{className:R,children:[(0,N.jsx)("div",{className:z,children:(0,N.jsx)(F,{difficulty:u,questionIndex:r,questionStage:P,isCorrect:V,cacheResults:o})}),(0,N.jsx)("div",{className:b,children:(0,N.jsx)(d.E.div,{className:"".concat(A," img-container"),initial:{scaleY:0},whileInView:{scaleY:1},transition:{delay:.1},children:(0,N.jsx)("img",{src:null===(i=h[r])||void 0===i?void 0:i.flags.svg,alt:"",className:"quiz-img"},null===(n=h[r])||void 0===n?void 0:n.flags.svg)},r)})]}),1===P&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(d.E.h3,{className:k,variants:q,initial:"initial",animate:"animate",children:"Select the name of the country that represents this flag"}),I&&v&&(0,N.jsx)(C,{correct:I.easy,incorrect:v.easy,updateStage:M,handleResults:B})]}),"easy"!==u&&2===P&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(d.E.h3,{className:k,variants:q,initial:"initial",animate:"animate",children:"Select the capital city of this country"}),I&&v&&(0,N.jsx)(C,{correct:I.medium,incorrect:v.medium,updateStage:M,handleResults:B})]}),"difficult"===u&&3===P&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(d.E.h3,{className:k,variants:q,initial:"initial",animate:"animate",children:"Select the approximate population of this country"}),I&&v&&(0,N.jsx)(C,{correct:(new Intl.NumberFormat).format(I.difficult),incorrect:v.difficult,updateStage:M,handleResults:B})]})]})})})},T={noteContainer:"QuizResults_noteContainer__3eQ8D",noteItem:"QuizResults_noteItem__LSXb+",youScored:"QuizResults_youScored__iW5Hu",wrapper:"QuizResults_wrapper__5CmJi",container:"QuizResults_container__+6Y3r",resultsWrapper:"QuizResults_resultsWrapper__g3Vd5",resultsContainer:"QuizResults_resultsContainer__GBQ5H",itemFlag:"QuizResults_itemFlag__Guo48",filler:"QuizResults_filler__HuhS1",resultsItemHead:"QuizResults_resultsItemHead__iPQfa",resultsItem:"QuizResults_resultsItem__i9k8v",itemName:"QuizResults_itemName__UQGMl",itemCapital:"QuizResults_itemCapital__d24hY",itemPopulation:"QuizResults_itemPopulation__gLFpH",itemPoints:"QuizResults_itemPoints__HohXE",icon:"QuizResults_icon__35skl",btnContainer:"QuizResults_btnContainer__hSb61"},H="Button_btn__SiQ2N",U=function(e){var i=e.text,n=e.action;return(0,N.jsx)(d.E.button,{className:"".concat(H," quiz-btn"),onClick:n,initial:{y:-100,scale:0},animate:{y:0,scale:1},transition:{delay:1.25,duration:.1},children:i})},V=function(e){var i=e.correctData,n=e.selectedAnswers,a=(0,c.useState)(!1),s=(0,t.Z)(a,2),r=s[0],l=s[1],u=(0,c.useState)({flags:[],easy:[],medium:[],difficult:[]}),m=(0,t.Z)(u,2),f=m[0],h=m[1],p=(0,c.useState)({totalPoints:null,pointsPerCountry:[]}),x=(0,t.Z)(p,2),j=x[0],v=x[1],_={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},g={hidden:{opacity:0,y:-100},visible:{opacity:1,y:0}},y=(0,o.s0)();(0,c.useEffect)((function(){i&&n&&!r&&(C(),l(!0))}),[i,n,r]);var C=function(){var e=[],a=[],t=[],s=[],r=0,l=[],c=null;if(c||(c=n.difficult?3:n.medium?2:1),n.easy&&i)for(var u=0;u<(null===(o=n.easy)||void 0===o?void 0:o.length);u++){var o,d,m,f;if(n.easy)a.push({value:null===(d=i[u])||void 0===d?void 0:d.name.common,isCorrect:n.easy[u]}),e.push(i[u].flags.png);if(n.medium)t.push({value:null===(m=i[u])||void 0===m?void 0:m.capital[0],isCorrect:n.medium[u]});if(n.difficult)s.push({value:null===(f=i[u])||void 0===f?void 0:f.population,isCorrect:n.difficult[u]});if(a){var p,x,j=S(a[u].isCorrect,null===(p=t[u])||void 0===p?void 0:p.isCorrect,null===(x=s[u])||void 0===x?void 0:x.isCorrect);r+=j,l[u]="".concat(j," / ").concat(c)}}a&&(h({flags:e,easy:a,medium:t,difficult:s}),v({totalPoints:r,pointsPerCountry:l}))},S=function(e,i,n){var a=0;return!0===e&&++a,!0===i&&++a,!0===n&&++a,a};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(d.E.div,{className:T.noteContainer,initial:{y:-100,scale:0},animate:{y:0,scale:1},transition:{delay:1.35},children:(0,N.jsx)("p",{className:T.noteItem,children:"Note: only the correct answers are shown in the results tab and the icon indicates whether you got it right or wrong"})}),(0,N.jsxs)("div",{className:"".concat(T.wrapper," element-full"),children:[(0,N.jsx)("div",{className:"".concat(T.container," element-border"),children:(0,N.jsx)("div",{className:T.resultsWrapper,children:(0,N.jsxs)(I.M,{children:[(0,N.jsxs)(d.E.div,{className:"".concat(T.resultsContainer," results-item-container"),variants:_,initial:"hidden",animate:"visible",children:[(0,N.jsx)("div",{className:T.itemFlag,children:(0,N.jsx)("p",{className:T.resultsItemHead,children:"Flag"})}),(0,N.jsx)("div",{className:T.itemName,children:(0,N.jsx)("p",{className:T.resultsItemHead,children:"Name"})}),n.medium&&f.medium&&(0,N.jsx)("div",{className:T.itemCapital,children:(0,N.jsx)("p",{className:T.resultsItemHead,children:"Capital"})}),n.difficult&&f.difficult&&(0,N.jsx)("div",{className:T.itemPopulation,children:(0,N.jsx)("p",{className:T.resultsItemHead,children:"Population"})})]}),f.easy[0]&&Array.from({length:10}).fill(null).map((function(e,i){return(0,N.jsxs)(d.E.div,{variants:_,initial:"hidden",animate:"visible",className:"".concat(T.resultsContainer," results-item-container"),children:[(0,N.jsx)(d.E.div,{className:T.itemFlag,variants:g,transition:{delay:.1*i},children:(0,N.jsx)("img",{src:f.flags[i],alt:"",className:"element-border"})}),(0,N.jsxs)(d.E.div,{className:T.itemName,variants:g,transition:{delay:.125*i},children:[(0,N.jsx)("p",{className:T.resultsItem,children:f.easy[i].value}),(0,N.jsx)("span",{className:T.icon,children:f.easy[i].isCorrect?(0,N.jsx)(w.pkh,{color:"green"}):(0,N.jsx)(w.FUQ,{color:"red"})})]}),n.medium&&f.medium&&(0,N.jsxs)(d.E.div,{className:T.itemCapital,variants:g,transition:{delay:.15*i},children:[(0,N.jsx)("p",{className:T.resultsItem,children:f.medium[i].value}),(0,N.jsx)("span",{className:T.icon,children:f.medium[i].isCorrect?(0,N.jsx)(w.pkh,{color:"green"}):(0,N.jsx)(w.FUQ,{color:"red"})})]}),n.difficult&&f.difficult&&(0,N.jsxs)(d.E.div,{className:T.itemPopulation,variants:g,transition:{delay:.175*i},children:[(0,N.jsx)("p",{className:T.resultsItem,children:(new Intl.NumberFormat).format(f.difficult[i].value)}),(0,N.jsx)("span",{className:T.icon,children:f.difficult[i].isCorrect?(0,N.jsx)(w.pkh,{color:"green"}):(0,N.jsx)(w.FUQ,{color:"red"})})]}),(0,N.jsx)(d.E.span,{className:T.itemPoints,variants:g,transition:{delay:.2*i},children:(0,N.jsx)("p",{children:j.pointsPerCountry[i]})})]},i)}))]})})}),j.pointsPerCountry[0]&&(0,N.jsx)(d.E.div,{className:T.youScoredContainer,variants:_,initial:{y:-100,scale:0},animate:{y:0,scale:1},transition:{delay:1.25},children:(0,N.jsxs)(d.E.p,{className:T.youScored,children:["You scored:"," ".concat(j.totalPoints," / ").concat(10*parseInt(j.pointsPerCountry[0].charAt(4)))]})}),(0,N.jsxs)("div",{className:T.btnContainer,children:[(0,N.jsx)(U,{text:"Back",action:function(){return y("/challenge")}}),(0,N.jsx)(U,{text:"Retry",action:function(){return window.location.reload()}})]})]})]})},W={container:"QuizPage_container__0EWgF"},Y=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(i){var n,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.ZP.get(i);case 2:return n=e.sent,a=n.data.filter((function(e){return e.capital&&e.population})),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(i){return e.apply(this,arguments)}}(),q=function(){var e=(0,o.UO)(),i=e.level,n=e.region,s=(0,c.useState)(""),r=(0,t.Z)(s,2),l=r[0],d=r[1],m=(0,c.useState)(!1),f=(0,t.Z)(m,2),h=f[0],p=f[1],x=(0,c.useState)([]),j=(0,t.Z)(x,2),v=j[0],_=j[1],g=(0,c.useState)(0),y=(0,t.Z)(g,2),C=y[0],I=y[1],S=(0,c.useState)(!1),w=(0,t.Z)(S,2),Q=w[0],F=w[1],E=(0,c.useState)({easy:null,medium:null,difficult:null}),Z=(0,t.Z)(E,2),R=Z[0],z=Z[1],b=(0,u.useQuery)(["Quiz",l],(function(){return Y(l)}),{enabled:""!==l,staleTime:300,retry:1}),A=b.data,k=b.isLoading;(0,c.useEffect)((function(){"All"===n?d("https://restcountries.com/v3.1/all"):"All"!==n&&d("https://restcountries.com/v3.1/region/".concat(n)),A&&!h&&(_(T(A)),p(!0)),10===C&&F(!0)}),[n,A,v,h,C,R]);var T=function(e){return e.sort((function(){return.5-Math.random()})).slice(0,10)};return(0,N.jsx)("main",{className:W.wrapper,children:!k&&(0,N.jsxs)("div",{className:W.container,children:[v&&!Q&&(0,N.jsx)(P,{level:i,challengeArr:v,wrongArr:A,counter:C,updateCounter:function(){I((function(e){return e+1}))},cacheResults:function(e,n,t){"easy"===i&&z((0,a.Z)((0,a.Z)({},R),{},{easy:e})),"medium"===i&&z((0,a.Z)((0,a.Z)({},R),{},{easy:e,medium:n})),"difficult"===i&&z({easy:e,medium:n,difficult:t})}}),Q&&R.easy&&(0,N.jsx)(V,{correctData:v,selectedAnswers:R})]})})}}}]);
//# sourceMappingURL=376.952c88a8.chunk.js.map