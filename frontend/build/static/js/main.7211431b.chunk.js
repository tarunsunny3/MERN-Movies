(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{149:function(e,t,n){},172:function(e,t,n){},184:function(e,t,n){},185:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),i=n.n(c),o=(n(149),n(12)),s=n.n(o),l=n(19),j=n(10),d=n(20),u=n.n(d),b=r.a.createContext(),h=n(64),p=n(14),m="https://www.omdbapi.com/?apikey=".concat("78ad81a8","&"),f=n(57),O=(n(172),n(120)),x=n.n(O),g=n(231),v=n(6),y=n(248),C=n(249),w=n(46),k=n(224),S=n(251),A=n(226),N=n(228),I=n(235),B=n(230),P=n(229),z=n(232),D=n(128),T=n(77),F=n.n(T),L=n(257),J=n(118),V=n.n(J),Y=n(2),G=Object(k.a)((function(e){var t;return{root:{maxWidth:345,borderRadius:"1rem",boxShadow:"5px 10px #888888"},media:{maxWidth:"100%",height:200,backgroundSize:"90% 100%"},fav:{color:"#444444",fontSize:"1.8rem"},favChecked:{color:"#FF0000"},paper:(t={width:"90%"},Object(w.a)(t,e.breakpoints.down("sm"),{width:"80%"}),Object(w.a)(t,"backgroundColor","white"),t),modal:{display:"flex",alignItems:"center",justifyContent:"center",overflow:"scroll",marginTop:"2%"},modalMedia:{maxWidth:"100%",height:600,backgroundSize:"cover"},expandedCard:{width:"100%"},closeIcon:{fontSize:"3rem"}}})),E=function(e){var t=e.movie,n=e.favorite,c=r.a.useContext(b),i=c.user,o=c.setLoggedIn,d=c.loggedIn,h=G(),p=Object(a.useState)(!1),f=Object(j.a)(p,2),O=f[0],x=f[1],v=Object(a.useState)({}),y=Object(j.a)(v,2),C=y[0],w=y[1],k=Object(a.useState)(!1),T=Object(j.a)(k,2),J=T[0],E=T[1];Object(a.useEffect)((function(){i&&i.favoriteMovies&&i.favoriteMovies.includes(t.imdbID)?x(!0):x(!1)}),[i]);var Z=function(){var e=Object(l.a)(s.a.mark((function e(t,n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=t.target.classList).contains(h.favChecked)){e.next=8;break}return a.remove(h.favChecked),e.next=5,u.a.post("/api/removeFav",{imdbID:n});case 5:o(!d),e.next=12;break;case 8:return e.next=10,u.a.post("/api/addFav",{imdbID:n});case 10:o(!d),a.add(h.favChecked);case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),R=function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("/api/removeFav",{imdbID:t});case 2:o(!d);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.next=3,u.a.get("".concat(m,"&i=").concat(t,"&plot=full"));case 3:n=e.sent,w(n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=Object(Y.jsxs)(A.a,{className:h.expandedCard,children:[Object(Y.jsx)(N.a,{children:Object(Y.jsx)(P.a,{className:h.modalMedia,src:"/logo192.png",image:"N/A"===C.Poster?"/logo192.png":C.Poster,title:C.Title,children:Object(Y.jsx)("div",{style:{width:"200px",backgroundColor:"white"},children:Object(Y.jsx)(F.a,{onClick:function(){return E(!1)},className:h.closeIcon})})})}),Object(Y.jsxs)(B.a,{children:[void 0===n&&Object(Y.jsxs)(D.a,{gutterBottom:!0,variant:"h5",component:"h2",children:[Object(Y.jsx)(g.a,{style:{float:"right"},children:Object(Y.jsx)("span",{children:Object(Y.jsx)("i",{onClick:function(e){return Z(e,C.imdbID)},className:O?"fas fa-heart ".concat(h.fav," ").concat(h.favChecked):"fas fa-heart ".concat(h.fav)})})}),C.Title]}),Object(Y.jsx)(D.a,{gutterBottom:!0,variant:"body1",color:"textSecondary",component:"p",children:C.Plot}),Object(Y.jsxs)(D.a,{gutterBottom:!0,variant:"body1",color:"textSecondary",component:"p",children:["Genre: ",C.Genre,C.imdbRating&&Object(Y.jsx)("span",{children:Object(Y.jsxs)(D.a,{style:{float:"right"},gutterBottom:!0,variant:"body1",component:"p",children:["IMDB rating:  ",C.imdbRating," ",Object(Y.jsx)("span",{children:Object(Y.jsx)("i",{style:{color:"#F98404"},className:"fas fa-3x fa-star"})})]})})]}),C.Runtime&&Object(Y.jsx)("span",{children:Object(Y.jsxs)(D.a,{gutterBottom:!0,variant:"body1",component:"p",children:["Duration:  ",C.Runtime]})}),Object(Y.jsxs)(D.a,{gutterBottom:!0,variant:"body1",color:"textSecondary",component:"p",children:["Actors:  ",C.Actors]}),Object(Y.jsxs)(D.a,{variant:"body2",color:"textSecondary",component:"p",children:["Year: ",C.Year]}),Object(Y.jsxs)(D.a,{variant:"body2",color:"textSecondary",component:"p",children:["Type: ",C.Type]})]}),Object(Y.jsx)(z.a,{variant:"contained",onClick:function(){return E(!1)},color:"primary",style:{float:"right",marginBottom:"2%",marginRight:"3%"},children:"Close"})]});return Object(Y.jsx)("div",{children:void 0===i||void 0===i.favoriteMovies?Object(Y.jsx)("p",{children:"loading...."}):Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsxs)(A.a,{className:h.root,children:[Object(Y.jsxs)("div",{style:{display:"flex",backgroundColor:"#F7DBF0",justifyContent:"space-between",alignItems:"center"},children:[Object(Y.jsxs)("p",{style:{fontSize:"1.5rem",marginLeft:"2%"},children:[" ",t.Type.charAt(0).toUpperCase()+t.Type.slice(1)]}),void 0===n?Object(Y.jsx)("div",{children:Object(Y.jsx)(L.a,{title:O?"Remove from favorite?":"Add to favorites?",children:Object(Y.jsx)(g.a,{children:Object(Y.jsx)("span",{children:Object(Y.jsx)("i",{onClick:function(e){return Z(e,t.imdbID)},className:O?"fas fa-heart ".concat(h.fav," ").concat(h.favChecked):"fas fa-heart ".concat(h.fav)})})})})}):Object(Y.jsx)("div",{children:Object(Y.jsx)(L.a,{title:"Remove from favorites?",placement:"right",children:Object(Y.jsx)(g.a,{onClick:function(){return R(t.imdbID)},children:Object(Y.jsx)(V.a,{})})})})]}),Object(Y.jsx)(N.a,{onClick:function(){return X(t.imdbID)},children:Object(Y.jsx)(P.a,{className:h.media,image:"N/A"===t.Poster?"/logo192.png":t.Poster,src:"/logo192.png",title:t.Title})}),Object(Y.jsxs)(B.a,{children:[Object(Y.jsx)(D.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t.Title}),Object(Y.jsxs)(D.a,{variant:"body2",color:"textSecondary",component:"p",children:["Year: ",t.Year]})]}),Object(Y.jsx)(I.a,{style:{justifyContent:"space-between"},children:Object(Y.jsx)(z.a,{variant:"contained",color:"secondary",onClick:function(){return X(t.imdbID)},children:"More"})})]}),Object(Y.jsx)("div",{className:h.modalDiv,children:Object(Y.jsx)(S.a,{className:h.modal,open:J,onClose:function(){return E(!J)},"aria-labelledby":"detailed-movie-modal","aria-describedby":"detailed-movie-description",children:Object(Y.jsx)("div",{className:h.paper,children:W})})})]})})},Z=n(238),R=n(119),X=Object(v.a)({root:{"& fieldset":{borderColor:"#005792"},textTransform:"capitalize","& input:valid:focus + fieldset":{borderLeftWidth:7,padding:"4px !important"}}})(y.a),W=function(){var e=Object(a.useState)("avengers"),t=Object(j.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),i=Object(j.a)(c,2),o=i[0],d=i[1],b=Object(a.useState)(0),h=Object(j.a)(b,2),p=h[0],O=h[1],v=Object(a.useState)(null),y=Object(j.a)(v,2),w=y[0],k=y[1],S=Object(a.useState)(1),A=Object(j.a)(S,2),N=A[0],I=A[1],B=function(){var e=Object(l.a)(s.a.mark((function e(t){var a,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I(t),a="".concat(m,"s=").concat(n,"&page=").concat(t),e.next=4,u.a.get(a);case 4:r=e.sent,c=r.data,d(c.Search),console.log("Search is ",n,c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,a,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(m,"s=").concat(t),e.next=3,u.a.get(n);case 3:a=e.sent,"False"===(r=a.data).Response?"I"==(c=a.data.Error)[0]?k("Please enter some text and then try again"):"T"==c[0]?k("The entered text is too short to get results"):k("Couldn't find any results"):(k(null),d(r.Search),O(r.totalResults));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){P("avengers")}),[]),Object(Y.jsxs)("div",{style:{marginLeft:"2%"},children:[Object(Y.jsxs)(f.a,{children:[Object(Y.jsx)("title",{children:"Search Movies"}),Object(Y.jsx)("meta",{name:"description",content:"Search for movies, series from Tmovies"})]}),Object(Y.jsxs)("div",{style:{marginTop:"5px",marginLeft:"4px",width:"100%"},children:[Object(Y.jsx)(X,{InputProps:{style:{color:"white"}},style:{width:"80%"},color:"primary",placeholder:"Search for movies, series",onChange:function(e){0===e.target.value.length&&P(""),r(e.target.value),P(e.target.value)},value:n,inputProps:{"aria-label":"search"},onKeyPress:function(e){"Enter"===e.code&&P(n)}}),Object(Y.jsx)(g.a,{onClick:function(){return P(n)},type:"submit","aria-label":"search",children:Object(Y.jsx)(x.a,{style:{color:"white"}})})]}),null===w?Object(Y.jsxs)("div",{children:[Object(Y.jsx)(Z.a,{container:!0,spacing:4,display:"flex",justifyContent:"space-around",children:o.map((function(e,t){return Object(Y.jsx)(Z.a,{item:!0,xs:12,sm:6,md:4,children:Object(Y.jsx)(E,{movie:e})},t)}))}),p/10>1&&Object(Y.jsx)("div",{style:{marginTop:"5%",marginBottom:"2%",display:"flex",justifyContent:"center"},children:Object(Y.jsx)(R.Link,{to:"navbar",smooth:!0,children:Object(Y.jsx)(C.a,{style:{backgroundColor:"white",paddingTop:"2%",paddingBottom:"2%"},showFirstButton:!0,showLastButton:!0,color:"primary",count:Number(Math.ceil(p/10)),page:Number(N),onChange:function(e,t){return B(Number(t))}})})})]}):Object(Y.jsx)("div",{style:{backgroundColor:"white",width:"max-content",padding:"2%"},children:Object(Y.jsx)("p",{className:"error",children:w})})]})},M=n(22),U=n(255),Q=n(242),H=n(239),K=n(127),q=n(247),_=n(79),$=n.n(_),ee=n(50),te=n.n(ee),ne=n(80),ae=n.n(ne),re=n(243),ce=n(252),ie=n(253),oe=n(236),se=n(237),le=n(4),je=n(250),de=n(240),ue=n(241),be=n(254);function he(){return Object(Y.jsxs)(D.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(Y.jsx)(H.a,{color:"inherit",href:"/",children:"Tarun"})," ",(new Date).getFullYear(),"."]})}var pe=Object(k.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(".concat("data:image/png;base64,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",")"),backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"contain",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},textField:{width:"100%",marginTop:e.spacing(2)}}})),me=Object(p.g)((function(e){var t=e.history,n=r.a.useContext(b),c=n.setLoggedIn,i=n.setUser,o=pe(),d=Object(a.useState)("18mcme18"),h=Object(j.a)(d,2),p=h[0],m=h[1],f=Object(a.useState)("9603877545"),O=Object(j.a)(f,2),x=O[0],v=O[1],C=Object(a.useState)(!1),w=Object(j.a)(C,2),k=w[0],S=w[1],A=Object(a.useState)({}),N=Object(j.a)(A,2),I=N[0],B=N[1],P=Object(a.useState)(!1),T=Object(j.a)(P,2),L=T[0],J=T[1],V=Object(a.useState)(!0),G=Object(j.a)(V,2),E=G[0],R=G[1],X=Object(a.useState)(!1),W=Object(j.a)(X,2),_=W[0],ee=W[1],ne=Object(a.useState)({message:"",type:""}),me=Object(j.a)(ne,2),fe=me[0],Oe=me[1],xe=function(){var e=Object(l.a)(s.a.mark((function e(n){var a,r,o,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a={},0===p.length&&(a.username="Please enter the username"),0===x.length&&(a.password="Please enter the password"),B(a),0!==Object.keys(a).length){e.next=13;break}return r={username:p,password:x},e.next=9,u.a.post("/api/sign_in",r);case 9:o=e.sent,l=o.data,console.log(l),l.success?(i({id:"1"}),c(!0),t.push("/search")):(J(!0),R(!0),Oe({message:l.message,type:"error"}));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return _?Object(Y.jsxs)(be.a,{open:_,onClick:function(){return ee(!1)},children:[Object(Y.jsx)("p",{style:{fontSize:50},children:"Logging in"})," ",Object(Y.jsx)(ue.a,{style:{marginLeft:"2%"},color:"inherit"})]}):Object(Y.jsxs)(Z.a,{container:!0,component:"main",className:o.root,children:[Object(Y.jsx)(Q.a,{}),Object(Y.jsx)(Z.a,{item:!0,xs:!1,sm:!1,md:6,className:o.image}),Object(Y.jsx)(Z.a,{item:!0,xs:12,sm:12,md:6,component:K.a,elevation:6,square:!0,children:Object(Y.jsxs)("div",{className:o.paper,children:[Object(Y.jsx)(U.a,{className:o.avatar,children:Object(Y.jsx)($.a,{})}),Object(Y.jsx)(D.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(Y.jsxs)("form",{className:o.form,noValidate:!0,onSubmit:xe,children:[function(){if(L)return Object(Y.jsx)(de.a,{className:o.alert,in:E,children:Object(Y.jsx)(je.a,{severity:fe.type,variant:"filled",action:Object(Y.jsx)(g.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){R(!1)},children:Object(Y.jsx)(F.a,{fontSize:"inherit"})}),children:fe.message})})}(),Object(Y.jsx)(y.a,{autoComplete:"username",margin:"normal",name:"username",variant:"outlined",required:!0,fullWidth:!0,id:"username",label:"Username",autoFocus:!0,value:p,error:!!I.username,helperText:I.username,onChange:function(e){B(Object(M.a)(Object(M.a)({},I),{},{username:""})),m(e.target.value)}}),Object(Y.jsxs)(oe.a,{className:Object(le.a)(o.textField),variant:"outlined",children:[Object(Y.jsx)(ie.a,{error:!!I.password,required:!0,htmlFor:"outlined-adornment-password",children:"Password"}),Object(Y.jsx)(ce.a,{variant:"outlined",id:"standard-adornment-password",type:k?"text":"password",value:x,error:!!I.password,onChange:function(e){B(Object(M.a)(Object(M.a)({},I),{},{password:""})),v(e.target.value)},endAdornment:Object(Y.jsx)(re.a,{position:"end",children:Object(Y.jsx)(g.a,{"aria-label":"toggle password visibility",onClick:function(){S(!k)},onMouseDown:function(e){e.preventDefault()},children:k?Object(Y.jsx)(te.a,{}):Object(Y.jsx)(ae.a,{})})}),labelWidth:85}),Object(Y.jsx)(se.a,{style:{color:"red"},children:I.password})]}),Object(Y.jsx)(z.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:o.submit,children:"Sign In"}),Object(Y.jsx)(Z.a,{container:!0,children:Object(Y.jsx)(Z.a,{item:!0,children:Object(Y.jsx)(H.a,{style:{cursor:"pointer"},onClick:function(){return t.push("/register")},variant:"body2",children:"Don't have an account? Sign Up"})})}),Object(Y.jsx)(q.a,{mt:5,children:Object(Y.jsx)(he,{})})]})]})})]})})),fe=n(244);function Oe(){return Object(Y.jsxs)(D.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(Y.jsx)(H.a,{color:"inherit",href:"/",children:"Tarun"})," ",(new Date).getFullYear(),"."]})}var xe=Object(k.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),marginTop:"100px",backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},margin:{margin:e.spacing(1)},withoutLabel:{marginTop:e.spacing(3)},textField:{width:"100%",marginTop:e.spacing(2)}}}));function ge(){var e=xe(),t=Object(a.useState)(""),n=Object(j.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(""),o=Object(j.a)(i,2),d=o[0],b=o[1],h=Object(a.useState)(!1),p=Object(j.a)(h,2),m=p[0],f=p[1],O=Object(a.useState)({}),x=Object(j.a)(O,2),v=x[0],C=x[1],w=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,a,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),C({user:""}),n={},0===r.length&&(n.username="Please enter the  username"),0===d.length&&(n.password="Please enter the password"),C(n),console.log(n),0!==Object.keys(n).length){e.next=15;break}return a={username:r,password:d},e.next=11,u.a.post("/api/sign_up",a,{withCredentials:!0});case 11:c=e.sent,i=c.data,console.log(i),i.success?window.location.replace("/login"):C({user:i.message});case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(Y.jsxs)(fe.a,{component:"main",maxWidth:"xs",children:[Object(Y.jsx)(Q.a,{}),Object(Y.jsxs)("div",{className:e.paper,children:[Object(Y.jsx)(U.a,{className:e.avatar,children:Object(Y.jsx)($.a,{})}),Object(Y.jsx)(D.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(Y.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:w,children:[Object(Y.jsx)(y.a,{autoComplete:"username",name:"username",variant:"outlined",required:!0,fullWidth:!0,id:"username",label:"Username",autoFocus:!0,value:r,error:!(!v.username&&!v.user),helperText:v.username||v.user,onChange:function(e){C(Object(M.a)(Object(M.a)({},v),{},{username:"",user:""})),c(e.target.value)}}),Object(Y.jsxs)(oe.a,{className:Object(le.a)(e.textField),variant:"outlined",children:[Object(Y.jsx)(ie.a,{error:!!v.password,required:!0,htmlFor:"outlined-adornment-password",children:"Password"}),Object(Y.jsx)(ce.a,{variant:"outlined",id:"standard-adornment-password",type:m?"text":"password",value:d,error:!!v.password,onChange:function(e){C(Object(M.a)(Object(M.a)({},v),{},{password:""})),b(e.target.value)},endAdornment:Object(Y.jsx)(re.a,{position:"end",children:Object(Y.jsx)(g.a,{"aria-label":"toggle password visibility",onClick:function(){f(!m)},onMouseDown:function(e){e.preventDefault()},children:m?Object(Y.jsx)(te.a,{}):Object(Y.jsx)(ae.a,{})})}),labelWidth:85}),Object(Y.jsx)(se.a,{style:{color:"red"},children:v.password})]}),Object(Y.jsx)(z.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign Up"}),Object(Y.jsx)(Z.a,{container:!0,justifyContent:"flex-end",children:Object(Y.jsx)(Z.a,{item:!0,children:Object(Y.jsx)(H.a,{href:"/login",variant:"body2",children:"Already have an account? Sign in"})})})]})]}),Object(Y.jsx)(q.a,{mt:5,children:Object(Y.jsx)(Oe,{})})]})}var ve=n(245),ye=n(246),Ce=n(256),we=n(124),ke=n(91),Se=n.n(ke),Ae=n(123),Ne=n.n(Ae),Ie=n(122),Be=n.n(Ie),Pe=Object(k.a)((function(e){return{root:{flexGrow:1,backgroundColor:"white"},appbar:{background:"white"},title:{marginTop:"1%",marginLeft:"-1%"},title1:{flexGrow:1,marginLeft:"1%",cursor:"pointer",fontFamily:"Pacifico, cursive, serif",color:"#C490E4"},headerItems:{display:"flex",flex:1,justifyContent:"space-evenly",alignItems:"center"},headerButton:{"&:hover":{backgroundColor:"#FFDAB9"},color:"black",cursor:"pointer"},currentHeaderItem:{cursor:"pointer",backgroundColor:"#BCFFB9",color:"black",padding:"5px 10px",borderRadius:"10px",fontSize:"initial"},headerItem:{"&:hover":{backgroundColor:"pink",padding:"10px 10px  5px 10px",color:"black"},cursor:"pointer",color:"black",fontSize:"1rem"},iconText:{marginLeft:"10px"},sectionDesktop:Object(w.a)({display:"none"},e.breakpoints.up("md"),{width:"35vw",display:"flex",alignItems:"center",justifyContent:"space-around"}),sectionMobile:Object(w.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"}),currMenuItem:{color:"green"}}})),ze=Object(p.g)((function(e){var t=e.history,n=r.a.useContext(b),c=n.user,i=n.setUser,o=n.setLoggedIn,d=Pe(),h=Object(a.useState)(null),p=Object(j.a)(h,2),m=p[0],f=p[1],O=Object(a.useState)(null),x=Object(j.a)(O,2),v=x[0],y=x[1],C=Boolean(v),w=function(){y(null)},k=Boolean(m),S=function(e,n){e.preventDefault(),f(null),t.push(n)},A=function(e,n){e.preventDefault(),t.push(n)},N=function(){var e=Object(l.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/api/logout");case 2:n=e.sent,i({id:null,role:null,username:null}),console.log(n),o(!1),t.push("/login");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I="primary-search-account-menu-mobile",B=Object(Y.jsxs)(we.a,{anchorEl:v,anchorOrigin:{vertical:"top",horizontal:"right"},id:I,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:C,onClose:w,children:[(void 0===c||null===c||null===c.id)&&Object(Y.jsxs)("div",{children:[Object(Y.jsxs)(Ce.a,{onClick:function(e){S(e,"/register"),w()},children:[Object(Y.jsx)("span",{children:Object(Y.jsx)("i",{style:{color:"blue"},className:"fas fa-user-plus"})}),Object(Y.jsx)("span",{className:d.iconText,children:"Register"})]}),Object(Y.jsxs)(Ce.a,{onClick:function(e){S(e,"/login"),w()},children:[Object(Y.jsx)("span",{children:Object(Y.jsx)("i",{style:{color:"blue",fontSize:"1.1rem"},className:"fas fa-sign-in-alt"})}),Object(Y.jsx)("span",{className:d.iconText,children:"Login"})]})]}),void 0!==c&&null!==c.id&&Object(Y.jsxs)("div",{children:[Object(Y.jsxs)(Ce.a,{onClick:function(e){S(e,"/search"),w()},children:[Object(Y.jsx)(te.a,{}),Object(Y.jsx)("span",{className:d.iconText,children:"Search Movies"})]}),Object(Y.jsxs)(Ce.a,{onClick:function(e){S(e,"/showFavorites"),w()},children:[Object(Y.jsx)(te.a,{}),Object(Y.jsx)("span",{className:d.iconText,children:"Show favorites"})]}),Object(Y.jsxs)(Ce.a,{onClick:function(e){f(e.currentTarget),w()},children:[Object(Y.jsx)(Se.a,{}),Object(Y.jsx)("span",{className:d.iconText,children:"Profile"})]})]})]});return Object(Y.jsx)("div",{id:"navbar",className:d.root,children:Object(Y.jsx)(ve.a,{className:d.appbar,position:"static",elevation:0,children:Object(Y.jsxs)(ye.a,{children:[Object(Y.jsx)(D.a,{variant:"h6",className:d.title,children:Object(Y.jsx)("img",{onClick:function(){return window.location.href="/"},style:{cursor:"pointer",height:window.innerHeight/11},alt:"app logo",src:"/logo192.png"})}),Object(Y.jsx)(D.a,{onClick:function(){return window.location.href="/"},className:d.title1,variant:"h6",children:"Tmovies"}),Object(Y.jsxs)("div",{children:[Object(Y.jsx)("div",{className:d.sectionMobile,children:Object(Y.jsx)(g.a,{"aria-label":"show more","aria-controls":I,"aria-haspopup":"true",onClick:function(e){y(e.currentTarget)},children:Object(Y.jsx)(Be.a,{})})}),Object(Y.jsxs)("div",{className:d.sectionDesktop,children:[(void 0===c||null===c||null==c.id)&&Object(Y.jsxs)("div",{className:d.headerItems,children:[Object(Y.jsx)("p",{className:"/login"!==t.location.pathname?d.headerItem:d.currentHeaderItem,style:{marginRight:"10%"},variant:"contained",onClick:function(e){return A(e,"/login")},children:"Login"}),Object(Y.jsx)("p",{className:"/register"!==t.location.pathname?d.headerItem:d.currentHeaderItem,variant:"contained",onClick:function(e){return A(e,"/register")},children:" Register"})]}),null!==c.id&&Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)("p",{className:"/search"!==t.location.pathname?d.headerItem:d.currentHeaderItem,onClick:function(e){return A(e,"/search")},children:"Search Movies"}),Object(Y.jsx)("p",{className:"/showFavorites"!==t.location.pathname?d.headerItem:d.currentHeaderItem,onClick:function(e){return A(e,"/showFavorites")},children:"Show favorites"})]}),null!==c.id&&Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(g.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){f(e.currentTarget)},children:Object(Y.jsx)(Se.a,{})}),Object(Y.jsx)(we.a,{id:"menu-appbar",anchorEl:m,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:k,onClose:function(){return f(null)},children:Object(Y.jsxs)(Ce.a,{onClick:function(){f(null),N()},color:"inherit",children:[Object(Y.jsx)(Ne.a,{className:d.menuIcons}),Object(Y.jsx)("span",{className:d.iconText,children:"Logout"})]})})]}),B]})]})]})})})})),De=Object(k.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}})),Te=function(){var e=De(),t=r.a.useContext(b).user,n=Object(a.useState)(!0),c=Object(j.a)(n,2),i=c[0],o=c[1],d=Object(a.useState)([]),h=Object(j.a)(d,2),p=h[0],O=h[1],x=Object(a.useState)(!1),g=Object(j.a)(x,2),v=g[0],y=g[1],w=Object(a.useState)(1),k=Object(j.a)(w,2),S=k[0],A=k[1];if(Object(a.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y(!0),void 0!==(n=t.favoriteMovies)){e.next=6;break}return console.log("YESSS"),y(!0),e.abrupt("return",!1);case 6:return a=[],e.next=9,Promise.all(n.map(function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("".concat(m,"&i=").concat(t));case 2:n=e.sent,a.push(n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 9:O(a);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),y(!1)}),[t]),void 0===t)return console.log("user undefined"),Object(Y.jsx)(be.a,{className:e.backdrop,open:i,onClick:function(){return o(!1)},children:Object(Y.jsx)(ue.a,{color:"inherit"})});if(void 0===t.favoriteMovies||0===t.favoriteMovies.length)return console.log("user favorites"),Object(Y.jsx)("p",{style:{fontSize:"2rem",color:"red"},children:"No Favorite movies/series available"});var N=5*S,I=N-5,B=[];return B=I>=p.length?p:p.slice(I,N),Object(Y.jsxs)("div",{style:{width:"85vw",marginTop:"5%",marginLeft:"1.5rem"},children:[Object(Y.jsx)(f.a,{children:Object(Y.jsx)("title",{children:"Favorites"})}),v?Object(Y.jsx)(be.a,{className:e.backdrop,open:v,onClick:function(){return o(!1)},children:Object(Y.jsx)(ue.a,{color:"inherit"})}):Object(Y.jsxs)("div",{children:[Object(Y.jsx)(Z.a,{container:!0,spacing:8,display:"flex",justifyContent:"space-around",children:B.map((function(e,t){return Object(Y.jsx)(Z.a,{item:!0,xs:12,sm:6,md:4,children:Object(Y.jsx)(E,{favorite:!0,movie:e})},t)}))}),Math.ceil(p.length/5)>1&&Object(Y.jsx)("div",{style:{marginTop:"6%",marginBottom:"2%",display:"flex",justifyContent:"center"},children:Object(Y.jsx)(C.a,{size:"large",style:{backgroundColor:"white",paddingTop:"0.5rem",paddingBottom:"0.5rem"},showFirstButton:!0,showLastButton:!0,color:"secondary",count:Math.ceil(p.length/5),page:S,onChange:function(e,t){return A(t)}})})]})]})},Fe=(n(184),function(){return Object(Y.jsx)("div",{className:"bg",children:Object(Y.jsx)("div",{children:Object(Y.jsx)("div",{className:"header",children:Object(Y.jsx)(D.a,{variant:"h3",style:{fontFamily:"Pacifico, cursive",textAlign:"center"},children:"  Welcome to Movies App "})})})})}),Le=n(125),Je=["component"],Ve=function(e){var t=e.component,n=Object(Le.a)(e,Je),a=r.a.useContext(b).user;return Object(Y.jsx)(p.b,Object(M.a)(Object(M.a)({},n),{},{render:function(e){return"1"===a.id||void 0===a.id?Object(Y.jsx)("p",{children:"Loading...."}):null!==a.id?Object(Y.jsx)(t,Object(M.a)(Object(M.a)({},n),e)):Object(Y.jsx)(p.a,{to:{pathname:"/login",state:{from:e.location}}})}}))};var Ye=function(){var e=Object(a.useState)({}),t=Object(j.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),i=Object(j.a)(c,2),o=i[0],d=i[1];Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/api/decodedUser");case 2:t=e.sent,n=t.data,r(n.user);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[o]);var m={user:n,setUser:r,loggedIn:o,setLoggedIn:d};return Object(Y.jsx)(h.a,{children:Object(Y.jsxs)(b.Provider,{value:m,children:[Object(Y.jsxs)(f.a,{children:[Object(Y.jsx)("title",{children:"Tmovies"}),Object(Y.jsx)("meta",{name:"description",content:"Show movies/series and manage favorites"})]}),Object(Y.jsx)(ze,{}),Object(Y.jsxs)(p.d,{children:[Object(Y.jsx)(p.b,{exact:!0,path:"/",component:Fe}),Object(Y.jsx)(p.b,{exact:!0,path:"/login",component:me}),Object(Y.jsx)(p.b,{exact:!0,path:"/register",component:ge}),Object(Y.jsx)(Ve,{exact:!0,path:"/search",component:W}),Object(Y.jsx)(Ve,{exact:!0,path:"/showFavorites",component:Te})]})]})})},Ge=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,260)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(Y.jsx)(r.a.StrictMode,{children:Object(Y.jsx)(Ye,{})}),document.getElementById("root")),Ge()}},[[185,1,2]]]);
//# sourceMappingURL=main.7211431b.chunk.js.map