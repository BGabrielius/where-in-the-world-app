"use strict";(self.webpackChunkwhereintheworld=self.webpackChunkwhereintheworld||[]).push([[578],{2402:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(9439),i=t(2791),r={wrapper:"DropdownMenu_wrapper__ZFXWD",container:"DropdownMenu_container__aEF+4",button:"DropdownMenu_button__WAcup",optionsList:"DropdownMenu_optionsList__TAlXi",show:"DropdownMenu_show__PmtXx",option:"DropdownMenu_option__cADWw","border-light-up":"DropdownMenu_border-light-up__inSoi",selectedOption:"DropdownMenu_selectedOption__KD1H5"},o=t(7510),c=t(4373),s=t(184),l=function(e){var n=e.isChallenge,t=e.filterName,l=e.handleFilter,u=e.isOpen,d=(0,i.useState)(!1),p=(0,a.Z)(d,2),h=p[0],m=p[1],y=(0,i.useState)(0),g=(0,a.Z)(y,2),v=g[0],_=g[1],f=(0,i.useState)(!0),w=(0,a.Z)(f,2),x=w[0],b=w[1],j=n?["All","Africa","Asia","Americas","Europe","Oceania"]:["Africa","Asia","Americas","Europe","Oceania"],C=function(e){b(!1),(e!==v||x)&&(l(j[e]),_(e),m(!1),u&&u())},N=function(e){return function(n){switch(n.key){case" ":case"SpaceBar":case"Enter":n.preventDefault(),C(e)}}},P=function(e){if("Escape"===e.key)e.preventDefault(),m(!1)};return(0,s.jsx)("div",{className:r.wrapper,children:(0,s.jsxs)("div",{className:r.container,children:[(0,s.jsxs)("button",{type:"button","aria-haspopup":"listbox","aria-expanded":h,className:"region-filter-container ".concat(r.button," ").concat(h?r.expanded:""),onClick:function(){m(!h),u&&u()},onKeyDown:P,children:[x?t:j[v],h?(0,s.jsx)(o.E.span,{initial:{y:0,opacity:1},animate:{y:[-20,0],opacity:[0,1]},exit:{y:20,opacity:0},children:(0,s.jsx)(c.OId,{})}):(0,s.jsx)(o.E.span,{initial:{y:0,opacity:1},animate:{y:[20,0],opacity:[0,1]},exit:{y:-20,opacity:0},children:(0,s.jsx)(c.Vmf,{})})]}),(0,s.jsx)(o.E.ul,{initial:{scaleY:0,opacity:1},animate:{scaleY:h?[0,1]:[1,0],opacity:[0,1]},viewport:{once:!0},transition:{duration:.3},style:{transformOrigin:"top",overflow:"hidden"},className:"region-filter-container ".concat(r.optionsList," ").concat(h?r.show:""),role:"listbox","aria-activedescendant":j[v],tabIndex:-1,onKeyDown:P,children:j.map((function(e,n){return(0,s.jsx)(o.E.li,{whileInView:{y:[-10*n,0],opacity:[0,1]},initial:{y:0,opacity:0},transition:{delay:.08*n},viewport:{once:!0},exit:{y:-10},id:e,role:"option","aria-selected":v===n,tabIndex:0,onKeyDown:N(n),onClick:function(){return C(n)},className:"".concat(r.option," ").concat(v===n&&!1===x&&r.selectedOption),children:e},e)}))})]})})}},8578:function(e,n,t){t.r(n),t.d(n,{default:function(){return P}});var a=t(1413),i=t(9439),r=t(4165),o=t(5861),c=t(2791),s=t(5772),l=t(1933),u=t(1044),d=t(7153),p=t(7510),h={wrapper:"LibraryPage_wrapper__mqSJS",container:"LibraryPage_container__D6r-H",filterContainer:"LibraryPage_filterContainer__HlZtw",searchContainer:"LibraryPage_searchContainer__tbnFB",searchFilter:"LibraryPage_searchFilter__i6yfN",searchIcon:"LibraryPage_searchIcon__RxaVV",regionFilter:"LibraryPage_regionFilter__Hw38N",errorMessage:"LibraryPage_errorMessage__qiy7O",countriesContainer:"LibraryPage_countriesContainer__HZkcD",countryContainer:"LibraryPage_countryContainer__rhJux",flagContainer:"LibraryPage_flagContainer__XENv1",flag:"LibraryPage_flag__fJFkA",statsContainer:"LibraryPage_statsContainer__domcL",countryHeadline:"LibraryPage_countryHeadline__0tc4e",countryStats:"LibraryPage_countryStats__a-c-A"},m=t(7692),y=t(2402),g="Pagination_wrapper__L-Wxe",v="Pagination_container__Sgczz",_="Pagination_prevnextContainer__C8SVX",f="Pagination_prevnextBtn__PyNu8",w="Pagination_currentPage__Fu2NT",x="Pagination_disabledBtn__KekRG",b=t(184),j=function(e){var n=e.page,t=e.swapPage,a=e.isNextValid,i={initial:{scaleX:0,opacity:0},animate:{scaleX:1,opacity:1}};return(0,b.jsx)(p.E.div,{className:g,variants:{initial:{x:100,scale:0},animate:{x:0,scale:1}},whileInView:"animate",initial:"initial",transition:{duration:.5},viewport:{once:!0},children:(0,b.jsxs)("div",{className:"".concat(v," pagination-container"),children:[(0,b.jsx)(p.E.div,{variants:i,whileHover:1===n?{}:{scale:1.1},initial:"initial",whileInView:"animate",viewport:{once:!0},transition:{duration:.5,delay:.2},className:_,children:(0,b.jsx)(p.E.button,{onClick:function(e){return t(e)},className:"".concat(f,"  prev-next-btn ").concat(1===n&&x),disabled:1===n,value:"prev",children:"Prev"})}),(0,b.jsx)(p.E.div,{initial:{y:-50,opacity:0},whileInView:{y:0,opacity:[0,1]},viewport:{once:!0},transition:{duration:.3,delay:.2},children:(0,b.jsx)("p",{className:w,children:n})}),(0,b.jsx)(p.E.div,{variants:i,whileHover:a?{scale:1.1}:{},initial:"initial",whileInView:"animate",viewport:{once:!0},transition:{duration:.5,delay:.2},className:"".concat(_," prev-next-container"),children:(0,b.jsx)(p.E.button,{onClick:function(e){return t(e)},className:" ".concat(f," prev-next-btn ").concat(!a&&x),disabled:!a,value:"next",children:"Next"})})]})})},C=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(n,t,a){var i,o,c,s,l,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.get(n);case 2:return i=e.sent,12,o=1===a?60:60*(a-1),c=12*t===60*(a-1)?o:12*t,s=1===a?i.data.slice(0,c):i.data.slice(o,c),l=!(i.data.length<=12*t),d={paginated:s,allCountries:i.data,isMoreCountries:l},e.abrupt("return",d);case 10:case"end":return e.stop()}}),e)})));return function(n,t,a){return e.apply(this,arguments)}}(),N=function(){var e=(0,s.s0)(),n=(0,c.useState)("https://restcountries.com/v3.1/all"),t=(0,i.Z)(n,2),r=t[0],o=t[1],u=(0,c.useState)(),g=(0,i.Z)(u,2),v=g[0],_=g[1],f=(0,c.useState)(""),w=(0,i.Z)(f,2),x=w[0],N=w[1],P=(0,c.useState)(1),E=(0,i.Z)(P,2),S=E[0],L=E[1],Z=(0,c.useState)(1),D=(0,i.Z)(Z,2),k=D[0],F=D[1],M=(0,c.useState)(""),H=(0,i.Z)(M,2),A=H[0],I=H[1],V=(0,c.useState)(""),O=(0,i.Z)(V,2),X=O[0],T=O[1],K=(0,c.useState)(!1),R=(0,i.Z)(K,2),B=R[0],W=R[1],J=(0,c.useState)({display:"none",width:"2%"}),Y=(0,i.Z)(J,2),q=Y[0],z=Y[1],G=(0,l.useQuery)(["countries",r,S,k],(function(){return C(r,S,k)}),{staleTime:300,onError:function(){N(A?"Sorry, there are no countries that would match your search":"Sorry an error has accured while fetching")},retry:0}),Q=G.data,U=G.isLoading,$=G.isFetching,ee=G.isError,ne=(0,c.useRef)(0),te=(0,d.v)().scrollY,ae={initial:{opacity:.2,x:-100,scale:.9},animate:{opacity:1,x:0,scale:1}};(0,c.useEffect)((function(){return Q?(N(""),_(Q.paginated),W(Q.isMoreCountries)):U&&N("Loading..."),window.addEventListener("scroll",re),function(){window.removeEventListener("scroll",re)}}),[Q,U,$,ee]);var ie=function(e,n){var t;return function(){for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];t||(t=setTimeout((function(){e.apply(void 0,i),t=null}),n))}},re=ie((function(){if(!1!==(null===Q||void 0===Q?void 0:Q.isMoreCountries)&&!$&&(null===Q||void 0===Q?void 0:Q.paginated.length)%60!==0){var e=!1,n=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),t=document.documentElement.clientHeight,a=te.get()/(n-t)*100;a>=90?e=!0:a<90&&(e=!1),e&&a>=90&&(ce(),e=!1)}}),0),oe=ie((function(e){if(e.target.value)if(ee||0!==ne.current)if(0===ne.current)ne.current=e.target.value.length;else{if(!(0!==ne.current&&ne.current>e.target.value.length))return;o("https://restcountries.com/v3.1/name/".concat(e.target.value)),F(1),I(e.target.value),L(1),ne.current=0}else e.target.value&&(o("https://restcountries.com/v3.1/name/".concat(e.target.value)),F(1),I(e.target.value),L(1),ne.current=0);else o(X?"https://restcountries.com/v3.1/region/".concat(X):"https://restcountries.com/v3.1/all"),F(1),ne.current=0}),200),ce=function(){L(S+1)},se=function(e){if("prev"===e){var n=window.document.documentElement.scrollHeight;window.scrollTo(0,n-window.innerHeight)}"next"===e&&window.scrollTo(0,0)};return(0,b.jsx)("main",{className:h.wrapper,children:(0,b.jsxs)("div",{className:h.container,children:[(0,b.jsxs)("div",{className:h.filterContainer,children:[(0,b.jsxs)("div",{className:"".concat(h.searchContainer," search-filter-container"),style:{width:q.width},children:[(0,b.jsx)(m.Goc,{className:h.searchIcon,onClick:function(){z((0,a.Z)((0,a.Z)({},q),{},{display:"none"===q.display?"block":"none",width:"2%"===q.width?"90%":"2%"}))}}),(0,b.jsx)("input",{type:"search",onChange:oe,placeholder:"Search for a country...",className:h.searchFilter,style:{display:q.display}})]}),(0,b.jsx)(y.Z,{isChallenge:!1,filterName:"Filter by Region",handleFilter:function(e){o("https://restcountries.com/v3.1/region/".concat(e)),T(e),F(1),L(1)}})]}),x&&(0,b.jsx)("p",{className:h.errorMessage,children:x}),(0,b.jsx)(p.E.div,{className:h.countriesContainer,children:v?v.map((function(n){return(0,b.jsxs)(p.E.div,{variants:ae,initial:"initial",whileInView:"animate",viewport:{once:!0},transition:{type:"spring",duration:.15,stiffness:75},className:"".concat(h.countryContainer," country-card-container"),onClick:function(){return e("/library/".concat(n.name.common.toLowerCase()))},children:[(0,b.jsx)("div",{className:h.flagContainer,children:(0,b.jsx)("img",{src:n.flags.png,alt:n.cca2,className:h.flag})}),(0,b.jsxs)("div",{className:"".concat(h.statsContainer," country-card-summary"),children:[(0,b.jsx)("h3",{className:h.countryHeadline,children:n.name.common}),(0,b.jsxs)("span",{className:h.countryStats,children:[(0,b.jsx)("b",{children:"Population: "}),(0,b.jsx)("p",{children:(new Intl.NumberFormat).format(n.population)})]}),(0,b.jsxs)("span",{className:h.countryStats,children:[(0,b.jsx)("b",{children:"Region: "}),(0,b.jsx)("p",{children:n.region})]}),(0,b.jsx)("span",{className:"".concat(h.countryStats," ").concat(h.capital),children:n.capital&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("b",{children:"Capital: "}),(0,b.jsx)("p",{children:n.capital[0]})]})})]})]},n.name.common)})):(0,b.jsx)("div",{})}),60===(null===Q||void 0===Q?void 0:Q.paginated.length)||5===k||!1===(null===Q||void 0===Q?void 0:Q.isMoreCountries)&&Q.allCountries.length>60?(0,b.jsx)(j,{page:k,swapPage:function(e){"prev"===e.target.value&&k>1&&(F((function(e){return e-1})),L((function(e){return e-5})),se("prev")),"next"===e.target.value&&(F((function(e){return e+1})),ce(),se("next"))},isNextValid:B}):(0,b.jsx)(b.Fragment,{})]})})},P=N}}]);
//# sourceMappingURL=578.e36d0167.chunk.js.map