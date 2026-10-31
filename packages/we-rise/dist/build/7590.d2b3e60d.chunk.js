"use strict";(self.webpackChunkwe_rise=self.webpackChunkwe_rise||[]).push([[7590],{59583:(p,E,s)=>{s.d(E,{B:()=>A,D:()=>x,H:()=>L,R:()=>W});var e=s(58466),_=s(59979),c=s(13775),m=s(64469),f=s(15659),M=s(61680),D=s(18834),i=s(43348),n=s(98063),t=s(63440),d=s(53293),u=s(18689),O=s(90555),a=s(75617);const g=(0,a.Ay)(_.s)`
  svg path {
    fill: ${({theme:l})=>l.colors.neutral600};
  }
`,j=({name:l})=>(0,e.jsxs)(_.s,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,i.a8)(300),children:[(0,e.jsx)(g,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6,children:(0,e.jsx)(n.A,{width:`${8/16}rem`})}),(0,e.jsx)(c.o,{fontWeight:"bold",children:l})]}),x=()=>(0,e.jsx)(u.P,{renderItem:l=>{if(l.type===O.D.STAGE)return(0,e.jsx)(j,{name:typeof l.item=="string"?l.item:null})}}),W=({children:l})=>(0,e.jsx)(m.P,{children:(0,e.jsx)(f.g,{tabIndex:-1,children:(0,e.jsx)(M.s,{children:l})})}),A=({href:l})=>{const{formatMessage:h}=(0,d.A)();return(0,e.jsx)(i.N_,{startIcon:(0,e.jsx)(t.A,{}),to:l,children:h({id:"global.back",defaultMessage:"Back"})})},L=({title:l,subtitle:h,navigationAction:C,primaryAction:v})=>(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.x7,{name:l}),(0,e.jsx)(D.Q,{navigationAction:C,primaryAction:v,title:l,subtitle:h})]})},17590:(p,E,s)=>{s.d(E,{ProtectedReviewWorkflowsPage:()=>V});var e=s(58466),_=s(2730),c=s(59979),m=s(59754),f=s(60783),M=s(31458),D=s(48065),i=s(94323),n=s(71869),t=s(13775),d=s(9891),u=s(46067),O=s(7479),a=s(43348),g=s(53176),j=s(76263),x=s(30018),W=s(53293),A=s(87231),L=s(75617),l=s(18689),h=s(12481),C=s(59583),v=s(49446),z=s(90555),Q=s(8365);const H=(0,L.Ay)(a.N_)`
  align-items: center;
  height: ${(0,a.a8)(32)};
  display: flex;
  justify-content: center;
  padding: ${({theme:o})=>`${o.spaces[2]}}`};
  width: ${(0,a.a8)(32)};

  svg {
    height: ${(0,a.a8)(12)};
    width: ${(0,a.a8)(12)};

    path {
      fill: ${({theme:o})=>o.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:o})=>o.colors.neutral800};
      }
    }
  }
`,Z=()=>{const{formatMessage:o}=(0,W.A)(),{push:y}=(0,A.W6)(),{trackUsage:K}=(0,a.z1)(),[I,R]=_.useState(null),[X,T]=_.useState(!1),{collectionTypes:Y,singleTypes:J,isLoading:b}=(0,h.u)(),{meta:P,workflows:k,isLoading:B,deleteWorkflow:q}=(0,Q.u)(),[ee,S]=_.useState(!1),{_unstableFormatAPIError:se}=(0,a.wq)(),U=(0,a.hN)(),{getFeature:te,isLoading:$}=(0,l.m)(),ne=(0,l.j)(r=>r.admin_app.permissions.settings?.["review-workflows"]),{allowedActions:{canCreate:N,canDelete:oe}}=(0,a.ec)(ne),w=te("review-workflows")?.[z.C],re=r=>[...Y,...J].find(G=>G.uid===r)?.info.displayName,ie=r=>{R(r)},ae=()=>{R(null)},le=async()=>{if(I)try{S(!0);const r=await q({id:I});if("error"in r){U({type:"warning",message:se(r.error)});return}R(null),U({type:"success",message:{id:"notification.success.deleted",defaultMessage:"Deleted"}})}catch{U({type:"warning",message:{id:"notification.error.unexpected",defaultMessage:"An error occurred"}})}finally{S(!1)}};return _.useEffect(()=>{!B&&!$&&w&&P&&P?.workflowCount>parseInt(w,10)&&T(!0)},[$,B,P,P?.workflowCount,w]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(C.H,{primaryAction:N&&(0,e.jsx)(a.z9,{startIcon:(0,e.jsx)(g.A,{}),size:"S",to:"/settings/review-workflows/create",onClick:r=>{w&&P&&P?.workflowCount>=parseInt(w,10)?(r.preventDefault(),T(!0)):K("willCreateWorkflow")},children:o({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})}),subtitle:o({id:"Settings.review-workflows.list.page.subtitle",defaultMessage:"Manage your content review process"}),title:o({id:"Settings.review-workflows.list.page.title",defaultMessage:"Review Workflows"})}),(0,e.jsxs)(C.R,{children:[B||b?(0,e.jsx)(c.s,{justifyContent:"center",children:(0,e.jsx)(m.a,{children:o({id:"Settings.review-workflows.page.list.isLoading",defaultMessage:"Workflows are loading"})})}):(0,e.jsxs)(f.X,{colCount:3,footer:N&&(0,e.jsx)(M.S,{icon:(0,e.jsx)(g.A,{}),onClick:()=>{w&&P&&P?.workflowCount>=parseInt(w,10)?T(!0):(y("/settings/review-workflows/create"),K("willCreateWorkflow"))},children:o({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})}),rowCount:1,children:[(0,e.jsx)(D.d,{children:(0,e.jsxs)(i.Tr,{children:[(0,e.jsx)(n.Th,{children:(0,e.jsx)(t.o,{variant:"sigma",children:o({id:"Settings.review-workflows.list.page.list.column.name.title",defaultMessage:"Name"})})}),(0,e.jsx)(n.Th,{children:(0,e.jsx)(t.o,{variant:"sigma",children:o({id:"Settings.review-workflows.list.page.list.column.stages.title",defaultMessage:"Stages"})})}),(0,e.jsx)(n.Th,{children:(0,e.jsx)(t.o,{variant:"sigma",children:o({id:"Settings.review-workflows.list.page.list.column.contentTypes.title",defaultMessage:"Content Types"})})}),(0,e.jsx)(n.Th,{children:(0,e.jsx)(d.s,{children:o({id:"Settings.review-workflows.list.page.list.column.actions.title",defaultMessage:"Actions"})})})]})}),(0,e.jsx)(u.N,{children:k?.map(r=>(0,_.createElement)(i.Tr,{...(0,a.qM)({fn(F){F.target.nodeName!=="BUTTON"&&y(`/settings/review-workflows/${r.id}`)}}),key:`workflow-${r.id}`},(0,e.jsx)(n.Td,{width:(0,a.a8)(250),children:(0,e.jsx)(t.o,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0,children:r.name})}),(0,e.jsx)(n.Td,{children:(0,e.jsx)(t.o,{textColor:"neutral800",children:r.stages.length})}),(0,e.jsx)(n.Td,{children:(0,e.jsx)(t.o,{textColor:"neutral800",children:(r?.contentTypes??[]).map(re).join(", ")})}),(0,e.jsx)(n.Td,{children:(0,e.jsxs)(c.s,{alignItems:"center",justifyContent:"end",children:[(0,e.jsx)(H,{to:`/settings/review-workflows/${r.id}`,"aria-label":o({id:"Settings.review-workflows.list.page.list.column.actions.edit.label",defaultMessage:"Edit {name}"},{name:r.name}),children:(0,e.jsx)(j.A,{})}),k.length>1&&oe&&(0,e.jsx)(O.K,{"aria-label":o({id:"Settings.review-workflows.list.page.list.column.actions.delete.label",defaultMessage:"Delete {name}"},{name:"Default workflow"}),icon:(0,e.jsx)(x.A,{}),noBorder:!0,onClick:()=>{ie(String(r.id))}})]})})))})]}),(0,e.jsx)(a.TM,{bodyText:{id:"Settings.review-workflows.list.page.delete.confirm.body",defaultMessage:"If you remove this worfklow, all stage-related information will be removed for this content-type. Are you sure you want to remove it?"},isConfirmButtonLoading:ee,isOpen:!!I,onToggleDialog:ae,onConfirm:le}),(0,e.jsxs)(v.L.Root,{isOpen:X,onClose:()=>T(!1),children:[(0,e.jsx)(v.L.Title,{children:o({id:"Settings.review-workflows.list.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})}),(0,e.jsx)(v.L.Body,{children:o({id:"Settings.review-workflows.list.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]})]})]})},V=()=>{const o=(0,l.j)(y=>y.admin_app.permissions.settings?.["review-workflows"]?.main);return(0,e.jsx)(a.kz,{permissions:o,children:(0,e.jsx)(Z,{})})}},12481:(p,E,s)=>{s.d(E,{u:()=>D});var e=s(2730),_=s(43348),c=s(18689);const m=c.n.injectEndpoints({endpoints:i=>({getComponents:i.query({query:()=>({url:"/content-manager/components",method:"GET"}),transformResponse:n=>n.data}),getContentTypes:i.query({query:()=>({url:"/content-manager/content-types",method:"GET"}),transformResponse:n=>n.data})}),overrideExisting:!1}),{useGetComponentsQuery:f,useGetContentTypesQuery:M}=m;function D(){const{_unstableFormatAPIError:i}=(0,_.wq)(),n=(0,_.hN)(),t=f(),d=M();e.useEffect(()=>{d.error&&n({type:"warning",message:i(d.error)})},[d.error,i,n]),e.useEffect(()=>{t.error&&n({type:"warning",message:i(t.error)})},[t.error,i,n]);const u=t.isLoading||d.isLoading,O=e.useMemo(()=>(d?.data??[]).filter(g=>g.kind==="collectionType"&&g.isDisplayed),[d?.data]),a=e.useMemo(()=>(d?.data??[]).filter(g=>g.kind!=="collectionType"&&g.isDisplayed),[d?.data]);return{isLoading:u,components:e.useMemo(()=>t?.data??[],[t?.data]),collectionTypes:O,singleTypes:a}}},8365:(p,E,s)=>{s.d(E,{u:()=>_});var e=s(63326);function _(c={}){const{id:m="",...f}=c,{data:M,isLoading:D}=(0,e.c)({id:m,populate:"stages",...f}),[i]=(0,e.d)(),[n]=(0,e.e)(),[t]=(0,e.f)(),{workflows:d,meta:u}=M??{};return{meta:u,workflows:d,isLoading:D,createWorkflow:i,updateWorkflow:n,deleteWorkflow:t}}},31458:(p,E,s)=>{s.d(E,{S:()=>n});var e=s(58466),_=s(75617),c=s(45227),m=s(86507),f=s(59979),M=s(13775);const D=(0,_.Ay)(c.a)`
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
    fill: ${({theme:t})=>t.colors.primary600};
  }
`,i=(0,_.Ay)(c.a)`
  border-radius: 0 0 ${({theme:t})=>t.borderRadius} ${({theme:t})=>t.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,n=({children:t,icon:d,...u})=>(0,e.jsxs)("div",{children:[(0,e.jsx)(m.c,{}),(0,e.jsx)(i,{as:"button",background:"primary100",padding:5,...u,children:(0,e.jsxs)(f.s,{children:[(0,e.jsx)(D,{"aria-hidden":!0,background:"primary200",children:d}),(0,e.jsx)(c.a,{paddingLeft:3,children:(0,e.jsx)(M.o,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:t})})]})})]})}}]);
