"use strict";(self.webpackChunkwe_rise=self.webpackChunkwe_rise||[]).push([[8314],{31458:(lt,U,n)=>{n.d(U,{S:()=>B});var t=n(58466),h=n(75617),g=n(45227),V=n(86507),x=n(59979),k=n(13775);const w=(0,h.Ay)(g.a)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:y})=>y.colors.primary600};
  }
`,S=(0,h.Ay)(g.a)`
  border-radius: 0 0 ${({theme:y})=>y.borderRadius} ${({theme:y})=>y.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,B=({children:y,icon:X,...F})=>(0,t.jsxs)("div",{children:[(0,t.jsx)(V.c,{}),(0,t.jsx)(S,{as:"button",background:"primary100",padding:5,...F,children:(0,t.jsxs)(x.s,{children:[(0,t.jsx)(w,{"aria-hidden":!0,background:"primary200",children:X}),(0,t.jsx)(g.a,{paddingLeft:3,children:(0,t.jsx)(k.o,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:y})})]})})]})},68314:(lt,U,n)=>{n.r(U),n.d(U,{default:()=>St});var t=n(58466),h=n(45227),g=n(59979),V=n(54883),x=n(13775),k=n(60783),w=n(48065),S=n(94323),B=n(71869),y=n(16113),X=n(31458),F=n(7479),dt=n(18834),ct=n(61680),d=n(43348),pt=n(81244),R=n(53176),Q=n(76263),ht=n(30018),gt=n(28693),ut=n(34495),mt=n(81100),ft=n(63440),C=n(89618),xt=n(19942),J=n(26274),Y=n(76894),I=n(53293),G=n(87231),W=n(2730),l=n(35944),_=n(75617);const _t=(0,_.Ay)(h.a)`
  table {
    width: 100%;
    white-space: nowrap;
  }

  thead {
    border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};

    tr {
      border-top: 0;
    }
  }

  tr {
    border-top: 1px solid ${({theme:e})=>e.colors.neutral150};

    & td,
    & th {
      padding: ${({theme:e})=>e.spaces[4]};
    }

    & td:first-of-type,
    & th:first-of-type {
      padding: 0 ${({theme:e})=>e.spaces[1]};
    }
  }

  th,
  td {
    vertical-align: middle;
    text-align: left;
    color: ${({theme:e})=>e.colors.neutral600};
    outline-offset: -4px;
  }
`,q=_.Ay.tr`
  &.component-row,
  &.dynamiczone-row {
    position: relative;
    border-top: none !important;

    table tr:first-child {
      border-top: none;
    }

    > td:first-of-type {
      padding: 0 0 0 ${(0,d.a8)(20)};
      position: relative;

      &::before {
        content: '';
        width: ${(0,d.a8)(4)};
        height: calc(100% - 40px);
        position: absolute;
        top: -7px;
        left: 1.625rem;
        border-radius: 4px;

        ${({isFromDynamicZone:e,isChildOfDynamicZone:s,theme:o})=>s?`background-color: ${o.colors.primary200};`:e?`background-color: ${o.colors.primary200};`:`background: ${o.colors.neutral150};`}
      }
    }
  }

  &.dynamiczone-row > td:first-of-type {
    padding: 0;
  }
`,tt=({customRowComponent:e,component:s,isFromDynamicZone:o=!1,isNestedInDZComponent:i=!1,firstLoopComponentUid:c})=>{const{modifiedData:r}=(0,l.u)(),{schema:{attributes:u}}=C(r,["components",s],{schema:{attributes:[]}});return(0,t.jsx)(q,{isChildOfDynamicZone:o,className:"component-row",children:(0,t.jsx)("td",{colSpan:12,children:(0,t.jsx)(st,{customRowComponent:e,items:u,targetUid:s,firstLoopComponentUid:c||s,editTarget:"components",isFromDynamicZone:o,isNestedInDZComponent:i,isSub:!0,secondLoopComponentUid:c?s:null})})})},yt=({isActive:e=!1,icon:s="cube"})=>(0,t.jsx)(g.s,{alignItems:"center",background:e?"primary200":"neutral200",justifyContent:"center",height:8,width:8,borderRadius:"50%",children:(0,t.jsx)(V.I,{as:l.C[s]||l.C.cube,height:5,width:5})}),et=(0,_.Ay)(h.a)`
  position: absolute;
  display: none;
  top: 5px;
  right: ${(0,d.a8)(8)};

  svg {
    width: ${(0,d.a8)(10)};
    height: ${(0,d.a8)(10)};

    path {
      fill: ${({theme:e})=>e.colors.primary600};
    }
  }
`,jt=(0,_.Ay)(g.s)`
  width: ${(0,d.a8)(140)};
  height: ${(0,d.a8)(80)};
  position: relative;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  background: ${({theme:e})=>e.colors.neutral100};
  border-radius: ${({theme:e})=>e.borderRadius};
  max-width: 100%;

  &.active,
  &:focus,
  &:hover {
    border: 1px solid ${({theme:e})=>e.colors.primary200};
    background: ${({theme:e})=>e.colors.primary100};

    ${et} {
      display: block;
    }

    ${x.o} {
      color: ${({theme:e})=>e.colors.primary600};
    }

    /* > ComponentIcon */
    > div:first-child {
      background: ${({theme:e})=>e.colors.primary200};
      color: ${({theme:e})=>e.colors.primary600};

      svg {
        path {
          fill: ${({theme:e})=>e.colors.primary600};
        }
      }
    }
  }
`,Et=({component:e,dzName:s,index:o,isActive:i=!1,isInDevelopmentMode:c=!1,onClick:r})=>{const{modifiedData:u,removeComponentFromDynamicZone:b}=(0,l.u)(),{schema:{icon:E,displayName:j}}=C(u,["components",e],{schema:{}}),m=a=>{a.stopPropagation(),b(s,o)};return(0,t.jsxs)(jt,{alignItems:"center",direction:"column",className:i?"active":"",borderRadius:"borderRadius",justifyContent:"center",paddingLeft:4,paddingRight:4,shrink:0,onClick:r,role:"tab",tabIndex:i?0:-1,cursor:"pointer","aria-selected":i,"aria-controls":`dz-${s}-panel-${o}`,id:`dz-${s}-tab-${o}`,children:[(0,t.jsx)(yt,{icon:E,isActive:i}),(0,t.jsx)(h.a,{marginTop:1,maxWidth:"100%",children:(0,t.jsx)(x.o,{variant:"pi",fontWeight:"bold",ellipsis:!0,children:j})}),c&&(0,t.jsx)(et,{as:"button",onClick:m,children:(0,t.jsx)(pt.A,{})})]})},Mt=(0,_.Ay)(R.A)`
  width: ${(0,d.a8)(32)};
  height: ${(0,d.a8)(32)};
  padding: ${(0,d.a8)(9)};
  border-radius: ${(0,d.a8)(64)};
  background: ${({theme:e})=>e.colors.primary100};
  path {
    fill: ${({theme:e})=>e.colors.primary600};
  }
`,Ct=(0,_.Ay)(h.a)`
  height: ${(0,d.a8)(90)};
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`,bt=(0,_.Ay)(g.s)`
  width: 100%;
  overflow-x: auto;
`,Dt=(0,_.Ay)(h.a)`
  padding-top: ${(0,d.a8)(90)};
`,Tt=(0,_.Ay)(g.s)`
  flex-shrink: 0;
  width: ${(0,d.a8)(140)};
  height: ${(0,d.a8)(80)};
  justify-content: center;
  align-items: center;
`,At=({customRowComponent:e,components:s=[],addComponent:o,name:i,targetUid:c})=>{const{isInDevelopmentMode:r}=(0,l.u)(),[u,b]=(0,W.useState)(0),{formatMessage:E}=(0,I.A)(),j=a=>{u!==a&&b(a)},m=()=>{o(i)};return(0,t.jsx)(q,{className:"dynamiczone-row",isFromDynamicZone:!0,children:(0,t.jsxs)("td",{colSpan:12,children:[(0,t.jsx)(Ct,{paddingLeft:8,children:(0,t.jsxs)(bt,{gap:2,children:[r&&(0,t.jsx)("button",{type:"button",onClick:m,children:(0,t.jsxs)(Tt,{direction:"column",alignItems:"stretch",gap:1,children:[(0,t.jsx)(Mt,{}),(0,t.jsx)(x.o,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:E({id:(0,l.g)("button.component.add"),defaultMessage:"Add a component"})})]})}),(0,t.jsx)(g.s,{role:"tablist",gap:2,children:s.map((a,p)=>(0,t.jsx)(Et,{dzName:i||"",index:p,component:a,isActive:u===p,isInDevelopmentMode:r,onClick:()=>j(p)},a))})]})}),(0,t.jsx)(Dt,{children:s.map((a,p)=>{const f={customRowComponent:e,component:a};return(0,t.jsx)(h.a,{id:`dz-${i}-panel-${p}`,role:"tabpanel","aria-labelledby":`dz-${i}-tab-${p}`,style:{display:u===p?"block":"none"},children:(0,t.jsx)("table",{children:(0,t.jsx)("tbody",{children:(0,W.createElement)(tt,{...f,isFromDynamicZone:!0,component:c,key:a})})})},a)})})]})})},vt=(0,_.Ay)(h.a)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:e,color:s})=>e.colors[`${s}600`]};
  }
