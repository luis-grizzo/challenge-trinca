"use strict";(self.webpackChunkchallenge_trinca=self.webpackChunkchallenge_trinca||[]).push([[927],{6927:function(n,e,r){r.d(e,{zx:function(){return S},XZ:function(){return W},LH:function(){return O},Mt:function(){return q},II:function(){return V},u_:function(){return nn},gx:function(){return on}});var o,t,a,l,i,c,s,d,u,h,m,b,f,p,g,w,v,_,x=r(8683),k=r(5987),y=r(168),Z=r(5751),j=function(){return(0,Z.iv)(o||(o=(0,y.Z)(["\n    width: 100%;\n  "])))},N={default:function(n){return(0,Z.iv)(t||(t=(0,y.Z)(["\n    background-color: ",";\n    color: ",";\n    padding: 1.4rem 1.6rem;\n\n    &:hover:not(:disabled) {\n      background-color: ",";\n    }\n  "])),n.colors.black,n.colors.white,n.colors.blackHover)},ghost:function(n){return(0,Z.iv)(a||(a=(0,y.Z)(["\n    background-color: transparent;\n    color: ",";\n    padding: 1rem;\n\n    &:hover:not(:disabled) {\n      color: ",";\n    }\n  "])),n.colors.black,n.colors.blackHover)},outlined:function(n){return(0,Z.iv)(l||(l=(0,y.Z)(["\n    background-color: transparent;\n    color: ",";\n    border: 0.2rem solid ",";\n    padding: 1.4rem 1.6rem;\n    backdrop-filter: blur(0.4rem);\n\n    &:hover:not(:disabled) {\n      color: ",";\n      border-color: ",";\n    }\n  "])),n.colors.black,n.colors.black,n.colors.blackHover,n.colors.blackHover)}},C=Z.ZP.button(i||(i=(0,y.Z)(["\n  ","\n"])),(function(n){var e=n.theme,r=n.fullWidth,o=n.variant;return(0,Z.iv)(c||(c=(0,y.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n\n    font-size: 1.8rem;\n    font-weight: 700;\n    border-radius: 0.2rem;\n    transition: ",";\n\n    &:disabled {\n      background-color: ",";\n      color: ",";\n      cursor: not-allowed;\n    }\n\n    &:focus {\n      outline: none;\n      box-shadow: 0 0 0 0.3rem ",";\n    }\n\n    ","\n    ","\n  "])),e.transitions.default,e.colors.disabled,e.colors.darkDisabled,e.colors.blackHover,r&&j(),o&&N[o](e))})),z=r(184),D=["fullWidth","variant","icon","children"],S=function(n){var e=n.fullWidth,r=n.variant,o=n.icon,t=n.children,a=(0,k.Z)(n,D);return(0,z.jsxs)(C,(0,x.Z)((0,x.Z)({fullWidth:e,variant:r,type:"button"},a),{},{children:[o,t]}))},F=r(1150),L=r(9377),M=Z.ZP.div(s||(s=(0,y.Z)(["\n  ","\n"])),(function(n){var e=n.theme;return(0,Z.iv)(d||(d=(0,y.Z)(["\n    display: flex;\n    align-items: center;\n    gap: 1.6rem;\n\n    height: 5.3rem;\n\n    .w__checkbox {\n      position: absolute;\n      opacity: 0;\n      visibility: hidden;\n    }\n\n    .w__checkbox + .w__label,\n    .w__checkbox + .w__label::before {\n      cursor: pointer;\n    }\n\n    .w__checkbox:not(:checked) + .w__label::before,\n    .w__checkbox:checked + .w__label::before {\n      content: '';\n\n      width: 2.5rem;\n      aspect-ratio: 1/1;\n      border-radius: 50%;\n      transition: ",";\n    }\n\n    .w__checkbox:checked + .w__label::before {\n      background-color: ",";\n    }\n\n    .w__checkbox:not(:checked) + .w__label::before {\n      background-color: ",";\n    }\n\n    .w__label {\n      display: flex;\n      align-items: center;\n      gap: 1rem;\n\n      font-size: 2.1rem;\n      font-weight: 500;\n    }\n  "])),e.transitions.default,e.colors.primary,e.colors.darkShape)})),P=["label","labelClassName","infoIcon","className"],W=function(n){var e=n.label,r=n.labelClassName,o=n.infoIcon,t=n.className,a=(0,k.Z)(n,P),l=e.replace(/\W/g,"").toLowerCase()+String((0,L.Ox)());return(0,z.jsxs)(M,{children:[(0,z.jsx)("input",(0,x.Z)({id:l,type:"checkbox",className:"w__checkbox ".concat(null!==t&&void 0!==t?t:"")},a)),(0,z.jsx)("label",{role:"label",htmlFor:l,className:"w__label ".concat(null!==r&&void 0!==r?r:""),children:e}),o&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)("span",{role:"icon",className:"w__info-icon","data-for":"info-icon","data-tip":o.message,"data-place":"top",children:o.icon}),(0,z.jsx)(F.Z,{id:"info-icon",effect:"solid"})]})]})},Y=r(948),H=Z.ZP.div(u||(u=(0,y.Z)(["\n  ","\n"])),(function(n){var e=n.theme;return(0,Z.iv)(h||(h=(0,y.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1.6rem;\n\n    width: 100%;\n\n    .w__label {\n      font-size: 2.1rem;\n      font-weight: 500;\n    }\n\n    .w__input {\n      padding: 1.4rem 2rem;\n      border-radius: 0.2rem;\n      background-color: ",";\n      border: 1px solid ",";\n\n      width: 100%;\n\n      &::placeholder {\n        font-style: italic;\n      }\n    }\n  "])),e.colors.shape,e.colors.darkShape)})),I=["label","onChange"],O=function(n){var e=n.label,r=n.onChange,o=(0,k.Z)(n,I),t=e.replace(/\W/g,"").toLowerCase();return(0,z.jsxs)(H,{children:[(0,z.jsx)("label",{htmlFor:t,className:"w__label",children:e}),(0,z.jsx)(Y.Z,(0,x.Z)({type:"tel",id:t,defaultValue:0,isNumericString:!0,allowNegative:!1,allowLeadingZeros:!1,format:function(n){return(0,L.dN)(parseInt(n)/100)},onChange:function(n){var e=""===n.target.value.replace(/[-R$.,]/g,"")?0:parseInt(n.target.value.replace(/[-R$.,]/g,""));return null===r||void 0===r?void 0:r(e)},className:"w__input"},o))]})},R=r(7788),T=r(6856),B=function(n){return{left:(0,z.jsx)(T.ORz,{size:30}),right:(0,z.jsx)(T.km,{size:30})}[n]},J=function(n){var e=n.direction,r=n.handleClick,o=n.disabled;return(0,z.jsx)(S,{variant:"ghost",onClick:r,disabled:o,className:"rmdp__button",children:e&&B(e)})},A={weekDays:["D","S","T","Q","Q","S","S"],months:["Janeiro","Fevereiro","Mar\xe7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]},Q=Z.ZP.div(m||(m=(0,y.Z)(["\n  ","\n"])),(function(n){var e=n.theme;return(0,Z.iv)(b||(b=(0,y.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1.6rem;\n\n    width: 100%;\n\n    .w__label {\n      font-size: 2.1rem;\n      font-weight: 500;\n    }\n\n    .w__input {\n      padding: 1.4rem 2rem;\n      border-radius: 0.2rem;\n\n      width: 100%;\n      border-radius: 0.2rem;\n      background-color: ",";\n      border: 1px solid ",";\n\n      &::placeholder {\n        font-style: italic;\n      }\n    }\n\n    .rmdp-container {\n      width: 100%;\n\n      .rmdp-shadow {\n        box-shadow: ",";\n      }\n\n      .rmdp-calendar {\n        display: flex;\n        flex-direction: column;\n        gap: 2rem;\n\n        .rmdp-header-values,\n        .rmdp-week-day {\n          color: ",";\n          font-weight: 800;\n        }\n\n        .rmdp-day {\n          .sd,\n          span {\n            color: ",";\n            transition: ",";\n            font-weight: 700;\n          }\n\n          &:hover:not(.rmdp-disabled):not(.rmdp-day-hidden) {\n            .sd,\n            span {\n              background-color: ",";\n              color: ",";\n            }\n          }\n\n          &.rmdp-disabled {\n            .sd,\n            span {\n              color: ",";\n              font-weight: 300;\n            }\n          }\n        }\n\n        .rmdp-today {\n          .sd,\n          span {\n            background-color: ",";\n            color: ",";\n          }\n        }\n\n        .rmdp-selected {\n          .sd,\n          span {\n            background-color: ",";\n            color: ",";\n            box-shadow: none;\n          }\n        }\n      }\n    }\n  "])),e.colors.shape,e.colors.darkShape,e.shadows.default,e.colors.black,e.colors.text,e.transitions.default,e.colors.primary,e.colors.black,e.colors.textHover,e.colors.black,e.colors.white,e.colors.primary,e.colors.black)})),$=["label","value","onChange"],q=function(n){var e=n.label,r=n.value,o=n.onChange,t=(0,k.Z)(n,$),a=e.replace(/\W/g,"").toLowerCase();return(0,z.jsxs)(Q,{children:[(0,z.jsx)("label",{htmlFor:a,className:"w__label",children:e}),(0,z.jsx)(R.ZP,(0,x.Z)({title:"Selecione uma data",id:a,value:r,onChange:function(n){return o(new Date(null===n||void 0===n?void 0:n.format("MM/DD/YYYY")))},weekDays:A.weekDays,months:A.months,format:"DD/MM/YYYY",renderButton:(0,z.jsx)(J,{}),minDate:new Date,onOpenPickNewDate:!1,editable:!1,arrow:!1,inputClass:"w__input"},t))]})},E=Z.ZP.div(f||(f=(0,y.Z)(["\n  ","\n"])),(function(n){var e=n.theme;return(0,Z.iv)(p||(p=(0,y.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1.6rem;\n\n    width: 100%;\n\n    .w__label {\n      font-size: 2.1rem;\n      font-weight: 500;\n    }\n\n    .w__input {\n      padding: 1.4rem 2rem;\n      border-radius: 0.2rem;\n      background-color: ",";\n      border: 1px solid ",";\n\n      width: 100%;\n\n      &::placeholder {\n        font-style: italic;\n      }\n    }\n  "])),e.colors.shape,e.colors.darkShape)})),U=["label"],V=function(n){var e=n.label,r=(0,k.Z)(n,U),o=e.replace(/\W/g,"").toLowerCase();return(0,z.jsxs)(E,{children:[(0,z.jsx)("label",{role:"label",htmlFor:o,className:"w__label",children:e}),(0,z.jsx)("input",(0,x.Z)({role:"input",id:o,className:"w__input"},r))]})},X=r(2791),G=r(4139),K=Z.ZP.div(g||(g=(0,y.Z)(["\n  ","\n"])),(function(n){var e=n.theme;return(0,Z.iv)(w||(w=(0,y.Z)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    height: 100vh;\n    width: 100vw;\n\n    .m__content {\n      display: flex;\n      flex-direction: column;\n      align-items: flex-start;\n      gap: 5rem;\n\n      max-height: 90vh;\n      width: 90vw;\n      max-width: 720px;\n\n      padding: 5rem;\n      background-color: ",";\n      box-shadow: ",";\n      overflow: auto;\n      z-index: 20;\n\n      .mc__header {\n        display: flex;\n        align-items: flex-start;\n        justify-content: space-between;\n        gap: 2rem;\n\n        width: 100%;\n\n        .mch__title {\n          font-size: 3.6rem;\n          font-weight: 800;\n        }\n\n        .mch__close-button {\n          background-color: ",";\n          border: none;\n          border-radius: 50%;\n          padding: 0.5rem;\n        }\n      }\n    }\n\n    .m__overlay {\n      position: absolute;\n      top: 0;\n      left: 0;\n\n      height: 100vh;\n      width: 100vw;\n\n      backdrop-filter: blur(2px);\n      background-color: ",";\n      cursor: pointer;\n      z-index: 10;\n    }\n  "])),e.colors.background,e.shadows.default,e.colors.darkShape,e.colors.opaqueBackground)})),nn=function(n){var e=n.isOpen,r=n.modalTitle,o=n.onClose,t=n.children,a=(0,G.animated)(K),l=(0,G.useTransition)(e,{from:{opacity:0},enter:{opacity:1},leave:{opacity:0},reverse:e}),i=(0,G.useTransition)(e,{from:{opacity:0,y:800},enter:{opacity:1,y:0},leave:{opacity:0,y:800},reverse:e}),c=(0,G.useTransition)(e,{from:{opacity:0},enter:{opacity:1},leave:{opacity:0},reverse:e});return(0,X.useEffect)((function(){document.body.style.overflow=e?"hidden":"auto"}),[e]),l((function(n,e){return e&&(0,z.jsxs)(a,{role:"modal",styles:n,children:[i((function(n,e){return e&&(0,z.jsxs)(G.animated.div,{style:n,className:"m__content",children:[(0,z.jsxs)("div",{className:"mc__header",children:[!!r&&(0,z.jsx)("span",{className:"mch__title",children:r}),(0,z.jsx)("button",{title:"Fechar",onClick:function(){return null===o||void 0===o?void 0:o()},className:"mch__close-button",children:(0,z.jsx)(T.FU5,{size:30})})]}),t]})})),c((function(n,e){return e&&(0,z.jsx)(G.animated.div,{role:"overlay",style:n,onClick:function(){return null===o||void 0===o?void 0:o()},className:"m__overlay"})}))]})}))},en=Z.ZP.div(v||(v=(0,y.Z)(["\n  ","\n"])),(function(n){var e=n.theme;return(0,Z.iv)(_||(_=(0,y.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1.6rem;\n\n    width: 100%;\n\n    .w__label {\n      font-size: 2.1rem;\n      font-weight: 500;\n    }\n\n    .w__textarea {\n      width: 100%;\n      min-height: 10rem;\n      max-height: 50rem;\n\n      padding: 1.4rem 2rem;\n      border-radius: 0.2rem;\n      resize: vertical;\n      background-color: ",";\n      border: 1px solid ",";\n\n      &::placeholder {\n        font-style: italic;\n      }\n    }\n  "])),e.colors.shape,e.colors.darkShape)})),rn=["label"],on=function(n){var e=n.label,r=(0,k.Z)(n,rn),o=e.replace(/\W/g,"").toLowerCase();return(0,z.jsxs)(en,{children:[(0,z.jsx)("label",{role:"label",htmlFor:o,className:"w__label",children:e}),(0,z.jsx)("textarea",(0,x.Z)({role:"textarea",id:o,className:"w__textarea"},r))]})}},9377:function(n,e,r){r.d(e,{dN:function(){return o},Ox:function(){return t}});var o=function(n){return n.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})},t=function(){return Math.round(1e4*Math.random())};r(9607),r(5052),r(184)}}]);
//# sourceMappingURL=927.6a81b523.chunk.js.map