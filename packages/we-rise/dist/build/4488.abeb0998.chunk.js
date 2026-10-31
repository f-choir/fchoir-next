"use strict";(self.webpackChunkwe_rise=self.webpackChunkwe_rise||[]).push([[4488],{60468:(u,o,t)=>{t.d(o,{S:()=>m});var s=t(58466),l=t(38973),a=t(12688),_=t(44821),d=t(59979),x=t(13775),M=t(53293),P=t(93997),E=t(75617);const m=({providers:n,displayAllProviders:O})=>{const{formatMessage:D}=(0,M.A)();return O?(0,s.jsx)(l.x,{gap:4,children:n.map(i=>(0,s.jsx)(a.E,{col:4,children:(0,s.jsx)(e,{provider:i})},i.uid))}):n.length>2&&!O?(0,s.jsxs)(l.x,{gap:4,children:[n.slice(0,2).map(i=>(0,s.jsx)(a.E,{col:4,children:(0,s.jsx)(e,{provider:i})},i.uid)),(0,s.jsx)(a.E,{col:4,children:(0,s.jsx)(_.m,{label:D({id:"global.see-more"}),children:(0,s.jsx)(h,{as:P.N_,to:"/auth/providers",children:(0,s.jsx)("span",{"aria-hidden":!0,children:"\u2022\u2022\u2022"})})})})]}):(0,s.jsx)(c,{justifyContent:"center",children:n.map(i=>(0,s.jsx)(e,{provider:i},i.uid))})},c=(0,E.Ay)(d.s)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:n})=>n.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:n})=>n.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:n})=>n.spaces[2]};
  }
`,e=({provider:n})=>(0,s.jsx)(_.m,{label:n.displayName,children:(0,s.jsx)(h,{href:`${window.strapi.backendURL}/admin/connect/${n.uid}`,children:n.icon?(0,s.jsx)("img",{src:n.icon,"aria-hidden":!0,alt:"",height:"32px"}):(0,s.jsx)(x.o,{children:n.displayName})})}),h=E.Ay.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:n})=>n.colors.neutral150};
  border-radius: ${({theme:n})=>n.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:n})=>n.colors.neutral600};
`},94488:(u,o,t)=>{t.r(o),t.d(o,{FORMS:()=>C});var s=t(58466),l=t(15659),a=t(45227),_=t(13775),d=t(59979),x=t(59754),M=t(16113),P=t(86507),E=t(20128),m=t(53293),c=t(87231),e=t(93997),h=t(75617),n=t(18689),O=t(60468);const D=()=>{const{push:A}=(0,c.W6)(),{formatMessage:r}=(0,m.A)(),{isLoading:g,data:j=[]}=(0,n.g)(void 0,{skip:!window.strapi.features.isEnabled(window.strapi.features.SSO)}),R=()=>{A("/auth/login")};return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!g&&j.length===0?(0,s.jsx)(c.rd,{to:"/auth/login"}):(0,s.jsx)(n.U,{children:(0,s.jsxs)(l.g,{children:[(0,s.jsxs)(n.h,{children:[(0,s.jsxs)(n.C,{children:[(0,s.jsx)(n.i,{}),(0,s.jsx)(a.a,{paddingTop:6,paddingBottom:1,children:(0,s.jsx)(_.o,{as:"h1",variant:"alpha",children:r({id:"Auth.form.welcome.title"})})}),(0,s.jsx)(a.a,{paddingBottom:7,children:(0,s.jsx)(_.o,{variant:"epsilon",textColor:"neutral600",children:r({id:"Auth.login.sso.subtitle"})})})]}),(0,s.jsxs)(d.s,{direction:"column",alignItems:"stretch",gap:7,children:[g?(0,s.jsx)(d.s,{justifyContent:"center",children:(0,s.jsx)(x.a,{children:r({id:"Auth.login.sso.loading"})})}):(0,s.jsx)(O.S,{providers:j}),(0,s.jsxs)(d.s,{children:[(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{paddingLeft:3,paddingRight:3,children:(0,s.jsx)(_.o,{variant:"sigma",textColor:"neutral600",children:r({id:"or"})})}),(0,s.jsx)(i,{})]}),(0,s.jsx)(M.$,{fullWidth:!0,size:"L",onClick:R,children:r({id:"Auth.form.button.login.strapi"})})]})]}),(0,s.jsx)(d.s,{justifyContent:"center",children:(0,s.jsx)(a.a,{paddingTop:4,children:(0,s.jsx)(E.N,{as:e.k2,to:"/auth/forgot-password",children:(0,s.jsx)(_.o,{variant:"pi",children:r({id:"Auth.link.forgot-password"})})})})})]})})},i=(0,h.Ay)(P.c)`
  flex: 1;
`,C={providers:D}}}]);