`,Ot=(0,_.Ay)(h.a)`
  border-radius: 0 0 ${({theme:e})=>e.borderRadius} ${({theme:e})=>e.borderRadius};
  display: block;
  width: 100%;
  border: none;
  position: relative;
  left: -0.25rem;
`,Pt=({children:e,icon:s,color:o,...i})=>(0,t.jsx)(Ot,{paddingBottom:4,paddingTop:4,as:"button",type:"button",...i,children:(0,t.jsxs)(g.s,{children:[(0,t.jsx)(vt,{color:o,"aria-hidden":!0,background:`${o}200`,children:s}),(0,t.jsx)(h.a,{paddingLeft:3,children:(0,t.jsx)(x.o,{variant:"pi",fontWeight:"bold",textColor:`${o}600`,children:e})})]})}),st=({addComponentToDZ:e,customRowComponent:s,editTarget:o,firstLoopComponentUid:i,isFromDynamicZone:c=!1,isMain:r=!1,isNestedInDZComponent:u=!1,isSub:b=!1,items:E=[],secondLoopComponentUid:j,targetUid:m})=>{const{formatMessage:a}=(0,I.A)(),{trackUsage:p}=(0,d.z1)(),{isInDevelopmentMode:f,modifiedData:P,isInContentTypeView:T}=(0,l.u)(),{onOpenModalAddField:v}=(0,l.a)(),D=()=>{p("hasClickedCTBAddFieldBanner"),v({forTarget:o,targetUid:m})};return m?E.length===0&&r?(0,t.jsxs)(k.X,{colCount:2,rowCount:2,children:[(0,t.jsx)(w.d,{children:(0,t.jsxs)(S.Tr,{children:[(0,t.jsx)(B.Th,{children:(0,t.jsx)(x.o,{variant:"sigma",textColor:"neutral600",children:a({id:"global.name",defaultMessage:"Name"})})}),(0,t.jsx)(B.Th,{children:(0,t.jsx)(x.o,{variant:"sigma",textColor:"neutral600",children:a({id:"global.type",defaultMessage:"Type"})})})]})}),(0,t.jsx)(d.m5,{action:(0,t.jsx)(y.$,{onClick:D,size:"L",startIcon:(0,t.jsx)(R.A,{}),variant:"secondary",children:a({id:(0,l.g)("table.button.no-fields"),defaultMessage:"Add new field"})}),colSpan:2,content:T?{id:(0,l.g)("table.content.no-fields.collection-type"),defaultMessage:"Add your first field to this Collection-Type"}:{id:(0,l.g)("table.content.no-fields.component"),defaultMessage:"Add your first field to this component"}})]}):(0,t.jsxs)(_t,{children:[(0,t.jsx)(h.a,{paddingLeft:6,paddingRight:r?6:0,...r&&{style:{overflowX:"auto"}},children:(0,t.jsxs)("table",{children:[r&&(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(x.o,{variant:"sigma",textColor:"neutral600",children:a({id:"global.name",defaultMessage:"Name"})})}),(0,t.jsx)("th",{colSpan:2,children:(0,t.jsx)(x.o,{variant:"sigma",textColor:"neutral600",children:a({id:"global.type",defaultMessage:"Type"})})})]})}),(0,t.jsx)("tbody",{children:E.map(A=>{const{type:$}=A,L=s;return(0,t.jsxs)(W.Fragment,{children:[(0,t.jsx)(L,{...A,isNestedInDZComponent:u,targetUid:m,editTarget:o,firstLoopComponentUid:i,isFromDynamicZone:c,secondLoopComponentUid:j}),$==="component"&&(0,t.jsx)(tt,{...A,customRowComponent:s,targetUid:m,isNestedInDZComponent:c,editTarget:o,firstLoopComponentUid:i}),$==="dynamiczone"&&(0,t.jsx)(At,{...A,customRowComponent:s,addComponent:e,targetUid:m})]},A.name)})})]})}),r&&f&&(0,t.jsx)(X.S,{icon:(0,t.jsx)(R.A,{}),onClick:D,children:a({id:(0,l.g)(`form.button.add.field.to.${P.contentType?P.contentType.schema.kind:o||"collectionType"}`),defaultMessage:"Add another field"})}),b&&f&&!c&&(0,t.jsx)(Pt,{icon:(0,t.jsx)(R.A,{}),onClick:D,color:c?"primary":"neutral",children:a({id:(0,l.g)("form.button.add.field.to.component"),defaultMessage:"Add another field"})})]}):(0,t.jsxs)(k.X,{colCount:2,rowCount:2,children:[(0,t.jsx)(w.d,{children:(0,t.jsxs)(S.Tr,{children:[(0,t.jsx)(B.Th,{children:(0,t.jsx)(x.o,{variant:"sigma",textColor:"neutral600",children:a({id:"global.name",defaultMessage:"Name"})})}),(0,t.jsx)(B.Th,{children:(0,t.jsx)(x.o,{variant:"sigma",textColor:"neutral600",children:a({id:"global.type",defaultMessage:"Type"})})})]})}),(0,t.jsx)(d.m5,{colSpan:2,content:{id:(0,l.g)("table.content.create-first-content-type"),defaultMessage:"Create your first Collection-Type"}})]})},$t=(0,_.Ay)(h.a)`
  position: absolute;
  left: -1.125rem;
  top: 0px;

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:e,color:s})=>e.colors[s]};
    display: block;
  }
