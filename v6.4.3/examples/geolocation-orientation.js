(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{281:function(e,t,n){"use strict";n.r(t);var a=n(167),o=n(35),i=n(3),r=n(9),d=n(80),c=n(5),s=n(2),g=n(4),u=new s.a({center:Object(g.g)([5.8713,45.6452]),zoom:19}),l=new c.a({source:new r.b}),m=new i.a({layers:[l],target:"map",view:u}),p=document.getElementById("geolocation_marker"),h=new d.a({positioning:"center-center",element:p,stopEvent:!1});m.addOverlay(h);var v=new o.a([],"XYZM"),w=new a.a({projection:u.getProjection(),trackingOptions:{maximumAge:1e4,enableHighAccuracy:!0,timeout:6e5}}),f=500;w.on("change",(function(){var e=w.getPosition(),t=w.getAccuracy(),n=w.getHeading()||0,a=w.getSpeed()||0;!function(e,t,n,a){var o=e[0],i=e[1],r=v.getCoordinates(),d=r[r.length-1],c=d&&d[2];if(c){var s=t-(c%(2*Math.PI)+2*Math.PI)%(2*Math.PI);if(Math.abs(s)>Math.PI)s=-(s>=0?1:-1)*(2*Math.PI-Math.abs(s));t=c+s}v.appendCoordinate([o,i,t,n]),v.setCoordinates(v.getCoordinates().slice(-20)),p.src=t&&a?"data/geolocation_marker_heading.png":"data/geolocation_marker.png"}(e,n,Date.now(),a);var o=v.getCoordinates(),i=o.length;i>=2&&(f=(o[i-1][3]-o[0][3])/(i-1));var r,d=["Position: "+e[0].toFixed(2)+", "+e[1].toFixed(2),"Accuracy: "+t,"Heading: "+Math.round((r=n,360*r/(2*Math.PI)))+"&deg;","Speed: "+(3.6*a).toFixed(1)+" km/h","Delta: "+Math.round(f)+"ms"].join("<br />");document.getElementById("info").innerHTML=d})),w.on("error",(function(){alert("geolocation error")}));var M=0;function b(){var e=Date.now()-1.5*f;e=Math.max(e,M),M=e;var t,n,a,o,i=v.getCoordinateAtM(e,!0);i&&(u.setCenter((t=i,n=-i[2],a=u.getResolution(),o=m.getSize()[1],[t[0]-Math.sin(n)*o*a*1/4,t[1]+Math.cos(n)*o*a*1/4])),u.setRotation(-i[2]),h.setPosition(i),m.render())}var y,I=document.getElementById("geolocate");I.addEventListener("click",(function(){w.setTracking(!0),l.on("postrender",b),m.render(),C()}),!1);var P=new XMLHttpRequest;P.open("GET","data/geolocation-orientation.json"),P.onload=function(){y=JSON.parse(P.responseText).data},P.send();var k=document.getElementById("simulate");function E(e){var t=e.coords;w.set("accuracy",t.accuracy),w.set("heading",t.heading*Math.PI*2/360);var n=Object(g.g)([t.longitude,t.latitude]);w.set("position",n),w.set("speed",t.speed),w.changed()}function C(){I.disabled="disabled",k.disabled="disabled"}k.addEventListener("click",(function(){var e=y,t=e.shift();E(t);var n=t.timestamp;!function t(){var a=e.shift();if(a){var o=a.timestamp;E(a),window.setTimeout((function(){n=o,t()}),(o-n)/.5)}}(),l.on("postrender",b),m.render(),C()}),!1)}},[[281,0]]]);
//# sourceMappingURL=geolocation-orientation.js.map