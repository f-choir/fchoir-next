"use strict";(self.webpackChunkwe_rise=self.webpackChunkwe_rise||[]).push([[3942],{33942:(H,y,t)=>{t.d(y,{ProtectedListPage:()=>ce});var e=t(58466),c=t(2730),f=t(77271),p=t(64469),T=t(15659),M=t(18834),k=t(28535),u=t(13775),d=t(16113),s=t(61680),h=t(45227),i=t(60783),b=t(31458),$=t(48065),E=t(94323),l=t(71869),A=t(78885),w=t(9891),B=t(46067),O=t(59979),J=t(75617);const I=J.Ay.div`
  background: ${({theme:n})=>n.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24/16}rem;
  width: ${40/16}rem;

  & span {
    font-size: ${({visibleLabels:n})=>n?"1rem":0};
  }

  &:before {
    content: '';
    background: ${({theme:n})=>n.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({theme:n})=>n.spaces[1]};
    top: ${({theme:n})=>n.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`,te=J.Ay.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${I} {
    background: ${({theme:n})=>n.colors.success500};
  }

  &[aria-checked='true'] ${I}:before {
    transform: translateX(1rem);
  }
`,se=c.forwardRef(({label:n,onChange:x,onLabel:L="On",offLabel:C="Off",selected:j,visibleLabels:g=!1,...U},a)=>(0,e.jsx)(te,{ref:a,role:"switch","aria-checked":j,"aria-label":n,onClick:x,visibleLabels:g,type:"button",...U,children:(0,e.jsxs)(O.s,{children:[(0,e.jsxs)(I,{children:[(0,e.jsx)("span",{children:L}),(0,e.jsx)("span",{children:C})]}),g&&(0,e.jsx)(h.a,{as:"span","aria-hidden":!0,paddingLeft:2,color:j?"success600":"danger600",children:j?L:C})]})}));var Q=t(7479),oe=t(74201),ae=t(58124),m=t(43348),R=t(53176),X=t(30018),ne=t(76263),re=t(10931),ie=t(53293),Y=t(87231),de=t(93997),Z=t(18689),le=t(66975);const he=()=>{const[n,x]=c.useState(!1),[L,C]=c.useState(!1),[j,g]=c.useState([]),U=(0,Z.j)(o=>o.admin_app.permissions.settings?.webhooks),{formatMessage:a}=(0,ie.A)(),{_unstableFormatAPIError:P}=(0,m.wq)(),v=(0,m.hN)();(0,m.L4)();const{push:ue}=(0,Y.W6)(),{pathname:q}=(0,Y.zy)(),{isLoading:ge,allowedActions:{canCreate:K,canUpdate:F,canDelete:_}}=(0,m.ec)(U),{notifyStatus:ee}=(0,f.W)(),{isLoading:me,webhooks:W,error:N,updateWebhook:xe,deleteManyWebhooks:fe}=(0,le.u)();c.useEffect(()=>{if(N){v({type:"warning",message:P(N)});return}W&&ee(a({id:"Settings.webhooks.list.loading.success",defaultMessage:"Webhooks have been loaded"}))},[W,N,v,a,ee,P]);const be=async o=>{try{const r=await xe(o);"error"in r&&v({type:"warning",message:P(r.error)})}catch{v({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}},je=async()=>{try{C(!0);const o=await fe({ids:j});if("error"in o){v({type:"warning",message:P(o.error)});return}g([])}catch{v({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}finally{C(!1),x(!1)}},ve=o=>g(o?W?.map(r=>r.id)??[]:[]),ye=(o,r)=>g(o?V=>[...V,r]:V=>V.filter(pe=>pe!==r)),z=o=>()=>ue(`${q}/${o}`),G=ge||me,D=W?.length??0,S=j.length;return(0,e.jsxs)(p.P,{children:[(0,e.jsx)(m.x7,{name:"Webhooks"}),(0,e.jsxs)(T.g,{"aria-busy":G,children:[(0,e.jsx)(M.Q,{title:a({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:a({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:K&&!G&&(0,e.jsx)(ae.z,{as:de.k2,startIcon:(0,e.jsx)(R.A,{}),variant:"default",to:`${q}/create`,size:"S",children:a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})})}),S>0&&_&&(0,e.jsx)(k.B,{startActions:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(u.o,{variant:"epsilon",textColor:"neutral600",children:a({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# webhook} other {# webhooks}} selected"},{webhooksToDeleteLength:S})}),(0,e.jsx)(d.$,{onClick:()=>x(!0),startIcon:(0,e.jsx)(X.A,{}),size:"L",variant:"danger-light",children:a({id:"global.delete",defaultMessage:"Delete"})})]})}),(0,e.jsx)(s.s,{children:G?(0,e.jsx)(h.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,e.jsx)(m.Bl,{})}):D>0?(0,e.jsxs)(i.X,{colCount:5,rowCount:D+1,footer:(0,e.jsx)(b.S,{onClick:z("create"),icon:(0,e.jsx)(R.A,{}),children:a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})}),children:[(0,e.jsx)($.d,{children:(0,e.jsxs)(E.Tr,{children:[(0,e.jsx)(l.Th,{children:(0,e.jsx)(A.J,{"aria-label":a({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:S>0&&S<D,value:S===D,onValueChange:ve})}),(0,e.jsx)(l.Th,{width:"20%",children:(0,e.jsx)(u.o,{variant:"sigma",textColor:"neutral600",children:a({id:"global.name",defaultMessage:"Name"})})}),(0,e.jsx)(l.Th,{width:"60%",children:(0,e.jsx)(u.o,{variant:"sigma",textColor:"neutral600",children:a({id:"Settings.webhooks.form.url",defaultMessage:"URL"})})}),(0,e.jsx)(l.Th,{width:"20%",children:(0,e.jsx)(u.o,{variant:"sigma",textColor:"neutral600",children:a({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})})}),(0,e.jsx)(l.Th,{children:(0,e.jsx)(w.s,{children:a({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"})})})]})}),(0,e.jsx)(B.N,{children:W?.map(o=>(0,e.jsxs)(E.Tr,{onClick:F?z(o.id):void 0,style:{cursor:F?"pointer":"default"},children:[(0,e.jsx)(l.Td,{onClick:r=>r.stopPropagation(),children:(0,e.jsx)(A.J,{"aria-label":`${a({id:"global.select",defaultMessage:"Select"})} ${o.name}`,value:j?.includes(o.id),onValueChange:r=>ye(r,o.id),name:"select"})}),(0,e.jsx)(l.Td,{children:(0,e.jsx)(u.o,{fontWeight:"semiBold",textColor:"neutral800",children:o.name})}),(0,e.jsx)(l.Td,{children:(0,e.jsx)(u.o,{textColor:"neutral800",children:o.url})}),(0,e.jsx)(l.Td,{children:(0,e.jsx)(O.s,{children:(0,e.jsx)(se,{onLabel:a({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:a({id:"global.disabled",defaultMessage:"Disabled"}),label:`${o.name} ${a({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:o.isEnabled,onChange:r=>{r.stopPropagation(),be({...o,isEnabled:!o.isEnabled})},visibleLabels:!0})})}),(0,e.jsx)(l.Td,{children:(0,e.jsxs)(O.s,{gap:1,children:[F&&(0,e.jsx)(Q.K,{label:a({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:(0,e.jsx)(ne.A,{}),noBorder:!0}),_&&(0,e.jsx)(Q.K,{onClick:r=>{r.stopPropagation(),g([o.id]),x(!0)},label:a({id:"Settings.webhooks.events.delete",defaultMessage:"Delete webhook"}),icon:(0,e.jsx)(X.A,{}),noBorder:!0})]})})]},o.id))})]}):(0,e.jsx)(oe.p,{icon:(0,e.jsx)(re.A,{width:"160px"}),content:a({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:(0,e.jsx)(d.$,{variant:"secondary",startIcon:(0,e.jsx)(R.A,{}),disabled:!K,onClick:K?z("create"):void 0,children:a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})})})})]}),(0,e.jsx)(m.TM,{isOpen:n,onToggleDialog:()=>x(o=>!o),onConfirm:je,isConfirmButtonLoading:L})]})},ce=()=>{const n=(0,Z.j)(x=>x.admin_app.permissions.settings?.webhooks.main);return(0,e.jsx)(m.kz,{permissions:n,children:(0,e.jsx)(he,{})})}},66975:(H,y,t)=>{t.d(y,{u:()=>u});var e=t(18689);const c=e.n.injectEndpoints({endpoints:d=>({getWebhooks:d.query({query:s=>({url:`/admin/webhooks/${s?.id??""}`,method:"GET"}),transformResponse:s=>Array.isArray(s.data)?s.data:[s.data],providesTags:(s,h,i)=>typeof i=="object"&&"id"in i?[{type:"Webhook",id:i.id}]:[...s?.map(({id:b})=>({type:"Webhook",id:b}))??[],{type:"Webhook",id:"LIST"}]}),createWebhook:d.mutation({query:s=>({url:"/admin/webhooks",method:"POST",data:s}),transformResponse:s=>s.data,invalidatesTags:[{type:"Webhook",id:"LIST"}]}),updateWebhook:d.mutation({query:({id:s,...h})=>({url:`/admin/webhooks/${s}`,method:"PUT",data:h}),transformResponse:s=>s.data,invalidatesTags:(s,h,{id:i})=>[{type:"Webhook",id:i}]}),triggerWebhook:d.mutation({query:s=>({url:`/admin/webhooks/${s}/trigger`,method:"POST"}),transformResponse:s=>s.data}),deleteManyWebhooks:d.mutation({query:s=>({url:"/admin/webhooks/batch-delete",method:"POST",data:s}),transformResponse:s=>s.data,invalidatesTags:(s,h,{ids:i})=>i.map(b=>({type:"Webhook",id:b}))})}),overrideExisting:!1}),{useGetWebhooksQuery:f,useCreateWebhookMutation:p,useUpdateWebhookMutation:T,useTriggerWebhookMutation:M,useDeleteManyWebhooksMutation:k}=c,u=(d=void 0,s)=>{const{data:h,isLoading:i,error:b}=f(d,s),[$,{error:E}]=p(),[l,{error:A}]=T(),[w]=M(),[B]=k();return{webhooks:h,isLoading:i,error:b||E||A,createWebhook:$,updateWebhook:l,triggerWebhook:w,deleteManyWebhooks:B}}},31458:(H,y,t)=>{t.d(y,{S:()=>d});var e=t(58466),c=t(75617),f=t(45227),p=t(86507),T=t(59979),M=t(13775);const k=(0,c.Ay)(f.a)`
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
    fill: ${({theme:s})=>s.colors.primary600};
  }
`,u=(0,c.Ay)(f.a)`
  border-radius: 0 0 ${({theme:s})=>s.borderRadius} ${({theme:s})=>s.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,d=({children:s,icon:h,...i})=>(0,e.jsxs)("div",{children:[(0,e.jsx)(p.c,{}),(0,e.jsx)(u,{as:"button",background:"primary100",padding:5,...i,children:(0,e.jsxs)(T.s,{children:[(0,e.jsx)(k,{"aria-hidden":!0,background:"primary200",children:h}),(0,e.jsx)(f.a,{paddingLeft:3,children:(0,e.jsx)(M.o,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:s})})]})})]})}}]);