`,Bt=_.Ay.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:e,color:s})=>e.colors[s]};
  }
`,It=e=>(0,t.jsx)($t,{children:(0,t.jsx)(Bt,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z"})})}),Rt=({type:e,customField:s=null,repeatable:o=!1})=>{const{formatMessage:i}=(0,I.A)();let c=e;return["integer","biginteger","float","decimal"].includes(e)?c="number":["string"].includes(e)&&(c="text"),s?(0,t.jsx)(x.o,{children:i({id:(0,l.g)("attribute.customField"),defaultMessage:"Custom field"})}):(0,t.jsxs)(x.o,{children:[i({id:(0,l.g)(`attribute.${c}`),defaultMessage:e}),"\xA0",o&&i({id:(0,l.g)("component.repeatable"),defaultMessage:"(repeatable)"})]})},Wt=({content:e})=>(0,t.jsx)(t.Fragment,{children:Y(e)}),Lt=(0,_.Ay)(h.a)`
  position: relative;
`,Kt=(0,W.memo)(({configurable:e=!0,customField:s=null,editTarget:o,firstLoopComponentUid:i=null,isFromDynamicZone:c=!1,name:r,onClick:u,relation:b="",repeatable:E=!1,secondLoopComponentUid:j=null,target:m=null,targetUid:a=null,type:p})=>{const{contentTypes:f,isInDevelopmentMode:P,removeAttribute:T}=(0,l.u)(),{formatMessage:v}=(0,I.A)(),D=p==="relation"&&b.includes("morph"),A=["integer","biginteger","float","decimal"].includes(p)?"number":p,$=C(f,[m],{}),L=C($,["schema","displayName"],""),K=C($,"plugin"),H=m?"relation":A,N=()=>{D||e!==!1&&u(o,j||i||a,r,p,s)};let O;return j&&i?O=2:i?O=1:O=0,(0,t.jsxs)(Lt,{as:"tr",...(0,d.qM)({fn:N,condition:P&&e&&!D}),children:[(0,t.jsxs)("td",{style:{position:"relative"},children:[O!==0&&(0,t.jsx)(It,{color:c?"primary200":"neutral150"}),(0,t.jsxs)(g.s,{paddingLeft:2,gap:4,children:[(0,t.jsx)(l.A,{type:H,customField:s}),(0,t.jsx)(x.o,{fontWeight:"bold",children:r})]})]}),(0,t.jsx)("td",{children:m?(0,t.jsxs)(x.o,{children:[v({id:(0,l.g)(`modelPage.attribute.${D?"relation-polymorphic":"relationWith"}`),defaultMessage:"Relation with"}),"\xA0",(0,t.jsxs)("span",{style:{fontStyle:"italic"},children:[(0,t.jsx)(Wt,{content:L}),"\xA0",K&&`(${v({id:(0,l.g)("from"),defaultMessage:"from"})}: ${K})`]})]}):(0,t.jsx)(Rt,{type:p,customField:s,repeatable:E})}),(0,t.jsx)("td",{children:P?(0,t.jsx)(g.s,{justifyContent:"flex-end",...d.dG,children:e?(0,t.jsxs)(g.s,{gap:1,children:[!D&&(0,t.jsx)(F.K,{onClick:N,label:`${v({id:"app.utils.edit",defaultMessage:"Edit"})} ${r}`,noBorder:!0,icon:(0,t.jsx)(Q.A,{})}),(0,t.jsx)(F.K,{onClick:z=>{z.stopPropagation(),T(o,r,j||i||"")},label:`${v({id:"global.delete",defaultMessage:"Delete"})} ${r}`,noBorder:!0,icon:(0,t.jsx)(ht.A,{})})]}):(0,t.jsx)(gt.A,{})}):(0,t.jsx)(h.a,{height:(0,d.a8)(32)})})]})}),Ut=e=>{let s;switch(e){case"date":case"datetime":case"time":case"timestamp":s="date";break;case"integer":case"biginteger":case"decimal":case"float":s="number";break;case"string":case"text":s="text";break;case"":s="relation";break;default:s=e}return s},kt={collectionTypesConfigurations:[{action:"plugin::content-manager.collection-types.configure-view",subject:null}],componentsConfigurations:[{action:"plugin::content-manager.components.configure-layout",subject:null}],singleTypesConfigurations:[{action:"plugin::content-manager.single-types.configure-view",subject:null}]},wt=(0,W.memo)(({disabled:e,isTemporary:s=!1,isInContentTypeView:o=!0,contentTypeKind:i="collectionType",targetUid:c=""})=>{const{formatMessage:r}=(0,I.A)(),{push:u}=(0,G.W6)(),{collectionTypesConfigurations:b,componentsConfigurations:E,singleTypesConfigurations:j}=kt,m=r({id:"content-type-builder.form.button.configure-view",defaultMessage:"Configure the view"});let a=b;const p=()=>(s||u(o?`/content-manager/collection-types/${c}/configurations/edit`:`/content-manager/components/${c}/configurations/edit`),!1);return o&&i==="singleType"&&(a=j),o||(a=E),(0,t.jsx)(d.d4,{permissions:a,children:(0,t.jsx)(y.$,{startIcon:(0,t.jsx)(ut.A,{}),variant:"tertiary",onClick:p,disabled:s||e,children:m})})}),St=()=>{const{initialData:e,modifiedData:s,isInDevelopmentMode:o,isInContentTypeView:i,submitData:c}=(0,l.u)(),{formatMessage:r}=(0,I.A)(),{trackUsage:u}=(0,d.z1)(),b=(0,G.W5)("/plugins/content-type-builder/:kind/:currentUID"),{onOpenModalAddComponentsToDZ:E,onOpenModalAddField:j,onOpenModalEditField:m,onOpenModalEditSchema:a,onOpenModalEditCustomField:p}=(0,l.a)(),f=i?"contentType":"component",P=[f,"schema","attributes"],T=C(s,[f,"uid"]),v=C(s,[f,"isTemporary"],!1),D=C(s,[f,"schema","kind"],null),A=C(s,P,[]),$=xt(e,[f,"plugin"]),L=!J(s,e),K=i?"contentType":"component",H=M=>{E({dynamicZoneTarget:M,targetUid:T})},N=async(M,nt,ot,it,at)=>{const rt=Ut(it);at?p({forTarget:M,targetUid:nt,attributeName:ot,attributeType:rt,customFieldUid:at}):m({forTarget:M,targetUid:nt,attributeName:ot,attributeType:rt,step:it==="component"?"2":null})};let O=C(s,[f,"schema","displayName"],"");const z=C(s,[f,"schema","kind"],""),Z=b?.params.currentUID==="create-content-type";!O&&Z&&(O=r({id:(0,l.g)("button.model.create"),defaultMessage:"Create new collection type"}));const Ft=()=>{const M=z||f;M==="collectionType"&&u("willEditNameOfContentType"),M==="singleType"&&u("willEditNameOfSingleType"),a({modalType:f,forTarget:f,targetUid:T,kind:M})};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(G.XG,{message:M=>M.hash==="#back"?!1:r({id:(0,l.g)("prompt.unsaved")}),when:L}),(0,t.jsx)(dt.Q,{id:"title",primaryAction:o&&(0,t.jsxs)(g.s,{gap:2,children:[!Z&&(0,t.jsx)(y.$,{startIcon:(0,t.jsx)(R.A,{}),variant:"secondary",onClick:()=>{j({forTarget:K,targetUid:T})},children:r({id:(0,l.g)("button.attributes.add.another"),defaultMessage:"Add another field"})}),(0,t.jsx)(y.$,{startIcon:(0,t.jsx)(mt.A,{}),onClick:async()=>await c(),type:"submit",disabled:J(s,e),children:r({id:"global.save",defaultMessage:"Save"})})]}),secondaryAction:o&&!$&&!Z&&(0,t.jsx)(y.$,{startIcon:(0,t.jsx)(Q.A,{}),variant:"tertiary",onClick:Ft,children:r({id:"app.utils.edit",defaultMessage:"Edit"})}),title:Y(O),subtitle:r({id:(0,l.g)("listView.headerLayout.description"),defaultMessage:"Build the data architecture of your content"}),navigationAction:(0,t.jsx)(d.N_,{startIcon:(0,t.jsx)(ft.A,{}),to:"/plugins/content-type-builder/",children:r({id:"global.back",defaultMessage:"Back"})})}),(0,t.jsx)(ct.s,{children:(0,t.jsxs)(g.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsx)(g.s,{justifyContent:"flex-end",children:(0,t.jsx)(g.s,{gap:2,children:(0,t.jsx)(wt,{targetUid:T,isTemporary:v,isInContentTypeView:i,contentTypeKind:D,disabled:Z},"link-to-cm-settings-view")})}),(0,t.jsx)(h.a,{background:"neutral0",shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(st,{items:A,customRowComponent:M=>(0,t.jsx)(Kt,{...M,onClick:N}),addComponentToDZ:H,targetUid:T,editTarget:K,isMain:!0})})]})})]})}}}]);
