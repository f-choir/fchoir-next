(self.webpackChunkwe_rise=self.webpackChunkwe_rise||[]).push([[5557],{43058:I=>{function U(u,s,y,m){for(var j=-1,S=u==null?0:u.length;++j<S;){var b=u[j];s(m,b,y(b),u)}return m}I.exports=U},2516:(I,U,u)=>{var s=u(82424);function y(m,j,S,b){return s(m,function(B,$,N){j(b,B,S(B),N)}),b}I.exports=y},29001:I=>{var U=Object.prototype,u=U.hasOwnProperty;function s(y,m){return y!=null&&u.call(y,m)}I.exports=s},6901:(I,U,u)=>{var s=u(43058),y=u(2516),m=u(14124),j=u(14688);function S(b,B){return function($,N){var le=j($)?s:y,de=B?B():{};return le($,b,m(N,2),de)}}I.exports=S},64127:(I,U,u)=>{var s=u(5763),y=u(6901),m=Object.prototype,j=m.hasOwnProperty,S=y(function(b,B,$){j.call(b,$)?b[$].push(B):s(b,$,[B])});I.exports=S},26273:(I,U,u)=>{var s=u(29001),y=u(7253);function m(j,S){return j!=null&&y(j,S,s)}I.exports=m},65557:(I,U,u)=>{"use strict";u.d(U,{P:()=>Bs});var s=u(58466),y=u(2730),m=u(59979),j=u(45227),S=u(78885),b=u(13775),B=u(16113),$=u(84251),N=u(86318),le=u(90001),de=u(92832),Ne=u(13665),we=u(95811),Ve=u(6814),He=u(49662),fe=u(15763),Fe=u(38973),Ge=u(12688),Je=u(88751),xe=u(18734),z=u(44075),_e=u(43348),ye=u(94683),ce=u(77542),M=u(84525),ne=u(26273),Q=u(35108),V=u(48009),W=u(53293),F=u(18689),Xe=u(32781),Ye=u(65329),ue=u(64127),je=u(27564),D=u(75617),Ze=u(98063),ze=u(84545),Qe=u(67618),qe=u(62237),es=u(42073),ss=u(46693),ts=u(85639);const[ns,os]=(0,Xe.q)("PermissionsDataManager"),Y=()=>os("usePermissionsDataManager"),Oe=e=>Array.isArray(e)?e.reduce((t,o)=>(Array.isArray(o)?t.push(...Oe(o)):t.push(o),t),[]):[],J=e=>(0,F.F)(e)?Oe(Object.values(e).map(t=>(0,F.F)(t)?J(t):t)):[],Ae=(e,t,o)=>e.find(n=>n.action===t&&n.subject===o),is=e=>{const t=Ee(e.plugins),o=Ee(e.settings),n=be(e.collectionTypes),r=be(e.singleTypes);return[...t,...o,...n,...r]},Ee=e=>Object.values(e).reduce((t,o)=>{const n=Object.values(o).reduce((r,a)=>{const d=Object.entries(a).reduce((i,[l,{conditions:c,properties:{enabled:p}}])=>(p&&i.push({action:l,subject:null,conditions:pe(c),properties:{}}),i),[]);return[...r,...d]},[]);return[...t,...n]},[]),be=e=>Object.entries(e).reduce((o,n)=>{const[r,a]=n,d=Object.entries(a).reduce((i,l)=>{const[c,p]=l;if(!J(p).some(C=>C))return i;if(!p?.properties?.enabled){const C=Object.entries(p.properties).reduce((x,_)=>{const[h,f]=_;return x.properties[h]=Me(f),x},{action:c,subject:r,conditions:pe(p.conditions),properties:{}});return[...i,C]}return p.properties.enabled&&i.push({action:c,subject:r,properties:{},conditions:pe(p.conditions)}),i},[]);return[...o,...d]},[]),Me=(e,t="")=>Object.entries(e).reduce((o,n)=>{const[r,a]=n;return(0,F.F)(a)?[...o,...Me(a,`${t}${r}.`)]:(a&&!(0,F.F)(a)&&o.push(`${t}${r}`),o)},[]),pe=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),Pe=(e,t=[])=>e.reduce((o,n)=>(o[n.id]=t.indexOf(n.id)!==-1,o),{}),ve=(e,t,o=[])=>e.reduce((n,{categoryId:r,childrenForm:a})=>{const d=a.reduce((i,l)=>(i[l.subCategoryId]=l.actions.reduce((c,p)=>{const g=Ae(o,p.action,null);return c[p.action]={properties:{enabled:g!==void 0},conditions:Pe(t,g?.conditions??[])},c},{}),i),{});return n[r]=d,n},{}),rs=(e,t,o)=>{const n=({children:r=[]},a,d="")=>r.reduce((i,l)=>{if(l.children)return{...i,[l.value]:n(l,a,`${d}${l.value}.`)};const c=a.indexOf(`${d}${l.value}`)!==-1;return i[l.value]=c,i},{});return e.reduce((r,a)=>{const d=t.properties.find(({value:i})=>i===a);if(d){const i=o?.properties[d.value]??[],l=n(d,i);r.properties[a]=l}return r},{properties:{}})},Te=({subjects:e,actions:t=[]},o,n=[])=>t.reduce((r,a)=>{const d=a.subjects.reduce((l,c)=>{const p=e.find(({uid:g})=>g===c)||null;return p&&(l[c]=p),l},{});if(Q(d))return r;const i=Object.keys(d).reduce((l,c)=>{const{actionId:p,applyToProperties:g}=a,_=d[c].properties.map(({value:P})=>P).every(P=>(g||[]).indexOf(P)===-1),h=Ae(n,p,c),f=Pe(o,h?.conditions??[]);if(l[c]||(l[c]={}),Q(g)||_)return l[c][p]={properties:{enabled:h!==void 0},conditions:f},l;const O=rs(g,d[c],h);return l[c][p]={...O,conditions:f},l},{});return Ye(r,i)},{}),Se=(e,t)=>Object.entries(ue(e,t)).map(([o,n])=>({category:o,categoryId:o.split(" ").join("-"),childrenForm:Object.entries(ue(n,"subCategory")).map(([r,a])=>({subCategoryName:r,subCategoryId:r.split(" ").join("-"),actions:a}))})),oe=e=>Object.keys(e).reduce((t,o)=>{const n=e[o];if((0,F.F)(n)&&!ne(n,"conditions"))return{...t,[o]:oe(n)};if((0,F.F)(n)&&ne(n,"conditions")&&!J(je(n,"conditions")).some(a=>a)){const a=Object.keys(n.conditions).reduce((d,i)=>(d[i]=!1,d),{});return{...t,[o]:{...n,conditions:a}}}return t[o]=n,t},{}),q=(e,t,o=!1)=>Object.keys(e).reduce((n,r)=>{const a=e[r];return r==="conditions"&&!o?(n[r]=a,n):(0,F.F)(a)?{...n,[r]:q(a,t,r==="fields")}:(n[r]=t,n)},{}),H=`${120/16}rem`,he=`${200/16}rem`,ie=`${53/16}rem`,ge=e=>e?Object.entries(e).reduce((t,[o,n])=>(o!=="conditions"&&(t[o]=n),t),{}):null,X=e=>{const t=ge(e),o=J(t);if(!o.length)return{hasAllActionsSelected:!1,hasSomeActionsSelected:!1};const n=o.every(a=>a),r=o.some(a=>a)&&!n;return{hasAllActionsSelected:n,hasSomeActionsSelected:r}},re=e=>e.charAt(0).toUpperCase()+e.slice(1),De=(0,D.Ay)(m.s)`
  padding-right: ${({theme:e})=>e.spaces[2]};
  overflow: hidden;
  flex: 1;
  ${({isCollapsable:e})=>e&&"cursor: pointer;"}
`,me=D.Ay.div`
  width: ${H};
`,$e=()=>(0,s.jsx)(j.a,{color:"danger700",paddingLeft:1,children:"*"}),Le=({checkboxName:e="",children:t,isActive:o=!1,isCollapsable:n=!1,isFormDisabled:r=!1,label:a,onChange:d,onClick:i,someChecked:l=!1,value:c})=>{const{formatMessage:p}=(0,W.A)();return(0,s.jsxs)(m.s,{alignItems:"center",paddingLeft:6,width:he,shrink:0,children:[(0,s.jsx)(j.a,{paddingRight:2,children:(0,s.jsx)(S.J,{name:e,"aria-label":p({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:a}),disabled:r,onValueChange:g=>d({target:{name:e,value:g}}),indeterminate:l,value:c})}),(0,s.jsxs)(De,{title:a,alignItems:"center",isCollapsable:n,...n&&{onClick:i,"aria-expanded":o,onKeyDown:({key:g})=>(g==="Enter"||g===" ")&&i(),tabIndex:0,role:"button"},children:[(0,s.jsx)(b.o,{fontWeight:o?"bold":void 0,textColor:o?"primary600":"neutral800",ellipsis:!0,children:re(a)}),t]})]})},as=({availableActions:e=[],childrenForm:t=[],isFormDisabled:o,label:n,pathToData:r,propertyName:a})=>{const d=(0,y.useMemo)(()=>e.map(i=>{const l=Array.isArray(i.applyToProperties)&&i.applyToProperties.indexOf(a)!==-1&&i.isDisplayed;return{label:i.label,actionId:i.actionId,isActionRelatedToCurrentProperty:l}}),[e,a]);return(0,s.jsxs)(m.s,{display:"inline-flex",direction:"column",minWidth:0,children:[(0,s.jsx)(Cs,{label:n,headers:d}),(0,s.jsx)(j.a,{children:t.map(({children:i,label:l,value:c,required:p},g)=>(0,s.jsx)(ls,{childrenForm:i,label:l,isFormDisabled:o,name:c,required:p,propertyActions:d,pathToData:r,propertyName:a,isOdd:g%2===0},c))})]})},ls=({childrenForm:e=[],label:t,isFormDisabled:o=!1,name:n,required:r=!1,pathToData:a,propertyActions:d,propertyName:i,isOdd:l=!1})=>{const{formatMessage:c}=(0,W.A)(),[p,g]=y.useState(null),{modifiedData:C,onChangeCollectionTypeLeftActionRowCheckbox:x,onChangeParentCheckbox:_,onChangeSimpleCheckbox:h}=Y(),f=p===n,O=(0,y.useMemo)(()=>Array.isArray(e)?e:[],[e]),P=O.length>0,L=y.useCallback(()=>{P&&g(v=>v===n?null:n)},[P,n]),A=({target:{value:v}})=>{x(a,i,n,v)},{hasAllActionsSelected:E,hasSomeActionsSelected:T}=(0,y.useMemo)(()=>ds(d,C,a,i,n),[d,C,a,i,n]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(cs,{alignItems:"center",isCollapsable:P,isActive:f,background:l?"neutral100":"neutral0",children:(0,s.jsxs)(m.s,{children:[(0,s.jsxs)(Le,{onChange:A,onClick:L,isCollapsable:P,isFormDisabled:o,label:t,someChecked:T,value:E,isActive:f,children:[r&&(0,s.jsx)($e,{}),(0,s.jsx)(ee,{$isActive:f})]}),(0,s.jsx)(m.s,{children:d.map(({label:v,isActionRelatedToCurrentProperty:k,actionId:K})=>{if(!k)return(0,s.jsx)(me,{},v);const R=[...a.split(".."),K,"properties",i,n];if(!P){const w=M(C,R,!1);return(0,s.jsx)(m.s,{width:H,position:"relative",justifyContent:"center",alignItems:"center",children:(0,s.jsx)(S.J,{disabled:o,name:R.join(".."),"aria-label":c({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${n} ${v}`}),onValueChange:Ks=>{h({target:{name:R.join(".."),value:Ks}})},value:w})},K)}const Z=M(C,R,{}),{hasAllActionsSelected:G,hasSomeActionsSelected:te}=X(Z);return(0,s.jsx)(m.s,{width:H,position:"relative",justifyContent:"center",alignItems:"center",children:(0,s.jsx)(S.J,{disabled:o,name:R.join(".."),onValueChange:w=>{_({target:{name:R.join(".."),value:w}})},"aria-label":c({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${n} ${v}`}),value:G,indeterminate:te})},v)})})]})}),f&&(0,s.jsx)(Re,{childrenForm:O,isFormDisabled:o,parentName:n,pathToDataFromActionRow:a,propertyName:i,propertyActions:d,recursiveLevel:0})]})},ds=(e,t,o,n,r)=>{const d=e.reduce((i,l)=>(l.isActionRelatedToCurrentProperty&&i.push(l.actionId),i),[]).reduce((i,l)=>{const c=M(t,[...o.split(".."),l,"properties",n,r],!1);return i[l]=c,i},{});return X(d)},cs=(0,D.Ay)(m.s)`
  height: ${ie};
  flex: 1;

  ${({isCollapsable:e,theme:t})=>e&&`
      ${ee} {
        display: block;
        color: ${t.colors.neutral100};
      }
      &:hover {
        ${se(t)}
      }
  `}
  ${({isActive:e,theme:t})=>e&&se(t)};
`,ee=(0,D.Ay)(Ze.A)`
  display: none;
  width: ${10/16}rem;
  transform: rotate(${({$isActive:e})=>e?"180":"0"}deg);
  margin-left: ${({theme:e})=>e.spaces[2]};
`,Re=({childrenForm:e=[],isFormDisabled:t,recursiveLevel:o,pathToDataFromActionRow:n,propertyActions:r,parentName:a,propertyName:d})=>{const{formatMessage:i}=(0,W.A)(),{modifiedData:l,onChangeParentCheckbox:c,onChangeSimpleCheckbox:p}=Y(),[g,C]=y.useState(null),x=h=>{C(f=>f===h?null:h)},_=(0,y.useMemo)(()=>g?e.find(({value:h})=>h===g):null,[g,e]);return(0,s.jsxs)(j.a,{paddingLeft:"2rem",children:[(0,s.jsx)(hs,{}),e.map(({label:h,value:f,required:O,children:P},L)=>{const A=L+1<e.length,E=Array.isArray(P),T=g===f;return(0,s.jsxs)(us,{isVisible:A,children:[(0,s.jsxs)(m.s,{height:ie,children:[(0,s.jsx)(gs,{children:(0,s.jsx)(ms,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"primary200",children:(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z",fill:"#D9D8FF"})})}),(0,s.jsxs)(m.s,{style:{flex:1},children:[(0,s.jsx)(ps,{level:o,isActive:T,isCollapsable:E,children:(0,s.jsxs)(De,{alignItems:"center",isCollapsable:E,...E&&{onClick:()=>x(f),"aria-expanded":T,onKeyDown:({key:v})=>(v==="Enter"||v===" ")&&x(f),tabIndex:0,role:"button"},title:h,children:[(0,s.jsx)(b.o,{ellipsis:!0,children:re(h)}),O&&(0,s.jsx)($e,{}),(0,s.jsx)(ee,{$isActive:T})]})}),(0,s.jsx)(m.s,{style:{flex:1},children:r.map(({actionId:v,label:k,isActionRelatedToCurrentProperty:K})=>{if(!K)return(0,s.jsx)(me,{},v);const R=[...n.split(".."),v,"properties",d,...a.split(".."),f],Z=M(l,R,!1);if(!P)return(0,s.jsx)(m.s,{position:"relative",width:H,justifyContent:"center",alignItems:"center",children:(0,s.jsx)(S.J,{disabled:t,name:R.join(".."),"aria-label":i({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${a} ${h} ${k}`}),onValueChange:w=>{p({target:{name:R.join(".."),value:w}})},value:Z})},k);const{hasAllActionsSelected:G,hasSomeActionsSelected:te}=X(Z);return(0,s.jsx)(m.s,{position:"relative",width:H,justifyContent:"center",alignItems:"center",children:(0,s.jsx)(S.J,{disabled:t,name:R.join(".."),"aria-label":i({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${a} ${h} ${k}`}),onValueChange:w=>{c({target:{name:R.join(".."),value:w}})},value:G,indeterminate:te},k)},k)})})]})]}),_&&T&&(0,s.jsx)(j.a,{paddingBottom:2,children:(0,s.jsx)(Re,{isFormDisabled:t,parentName:`${a}..${f}`,pathToDataFromActionRow:n,propertyActions:r,propertyName:d,recursiveLevel:o+1,childrenForm:_.children})})]},f)})]})},us=(0,D.Ay)(j.a)`
  border-left: ${({isVisible:e,theme:t})=>e?`4px solid ${t.colors.primary200}`:"4px solid transparent"};
`,ps=(0,D.Ay)(m.s)`
  padding-left: ${({theme:e})=>e.spaces[4]};
  width: ${({level:e})=>145-e*36}px;

  ${({isCollapsable:e,theme:t})=>e&&`
      ${ee} {
        display: block;
        color: ${t.colors.neutral100};
      }
      &:hover {
        ${se(t)}
      }
  `}
  ${({isActive:e,theme:t})=>e&&se(t)};
`,hs=D.Ay.div`
  padding-top: ${({theme:e})=>e.spaces[2]};
  margin-top: ${({theme:e})=>e.spaces[2]};
  width: ${4/16}rem;
  background-color: ${({theme:e})=>e.colors.primary200};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`,gs=(0,D.Ay)(j.a)`
  transform: translate(-4px, -12px);

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:e})=>e.colors.primary200};
    display: block;
  }
`,ms=D.Ay.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:e,color:t})=>e.colors[t]};
  }
`,Cs=({headers:e=[],label:t})=>{const{formatMessage:o}=(0,W.A)();return(0,s.jsxs)(m.s,{children:[(0,s.jsx)(m.s,{width:he,height:ie,shrink:0,alignItems:"center",paddingLeft:6,children:(0,s.jsx)(b.o,{variant:"sigma",textColor:"neutral500",children:o({id:"Settings.roles.form.permission.property-label",defaultMessage:"{label} permissions"},{label:t})})}),e.map(n=>n.isActionRelatedToCurrentProperty?(0,s.jsx)(m.s,{width:H,shrink:0,justifyContent:"center",children:(0,s.jsx)(b.o,{variant:"sigma",textColor:"neutral500",children:o({id:`Settings.roles.form.permissions.${n.label.toLowerCase()}`,defaultMessage:n.label})})},n.label):(0,s.jsx)(m.s,{width:H,shrink:0},n.label))]})},se=e=>(0,D.AH)`
  ${b.o} {
    color: ${e.colors.primary600};
    font-weight: ${e.fontWeights.bold};
  }
  ${ee} {
    display: block;

    path {
      fill: ${e.colors.primary600};
    }
  }
`,fs=({onClick:e,className:t,hasConditions:o=!1,variant:n="tertiary"})=>{const{formatMessage:r}=(0,W.A)();return(0,s.jsx)(xs,{hasConditions:o,className:t,children:(0,s.jsx)(B.$,{variant:n,startIcon:(0,s.jsx)(ze.A,{}),onClick:e,children:r({id:"global.settings",defaultMessage:"Settings"})})})},xs=(0,D.Ay)(j.a)`
  ${({hasConditions:e,disabled:t,theme:o})=>e&&`
    &:before {
      content: '';
      position: absolute;
      top: -3px;
      left: -10px;
      width: 6px;
      height: 6px;
      border-radius: ${20/16}rem;;
      background: ${t?o.colors.neutral100:o.colors.primary600};
    }
  `}
`,ae=(0,D.Ay)(fs)``,Be=({actions:e=[],headerBreadCrumbs:t=[],isFormDisabled:o,onClosed:n,onToggle:r})=>{const{formatMessage:a}=(0,W.A)(),{availableConditions:d,modifiedData:i,onChangeConditions:l}=Y(),c=y.useMemo(()=>Object.entries(ue(d,"category")),[d]),p=e.filter(({isDisplayed:h,hasSomeActionsSelected:f,hasAllActionsSelected:O})=>h&&Boolean(f||O)),[g,C]=y.useState(_s(p,i,c)),x=(h,f)=>{C((0,ye.Ay)(O=>{O[h]||(O[h]={}),O[h].default||(O[h].default={}),O[h].default=f}))},_=()=>{const h=Object.entries(g).reduce((f,O)=>{const[P,L]=O,A=Object.values(L).reduce((E,T)=>({...E,...T}),{});return f[P]=A,f},{});l(h),r()};return(0,s.jsxs)($.k,{labelledBy:"condition-modal-breadcrumbs",onClose:n,children:[(0,s.jsx)(N.r,{children:(0,s.jsx)(es.B,{id:"condition-modal-breadcrumbs",label:t.join(", "),children:t.map((h,f,O)=>(0,s.jsx)(ss.m,{isCurrent:f===O.length-1,children:ts(a({id:h,defaultMessage:h}))},h))})}),(0,s.jsxs)(le.c,{children:[p.length===0&&(0,s.jsx)(b.o,{children:a({id:"Settings.permissions.conditions.no-actions",defaultMessage:"You first need to select actions (create, read, update, ...) before defining conditions on them."})}),(0,s.jsx)("ul",{children:p.map(({actionId:h,label:f,pathToConditionsObject:O},P)=>{const L=O.join("..");return(0,s.jsx)(ys,{arrayOfOptionsGroupedByCategory:c,label:f,isFormDisabled:o,isGrey:P%2===0,name:L,onChange:x,value:M(g,L,{})},h)})})]}),(0,s.jsx)(de.j,{startActions:(0,s.jsx)(B.$,{variant:"tertiary",onClick:r,children:a({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:(0,s.jsx)(B.$,{onClick:_,children:a({id:"Settings.permissions.conditions.apply",defaultMessage:"Apply"})})})]})},_s=(e,t,o)=>e.reduce((n,r)=>{const a=M(t,[...r.pathToConditionsObject,"conditions"],{}),d=o.reduce((i,l)=>{const[c,p]=l,g=p.reduce((C,x)=>(C[x.id]=M(a,x.id,!1),C),{});return i[c]=g,i},{});return n[r.pathToConditionsObject.join("..")]=d,n},{}),ys=({arrayOfOptionsGroupedByCategory:e,isFormDisabled:t=!1,isGrey:o=!1,label:n,name:r,onChange:a,value:d})=>{const{formatMessage:i}=(0,W.A)(),l=c=>{a&&a(r,As(e,c))};return(0,s.jsxs)(m.s,{as:"li",background:o?"neutral100":"neutral0",paddingBottom:3,paddingTop:3,children:[(0,s.jsxs)(m.s,{paddingLeft:6,style:{width:180},children:[(0,s.jsxs)(b.o,{variant:"sigma",textColor:"neutral600",children:[i({id:"Settings.permissions.conditions.can",defaultMessage:"Can"}),"\xA0"]}),(0,s.jsx)(b.o,{variant:"sigma",title:n,textColor:"primary600",ellipsis:!0,children:i({id:`Settings.roles.form.permissions.${n.toLowerCase()}`,defaultMessage:n})}),(0,s.jsxs)(b.o,{variant:"sigma",textColor:"neutral600",children:["\xA0",i({id:"Settings.permissions.conditions.when",defaultMessage:"When"})]})]}),(0,s.jsx)(j.a,{style:{maxWidth:430,width:"100%"},children:(0,s.jsx)(Ne.B,{id:r,customizeContent:(c=[])=>`${c.length} currently selected`,onChange:l,value:js(d),options:Os(e),disabled:t})})]})},js=e=>Object.values(e).map(t=>Object.entries(t).filter(([,o])=>o).map(([o])=>o)).flat(),Os=e=>e.reduce((t,[o,n])=>(t.push({label:re(o),children:n.map(r=>({label:r.displayName,value:r.id}))}),t),[]),As=(e,t)=>e.map(([,o])=>o).flat().reduce((o,n)=>({[n.id]:t.includes(n.id),...o}),{}),Es=({actions:e=[],isFormDisabled:t,pathToData:o,subjects:n=[]})=>{const[r,a]=y.useState(null),d=i=>()=>{a(r===i?null:i)};return(0,s.jsx)(s.Fragment,{children:n.map(({uid:i,label:l,properties:c},p)=>{const g=r===i,C=e.map(x=>({...x,isDisplayed:Array.isArray(x.subjects)&&x.subjects.indexOf(i)!==-1}));return(0,s.jsxs)(m.s,{direction:"column",display:"inline-flex",minWidth:"100%",borderColor:"primary600",borderWidth:g?1:0,children:[(0,s.jsx)(bs,{availableActions:C,isActive:g,isGrey:p%2===0,isFormDisabled:t,label:l,onClickToggle:d(i),pathToData:[o,i].join("..")}),g&&c.map(({label:x,value:_,children:h})=>(0,s.jsx)(as,{availableActions:C,childrenForm:h,isFormDisabled:t,label:x,pathToData:[o,i].join(".."),propertyName:_},_))]},i)})})},bs=({availableActions:e=[],isActive:t=!1,isGrey:o=!1,isFormDisabled:n=!1,label:r,onClickToggle:a,pathToData:d})=>{const[i,l]=y.useState(!1),{formatMessage:c}=(0,W.A)(),{modifiedData:p,onChangeParentCheckbox:g,onChangeSimpleCheckbox:C}=Y(),x=()=>{l(E=>!E)},_=()=>{l(!1)},h=M(p,d.split(".."),{}),f=y.useMemo(()=>Object.keys(h).reduce((E,T)=>(E[T]=je(h[T],"conditions"),E),{}),[h]),{hasAllActionsSelected:O,hasSomeActionsSelected:P}=X(f),L=y.useMemo(()=>Ms(e,p,d),[e,p,d]),A=L.some(E=>E.hasConditions);return(0,s.jsxs)(Ps,{isActive:t,children:[(0,s.jsxs)(Ie,{height:ie,flex:1,alignItems:"center",background:o?"neutral100":"neutral0",children:[(0,s.jsx)(Le,{isCollapsable:!0,isFormDisabled:n,label:r,checkboxName:d,onChange:g,onClick:a,someChecked:P,value:O,isActive:t,children:(0,s.jsx)(We,{paddingLeft:2,children:t?(0,s.jsx)(Qe.A,{}):(0,s.jsx)(qe.A,{})})}),(0,s.jsx)(m.s,{style:{flex:1},children:L.map(({actionId:E,hasSomeActionsSelected:T,isDisplayed:v,...k})=>{if(!v)return(0,s.jsx)(me,{},E);const{hasConditions:K,hasAllActionsSelected:R,isParentCheckbox:Z,checkboxName:G,label:te}=k;return Z?(0,s.jsxs)(ke,{justifyContent:"center",alignItems:"center",children:[K&&(0,s.jsx)(j.a,{as:"span",position:"absolute",top:"-6px",left:"37px",width:"6px",height:"6px",borderRadius:"20px",background:"primary600"}),(0,s.jsx)(S.J,{disabled:n,name:G,"aria-label":c({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${te} ${r}`}),onValueChange:w=>{g({target:{name:G,value:w}})},indeterminate:T,value:R})]},E):(0,s.jsxs)(ke,{justifyContent:"center",alignItems:"center",children:[K&&(0,s.jsx)(j.a,{as:"span",position:"absolute",top:"-6px",left:"37px",width:"6px",height:"6px",borderRadius:"20px",background:"primary600"}),(0,s.jsx)(S.J,{disabled:n,indeterminate:K,name:G,onValueChange:w=>{C({target:{name:G,value:w}})},value:R})]},E)})}),i&&(0,s.jsx)(Be,{headerBreadCrumbs:[r,"Settings.permissions.conditions.conditions"],actions:L,isFormDisabled:n,onClosed:_,onToggle:x})]}),(0,s.jsx)(j.a,{transform:"translateY(10px)",right:"9px",position:"absolute",children:(0,s.jsx)(ae,{onClick:x,hasConditions:A})})]})},Ms=(e,t,o)=>e.map(({actionId:n,isDisplayed:r,applyToProperties:a,label:d})=>{if(!r)return{actionId:n,hasSomeActionsSelected:!1,isDisplayed:r};const i=[...o.split(".."),n],l=Q(a)?[...i,"properties","enabled"]:i,c=M(t,[...i,"conditions"],null),p={actionId:n,checkboxName:l.join(".."),hasConditions:J(c).some(_=>_),isDisplayed:r,label:d,pathToConditionsObject:i};if(Q(a)){const _=M(t,l,!1);return{...p,hasAllActionsSelected:_,hasSomeActionsSelected:_,isParentCheckbox:!1}}const g=M(t,l,null),{hasAllActionsSelected:C,hasSomeActionsSelected:x}=X(g);return{...p,hasAllActionsSelected:C,hasSomeActionsSelected:x,isParentCheckbox:!0}}),Ce=(e,t)=>`
  ${Ie} {
    background-color: ${e.colors.primary100};
    color: ${e.colors.primary600};
    border-radius: ${t?"2px 2px 0 0":"2px"};
  }
  ${We} {
    display: flex;
  }
  ${ae} {
    display: block;
  }
  &:hover {
    ${se(e)}
  }

  &:focus-within {
    ${()=>Ce(e,t)}
  }
`,Ie=(0,D.Ay)(m.s)`
  border: 1px solid transparent;
`,Ps=D.Ay.div`
  display: inline-flex;
  min-width: 100%;

  ${ae} {
    display: none;
  }
  ${({isActive:e,theme:t})=>e&&Ce(t,e)}
  &:hover {
    ${({theme:e,isActive:t})=>Ce(e,t)}
  }
`,ke=(0,D.Ay)(m.s)`
  width: ${H};
  position: relative;
`,We=(0,D.Ay)(j.a)`
  display: none;
  svg {
    width: 11px;
  }
  * {
    fill: ${({theme:e})=>e.colors.primary600};
  }
`,vs=({actions:e=[],isFormDisabled:t,kind:o})=>{const{formatMessage:n}=(0,W.A)(),{modifiedData:r,onChangeCollectionTypeGlobalActionCheckbox:a}=Y(),d=e.filter(({subjects:l})=>l&&l.length),i=y.useMemo(()=>{const l=d.map(({actionId:C})=>C),c=r[o],p=l.reduce((C,x)=>(Object.keys(c).forEach(_=>{const h=M(c,[_,x]),f={[_]:ge(h)};C[x]?C[x]={...C[x],...f}:C[x]=f}),C),{});return Object.keys(p).reduce((C,x)=>(C[x]=X(p[x]),C),{})},[r,d,o]);return(0,s.jsx)(j.a,{paddingBottom:4,paddingTop:6,style:{paddingLeft:he},children:(0,s.jsx)(m.s,{gap:0,children:d.map(({label:l,actionId:c})=>(0,s.jsxs)(m.s,{shrink:0,width:H,direction:"column",alignItems:"center",justifyContent:"center",gap:3,children:[(0,s.jsx)(b.o,{variant:"sigma",textColor:"neutral500",children:n({id:`Settings.roles.form.permissions.${l.toLowerCase()}`,defaultMessage:l})}),(0,s.jsx)(S.J,{disabled:t,onValueChange:p=>{a(o,c,p)},name:c,"aria-label":n({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:n({id:`Settings.roles.form.permissions.${l.toLowerCase()}`,defaultMessage:l})}),value:M(i,[c,"hasAllActionsSelected"],!1),indeterminate:M(i,[c,"hasSomeActionsSelected"],!1)})]},c))})})},Ke=({isFormDisabled:e,kind:t,layout:{actions:o,subjects:n}})=>{const r=[...n].sort((a,d)=>a.label.localeCompare(d.label));return(0,s.jsxs)(Ts,{background:"neutral0",children:[(0,s.jsx)(vs,{actions:o,kind:t,isFormDisabled:e}),(0,s.jsx)(Es,{actions:o,isFormDisabled:e,pathToData:t,subjects:r})]})},Ts=(0,D.Ay)(j.a)`
  overflow-x: auto;
`,Ue=({layout:e,...t})=>{const[o,n]=y.useState(null),r=a=>{n(a===o?null:a)};return(0,s.jsx)(j.a,{padding:6,background:"neutral0",children:e.map(({category:a,categoryId:d,childrenForm:i},l)=>(0,s.jsx)(Ss,{childrenForm:i,isOpen:o===a,isWhite:l%2===1,name:a,onOpenCategory:r,pathToData:[t.kind,d],...t},a))})},Ss=({childrenForm:e,kind:t,name:o,isOpen:n=!1,isFormDisabled:r=!1,isWhite:a,onOpenCategory:d,pathToData:i})=>{const{formatMessage:l}=(0,W.A)(),c=()=>{d(o)},p=o.split("::").pop()??"";return(0,s.jsxs)(we.n,{expanded:n,onToggle:c,id:`accordion-${o}`,variant:a?"primary":"secondary",children:[(0,s.jsx)(Ve.P,{title:re(p),description:`${l({id:"Settings.permissions.category",defaultMessage:p},{category:p})} ${t==="plugins"?"plugin":t}`}),(0,s.jsx)(He.u,{children:(0,s.jsx)(j.a,{padding:6,children:e.map(({actions:g,subCategoryName:C,subCategoryId:x})=>(0,s.jsx)(Ds,{actions:g,categoryName:p,isFormDisabled:r,subCategoryName:C,pathToData:[...i,x]},C))})})]})},Ds=({actions:e=[],categoryName:t,isFormDisabled:o,subCategoryName:n,pathToData:r})=>{const[a,d]=y.useState(!1),{modifiedData:i,onChangeParentCheckbox:l,onChangeSimpleCheckbox:c}=Y(),{formatMessage:p}=(0,W.A)(),g=M(i,r,{}),C=y.useMemo(()=>Object.keys(g).reduce((A,E)=>(A[E]=ge(g[E]),A),{}),[g]),{hasAllActionsSelected:x,hasSomeActionsSelected:_}=X(C),h=()=>{d(A=>!A)},f=()=>{d(!1)},O=y.useMemo(()=>e.map(A=>{const E=[...r,A.action,"properties","enabled"],T=M(i,E,!1),v=M(i,[...r,A.action,"conditions"],{}),k=J(v).some(K=>K);return{...A,isDisplayed:T,checkboxName:E.join(".."),hasSomeActionsSelected:T,value:T,hasConditions:k,label:A.displayName,actionId:A.action,pathToConditionsObject:[...r,A.action]}}),[e,i,r]),P=M(i,[...r],{}),L=J(Object.entries(P).reduce((A,E)=>{const[T,{conditions:v}]=E;return A[T]=v,A},{})).some(A=>A);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(j.a,{children:[(0,s.jsxs)(m.s,{justifyContent:"space-between",alignItems:"center",children:[(0,s.jsx)(j.a,{paddingRight:4,children:(0,s.jsx)(b.o,{variant:"sigma",textColor:"neutral600",children:n})}),(0,s.jsx)($s,{flex:1}),(0,s.jsx)(j.a,{paddingLeft:4,children:(0,s.jsx)(fe.S,{name:r.join(".."),disabled:o,onValueChange:A=>{l({target:{name:r.join(".."),value:A}})},indeterminate:_,value:x,children:p({id:"app.utils.select-all",defaultMessage:"Select all"})})})]}),(0,s.jsxs)(m.s,{paddingTop:6,paddingBottom:6,children:[(0,s.jsx)(Fe.x,{gap:2,style:{flex:1},children:O.map(({checkboxName:A,value:E,action:T,displayName:v,hasConditions:k})=>(0,s.jsx)(Ge.E,{col:3,children:(0,s.jsx)(Ls,{disabled:o,hasConditions:k,children:(0,s.jsx)(fe.S,{name:A,disabled:o,onValueChange:K=>{c({target:{name:A,value:K}})},value:E,children:v})})},T))}),(0,s.jsx)(ae,{hasConditions:L,onClick:h})]})]}),a&&(0,s.jsx)(Be,{headerBreadCrumbs:[t,n],actions:O,isFormDisabled:o,onClosed:f,onToggle:h})]})},$s=(0,D.Ay)(j.a)`
  align-self: center;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
`,Ls=D.Ay.div`
  position: relative;
  word-break: keep-all;
  ${({hasConditions:e,disabled:t,theme:o})=>e&&`
    &:before {
      content: '';
      position: absolute;
      top: ${-4/16}rem;
      left: ${-8/16}rem;
      width: ${6/16}rem;
      height: ${6/16}rem;
      border-radius: ${20/16}rem;
      background: ${t?o.colors.neutral100:o.colors.primary600};
    }
  `}
`,Rs=[{labelId:"app.components.LeftMenuLinkContainer.collectionTypes",defaultMessage:"Collection Types",id:"collectionTypes"},{labelId:"app.components.LeftMenuLinkContainer.singleTypes",id:"singleTypes",defaultMessage:"Single Types"},{labelId:"app.components.LeftMenuLinkContainer.plugins",defaultMessage:"Plugins",id:"plugins"},{labelId:"app.components.LeftMenuLinkContainer.settings",defaultMessage:"Settings",id:"settings"}],Bs=y.forwardRef(({layout:e,isFormDisabled:t,permissions:o=[]},n)=>{const[{initialData:r,layouts:a,modifiedData:d},i]=y.useReducer(ks,Is,()=>Ws(e,o)),{formatMessage:l}=(0,W.A)();y.useImperativeHandle(n,()=>({getPermissions(){const _=(0,_e.iv)(r.collectionTypes,d.collectionTypes),h=(0,_e.iv)(r.singleTypes,d.singleTypes),f={..._,...h};let O;return Q(f)?O=!1:O=Object.values(f).some((P={})=>Object.values(P).some(L=>ne(L,"conditions"))),{permissionsToSend:is(d),didUpdateConditions:O}},resetForm(){i({type:"RESET_FORM"})},setFormAfterSubmit(){i({type:"SET_FORM_AFTER_SUBMIT"})}}));const c=(_,h,f,O)=>{i({type:"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX",pathToCollectionType:_,propertyName:h,rowName:f,value:O})},p=(_,h,f)=>{i({type:"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX",collectionTypeKind:_,actionId:h,value:f})},g=_=>{i({type:"ON_CHANGE_CONDITIONS",conditions:_})},C=y.useCallback(({target:{name:_,value:h}})=>{i({type:"ON_CHANGE_SIMPLE_CHECKBOX",keys:_,value:h})},[]),x=y.useCallback(({target:{name:_,value:h}})=>{i({type:"ON_CHANGE_TOGGLE_PARENT_CHECKBOX",keys:_,value:h})},[]);return(0,s.jsx)(ns,{availableConditions:e.conditions,modifiedData:d,onChangeConditions:g,onChangeSimpleCheckbox:C,onChangeParentCheckbox:x,onChangeCollectionTypeLeftActionRowCheckbox:c,onChangeCollectionTypeGlobalActionCheckbox:p,children:(0,s.jsxs)(Je.f,{id:"tabs",label:l({id:"Settings.permissions.users.tabs.label",defaultMessage:"Tabs Permissions"}),children:[(0,s.jsx)(xe.t,{children:Rs.map(_=>(0,s.jsx)(xe.o,{children:l({id:_.labelId,defaultMessage:_.defaultMessage})},_.id))}),(0,s.jsxs)(z.T,{style:{position:"relative"},children:[(0,s.jsx)(z.K,{children:(0,s.jsx)(Ke,{layout:a.collectionTypes,kind:"collectionTypes",isFormDisabled:t})}),(0,s.jsx)(z.K,{children:(0,s.jsx)(Ke,{layout:a.singleTypes,kind:"singleTypes",isFormDisabled:t})}),(0,s.jsx)(z.K,{children:(0,s.jsx)(Ue,{layout:a.plugins,kind:"plugins",isFormDisabled:t})}),(0,s.jsx)(z.K,{children:(0,s.jsx)(Ue,{layout:a.settings,kind:"settings",isFormDisabled:t})})]})]})})}),Is={initialData:{},modifiedData:{},layouts:{}},ks=(e,t)=>(0,ye.Ay)(e,o=>{switch(t.type){case"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX":{const{collectionTypeKind:n,actionId:r,value:a}=t,d=["modifiedData",n];Object.keys(M(e,d)).forEach(i=>{const l=M(e,[...d,i,r],void 0);if(l){let c=q(l,a);if(!a&&c.conditions){const p=q(c.conditions,!1);c={...c,conditions:p}}V(o,[...d,i,r],c)}});break}case"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX":{const{pathToCollectionType:n,propertyName:r,rowName:a,value:d}=t;let i=ce(e.modifiedData);const l=n.split(".."),c=M(i,l,{});Object.keys(c).forEach(p=>{if(ne(c[p],`properties.${r}`)){const g=M(c,[p,"properties",r,a]),C=[...l,p,"properties",r,a];if(!(0,F.F)(g))V(i,C,d);else{const x=q(g,d);V(i,C,x)}}}),d||(i=oe(i)),V(o,"modifiedData",i);break}case"ON_CHANGE_CONDITIONS":{Object.entries(t.conditions).forEach(n=>{const[r,a]=n;V(o,["modifiedData",...r.split(".."),"conditions"],a)});break}case"ON_CHANGE_SIMPLE_CHECKBOX":{let n=ce(e.modifiedData);V(n,[...t.keys.split("..")],t.value),t.value||(n=oe(n)),V(o,"modifiedData",n);break}case"ON_CHANGE_TOGGLE_PARENT_CHECKBOX":{const{keys:n,value:r}=t,a=[...n.split("..")];let d=ce(e.modifiedData);const i=M(d,a,{}),l=q(i,r);V(d,a,l),r||(d=oe(d)),V(o,["modifiedData"],d);break}case"RESET_FORM":{o.modifiedData=e.initialData;break}case"SET_FORM_AFTER_SUBMIT":{o.initialData=e.modifiedData;break}default:return o}}),Ws=(e,t)=>{const{conditions:o,sections:{collectionTypes:n,singleTypes:r,plugins:a,settings:d}}=e,i={collectionTypes:n,singleTypes:r,plugins:Se(a,"plugin"),settings:Se(d,"category")},l={collectionTypes:Te(n,o,t),singleTypes:Te(r,o,t),plugins:ve(i.plugins,o,t),settings:ve(i.settings,o,t)};return{initialData:l,modifiedData:l,layouts:i}}},13665:(I,U,u)=>{"use strict";u.d(U,{B:()=>j});var s=u(58466),y=u(75617),m=u(60216);const j=({options:b,...B})=>(0,s.jsx)(m.KF,{...B,children:b.map($=>"children"in $?(0,s.jsx)(m.np,{label:$.label,values:$.children.map(N=>N.value.toString()),children:$.children.map(N=>(0,s.jsx)(S,{value:N.value,children:N.label},N.value))},$.label):(0,s.jsx)(m.fe,{value:$.value,children:$.label},$.value))}),S=(0,y.Ay)(m.fe)`
  padding-left: ${({theme:b})=>b.spaces[7]};
`}}]);
