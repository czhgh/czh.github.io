(function(window){var svgSprite='<svg><symbol id="icon-fangzi" viewBox="0 0 1024 1024"><path d="M967.242322 547.307134 554.095747 138.604778c-14.622022-14.462387-38.406728-14.462387-53.020564 0L87.933725 547.307134c-7.359618 7.27673-7.423063 19.148106-0.14224 26.507724 7.28594 7.359618 18.244526 7.432273 25.604144 0.146333l87.887676-87.782276L201.283306 832.449359c0 19.386536 19.455097 30.489408 43.757596 30.489408l168.712493 0c20.380166 0 31.076786-9.848299 31.076786-30.489408L444.830181 626.473171c9.209756-1.583055 5.522784-7.082302 6.415107-7.082302l145.253198 0c0.155543 9.209756-1.242294 4.866844-1.242294 6.138814L595.256192 832.449359c0 19.386536 19.146059 30.489408 43.447535 30.489408l168.712493 0c20.380166 0 31.385824-9.848299 31.385824-30.489408L838.802044 474.628858l101.239775 99.332333c3.656273 3.615341 8.835226 5.418406 13.599739 5.418406 4.827959 0 9.868765-1.858324 13.534248-5.564739C974.458677 566.455239 974.60194 554.583864 967.242322 547.307134zM800.940738 825.075415 638.70475 825.075415c-1.697665 0 2.601244 3.107781-6.608511 2.815115L632.096239 625.530706c0-24.02723-11.42726-44.001143-30.883381-44.001143L451.245288 581.529563c-20.773116 0-44.277436 23.790846-44.277436 44.001143l0 199.545732L245.040902 825.076438c-1.697665 0 3.314489 3.107781-5.895267 2.815115L239.145635 449.115787l286.847054-283.857976 274.948049 272.281313L800.940738 825.075415z"  ></path></symbol><symbol id="icon-fangdajing" viewBox="0 0 1024 1024"><path d="M780.544 790.528a422.464 422.464 0 1 0-586.944-607.744 422.464 422.464 0 0 0 586.88 607.744z m44.416 46.08A486.464 486.464 0 1 1 149.12 136.704a486.464 486.464 0 0 1 675.84 699.904z" fill="#333333" ></path><path d="M800.64 844.544a32 32 0 1 1 46.08-44.48l161.92 167.68a32 32 0 0 1-46.08 44.48l-161.92-167.68z" fill="#333333" ></path><path d="M673.024 456.576a32 32 0 1 1 0 64H323.328a32 32 0 0 1 0-64h349.696z" fill="#333333" ></path><path d="M530.176 663.424a32 32 0 1 1-64 0V313.728a32 32 0 1 1 64 0v349.696z" fill="#333333" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)