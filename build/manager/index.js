tau.mashups.addModule("BrowserPerformanceMonitor/config", {});
/*! v1.0.0 Build Mon, 18 Apr 2016 09:36:28 GMT */
!function(){var e={},t=function(){var t,n,r,a=Array.prototype.slice.call(arguments,0);"string"==typeof a[0]?(r=a[0],t=a[1],n=a[2]):Array.isArray(a[0])&&(t=a[0],n=a[1]);var l=t.reduce(function(e,t){return e.addDependency(t)},tau.mashups);return l=l.addDependency(r+"/config"),l=l.addMashup(function(){var a=Array.prototype.slice.call(arguments,0);if(t.length>0&&1===a.length)throw new Error("Can't properly load dependencies for mashup \""+r+'", mashup is stopped.');return e.variables=a[a.length-1],a.length-t.length===2?e.config=a[a.length-2]:e.config={},Object.freeze&&(Object.freeze(e.variables),Object.freeze(e.config),Object.freeze(e)),n.apply(null,a)})};t("BrowserPerformanceMonitor",[],function(){return function(t){function n(e){if(r[e])return r[e].exports;var a=r[e]={exports:{},id:e,loaded:!1};return t[e].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}var r={};return n.m=t,n.c=r,n.p="",n.p=e.variables?e.variables.mashupPath:n.p,n(0)}([function(e,t,n){n(1),e.exports=n(3)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var a=n(2),l=r(a),o=new l["default"];requestAnimationFrame(function i(){o.update(),requestAnimationFrame(i)}),document.body.appendChild(o.dom)},function(e,t){var n=function(){function e(e){return a.appendChild(e.dom),e}function t(e){for(var t=0;t<a.children.length;t++)a.children[t].style.display=t===e?"block":"none";r=e}var r=0,a=document.createElement("div");a.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",a.addEventListener("click",function(e){e.preventDefault(),t(++r%a.children.length)},!1);var l=(performance||Date).now(),o=l,i=0,c=e(new n.Panel("FPS","#0ff","#002")),f=e(new n.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=e(new n.Panel("MB","#f08","#201"));return t(0),{REVISION:16,dom:a,addPanel:e,showPanel:t,begin:function(){l=(performance||Date).now()},end:function(){i++;var e=(performance||Date).now();if(f.update(e-l,200),e>o+1e3&&(c.update(1e3*i/(e-o),100),o=e,i=0,d)){var t=performance.memory;d.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576)}return e},update:function(){l=this.end()},domElement:a,setMode:t}};n.Panel=function(e,t,n){var r=1/0,a=0,l=Math.round,o=l(window.devicePixelRatio||1),i=80*o,c=48*o,f=3*o,d=2*o,p=3*o,u=15*o,s=74*o,m=30*o,h=document.createElement("canvas");h.width=i,h.height=c,h.style.cssText="width:80px;height:48px";var v=h.getContext("2d");return v.font="bold "+9*o+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=n,v.fillRect(0,0,i,c),v.fillStyle=t,v.fillText(e,f,d),v.fillRect(p,u,s,m),v.fillStyle=n,v.globalAlpha=.9,v.fillRect(p,u,s,m),{dom:h,update:function(c,y){r=Math.min(r,c),a=Math.max(a,c),v.fillStyle=n,v.globalAlpha=1,v.fillRect(0,0,i,u),v.fillStyle=t,v.fillText(l(c)+" "+e+" ("+l(r)+"-"+l(a)+")",f,d),v.drawImage(h,p+o,u,s-o,m,p,u,s-o,m),v.fillRect(p+s-o,u,o,m),v.fillStyle=n,v.globalAlpha=.9,v.fillRect(p+s-o,u,o,l((1-c/y)*m))}}},"object"==typeof e&&(e.exports=n)},function(e,t){}])})}();