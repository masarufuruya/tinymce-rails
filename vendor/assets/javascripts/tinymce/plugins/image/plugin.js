tinymce.PluginManager.add("image",function(e){function t(e,t){function n(e,n){r.parentNode&&r.parentNode.removeChild(r),t({width:e,height:n})}var r=document.createElement("img");r.onload=function(){n(Math.max(r.width,r.clientWidth),Math.max(r.height,r.clientHeight))},r.onerror=function(){n()};var i=r.style;i.visibility="hidden",i.position="fixed",i.bottom=i.left=0,i.width=i.height="auto",document.body.appendChild(r),r.src=e}function n(e,t,n){function r(e,n){return n=n||[],tinymce.each(e,function(e){var i={text:e.text||e.title};e.menu?i.menu=r(e.menu):(i.value=e.value,t(i)),n.push(i)}),n}return r(e,n||[])}function r(t){return function(){var n=e.settings.image_list;"string"==typeof n?tinymce.util.XHR.send({url:n,success:function(e){t(tinymce.util.JSON.parse(e))}}):"function"==typeof n?n(t):t(n)}}function i(r){function i(){var e,t,n,r;e=f.find("#width")[0],t=f.find("#height")[0],e&&t&&(n=e.value(),r=t.value(),f.find("#constrain")[0].checked()&&m&&g&&n&&r&&(m!=n?(r=Math.round(n/m*r),isNaN(r)||t.value(r)):(n=Math.round(r/g*n),isNaN(n)||e.value(n))),m=n,g=r)}function o(){function t(t){function n(){t.onload=t.onerror=null,e.selection&&(e.selection.select(t),e.nodeChanged())}t.onload=function(){b.width||b.height||!x||C.setAttribs(t,{width:t.clientWidth,height:t.clientHeight}),n()},t.onerror=n}var n,r;c(),i(),b=tinymce.extend(b,f.toJSON()),b.alt||(b.alt=""),b.title||(b.title=""),""===b.width&&(b.width=null),""===b.height&&(b.height=null),b.style||(b.style=null),b={src:b.src,alt:b.alt,title:b.title,width:b.width,height:b.height,style:b.style,caption:b.caption,"class":b["class"]},e.undoManager.transact(function(){function i(t){return e.schema.getTextBlockElements()[t.nodeName]}if(!b.src)return void(p&&(C.remove(p),e.focus(),e.nodeChanged()));if(""===b.title&&(b.title=null),p?C.setAttribs(p,b):(b.id="__mcenew",e.focus(),e.selection.setContent(C.createHTML("img",b)),p=C.get("__mcenew"),C.setAttrib(p,"id",null)),e.editorUpload.uploadImagesAuto(),b.caption===!1&&C.is(p.parentNode,"figure.image")&&(n=p.parentNode,C.insertAfter(p,n),C.remove(n)),b.caption!==!0)t(p);else if(!C.is(p.parentNode,"figure.image")){r=p,p=p.cloneNode(!0),n=C.create("figure",{"class":"image"}),n.appendChild(p),n.appendChild(C.create("figcaption",{contentEditable:!0},"Caption")),n.contentEditable=!1;var o=C.getParent(r,i);o?C.split(o,r,n):C.replace(n,r),e.selection.select(n)}})}function a(e){return e&&(e=e.replace(/px$/,"")),e}function s(n){var r,i,o,a=n.meta||{};v&&v.value(e.convertURL(this.value(),"src")),tinymce.each(a,function(e,t){f.find("#"+t).value(e)}),a.width||a.height||(r=e.convertURL(this.value(),"src"),i=e.settings.image_prepend_url,o=new RegExp("^(?:[a-z]+:)?//","i"),i&&!o.test(r)&&r.substring(0,i.length)!==i&&(r=i+r),this.value(r),t(e.documentBaseURI.toAbsolute(this.value()),function(e){e.width&&e.height&&x&&(m=e.width,g=e.height,f.find("#width").value(m),f.find("#height").value(g))}))}function l(e){e.meta=f.toJSON()}function u(e){if(e.margin){var t=e.margin.split(" ");switch(t.length){case 1:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[0],e["margin-bottom"]=e["margin-bottom"]||t[0],e["margin-left"]=e["margin-left"]||t[0];break;case 2:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[1],e["margin-bottom"]=e["margin-bottom"]||t[0],e["margin-left"]=e["margin-left"]||t[1];break;case 3:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[1],e["margin-bottom"]=e["margin-bottom"]||t[2],e["margin-left"]=e["margin-left"]||t[1];break;case 4:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[1],e["margin-bottom"]=e["margin-bottom"]||t[2],e["margin-left"]=e["margin-left"]||t[3]}delete e.margin}return e}function c(){function t(e){return e.length>0&&/^[0-9]+$/.test(e)&&(e+="px"),e}if(e.settings.image_advtab){var n=f.toJSON(),r=C.parseStyle(n.style);r=u(r),n.vspace&&(r["margin-top"]=r["margin-bottom"]=t(n.vspace)),n.hspace&&(r["margin-left"]=r["margin-right"]=t(n.hspace)),n.border&&(r["border-width"]=t(n.border)),f.find("#style").value(C.serializeStyle(C.parseStyle(C.serializeStyle(r))))}}function d(){if(e.settings.image_advtab){var t=f.toJSON(),n=C.parseStyle(t.style);f.find("#vspace").value(""),f.find("#hspace").value(""),n=u(n),(n["margin-top"]&&n["margin-bottom"]||n["margin-right"]&&n["margin-left"])&&(n["margin-top"]===n["margin-bottom"]?f.find("#vspace").value(a(n["margin-top"])):f.find("#vspace").value(""),n["margin-right"]===n["margin-left"]?f.find("#hspace").value(a(n["margin-right"])):f.find("#hspace").value("")),n["border-width"]&&f.find("#border").value(a(n["border-width"])),f.find("#style").value(C.serializeStyle(C.parseStyle(C.serializeStyle(n))))}}var f,p,h,m,g,v,y,b={},C=e.dom,x=e.settings.image_dimensions!==!1;p=e.selection.getNode(),h=C.getParent(p,"figure.image"),h&&(p=C.select("img",h)[0]),p&&("IMG"!=p.nodeName||p.getAttribute("data-mce-object")||p.getAttribute("data-mce-placeholder"))&&(p=null),p&&(m=C.getAttrib(p,"width"),g=C.getAttrib(p,"height"),b={src:C.getAttrib(p,"src"),alt:C.getAttrib(p,"alt"),title:C.getAttrib(p,"title"),"class":C.getAttrib(p,"class"),width:m,height:g,caption:!!h}),r&&(v={type:"listbox",label:"Image list",values:n(r,function(t){t.value=e.convertURL(t.value||t.url,"src")},[{text:"None",value:""}]),value:b.src&&e.convertURL(b.src,"src"),onselect:function(e){var t=f.find("#alt");(!t.value()||e.lastControl&&t.value()==e.lastControl.text())&&t.value(e.control.text()),f.find("#src").value(e.control.value()).fire("change")},onPostRender:function(){v=this}}),e.settings.image_class_list&&(y={name:"class",type:"listbox",label:"Class",values:n(e.settings.image_class_list,function(t){t.value&&(t.textStyle=function(){return e.formatter.getCssText({inline:"img",classes:[t.value]})})})});var w=[{name:"src",type:"filepicker",filetype:"image",label:"Source",autofocus:!0,onchange:s,onbeforecall:l},v];e.settings.image_description!==!1&&w.push({name:"alt",type:"textbox",label:"Image description"}),e.settings.image_title&&w.push({name:"title",type:"textbox",label:"Image Title"}),x&&w.push({type:"container",label:"Dimensions",layout:"flex",direction:"row",align:"center",spacing:5,items:[{name:"width",type:"textbox",maxLength:5,size:3,onchange:i,ariaLabel:"Width"},{type:"label",text:"x"},{name:"height",type:"textbox",maxLength:5,size:3,onchange:i,ariaLabel:"Height"},{name:"constrain",type:"checkbox",checked:!0,text:"Constrain proportions"}]}),w.push(y),e.settings.image_caption&&tinymce.Env.ceFalse&&w.push({name:"caption",type:"checkbox",label:"Caption"}),e.settings.image_advtab?(p&&(p.style.marginLeft&&p.style.marginRight&&p.style.marginLeft===p.style.marginRight&&(b.hspace=a(p.style.marginLeft)),p.style.marginTop&&p.style.marginBottom&&p.style.marginTop===p.style.marginBottom&&(b.vspace=a(p.style.marginTop)),p.style.borderWidth&&(b.border=a(p.style.borderWidth)),b.style=e.dom.serializeStyle(e.dom.parseStyle(e.dom.getAttrib(p,"style")))),f=e.windowManager.open({title:"Insert/edit image",data:b,bodyType:"tabpanel",body:[{title:"General",type:"form",items:w},{title:"Advanced",type:"form",pack:"start",items:[{label:"Style",name:"style",type:"textbox",onchange:d},{type:"form",layout:"grid",packV:"start",columns:2,padding:0,alignH:["left","right"],defaults:{type:"textbox",maxWidth:50,onchange:c},items:[{label:"Vertical space",name:"vspace"},{label:"Horizontal space",name:"hspace"},{label:"Border",name:"border"}]}]}],onSubmit:o})):f=e.windowManager.open({title:"Insert/edit image",data:b,body:w,onSubmit:o})}e.on("preInit",function(){function t(e){var t=e.attr("class");return t&&/\bimage\b/.test(t)}function n(e){return function(n){function r(t){t.attr("contenteditable",e?"true":null)}for(var i,o=n.length;o--;)i=n[o],t(i)&&(i.attr("contenteditable",e?"false":null),tinymce.each(i.getAll("figcaption"),r))}}e.parser.addNodeFilter("figure",n(!0)),e.serializer.addNodeFilter("figure",n(!1))}),e.addButton("image",{icon:"image",tooltip:"Insert/edit image",onclick:r(i),stateSelector:"img:not([data-mce-object],[data-mce-placeholder]),figure.image"}),e.addMenuItem("image",{icon:"image",text:"Image",onclick:r(i),context:"insert",prependToContext:!0}),e.addCommand("mceImage",r(i))});