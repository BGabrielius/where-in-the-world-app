"use strict";(self.webpackChunkwhereintheworld=self.webpackChunkwhereintheworld||[]).push([[578],{2402:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(9439),i=t(2791),r={wrapper:"DropdownMenu_wrapper__VNs7h",container:"DropdownMenu_container__IQ1Jl",button:"DropdownMenu_button__gJGQV",optionsList:"DropdownMenu_optionsList__3+lUL",show:"DropdownMenu_show__mhlnT",option:"DropdownMenu_option__R+6VC","border-light-up":"DropdownMenu_border-light-up__KE27x",selectedOption:"DropdownMenu_selectedOption__77HmS"},o=t(7510),c=t(4373),s=t(184),l=function(e){var n=e.isChallenge,t=e.filterName,l=e.handleFilter,u=e.isOpen,d=(0,i.useState)(!1),p=(0,a.Z)(d,2),h=p[0],g=p[1],y=(0,i.useState)(0),v=(0,a.Z)(y,2),_=v[0],m=v[1],f=(0,i.useState)(!0),w=(0,a.Z)(f,2),x=w[0],b=w[1],j=n?["All","Africa","Asia","Americas","Europe","Oceania"]:["Africa","Asia","Americas","Europe","Oceania"],C=function(e){b(!1),(e!==_||x)&&(l(j[e]),m(e),g(!1),u&&u())},N=function(e){return function(n){switch(n.key){case" ":case"SpaceBar":case"Enter":n.preventDefault(),C(e)}}},P=function(e){if("Escape"===e.key)e.preventDefault(),g(!1)};return(0,s.jsx)("div",{className:r.wrapper,children:(0,s.jsxs)("div",{className:r.container,children:[(0,s.jsxs)("button",{type:"button","aria-haspopup":"listbox","aria-expanded":h,className:"region-filter-container ".concat(r.button," ").concat(h?r.expanded:""),onClick:function(){g(!h),u&&u()},onKeyDown:P,children:[x?t:j[_],h?(0,s.jsx)(o.E.span,{initial:{y:0,opacity:1},animate:{y:[-20,0],opacity:[0,1]},exit:{y:20,opacity:0},children:(0,s.jsx)(c.OId,{})}):(0,s.jsx)(o.E.span,{initial:{y:0,opacity:1},animate:{y:[20,0],opacity:[0,1]},exit:{y:-20,opacity:0},children:(0,s.jsx)(c.Vmf,{})})]}),(0,s.jsx)(o.E.ul,{initial:{scaleY:0,opacity:1},animate:{scaleY:h?[0,1]:[1,0],opacity:[0,1]},viewport:{once:!0},transition:{duration:.3},style:{transformOrigin:"top",overflow:"hidden"},className:"region-filter-container ".concat(r.optionsList," ").concat(h?r.show:""),role:"listbox","aria-activedescendant":j[_],tabIndex:-1,onKeyDown:P,children:j.map((function(e,n){return(0,s.jsx)(o.E.li,{whileInView:{y:[-10*n,0],opacity:[0,1]},initial:{y:0,opacity:0},transition:{delay:.08*n},viewport:{once:!0},exit:{y:-10},id:e,role:"option","aria-selected":_===n,tabIndex:0,onKeyDown:N(n),onClick:function(){return C(n)},className:"".concat(r.option," ").concat(_===n&&!1===x&&r.selectedOption),children:e},e)}))})]})})}},8578:function(e,n,t){t.r(n),t.d(n,{default:function(){return P}});var a=t(1413),i=t(9439),r=t(4165),o=t(5861),c=t(2791),s=t(7689),l=t(1933),u=t(1044),d=t(7153),p=t(7510),h={wrapper:"LibraryPage_wrapper__crJG8",container:"LibraryPage_container__245CO",filterContainer:"LibraryPage_filterContainer__voSaR",searchContainer:"LibraryPage_searchContainer__PAH4r",searchFilter:"LibraryPage_searchFilter__noH80",searchIcon:"LibraryPage_searchIcon__cbQ2b",regionFilter:"LibraryPage_regionFilter__u1+D3",errorMessage:"LibraryPage_errorMessage__jyOkI",countriesContainer:"LibraryPage_countriesContainer__KX+5T",countryContainer:"LibraryPage_countryContainer__J4dZ+",flagContainer:"LibraryPage_flagContainer__ubMUh",flag:"LibraryPage_flag__00I3K",statsContainer:"LibraryPage_statsContainer__-g75A",countryHeadline:"LibraryPage_countryHeadline__l-vwZ",countryStats:"LibraryPage_countryStats__FtgFs"},g=t(7692),y=t(2402),v="Pagination_wrapper__2RUgV",_="Pagination_container__FsZPu",m="Pagination_prevnextContainer__3Y7RU",f="Pagination_prevnextBtn__TDHTb",w="Pagination_currentPage__7K1He",x="Pagination_disabledBtn__3So1e",b=t(184),j=function(e){var n=e.page,t=e.swapPage,a=e.isNextValid,i={initial:{scaleX:0,opacity:0},animate:{scaleX:1,opacity:1}};return(0,b.jsx)(p.E.div,{className:v,variants:{initial:{x:100,scale:0},animate:{x:0,scale:1}},whileInView:"animate",initial:"initial",transition:{duration:.5},viewport:{once:!0},children:(0,b.jsxs)("div",{className:"".concat(_," pagination-container"),children:[(0,b.jsx)(p.E.div,{variants:i,whileHover:1===n?{}:{scale:1.1},initial:"initial",whileInView:"animate",viewport:{once:!0},transition:{duration:.5,delay:.2},className:m,children:(0,b.jsx)(p.E.button,{onClick:function(e){return t(e)},className:"".concat(f,"  prev-next-btn ").concat(1===n&&x),disabled:1===n,value:"prev",children:"Prev"})}),(0,b.jsx)(p.E.div,{initial:{y:-50,opacity:0},whileInView:{y:0,opacity:[0,1]},viewport:{once:!0},transition:{duration:.3,delay:.2},children:(0,b.jsx)("p",{className:w,children:n})}),(0,b.jsx)(p.E.div,{variants:i,whileHover:a?{scale:1.1}:{},initial:"initial",whileInView:"animate",viewport:{once:!0},transition:{duration:.5,delay:.2},className:"".concat(m," prev-next-container"),children:(0,b.jsx)(p.E.button,{onClick:function(e){return t(e)},className:" ".concat(f," prev-next-btn ").concat(!a&&x),disabled:!a,value:"next",children:"Next"})})]})})},C=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(n,t,a){var i,o,c,s,l,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.get(n);case 2:return i=e.sent,12,o=1===a?60:60*(a-1),c=12*t===60*(a-1)?o:12*t,s=1===a?i.data.slice(0,c):i.data.slice(o,c),l=!(i.data.length<=12*t),d={paginated:s,allCountries:i.data,isMoreCountries:l},e.abrupt("return",d);case 10:case"end":return e.stop()}}),e)})));return function(n,t,a){return e.apply(this,arguments)}}(),N=function(){var e=(0,s.s0)(),n=(0,c.useState)("https://restcountries.com/v3.1/all"),t=(0,i.Z)(n,2),r=t[0],o=t[1],u=(0,c.useState)(),v=(0,i.Z)(u,2),_=v[0],m=v[1],f=(0,c.useState)(""),w=(0,i.Z)(f,2),x=w[0],N=w[1],P=(0,c.useState)(1),E=(0,i.Z)(P,2),L=E[0],S=E[1],Z=(0,c.useState)(1),M=(0,i.Z)(Z,2),k=M[0],D=M[1],H=(0,c.useState)(""),I=(0,i.Z)(H,2),F=I[0],V=I[1],A=(0,c.useState)(!1),O=(0,i.Z)(A,2),T=O[0],K=O[1],R=(0,c.useState)({display:"none",width:"2%"}),B=(0,i.Z)(R,2),J=B[0],Q=B[1],U=(0,l.useQuery)(["countries",r,L,k],(function(){return C(r,L,k)}),{staleTime:300,onError:function(){N(F?"Sorry, there are no countries that would match your search":"Sorry an error has accured while fetching")},retry:0}),Y=U.data,G=U.isLoading,X=U.isFetching,q=U.isError,z=(0,c.useRef)(0),W=(0,d.v)().scrollY,$={initial:{opacity:.2,x:-100,scale:.9},animate:{opacity:1,x:0,scale:1}};(0,c.useEffect)((function(){return Y?(N(""),m(Y.paginated),K(Y.isMoreCountries)):G&&N("Loading..."),window.addEventListener("scroll",ne),function(){window.removeEventListener("scroll",ne)}}),[Y,G,X,q]);var ee=function(e,n){var t;return function(){for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];t||(t=setTimeout((function(){e.apply(void 0,i),t=null}),n))}},ne=ee((function(){if(!1!==(null===Y||void 0===Y?void 0:Y.isMoreCountries)&&!X&&(null===Y||void 0===Y?void 0:Y.paginated.length)%60!==0){var e=!1,n=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),t=document.documentElement.clientHeight,a=W.get()/(n-t)*100;a>=90?e=!0:a<90&&(e=!1),e&&a>=90&&(ae(),e=!1)}}),0),te=ee((function(e){if(e.target.value)if(q||0!==z.current)if(0===z.current)z.current=e.target.value.length;else{if(!(0!==z.current&&z.current>e.target.value.length))return;o("https://restcountries.com/v3.1/name/".concat(e.target.value)),D(1),V(e.target.value),S(1),z.current=0}else e.target.value&&(o("https://restcountries.com/v3.1/name/".concat(e.target.value)),D(1),V(e.target.value),S(1),z.current=0);else o("https://restcountries.com/v3.1/all"),D(1),z.current=0}),200),ae=function(){S(L+1)},ie=function(e){if("prev"===e){var n=window.document.documentElement.scrollHeight;window.scrollTo(0,n-window.innerHeight)}"next"===e&&window.scrollTo(0,0)};return(0,b.jsx)("main",{className:h.wrapper,children:(0,b.jsxs)("div",{className:h.container,children:[(0,b.jsxs)("div",{className:h.filterContainer,children:[(0,b.jsxs)("div",{className:"".concat(h.searchContainer," search-filter-container"),style:{width:J.width},children:[(0,b.jsx)(g.Goc,{className:h.searchIcon,onClick:function(){Q((0,a.Z)((0,a.Z)({},J),{},{display:"none"===J.display?"block":"none",width:"2%"===J.width?"90%":"2%"}))}}),(0,b.jsx)("input",{type:"search",onChange:te,placeholder:"Search for a country...",className:h.searchFilter,style:{display:J.display}})]}),(0,b.jsx)(y.Z,{isChallenge:!1,filterName:"Filter by Region",handleFilter:function(e){o("https://restcountries.com/v3.1/region/".concat(e)),D(1),S(1)}})]}),x&&(0,b.jsx)("p",{className:h.errorMessage,children:x}),(0,b.jsx)(p.E.div,{className:h.countriesContainer,children:_?_.map((function(n){return(0,b.jsxs)(p.E.div,{variants:$,initial:"initial",whileInView:"animate",viewport:{once:!0},transition:{type:"spring",duration:.15,stiffness:75},className:"".concat(h.countryContainer," country-card-container"),onClick:function(){return e("/library/".concat(n.name.common.toLowerCase()))},children:[(0,b.jsx)("div",{className:h.flagContainer,children:(0,b.jsx)("img",{src:n.flags.png,alt:n.cca2,className:h.flag})}),(0,b.jsxs)("div",{className:"".concat(h.statsContainer," country-card-summary"),children:[(0,b.jsx)("h3",{className:h.countryHeadline,children:n.name.common}),(0,b.jsxs)("span",{className:h.countryStats,children:[(0,b.jsx)("b",{children:"Population: "}),(0,b.jsx)("p",{children:(t=n.population,t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))})]}),(0,b.jsxs)("span",{className:h.countryStats,children:[(0,b.jsx)("b",{children:"Region: "}),(0,b.jsx)("p",{children:n.region})]}),(0,b.jsx)("span",{className:"".concat(h.countryStats," ").concat(h.capital),children:n.capital&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("b",{children:"Capital: "}),(0,b.jsx)("p",{children:n.capital[0]})]})})]})]},n.name.common);var t})):(0,b.jsx)("div",{})}),60===(null===Y||void 0===Y?void 0:Y.paginated.length)||5===k||!1===(null===Y||void 0===Y?void 0:Y.isMoreCountries)&&Y.allCountries.length>60?(0,b.jsx)(j,{page:k,swapPage:function(e){"prev"===e.target.value&&k>1&&(D((function(e){return e-1})),S((function(e){return e-5})),ie("prev")),"next"===e.target.value&&(D((function(e){return e+1})),ae(),ie("next"))},isNextValid:T}):(0,b.jsx)(b.Fragment,{})]})})},P=N}}]);
//# sourceMappingURL=578.a7f17ee3.chunk.js.map