(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{20:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),o=n(11),a=n.n(o),i=n(9),r=n(6),l=n(12),u=n(13),d=n(15),j=n(14),h=(n(20),n(10),n(5)),b=n(3),m=n(4),O=n(0);b.b.add(m.d,m.a,m.e,m.b,m.c);var p=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(l.a)(this,n),(c=t.call(this,e)).state={breakCount:5,sessionCount:25,clockCount:1500,currentTimer:"Session",isPlaying:!1},c.handlePlayPause=function(){c.state.isPlaying?(clearInterval(c.loop),c.setState({isPlaying:!1})):(c.setState({isPlaying:!0}),c.loop=setInterval((function(){var e=c.state,t=e.clockCount,n=e.currentTimer,s=e.breakCount,o=e.sessionCount;0===t?(c.setState({currentTimer:"Session"===n?"Break":"Session",clockCount:"Session"===n?60*s:60*o}),document.getElementById("beep").play()):c.setState({clockCount:t-1})}),1e3))},c.handleReset=function(){c.setState({breakCount:5,sessionCount:25,clockCount:1500,currentTimer:"Session",isPlaying:!1}),clearInterval(c.loop),document.getElementById("beep").currentTime=0,document.getElementById("beep").pause()},c.convertToTime=function(e){var t=Math.floor(e/60),n=e%60;return n=n<10?"0"+n:n,"".concat(t=t<10?"0"+t:t,":").concat(n)},c.handleLengthChange=function(e,t){var n,s=c.state,o=s.sessionCount,a=s.breakCount,i=s.isPlaying,l=s.currentTimer;(n="session"===t?o+e:a+e)>0&&n<61&&!i&&(c.setState(Object(r.a)({},"".concat(t,"Count"),n)),l.toLowerCase()===t&&c.setState({clockCount:60*n}))},c.loop=void 0,c}return Object(u.a)(n,[{key:"componentWillUnmount",value:function(){clearInterval(this.loop)}},{key:"render",value:function(){var e=this,t=this.state,n=t.breakCount,c=t.sessionCount,s=t.clockCount,o=t.currentTimer,a=t.isPlaying,r={title:"Break",count:n,handleDecrease:function(){return e.handleLengthChange(-1,"break")},handleIncrease:function(){return e.handleLengthChange(1,"break")}},l={title:"Session",count:c,handleDecrease:function(){return e.handleLengthChange(-1,"session")},handleIncrease:function(){return e.handleLengthChange(1,"session")}};return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"title",children:Object(O.jsx)("h1",{children:"Pomodoro Clock"})})," ",Object(O.jsx)("br",{})," ",Object(O.jsx)("br",{}),Object(O.jsxs)("div",{className:"flex",children:[Object(O.jsx)(C,Object(i.a)({},r)),Object(O.jsx)(C,Object(i.a)({},l))]}),Object(O.jsxs)("div",{className:"clock-container",children:[Object(O.jsx)("h1",{id:"timer-label",children:o}),Object(O.jsx)("span",{id:"time-left",children:this.convertToTime(s)}),Object(O.jsx)("audio",{id:"beep",src:"https://www.pacdv.com/sounds/interface_sound_effects/sound10.mp3",type:"audio/mp3"}),Object(O.jsxs)("div",{className:"flex",children:[Object(O.jsx)("button",{id:"start_stop",onClick:this.handlePlayPause,children:Object(O.jsx)(h.a,{icon:"".concat(a?"pause":"play")})}),Object(O.jsx)("button",{id:"reset",onClick:this.handleReset,children:Object(O.jsx)(h.a,{icon:"sync"})})]})]})]})}}]),n}(s.a.Component),C=function(e){var t=e.title.toLowerCase();return Object(O.jsxs)("div",{className:"timer-container",children:[Object(O.jsxs)("h2",{id:"".concat(t,"-label"),children:[e.title," Length"]}),Object(O.jsxs)("div",{className:"flex actions-wrapper",children:[Object(O.jsx)("button",{id:"".concat(t,"-decrement"),onClick:e.handleDecrease,children:Object(O.jsx)(h.a,{icon:"minus"})}),Object(O.jsx)("span",{id:"".concat(t,"-length"),children:e.count}),Object(O.jsx)("button",{id:"".concat(t,"-increment"),onClick:e.handleIncrease,children:Object(O.jsx)(h.a,{icon:"plus"})})]})]})},x=p;a.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(x,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.026f9c92.chunk.js.map