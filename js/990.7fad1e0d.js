"use strict";(self["webpackChunktodoList"]=self["webpackChunktodoList"]||[]).push([[990],{8990:(t,e,n)=>{n.r(e),n.d(e,{createSwipeBackGesture:()=>i});var o=n(6587),r=n(545),s=n(6515);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const i=(t,e,n,i,a)=>{const c=t.ownerDocument.defaultView;let d=(0,r.i)(t);const h=t=>{const e=50,{startX:n}=t;return d?n>=c.innerWidth-e:n<=e},l=t=>d?-t.deltaX:t.deltaX,u=t=>d?-t.velocityX:t.velocityX,k=n=>(d=(0,r.i)(t),h(n)&&e()),w=t=>{const e=l(t),n=e/c.innerWidth;i(n)},p=t=>{const e=l(t),n=c.innerWidth,r=e/n,s=u(t),i=n/2,d=s>=0&&(s>.2||e>i),h=d?1-r:r,k=h*n;let w=0;if(k>5){const t=k/Math.abs(s);w=Math.min(t,540)}a(d,r<=0?.01:(0,o.h)(0,r,.9999),w)};return(0,s.A)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:k,onStart:n,onMove:w,onEnd:p})}}}]);
//# sourceMappingURL=990.7fad1e0d.js.map