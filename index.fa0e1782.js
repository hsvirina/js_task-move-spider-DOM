document.addEventListener("click",function(e){if(e.target===document.querySelector(".wall")){var t=document.querySelector(".wall"),c=document.querySelector(".spider"),i=t.clientWidth-c.clientWidth,l=t.clientHeight-c.clientHeight,n=e.offsetX-c.clientWidth/2,o=e.offsetY-c.clientHeight/2;n>i&&(n=i),o>l&&(o=l),n<0&&(n=0),o<0&&(o=0),c.style.left="".concat(n,"px"),c.style.top="".concat(o,"px")}});
//# sourceMappingURL=index.fa0e1782.js.map
