(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"7g6c":function(e,a,t){"use strict";t.d(a,"b",(function(){return r})),t.d(a,"a",(function(){return s}));var n=t("q1tI"),l=t.n(n),i=t("vOnD").b.div.withConfig({displayName:"LightBox__LightboxStyles",componentId:"sc-1tu7b1u-0"})(["justify-content:center;align-items:center;z-index:48;height:100vh;width:100vw;background-color:rgb(0,0,0);position:fixed;.modal-container{width:100%;z-index:49;}.lightbox__switch{display:grid;place-content:center center;z-index:50;position:absolute;padding:1rem;top:0.5rem;right:0.5rem;border-radius:50%;transform:rotate(45deg);color:var(--rose-light);line-height:0.5;font-size:3rem;}"]),r=function(e){e.style.maxHeight="100%",e.style.maxWidth="100%",e.style.objectFit="contain",document.querySelector(".lightbox__container").appendChild(e)};function s(e){var a=e.isLightBoxOpen,t=e.setLightBox;return l.a.createElement(i,{className:"lightbox",style:{display:a?"flex":"none"}},l.a.createElement("div",{className:"lightbox__switch",onClick:function(e){e.currentTarget.nextSibling.innerHTML="",t(!1)}},"+"),l.a.createElement("div",{className:"lightbox__container"}))}},"7oih":function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t("q1tI"),l=t.n(n),i=t("vOnD"),r=t("aQU0"),s=t("3EhG"),c=i.b.div.withConfig({displayName:"Layout__SiteBorderStyles",componentId:"g5jzo7-0"})(["position:relative;width:100%;margin:0 auto;@media (min-width:1100px){max-width:1440px;padding:0 100px;}"]);function o(e){var a=e.greenBg,t=e.children;return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,{greenBg:a}),l.a.createElement(s.a,null),l.a.createElement(c,null,t))}},"8mJZ":function(e,a,t){e.exports=t.p+"static/004_fuki-5ac68dadeb5308936d10246d3c42cb4e.mp4"},B0W0:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t("q1tI"),l=t.n(n),i=t("Wbzz"),r=t("9eSz"),s=t.n(r),c=t("vOnD").b.nav.withConfig({displayName:"NavSubpage__NavStyles",componentId:"fjthg9-0"})(["z-index:39;padding:20px;.btns-lang{display:flex;justify-content:flex-end;}.btn-lang{font-family:MonetaSans;}.home{display:flex;justify-content:flex-end;}"]);function o(){var e=Object(i.c)("1567866372");return l.a.createElement(c,null,l.a.createElement("div",{className:"btns-lang"},l.a.createElement("button",{type:"button",className:"btn-lang p-2",title:"Télécharger le PDF",href:"#"},"FR")),l.a.createElement("div",{className:"home"},l.a.createElement(i.a,{to:"/",className:"grid grid-cols-1 grid-rows-1 text-brown place-content-center place-items-center"},l.a.createElement(s.a,{fluid:e.fileName.childImageSharp.fluid,style:{width:"40vw",maxWidth:"250px"},className:"col-span-full row-span-full"}),l.a.createElement("h6",{className:"col-span-full row-span-full text-1xl sm:text-2xl xl:text-3xl pb-5 pr-8 sm:pr-6 md:pb-8 md:pr-10 uppercase"},"Home"))))}},JsHo:function(e,a,t){e.exports=t.p+"static/003_fuki-f86b76ceea424c65c531c3012c77bd53.mp4"},OOx4:function(e,a,t){e.exports=t.p+"static/001_fuki-0d204bfa623758df02d38b6e39da4538.mp4"},X0rG:function(e,a,t){e.exports=t.p+"static/000_fuki-e19d2e2299e71d48246261af2bc098e6.mp4"},du22:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return S}));var n=t("q1tI"),l=t.n(n),i=t("Wbzz"),r=t("9eSz"),s=t.n(r),c=t("pjWk"),o=t("X0rG"),m=t.n(o),u=t("OOx4"),d=t.n(u),p=t("jujx"),h=t.n(p),f=t("JsHo"),g=t.n(f),b=t("8mJZ"),v=t.n(b),x=t("7oih"),E=t("B0W0"),w=t("vOnD"),y=t("7g6c"),N=w.b.div.withConfig({displayName:"fuki__ImageContainer",componentId:"xxvebw-0"})(["overflow:hidden;max-width:90vw;margin:auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;"]);function S(){var e=Object(i.c)("3061825572").allFile.edges,a=Object(n.useState)(!1),t=a[0],r=a[1],o=function(e){var a=e.target.cloneNode(!0);Object(y.b)(a),r(!0)};return Object(n.useEffect)((function(){if(window.innerWidth<=640){var e=document.querySelector(".lightbox-able").querySelectorAll("img, video");return e.forEach((function(e){e.addEventListener("click",o)})),function(){e.forEach((function(e){e.removeEventListener("click",o)}))}}}),[]),l.a.createElement(x.a,null,l.a.createElement(y.a,{isLightBoxOpen:t,setLightBox:r}),l.a.createElement(E.a,null),l.a.createElement(N,{className:"lightbox-able"},l.a.createElement("div",{className:"relative mb-24"},l.a.createElement("div",{className:"relative"},l.a.createElement(c.a,{style:{maxHeight:"80vh"},src:m.a}),l.a.createElement("div",{className:"absolute w-1/4 bottom-2 left-2 lg:bottom-8 lg:left-4"},l.a.createElement(s.a,{fluid:e[0].node.childImageSharp.fluid,alt:e[0].node.base.split(".")[0],imgStyle:{objectFit:"contain",maxHeight:"40vh"}}))),l.a.createElement("div",{className:"lg:max-w-1/2 lg:absolute lg:top-20 lg:right-4 bg-white lg:px-4 py-4 text-xs"},l.a.createElement("p",{className:"mb-4"},"En voiture à toute vitesse, arrêt abrupt en remarquant un amoncellement de majestueuses et gigantesques feuilles d'une plante qui m'est alors inconnue. Une surprenante apparition nichée en bordure de route du lac Labelle dans les Laurentides. Monte en nous l'envie immédiate de la posséder, mais je réalise rapidement qu'elle résiste à toute domestication; même en plongeant son tronc coupé dans un vase d'eau, sa feuille s'affaisse rapidement."),l.a.createElement("p",{className:"mb-4"},"J’identifie faussement d'abord la plante pour un Ligularia tussilaginea ‘Gigantea’ mais après une année passée dans l'erreur, je remarque que celle-ci ne fleurit pas et que ses feuilles sont plus friables et d'apparence mate. Je découvre finalement qu'il s'agit de Pétasites japonicus ‘Gigantea’, aussi appelé Fuki. Elle aurait été introduite au Canada en Colombie-Britannique par des immigrants japonais. (Pojar, Jim; MacKinnon, Andy (1994). Plants of the Pacific Northwest Coast.)"),l.a.createElement("p",{className:"mb-4"},"J'aimerais savoir par quel heureux parcours elle s'est retrouvée là, aux abords de route du lac Labelle. Par quel hasard gracie-t-elle ce paysage « typique » fait de pins et de plantes indigènes? Bien que parfois vendue en centres horticoles, elle est ici considérée comme une plante invasive. Mes recherches à son sujet sont ponctuées de mises en garde : Attention! Ne laissez pas cette séduisante intruse envahir nos milieux sauvages."),l.a.createElement("p",{className:"mb-4"},"Et pourtant, elle semble échapper à la catégorisation de « mauvaise herbe ». Un heureux effet de son attrait esthétique? Ce n'est probablement pas dû à ses propriétés médicinales, peu connues de ce côté du globe. Ni même à sa place dans les traditions culinaires et folkloriques du Japon. On imagine tout un petit peuple, les Koropokkuru, vivant à l'abri de ce géant feuillage."),l.a.createElement("p",{className:"font-bold mb-4 text-center"},"I love the idea of this plant, out of place, misplaced, becoming shelter, becoming home."),l.a.createElement("p",null,"Peut-être que cette talle de Fuki, en bordure de route du lac Labelle, continuera de proliférer."),l.a.createElement("p",null,"Je pense avec malaise à mon corps colonisateur, est-ce que ma présence peut être autre qu'envahissante?"),l.a.createElement("p",null,"Je pense avec empathie à mon corps migrant, obsédé par l'idée de trouver racine, de se sentir chez soi."),l.a.createElement("p",null,"Je pense, peut-être les réponses se trouvent-elle dans l'ambiguïté d'un fuki, aperçu en bordure de route du lac Labelle dans les Laurentides."))),l.a.createElement("div",{className:"mr-auto ml-12 max-w-1/4 my-24"},l.a.createElement(s.a,{fluid:e[1].node.childImageSharp.fluid,alt:e[1].node.base.split(".")[0],imgStyle:{objectFit:"contain",maxHeight:"40vh"}})),l.a.createElement("div",{className:"container flex justify-between items-center my-24 text-sm"},l.a.createElement("div",{className:"w-1/2"},l.a.createElement("p",null,"Attention ! C'est une plante"," ",l.a.createElement("a",{href:"https://www.lapresse.ca/maison/immobilier/conseils/200707/13/01-870610-ou-trouver-des-petasites-japonais-geants.php",target:"_blank",rel:"noreferrer",className:"text-green hover:underline"},"très envahissante"," "),": il n'en faut qu'un seul plant pour couvrir une vaste surface. Aussi, ne libérez pas cette plante dans la nature, car elle étouffe la végétation locale.")),l.a.createElement("div",{className:"w-1/3 mr-6"},l.a.createElement(s.a,{fluid:e[2].node.childImageSharp.fluid,alt:e[2].node.base.split(".")[0],imgStyle:{objectFit:"contain"}}))),l.a.createElement("div",{className:"ml-auto mr-0 max-w-1/4 my-24"},l.a.createElement(s.a,{fluid:e[3].node.childImageSharp.fluid,alt:e[3].node.base.split(".")[0],imgStyle:{objectFit:"contain"}})),l.a.createElement("div",{className:"container w-1/2 relative my-24"},l.a.createElement("div",{className:"container"},l.a.createElement(s.a,{fluid:e[4].node.childImageSharp.fluid,alt:e[4].node.base.split(".")[0],imgStyle:{objectFit:"contain",maxWidth:"75vw",maxHeight:"90vh"}})),l.a.createElement("div",{className:"w-1/3 absolute top-12 md:top-20 right-8 md:right-16"},l.a.createElement(s.a,{fluid:e[5].node.childImageSharp.fluid,alt:e[5].node.base.split(".")[0],imgStyle:{objectFit:"contain",maxWidth:"40vw"}}))),l.a.createElement("div",{className:"md:w-3/4 lg:w-5/12 max-h-90vh relative mx-auto my-24"},l.a.createElement("div",{className:"container max-h-90vh"},l.a.createElement(s.a,{fluid:e[6].node.childImageSharp.fluid,alt:e[6].node.base.split(".")[0],imgStyle:{objectFit:"contain",maxHeight:"90vh"}})),l.a.createElement("div",{className:"absolute m-auto h-1/3 w-11/12 inset-0"},l.a.createElement(c.a,{src:d.a}))),l.a.createElement("div",{className:" max-w-3/10 my-24"},l.a.createElement(c.a,{src:h.a})),l.a.createElement("div",{className:"ml-auto mr-0 max-w-2/5 my-24"},l.a.createElement(c.a,{src:g.a})),l.a.createElement("div",{className:"mr-auto ml-12 max-w-1/4 my-24"},l.a.createElement(s.a,{fluid:e[7].node.childImageSharp.fluid,alt:e[7].node.base.split(".")[0],imgStyle:{objectFit:"contain",maxHeight:"40vh"}}),l.a.createElement("p",null,"By",l.a.createElement("a",{href:"https://commons.wikimedia.org/w/index.php?curid=79715189",target:"_blank",rel:"noreferrer",className:"text-green hover:underline"}," ","Matsuura Takeshiro")),l.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Korpokkur",target:"_blank",rel:"noreferrer",className:"text-green hover:underline"},l.a.createElement("p",null,"Korpokkur"))),l.a.createElement("div",{className:"container mx-auto max-h-90vh"},l.a.createElement(s.a,{fluid:e[8].node.childImageSharp.fluid,alt:e[8].node.base.split(".")[0],imgStyle:{objectFit:"contain",maxHeight:"90vh"}})),l.a.createElement("div",{className:"container w-full mx-auto relative my-24"},l.a.createElement("div",{className:"container relative mx-auto max-w-3/4"},l.a.createElement(s.a,{fluid:e[9].node.childImageSharp.fluid,alt:e[9].node.base.split(".")[0],className:"container",imgStyle:{objectFit:"contain",maxWidth:"75vw"}}),l.a.createElement("div",{className:"container absolute max-w-1/4 top-6 md:top-12 right-0"},l.a.createElement(c.a,{style:{maxWidth:"20vw"},src:v.a}))),l.a.createElement("div",{className:"container absolute max-w-3/10 bottom-2 md:bottom-4 ml-0"},l.a.createElement(s.a,{fluid:e[10].node.childImageSharp.fluid,alt:e[10].node.base.split(".")[0],imgStyle:{objectFit:"contain",width:"30vw"}})))))}},jujx:function(e,a,t){e.exports=t.p+"static/002_fuki-ab083845bea0b7da1a869e5398a76ab8.mp4"},pjWk:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t("q1tI"),l=t.n(n);function i(e){var a=e.className,t=e.style,n=e.src;return l.a.createElement("div",null,l.a.createElement("video",{className:a||"",style:t,loop:!0,autoPlay:"autoplay",muted:!0},l.a.createElement("source",{src:n,type:"video/mp4"})))}}}]);
//# sourceMappingURL=component---src-pages-fuki-js-5412db4cd6a87f627be4.js.map