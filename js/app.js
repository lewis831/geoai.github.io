var networkInteractiveAnimation=function(){function e(){var e,a;e=document.getElementById("panel-header"),d=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,1e4),d.position.z=120,l=new THREE.Scene,l.background=new THREE.Color(5730955),l.fog=new THREE.Fog(0,.15,1e3),s=new THREE.CanvasRenderer,s.setPixelRatio(window.devicePixelRatio),s.setSize(window.innerWidth,window.innerHeight),e.appendChild(s.domElement);for(var c=2*Math.PI,r=new THREE.SpriteCanvasMaterial({color:14937079,program:function(e){e.beginPath(),e.arc(0,0,.5,0,c,!0),e.fill()}}),u=new THREE.Geometry,m=0;m<360;m++)a=new THREE.Sprite(r),a.position.x=2*Math.random()-1,a.position.y=2*Math.random()-1,a.position.z=2*Math.random()-1,a.position.normalize(),a.position.multiplyScalar(10*Math.random()+450),a.scale.x=a.scale.y=10,l.add(a),u.vertices.push(a.position);var g=new THREE.Line(u,new THREE.LineBasicMaterial({color:16777215,opacity:.5}));l.add(g),document.addEventListener("mousemove",t,!1),document.addEventListener("touchstart",o,!1),document.addEventListener("touchmove",i,!1),window.addEventListener("resize",n,!1)}function n(){m=window.innerWidth/2,g=window.innerHeight/2,d.aspect=window.innerWidth/window.innerHeight,d.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)}function t(e){r=e.clientX-m,u=e.clientY-g}function o(e){e.touches.length>1&&(e.preventDefault(),r=e.touches[0].pageX-m,u=e.touches[0].pageY-g)}function i(e){1==e.touches.length&&(e.preventDefault(),r=e.touches[0].pageX-m,u=e.touches[0].pageY-g)}function a(){requestAnimationFrame(a),c()}function c(){d.position.x+=.05*(r-d.position.x),d.position.y+=.05*(-u+200-d.position.y),d.lookAt(l.position),s.render(l,d)}var d,l,s,r=0,u=0,m=window.innerWidth/2,g=window.innerHeight/2;e(),a(),console.log("Network app loaded.")},headerHandler=function(){var e=document.getElementById("header");e.offsetTop},contactButtonHandler=function(){var e=document.getElementById("contactButton");e.addEventListener("click",function(e){window.location.href="mailto:info@qgstechnologies.com"}),console.log("Contact Handler loaded.")},navHandler=function(){var e=document.getElementById("navHome"),n=document.getElementById("navInfo"),t=document.getElementById("navSolu"),o=document.getElementById("navCont"),i=document.getElementById("panel-1"),a=document.getElementById("panel-2"),c=document.getElementById("panel-3"),d=document.getElementById("panel-4"),l=document.getElementById("menIcon"),s=document.getElementById("navMenu"),r=function(e){i.className="",a.className="",c.className="",d.className="",e.classList.add("active"),console.log("Click event. "+e)};e.onclick=function(){r(i),s.classList.toggle("off")},n.onclick=function(){r(a),s.classList.toggle("off")},t.onclick=function(){r(c),s.classList.toggle("off")},o.onclick=function(){r(d),s.classList.toggle("off")},l.onclick=function(){s.classList.toggle("off")},console.log("Navigation handler loaded.")};