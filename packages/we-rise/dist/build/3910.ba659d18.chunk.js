"use strict";(self.webpackChunkwe_rise=self.webpackChunkwe_rise||[]).push([[3910],{93910:(M,l,n)=>{n.r(l),n.d(l,{LoginEE:()=>D});var s=n(58466),E=n(86507),a=n(45227),d=n(59979),h=n(13775),m=n(53293),P=n(75617),e=n(18689),o=n(60468);const c=(0,P.Ay)(E.c)`
  flex: 1;
`,D=_=>{const{formatMessage:O}=(0,m.A)(),{isLoading:t,data:r=[]}=(0,e.g)(void 0,{skip:!window.strapi.features.isEnabled(window.strapi.features.SSO)});return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!t&&r.length===0?(0,s.jsx)(e.L,{..._}):(0,s.jsx)(e.L,{..._,children:(0,s.jsx)(a.a,{paddingTop:7,children:(0,s.jsxs)(d.s,{direction:"column",alignItems:"stretch",gap:7,children:[(0,s.jsxs)(d.s,{children:[(0,s.jsx)(c,{}),(0,s.jsx)(a.a,{paddingLeft:3,paddingRight:3,children:(0,s.jsx)(h.o,{variant:"sigma",textColor:"neutral600",children:O({id:"Auth.login.sso.divider"})})}),(0,s.jsx)(c,{})]}),(0,s.jsx)(o.S,{providers:r,displayAllProviders:!1})]})})})}},60468:(M,l,n)=>{n.d(l,{S:()=>c});var s=n(58466),E=n(38973),a=n(12688),d=n(44821),h=n(59979),m=n(13775),P=n(53293),e=n(93997),o=n(75617);const c=({providers:t,displayAllProviders:r})=>{const{formatMessage:x}=(0,P.A)();return r?(0,s.jsx)(E.x,{gap:4,children:t.map(i=>(0,s.jsx)(a.E,{col:4,children:(0,s.jsx)(_,{provider:i})},i.uid))}):t.length>2&&!r?(0,s.jsxs)(E.x,{gap:4,children:[t.slice(0,2).map(i=>(0,s.jsx)(a.E,{col:4,children:(0,s.jsx)(_,{provider:i})},i.uid)),(0,s.jsx)(a.E,{col:4,children:(0,s.jsx)(d.m,{label:x({id:"global.see-more"}),children:(0,s.jsx)(O,{as:e.N_,to:"/auth/providers",children:(0,s.jsx)("span",{"aria-hidden":!0,children:"\u2022\u2022\u2022"})})})})]}):(0,s.jsx)(D,{justifyContent:"center",children:t.map(i=>(0,s.jsx)(_,{provider:i},i.uid))})},D=(0,o.Ay)(h.s)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:t})=>t.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:t})=>t.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:t})=>t.spaces[2]};
  }
`,_=({provider:t})=>(0,s.jsx)(d.m,{label:t.displayName,children:(0,s.jsx)(O,{href:`${window.strapi.backendURL}/admin/connect/${t.uid}`,children:t.icon?(0,s.jsx)("img",{src:t.icon,"aria-hidden":!0,alt:"",height:"32px"}):(0,s.jsx)(m.o,{children:t.displayName})})}),O=o.Ay.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:t})=>t.colors.neutral150};
  border-radius: ${({theme:t})=>t.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:t})=>t.colors.neutral600};
`}}]);
