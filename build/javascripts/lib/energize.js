!function(){if("ontouchstart"in window){var e,t,n,i,r,o,s={};e=function(e,t){return Math.abs(e[0]-t[0])>5||Math.abs(e[1]-t[1])>5},t=function(e){this.startXY=[e.touches[0].clientX,e.touches[0].clientY],this.threshold=!1},n=function(t){return this.threshold?!1:void(this.threshold=e(this.startXY,[t.touches[0].clientX,t.touches[0].clientY]))},i=function(t){if(!this.threshold&&!e(this.startXY,[t.changedTouches[0].clientX,t.changedTouches[0].clientY])){var n=t.changedTouches[0],i=document.createEvent("MouseEvents");i.initMouseEvent("click",!0,!0,window,0,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),i.simulated=!0,t.target.dispatchEvent(i)}},r=function(e){var t=Date.now(),n=t-s.time,i=e.clientX,r=e.clientY,a=[Math.abs(s.x-i),Math.abs(s.y-r)],l=o(e.target,"A")||e.target,u=l.nodeName,c="A"===u,h=window.navigator.standalone&&c&&e.target.getAttribute("href");return s.time=t,s.x=i,s.y=r,(!e.simulated&&(500>n||1500>n&&a[0]<50&&a[1]<50)||h)&&(e.preventDefault(),e.stopPropagation(),!h)?!1:(h&&(window.location=l.getAttribute("href")),void(l&&l.classList&&(l.classList.add("energize-focus"),window.setTimeout(function(){l.classList.remove("energize-focus")},150))))},o=function(e,t){for(var n=e;n!==document.body;){if(!n||n.nodeName===t)return n;n=n.parentNode}return null},document.addEventListener("touchstart",t,!1),document.addEventListener("touchmove",n,!1),document.addEventListener("touchend",i,!1),document.addEventListener("click",r,!0)}}();