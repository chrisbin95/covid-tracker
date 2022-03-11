(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{20:function(e,t,a){e.exports={container:"Cards_container__1TYZw",infected:"Cards_infected__3-zgk",recovered:"Cards_recovered__1b3Jc",deaths:"Cards_deaths__1DEGk"}},211:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(70),o=a.n(c),u=a(5),i=a.n(u),s=a(10),l=a(71),d=a(72),p=a(84),f=a(83),m=a(229),v=a(233),h=a(230),b=a(231),C=a(73),g=a.n(C),y=a(74),E=a.n(y),x=a(75),_=a.n(x),k=function(e){var t=e.className,a=e.cardTitle,r=e.value,c=e.lastUpdate,o=e.cardSubtitle;return n.a.createElement(m.a,{item:!0,xs:12,md:3,component:v.a,className:E()(_.a.card,t)},n.a.createElement(h.a,null,n.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},a),n.a.createElement(b.a,{variant:"h5",component:"h2",color:"textPrimary"},n.a.createElement(g.a,{start:0,end:r,duration:2.75,separator:","})),n.a.createElement("br",null),n.a.createElement(b.a,{color:"textPrimary"},"\u25b9 ",new Date(c).toDateString()),n.a.createElement(b.a,{variant:"body2",component:"p",color:"textSecondary"},o)))},O=a(20),w=a.n(O),j=function(e){var t=e.data,a=t.confirmed,r=t.recovered,c=t.deaths,o=t.lastUpdate;return a?n.a.createElement("div",{className:w.a.container},n.a.createElement(m.a,{container:!0,spacing:5,justify:"center"},n.a.createElement(k,{className:w.a.infected,cardTitle:"Infected",value:a.value,lastUpdate:o,cardSubtitle:"Active Cases of COVID-19 \ud83d\ude37"}),n.a.createElement(k,{className:w.a.recovered,cardTitle:"Recovered",value:r.value,lastUpdate:o,cardSubtitle:"Recoveries from COVID-19 \ud83d\udc89"}),n.a.createElement(k,{className:w.a.deaths,cardTitle:"Deaths",value:c.value,lastUpdate:o,cardSubtitle:"Deaths caused by COVID-19 \u2622\ufe0f"}))):"Loading..."},D=a(29),S=a(42),I=a(30),N=a.n(I),T="https://covid19.mathdro.id/api",U=function(){var e=Object(s.a)(i.a.mark((function e(t){var a,r,n,c,o,u,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=T,t&&(a="".concat(T,"/countries/").concat(t)),e.prev=2,e.next=5,N.a.get(a);case 5:return r=e.sent,n=r.data,c=n.confirmed,o=n.recovered,u=n.deaths,s=n.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:s});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("https://api.covidtracking.com/v1/us/daily.json");case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){return{confirmed:e.positive,recovered:e.recovered,deaths:e.death,date:e.dateChecked}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(T,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),J=a(80),R=a.n(J),z=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,l=Object(r.useState)({}),d=Object(D.a)(l,2),p=d[0],f=d[1];Object(r.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V();case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var m=a?n.a.createElement(S.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"Count",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Covid-19 representation in ".concat(u," \ud83d\udcca"),fontSize:16}}}):null,v=p[0]?n.a.createElement(S.Line,{data:{labels:p.map((function(e){var t=e.date;return new Date(t).toLocaleDateString()})),datasets:[{data:p.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:p.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0},{data:p.map((function(e){return e.recovered})),label:"Recovered",borderColor:"green",backgroundColor:"rgba(0, 255, 0, 0.5)",fill:!0}]}}):null;return n.a.createElement("div",{className:R.a.container},u?m:v)},B=a(234),L=a(232),P=a(81),G=a.n(P),Y=function(e){var t=e.handleCountryChange,a=Object(r.useState)([]),c=Object(D.a)(a,2),o=c[0],u=c[1];return Object(r.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,A();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),n.a.createElement(B.a,{className:G.a.formControl},n.a.createElement(L.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},n.a.createElement("option",{value:""},"\xa0\ud83c\udf0e Global"),o.map((function(e,t){return n.a.createElement("option",{key:t,value:e},e," ")}))))},M=a(43),Z=a.n(M),q=a(82),F=a.n(q),H=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(s.a)(i.a.mark((function t(a){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U(a);case 2:r=t.sent,e.setState({data:r,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return n.a.createElement("div",{className:Z.a.container},n.a.createElement("h3",null,"COVID-19 Tracker"),n.a.createElement("img",{className:Z.a.img,src:F.a,alt:"COVID19"}),n.a.createElement(Y,{handleCountryChange:this.handleCountryChange}),n.a.createElement(j,{data:t}),n.a.createElement(z,{data:t,country:a}),n.a.createElement("footer",null,"Copyright \xa9\ufe0f 2021\xa0",n.a.createElement("a",{href:"https://www.linkedin.com/in/chrisbin-thomas-334744195"},"Chrisbin Thomas")))}}]),a}(r.Component);o.a.render(n.a.createElement(H,null),document.getElementById("root"))},43:function(e,t,a){e.exports={container:"App_container__al5x7",img:"App_img__7g3yp"}},75:function(e,t,a){e.exports={card:"Card_card__3J6fh"}},80:function(e,t,a){e.exports={container:"Chart_container__CvzYe"}},81:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__3sOij"}},82:function(e,t,a){e.exports=a.p+"static/media/COVID-timeline.c19dae32.gif"},86:function(e,t,a){e.exports=a(211)}},[[86,1,2]]]);
//# sourceMappingURL=main.f2168bfc.chunk.js.map