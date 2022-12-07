import{R as e,L as _,O as h,r as c,s as E,a as x,B as y,b as I,c as p}from"./vendor.1ff8cf9e.js";const S=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerpolicy&&(n.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?n.credentials="include":a.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(a){if(a.ep)return;a.ep=!0;const n=o(a);fetch(a.href,n)}};S();function B(){return e.createElement("div",null,e.createElement("nav",{style:{borderBottom:"solid 1px",paddingBottom:"1rem"}},e.createElement(_,{to:"/pages/Save"},"Scan")," |"," ",e.createElement(_,{to:"/pages/FileBrowser"},"Go to library")),e.createElement(h,null))}const N="_saveContainer_1kdvv_1",w="_uploadedImage_1kdvv_6",T="_scanButton_1kdvv_12",F="_outputText_1kdvv_28";var f={saveContainer:N,uploadedImage:w,scanButton:T,outputText:F};const k="_uploadContainer_1ooam_1",L="_inputBox_1ooam_6",b="_input_1ooam_6",C="_inputText_1ooam_15",P="_inputImage_1ooam_19",$="_uploadedImage_1ooam_23";var i={uploadContainer:k,inputBox:L,input:b,inputText:C,inputImage:P,uploadedImage:$};function D({onUpload:r}){const[t,o]=c.exports.useState(null),s=a=>{if(!a.target.files||a.target.files.length===0)return;const n=a.target.files[0],l=URL.createObjectURL(n);o(l),r(l)};return e.createElement("div",{className:i.uploadContainer},t?e.createElement("img",{className:i.uploadedImage,src:t}):e.createElement("label",{className:i.inputBox},e.createElement("input",{className:i.input,type:"file",accept:"image/*",onChange:s}),e.createElement("h1",{className:i.inputText},"Import a document"),e.createElement("img",{className:i.inputImage,src:"../src/assets/empty-folder-farbig.png"})))}const O="_saveContainer_14d6e_1",R="_filenameInput_14d6e_5",j="_saveButton_14d6e_16";var d={saveContainer:O,filenameInput:R,saveButton:j};function A(){const[r,t]=c.exports.useState(!1);return{isLoading:r,postDocument:async s=>{t(!0),await fetch("https://json-server.machens.dev/docs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}),t(!1)}}}function U({text:r}){const[t,o]=c.exports.useState(""),{isLoading:s,postDocument:a}=A(),n=async l=>{l.preventDefault(),await a({title:t,text:r}),o("")};return e.createElement("form",{className:d.saveContainer,onSubmit:n},e.createElement("input",{type:"text",className:d.filenameInput,placeholder:"Enter file name",value:t,onChange:l=>o(l.target.value)}),e.createElement("button",{className:d.saveButton,disabled:!t||s},"Save file"))}const z="_statusAndProgress_1xahy_1";var q={statusAndProgress:z};function v({status:r,progress:t}){return e.createElement("aside",{className:q.statusAndProgress},r,e.createElement("progress",{value:t*100,max:100}))}async function M(r,t){return(await E.recognize(r,"eng",{logger:s=>{t({progress:s.progress,status:s.status})}})).data.text}function Q(){const[r,t]=c.exports.useState(null),[o,s]=c.exports.useState(null);return{text:r,progress:o,recognize:n=>{n&&M(n,s).then(t)}}}function G(){const[r,t]=c.exports.useState(null),{text:o,progress:s,recognize:a}=Q();let n;return o&&s?n=e.createElement(e.Fragment,null,e.createElement(v,{progress:s.progress*100,status:s.status}),e.createElement("p",{className:f.outputText},o),e.createElement(U,{text:o})):s?n=e.createElement(v,{progress:s.progress*100,status:s.status}):r&&(n=e.createElement("button",{className:f.scanButton,onClick:()=>{r&&a(r)}},"Scan")),e.createElement("div",{className:f.saveContainer},e.createElement(D,{onUpload:t}),n)}async function J(){const t=await(await fetch("https://json-server.machens.dev/docs")).json();return console.log(t),t}const K="_fileList_1p2k8_1",H="_filePreview_1p2k8_6",V="_fileIcon_1p2k8_14",W="_linkToFile_1p2k8_18";var m={fileList:K,filePreview:H,fileIcon:V,linkToFile:W};const X="_searchField_x28pu_1",Y="_searchButton_x28pu_11",Z="_fileList_x28pu_23",ee="_filePreview_x28pu_28",te="_fileIcon_x28pu_36",ne="_linkToFile_x28pu_40";var u={searchField:X,searchButton:Y,fileList:Z,filePreview:ee,fileIcon:te,linkToFile:ne};function se(){const[r,t]=c.exports.useState(""),[o,s]=c.exports.useState(null),a=async n=>{n.preventDefault();const g=await(await fetch(`https://json-server.machens.dev/docs/?title=${r}`)).json();s(g)};return e.createElement(e.Fragment,null,e.createElement("form",{onSubmit:a},e.createElement("input",{type:"text",className:u.searchField,onChange:n=>t(n.target.value)}),e.createElement("button",{className:u.searchButton},"Search library")),e.createElement("div",{className:u.fileList},o==null?void 0:o.map(n=>e.createElement("article",{className:u.filePreview,key:n.id},e.createElement("img",{className:u.fileIcon,src:"../src/assets/page.png"}),e.createElement("a",{className:u.linkToFile,href:"#"},n.title)))))}function ae(){function r(){const[t,o]=c.exports.useState(null);return c.exports.useEffect(()=>{(async()=>{await J().then(o)})()},[]),t==null||t.sort(function(s,a){return s.title<a.title?-1:s.title>a.title?1:0}),e.createElement(e.Fragment,null,e.createElement(se,null),e.createElement("div",{className:m.fileList},!t&&e.createElement("span",null,"is loading"),t==null?void 0:t.map(s=>e.createElement("article",{className:m.filePreview,key:s.id},e.createElement("img",{className:m.fileIcon,src:"../src/assets/page.png"}),e.createElement("a",{className:m.linkToFile,href:"#"},s.title)))))}return e.createElement(r,null)}x.render(e.createElement(y,null,e.createElement(I,null,e.createElement(p,{path:"/",element:e.createElement(B,null)},e.createElement(p,{path:"/pages/Save/",element:e.createElement(G,null)}),e.createElement(p,{path:"/pages/FileBrowser/",element:e.createElement(ae,null)})))),document.querySelector("#root"));
