import{r as v,a as O,b as U}from"./vendor-Gm9i_4Ku.js";import{u as I,L as h,N as H,R as W,a as _,B as Y}from"./router-BkBbHDkB.js";import{a as J}from"./utils-NIGUFBhG.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function c(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=c(r);fetch(r.href,o)}})();var D={exports:{}},B={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z=v,V=Symbol.for("react.element"),G=Symbol.for("react.fragment"),K=Object.prototype.hasOwnProperty,Q=Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,X={key:!0,ref:!0,__self:!0,__source:!0};function $(a,s,c){var i,r={},o=null,l=null;c!==void 0&&(o=""+c),s.key!==void 0&&(o=""+s.key),s.ref!==void 0&&(l=s.ref);for(i in s)K.call(s,i)&&!X.hasOwnProperty(i)&&(r[i]=s[i]);if(a&&a.defaultProps)for(i in s=a.defaultProps,s)r[i]===void 0&&(r[i]=s[i]);return{$$typeof:V,type:a,key:o,ref:l,props:r,_owner:Q.current}}B.Fragment=G;B.jsx=$;B.jsxs=$;D.exports=B;var e=D.exports,E={},q=O;E.createRoot=q.createRoot,E.hydrateRoot=q.hydrateRoot;const ee="_navbar_1fnbp_6",ae="_navContainer_1fnbp_16",se="_navBrand_1fnbp_27",te="_brandIcon_1fnbp_43",re="_brandText_1fnbp_48",ne="_navLinks_1fnbp_56",ie="_navLink_1fnbp_56",oe="_active_1fnbp_79",ce="_navAuth_1fnbp_97",le="_authLinks_1fnbp_103",de="_signupBtn_1fnbp_109",me="_userMenu_1fnbp_132",pe="_userInfo_1fnbp_138",he="_userAvatar_1fnbp_144",ge="_avatarPlaceholder_1fnbp_163",ue="_userName_1fnbp_175",xe="_userActions_1fnbp_181",ve="_logoutBtn_1fnbp_187",fe="_mobileMenuBtn_1fnbp_206",be="_hamburger_1fnbp_220",je="_open_1fnbp_254",Ne="_mobileMenu_1fnbp_206",ye="_mobileMenuContent_1fnbp_288",we="_mobileNavLinks_1fnbp_294",_e="_mobileNavLink_1fnbp_294",ke="_mobileAuth_1fnbp_325",ze="_mobileUserMenu_1fnbp_330",Se="_mobileUserInfo_1fnbp_336",Ce="_mobileAuthLinks_1fnbp_345",Ae="_mobileSignupBtn_1fnbp_351",Pe="_mobileLogoutBtn_1fnbp_371",Me="_mobileMenuOverlay_1fnbp_388",n={navbar:ee,navContainer:ae,navBrand:se,brandIcon:te,brandText:re,navLinks:ne,navLink:ie,active:oe,navAuth:ce,authLinks:le,signupBtn:de,userMenu:me,userInfo:pe,userAvatar:he,avatarPlaceholder:ge,userName:ue,userActions:xe,logoutBtn:ve,mobileMenuBtn:fe,hamburger:be,open:je,mobileMenu:Ne,mobileMenuContent:ye,mobileNavLinks:we,mobileNavLink:_e,mobileAuth:ke,mobileUserMenu:ze,mobileUserInfo:Se,mobileAuthLinks:Ce,mobileSignupBtn:Ae,mobileLogoutBtn:Pe,mobileMenuOverlay:Me},Be=({user:a,isAuthenticated:s,onLogout:c})=>{var u,b;const i=I(),[r,o]=v.useState(!1),l=z=>i.pathname===z,x=()=>{c(),o(!1)},g=()=>{o(!r)},d=()=>{o(!1)};return e.jsxs("nav",{className:n.navbar,children:[e.jsxs("div",{className:n.navContainer,children:[e.jsxs(h,{to:"/",className:n.navBrand,onClick:d,children:[e.jsx("span",{className:n.brandIcon,children:"📝"}),e.jsx("span",{className:n.brandText,children:"MERN Blog"})]}),e.jsxs("div",{className:n.navLinks,children:[e.jsx(h,{to:"/",className:`${n.navLink} ${l("/")?n.active:""}`,children:"Home"}),e.jsx(h,{to:"/about",className:`${n.navLink} ${l("/about")?n.active:""}`,children:"About"}),e.jsx(h,{to:"/contact",className:`${n.navLink} ${l("/contact")?n.active:""}`,children:"Contact"})]}),e.jsx("div",{className:n.navAuth,children:s?e.jsxs("div",{className:n.userMenu,children:[e.jsxs("div",{className:n.userInfo,children:[e.jsx("span",{className:n.userAvatar,children:a!=null&&a.avatar?e.jsx("img",{src:a.avatar,alt:a.name}):e.jsx("span",{className:n.avatarPlaceholder,children:((u=a==null?void 0:a.name)==null?void 0:u.charAt(0).toUpperCase())||"U"})}),e.jsxs("span",{className:n.userName,children:["Welcome, ",(a==null?void 0:a.name)||"User"]})]}),e.jsxs("div",{className:n.userActions,children:[e.jsx(h,{to:"/profile",className:`${n.navLink} ${l("/profile")?n.active:""}`,children:"Profile"}),e.jsx(h,{to:"/dashboard",className:`${n.navLink} ${l("/dashboard")?n.active:""}`,children:"Dashboard"}),e.jsx("button",{onClick:x,className:n.logoutBtn,children:"Logout"})]})]}):e.jsxs("div",{className:n.authLinks,children:[e.jsx(h,{to:"/login",className:`${n.navLink} ${l("/login")?n.active:""}`,children:"Login"}),e.jsx(h,{to:"/signup",className:`${n.signupBtn} ${l("/signup")?n.active:""}`,children:"Sign Up"})]})}),e.jsx("button",{className:n.mobileMenuBtn,onClick:g,"aria-label":"Toggle mobile menu",children:e.jsxs("span",{className:`${n.hamburger} ${r?n.open:""}`,children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})})]}),e.jsx("div",{className:`${n.mobileMenu} ${r?n.open:""}`,children:e.jsxs("div",{className:n.mobileMenuContent,children:[e.jsxs("div",{className:n.mobileNavLinks,children:[e.jsx(h,{to:"/",className:`${n.mobileNavLink} ${l("/")?n.active:""}`,onClick:d,children:"Home"}),e.jsx(h,{to:"/about",className:`${n.mobileNavLink} ${l("/about")?n.active:""}`,onClick:d,children:"About"}),e.jsx(h,{to:"/contact",className:`${n.mobileNavLink} ${l("/contact")?n.active:""}`,onClick:d,children:"Contact"})]}),e.jsx("div",{className:n.mobileAuth,children:s?e.jsxs("div",{className:n.mobileUserMenu,children:[e.jsxs("div",{className:n.mobileUserInfo,children:[e.jsx("span",{className:n.userAvatar,children:a!=null&&a.avatar?e.jsx("img",{src:a.avatar,alt:a.name}):e.jsx("span",{className:n.avatarPlaceholder,children:((b=a==null?void 0:a.name)==null?void 0:b.charAt(0).toUpperCase())||"U"})}),e.jsx("span",{className:n.userName,children:(a==null?void 0:a.name)||"User"})]}),e.jsx(h,{to:"/profile",className:`${n.mobileNavLink} ${l("/profile")?n.active:""}`,onClick:d,children:"Profile"}),e.jsx(h,{to:"/dashboard",className:`${n.mobileNavLink} ${l("/dashboard")?n.active:""}`,onClick:d,children:"Dashboard"}),e.jsx("button",{onClick:x,className:n.mobileLogoutBtn,children:"Logout"})]}):e.jsxs("div",{className:n.mobileAuthLinks,children:[e.jsx(h,{to:"/login",className:`${n.mobileNavLink} ${l("/login")?n.active:""}`,onClick:d,children:"Login"}),e.jsx(h,{to:"/signup",className:`${n.mobileSignupBtn} ${l("/signup")?n.active:""}`,onClick:d,children:"Sign Up"})]})})]})}),r&&e.jsx("div",{className:n.mobileMenuOverlay,onClick:d})]})},Le="_hero_1bkw7_6",Te="_heroContainer_1bkw7_15",Ee="_heroContent_1bkw7_23",Ie="_heroText_1bkw7_32",qe="_heroTitle_1bkw7_36",Re="_titleHighlight_1bkw7_44",De="_heroSubtitle_1bkw7_64",$e="_features_1bkw7_73",Fe="_feature_1bkw7_73",Oe="_featureIcon_1bkw7_94",Ue="_heroActions_1bkw7_100",He="_authenticatedActions_1bkw7_104",We="_welcomeMessage_1bkw7_108",Ye="_actionButtons_1bkw7_114",Je="_guestActions_1bkw7_115",Ze="_primaryBtn_1bkw7_121",Ve="_secondaryBtn_1bkw7_158",Ge="_heroVisual_1bkw7_197",Ke="_visualContainer_1bkw7_201",Qe="_blogCard_1bkw7_207",Xe="_cardHeader_1bkw7_241",ea="_cardAvatar_1bkw7_248",aa="_cardMeta_1bkw7_256",sa="_cardAuthor_1bkw7_260",ta="_cardDate_1bkw7_269",ra="_cardTitle_1bkw7_277",na="_cardContent_1bkw7_286",ia="_cardLine_1bkw7_292",oa="_floatingElement_1bkw7_303",ca="_statsSection_1bkw7_327",la="_stat_1bkw7_327",da="_statNumber_1bkw7_349",ma="_statLabel_1bkw7_356",pa="_heroBackground_1bkw7_365",ha="_backgroundShape_1bkw7_375",t={hero:Le,heroContainer:Te,heroContent:Ee,heroText:Ie,heroTitle:qe,titleHighlight:Re,heroSubtitle:De,features:$e,feature:Fe,featureIcon:Oe,heroActions:Ue,authenticatedActions:He,welcomeMessage:We,actionButtons:Ye,guestActions:Je,primaryBtn:Ze,secondaryBtn:Ve,heroVisual:Ge,visualContainer:Ke,blogCard:Qe,cardHeader:Xe,cardAvatar:ea,cardMeta:aa,cardAuthor:sa,cardDate:ta,cardTitle:ra,cardContent:na,cardLine:ia,floatingElement:oa,statsSection:ca,stat:la,statNumber:da,statLabel:ma,heroBackground:pa,backgroundShape:ha},ga=({user:a,isAuthenticated:s})=>e.jsxs("section",{className:t.hero,children:[e.jsxs("div",{className:t.heroContainer,children:[e.jsxs("div",{className:t.heroContent,children:[e.jsxs("div",{className:t.heroText,children:[e.jsxs("h1",{className:t.heroTitle,children:["Welcome to"," ",e.jsx("span",{className:t.titleHighlight,children:"MERN Blog"})]}),e.jsx("p",{className:t.heroSubtitle,children:"A modern, full-stack blogging platform built with MongoDB, Express.js, React, and Node.js. Share your thoughts, connect with readers, and build your online presence."}),e.jsxs("div",{className:t.features,children:[e.jsxs("div",{className:t.feature,children:[e.jsx("span",{className:t.featureIcon,children:"🚀"}),e.jsx("span",{children:"Fast & Modern"})]}),e.jsxs("div",{className:t.feature,children:[e.jsx("span",{className:t.featureIcon,children:"🔒"}),e.jsx("span",{children:"Secure Authentication"})]}),e.jsxs("div",{className:t.feature,children:[e.jsx("span",{className:t.featureIcon,children:"📱"}),e.jsx("span",{children:"Responsive Design"})]})]}),e.jsx("div",{className:t.heroActions,children:s?e.jsxs("div",{className:t.authenticatedActions,children:[e.jsxs("h3",{className:t.welcomeMessage,children:["Welcome back, ",a==null?void 0:a.name,"! 👋"]}),e.jsxs("div",{className:t.actionButtons,children:[e.jsx(h,{to:"/dashboard",className:t.primaryBtn,children:"Go to Dashboard"}),e.jsx(h,{to:"/profile",className:t.secondaryBtn,children:"View Profile"})]})]}):e.jsxs("div",{className:t.guestActions,children:[e.jsx(h,{to:"/signup",className:t.primaryBtn,children:"Get Started Free"}),e.jsx(h,{to:"/login",className:t.secondaryBtn,children:"Sign In"})]})})]}),e.jsx("div",{className:t.heroVisual,children:e.jsxs("div",{className:t.visualContainer,children:[e.jsxs("div",{className:t.blogCard,style:{"--delay":"0s"},children:[e.jsxs("div",{className:t.cardHeader,children:[e.jsx("div",{className:t.cardAvatar}),e.jsxs("div",{className:t.cardMeta,children:[e.jsx("div",{className:t.cardAuthor}),e.jsx("div",{className:t.cardDate})]})]}),e.jsx("div",{className:t.cardTitle}),e.jsxs("div",{className:t.cardContent,children:[e.jsx("div",{className:t.cardLine}),e.jsx("div",{className:t.cardLine}),e.jsx("div",{className:t.cardLine,style:{width:"70%"}})]})]}),e.jsxs("div",{className:t.blogCard,style:{"--delay":"0.2s"},children:[e.jsxs("div",{className:t.cardHeader,children:[e.jsx("div",{className:t.cardAvatar}),e.jsxs("div",{className:t.cardMeta,children:[e.jsx("div",{className:t.cardAuthor}),e.jsx("div",{className:t.cardDate})]})]}),e.jsx("div",{className:t.cardTitle}),e.jsxs("div",{className:t.cardContent,children:[e.jsx("div",{className:t.cardLine}),e.jsx("div",{className:t.cardLine}),e.jsx("div",{className:t.cardLine,style:{width:"80%"}})]})]}),e.jsxs("div",{className:t.blogCard,style:{"--delay":"0.4s"},children:[e.jsxs("div",{className:t.cardHeader,children:[e.jsx("div",{className:t.cardAvatar}),e.jsxs("div",{className:t.cardMeta,children:[e.jsx("div",{className:t.cardAuthor}),e.jsx("div",{className:t.cardDate})]})]}),e.jsx("div",{className:t.cardTitle}),e.jsxs("div",{className:t.cardContent,children:[e.jsx("div",{className:t.cardLine}),e.jsx("div",{className:t.cardLine}),e.jsx("div",{className:t.cardLine,style:{width:"60%"}})]})]}),e.jsx("div",{className:t.floatingElement,style:{"--delay":"1s","--duration":"3s"},children:"💡"}),e.jsx("div",{className:t.floatingElement,style:{"--delay":"2s","--duration":"4s"},children:"✨"}),e.jsx("div",{className:t.floatingElement,style:{"--delay":"0.5s","--duration":"3.5s"},children:"🎯"})]})})]}),e.jsxs("div",{className:t.statsSection,children:[e.jsxs("div",{className:t.stat,children:[e.jsx("div",{className:t.statNumber,children:"1000+"}),e.jsx("div",{className:t.statLabel,children:"Blog Posts"})]}),e.jsxs("div",{className:t.stat,children:[e.jsx("div",{className:t.statNumber,children:"500+"}),e.jsx("div",{className:t.statLabel,children:"Active Users"})]}),e.jsxs("div",{className:t.stat,children:[e.jsx("div",{className:t.statNumber,children:"50+"}),e.jsx("div",{className:t.statLabel,children:"Categories"})]}),e.jsxs("div",{className:t.stat,children:[e.jsx("div",{className:t.statNumber,children:"99.9%"}),e.jsx("div",{className:t.statLabel,children:"Uptime"})]})]})]}),e.jsxs("div",{className:t.heroBackground,children:[e.jsx("div",{className:t.backgroundShape,style:{"--delay":"0s"}}),e.jsx("div",{className:t.backgroundShape,style:{"--delay":"2s"}}),e.jsx("div",{className:t.backgroundShape,style:{"--delay":"4s"}})]})]}),ua="_blogCard_1qedv_6",xa="_cardHoverEffect_1qedv_25",va="_cardImage_1qedv_44",fa="_imageOverlay_1qedv_62",ba="_readMoreBtn_1qedv_81",ja="_cardContent_1qedv_104",Na="_cardMeta_1qedv_114",ya="_category_1qedv_123",wa="_readTime_1qedv_134",_a="_cardTitle_1qedv_149",ka="_cardExcerpt_1qedv_172",za="_cardTags_1qedv_184",Sa="_tag_1qedv_191",Ca="_tagMore_1qedv_209",Aa="_cardFooter_1qedv_220",Pa="_authorInfo_1qedv_231",Ma="_authorAvatar_1qedv_238",Ba="_avatarPlaceholder_1qedv_258",La="_authorDetails_1qedv_270",Ta="_authorName_1qedv_277",Ea="_postDate_1qedv_286",Ia="_updatedIndicator_1qedv_294",qa="_cardActions_1qedv_300",Ra="_editBtn_1qedv_306",Da="_deleteBtn_1qedv_307",$a="_actionIcon_1qedv_347",m={blogCard:ua,cardHoverEffect:xa,cardImage:va,imageOverlay:fa,readMoreBtn:ba,cardContent:ja,cardMeta:Na,category:ya,readTime:wa,cardTitle:_a,cardExcerpt:ka,cardTags:za,tag:Sa,tagMore:Ca,cardFooter:Aa,authorInfo:Pa,authorAvatar:Ma,avatarPlaceholder:Ba,authorDetails:La,authorName:Ta,postDate:Ea,updatedIndicator:Ia,cardActions:qa,editBtn:Ra,deleteBtn:Da,actionIcon:$a},Fa=({post:a,showActions:s=!1,onEdit:c,onDelete:i})=>{var x,g,d;const r=u=>new Date(u).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}),o=(u,b=150)=>u?u.length<=b?u:u.substring(0,b).trim()+"...":"",l=u=>u?u.split(" ").map(b=>b.charAt(0)).join("").toUpperCase().substring(0,2):"A";return e.jsxs("article",{className:m.blogCard,children:[a.image&&e.jsxs("div",{className:m.cardImage,children:[e.jsx("img",{src:a.image,alt:a.title,loading:"lazy"}),e.jsx("div",{className:m.imageOverlay,children:e.jsx(h,{to:`/blog/${a.id}`,className:m.readMoreBtn,"aria-label":`Read more about ${a.title}`,children:"Read More"})})]}),e.jsxs("div",{className:m.cardContent,children:[e.jsxs("div",{className:m.cardMeta,children:[a.category&&e.jsx("span",{className:m.category,children:a.category}),a.readTime&&e.jsxs("span",{className:m.readTime,children:[a.readTime," min read"]})]}),e.jsx("h3",{className:m.cardTitle,children:e.jsx(h,{to:`/blog/${a.id}`,children:a.title})}),e.jsx("p",{className:m.cardExcerpt,children:o(a.excerpt||a.content)}),a.tags&&a.tags.length>0&&e.jsxs("div",{className:m.cardTags,children:[a.tags.slice(0,3).map((u,b)=>e.jsxs("span",{className:m.tag,children:["#",u]},b)),a.tags.length>3&&e.jsxs("span",{className:m.tagMore,children:["+",a.tags.length-3," more"]})]}),e.jsxs("div",{className:m.cardFooter,children:[e.jsxs("div",{className:m.authorInfo,children:[e.jsx("div",{className:m.authorAvatar,children:(x=a.author)!=null&&x.avatar?e.jsx("img",{src:a.author.avatar,alt:a.author.name}):e.jsx("span",{className:m.avatarPlaceholder,children:l((g=a.author)==null?void 0:g.name)})}),e.jsxs("div",{className:m.authorDetails,children:[e.jsx("span",{className:m.authorName,children:((d=a.author)==null?void 0:d.name)||"Anonymous"}),e.jsxs("span",{className:m.postDate,children:[r(a.createdAt),a.updatedAt!==a.createdAt&&e.jsx("span",{className:m.updatedIndicator,children:"(Updated)"})]})]})]}),s&&e.jsxs("div",{className:m.cardActions,children:[e.jsxs("button",{onClick:()=>c&&c(a),className:m.editBtn,"aria-label":`Edit ${a.title}`,children:[e.jsx("span",{className:m.actionIcon,children:"✏️"}),"Edit"]}),e.jsxs("button",{onClick:()=>i&&i(a),className:m.deleteBtn,"aria-label":`Delete ${a.title}`,children:[e.jsx("span",{className:m.actionIcon,children:"🗑️"}),"Delete"]})]})]})]}),e.jsx("div",{className:m.cardHoverEffect})]})},T=({user:a,isAuthenticated:s})=>{const[c,i]=v.useState([]),[r,o]=v.useState(!0),l=[{id:"1",title:"Getting Started with MERN Stack Development",excerpt:"Learn how to build full-stack applications using MongoDB, Express.js, React, and Node.js. This comprehensive guide covers everything from setup to deployment.",content:"The MERN stack has become one of the most popular choices for full-stack web development...",author:{name:"John Doe",avatar:null},createdAt:"2024-01-15T10:30:00Z",updatedAt:"2024-01-15T10:30:00Z",tags:["MERN","React","Node.js","MongoDB"],category:"Web Development",readTime:8,image:null},{id:"2",title:"Modern React Patterns and Best Practices",excerpt:"Explore advanced React patterns, hooks, and best practices for building scalable and maintainable applications in 2024.",content:"React has evolved significantly over the years, and with it, the patterns and practices...",author:{name:"Jane Smith",avatar:null},createdAt:"2024-01-14T14:20:00Z",updatedAt:"2024-01-14T16:45:00Z",tags:["React","JavaScript","Frontend","Best Practices"],category:"Frontend",readTime:12,image:null},{id:"3",title:"Building Secure APIs with Express.js and JWT",excerpt:"Learn how to implement robust authentication and authorization in your Express.js applications using JSON Web Tokens.",content:"Security is paramount when building web applications, especially when dealing with user data...",author:{name:"Mike Johnson",avatar:null},createdAt:"2024-01-13T09:15:00Z",updatedAt:"2024-01-13T09:15:00Z",tags:["Express.js","JWT","Security","Backend"],category:"Backend",readTime:10,image:null},{id:"4",title:"MongoDB Schema Design and Optimization",excerpt:"Master MongoDB schema design patterns and optimization techniques for better performance and scalability.",content:"Designing efficient MongoDB schemas is crucial for application performance...",author:{name:"Sarah Wilson",avatar:null},createdAt:"2024-01-12T16:00:00Z",updatedAt:"2024-01-12T16:00:00Z",tags:["MongoDB","Database","Schema Design","Performance"],category:"Database",readTime:15,image:null},{id:"5",title:"Deploying MERN Applications to Production",excerpt:"A complete guide to deploying your MERN stack applications to various cloud platforms with CI/CD pipelines.",content:"Deploying a MERN application to production involves several considerations...",author:{name:"David Brown",avatar:null},createdAt:"2024-01-11T11:30:00Z",updatedAt:"2024-01-11T11:30:00Z",tags:["Deployment","DevOps","Cloud","CI/CD"],category:"DevOps",readTime:18,image:null},{id:"6",title:"State Management in React: Redux vs Context API",excerpt:"Compare different state management solutions in React and learn when to use each approach for optimal results.",content:"State management is one of the most important aspects of React development...",author:{name:"Emily Davis",avatar:null},createdAt:"2024-01-10T13:45:00Z",updatedAt:"2024-01-10T13:45:00Z",tags:["React","Redux","Context API","State Management"],category:"Frontend",readTime:14,image:null}];return v.useEffect(()=>{(async()=>{try{o(!0),await new Promise(g=>setTimeout(g,1e3)),i(l)}catch(g){console.error("Failed to load featured posts:",g),i([])}finally{o(!1)}})()},[]),e.jsxs("div",{className:"home-page",children:[e.jsx(ga,{user:a,isAuthenticated:s}),e.jsx("section",{className:"featured-posts-section",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-header",children:[e.jsx("h2",{className:"section-title",children:"Featured Posts"}),e.jsx("p",{className:"section-subtitle",children:"Discover the latest insights and tutorials from our community"})]}),r?e.jsx("div",{className:"loading-grid",children:[...Array(6)].map((x,g)=>e.jsxs("div",{className:"loading-card",children:[e.jsx("div",{className:"loading-skeleton loading-image"}),e.jsxs("div",{className:"loading-content",children:[e.jsx("div",{className:"loading-skeleton loading-title"}),e.jsx("div",{className:"loading-skeleton loading-text"}),e.jsx("div",{className:"loading-skeleton loading-text"}),e.jsx("div",{className:"loading-skeleton loading-meta"})]})]},g))}):c.length>0?e.jsx("div",{className:"posts-grid",children:c.map(x=>e.jsx(Fa,{post:x,showActions:!1},x.id))}):e.jsxs("div",{className:"no-posts",children:[e.jsx("div",{className:"no-posts-icon",children:"📝"}),e.jsx("h3",{children:"No Posts Yet"}),e.jsx("p",{children:"Be the first to share your thoughts and create a blog post!"}),s&&e.jsx("button",{className:"btn-primary",children:"Create Your First Post"})]})]})}),!s&&e.jsx("section",{className:"cta-section",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"cta-content",children:[e.jsx("h2",{className:"cta-title",children:"Ready to Start Blogging?"}),e.jsx("p",{className:"cta-subtitle",children:"Join our community of writers and share your knowledge with the world."}),e.jsxs("div",{className:"cta-actions",children:[e.jsx("a",{href:"/signup",className:"btn-primary",children:"Sign Up Free"}),e.jsx("a",{href:"/about",className:"btn-secondary",children:"Learn More"})]})]})})}),e.jsx("style",{jsx:!0,children:`
        .home-page {
          min-height: 100vh;
        }

        .featured-posts-section {
          padding: var(--spacing-2xl) 0;
          background-color: var(--bg-secondary);
        }

        .section-header {
          text-align: center;
          margin-bottom: var(--spacing-2xl);
        }

        .section-title {
          font-size: var(--font-size-3xl);
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: var(--spacing-md);
        }

        .section-subtitle {
          font-size: var(--font-size-lg);
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .posts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--spacing-xl);
          margin-top: var(--spacing-xl);
        }

        .loading-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--spacing-xl);
          margin-top: var(--spacing-xl);
        }

        .loading-card {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
        }

        .loading-skeleton {
          background: linear-gradient(90deg, var(--bg-secondary) 25%, var(--bg-tertiary) 50%, var(--bg-secondary) 75%);
          background-size: 200% 100%;
          animation: loading 1.5s infinite;
        }

        .loading-image {
          height: 200px;
          width: 100%;
        }

        .loading-content {
          padding: var(--spacing-lg);
        }

        .loading-title {
          height: 24px;
          border-radius: var(--radius-md);
          margin-bottom: var(--spacing-md);
        }

        .loading-text {
          height: 16px;
          border-radius: var(--radius-sm);
          margin-bottom: var(--spacing-sm);
        }

        .loading-text:last-of-type {
          width: 70%;
        }

        .loading-meta {
          height: 20px;
          border-radius: var(--radius-sm);
          width: 50%;
          margin-top: var(--spacing-lg);
        }

        @keyframes loading {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        .no-posts {
          text-align: center;
          padding: var(--spacing-2xl);
          background-color: var(--bg-primary);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-sm);
        }

        .no-posts-icon {
          font-size: 4rem;
          margin-bottom: var(--spacing-lg);
        }

        .no-posts h3 {
          color: var(--text-primary);
          margin-bottom: var(--spacing-md);
        }

        .no-posts p {
          color: var(--text-secondary);
          margin-bottom: var(--spacing-lg);
        }

        .cta-section {
          padding: var(--spacing-2xl) 0;
          background: linear-gradient(135deg, var(--primary-color), var(--primary-hover));
          color: var(--text-light);
        }

        .cta-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-title {
          font-size: var(--font-size-3xl);
          font-weight: 800;
          margin-bottom: var(--spacing-lg);
          color: var(--text-light);
        }

        .cta-subtitle {
          font-size: var(--font-size-lg);
          margin-bottom: var(--spacing-xl);
          opacity: 0.9;
        }

        .cta-actions {
          display: flex;
          gap: var(--spacing-md);
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-actions .btn-secondary {
          background-color: transparent;
          color: var(--text-light);
          border-color: var(--text-light);
        }

        .cta-actions .btn-secondary:hover {
          background-color: var(--text-light);
          color: var(--primary-color);
        }

        @media (max-width: 768px) {
          .posts-grid,
          .loading-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-lg);
          }

          .section-title {
            font-size: var(--font-size-2xl);
          }

          .cta-title {
            font-size: var(--font-size-2xl);
          }

          .cta-actions {
            flex-direction: column;
            align-items: center;
          }

          .cta-actions a {
            width: 100%;
            max-width: 300px;
          }
        }
      `})]})},Oa=()=>e.jsxs("div",{className:"about-page",children:[e.jsxs("div",{className:"container",children:[e.jsxs("section",{className:"about-hero",children:[e.jsx("h1",{className:"page-title",children:"About MERN Blog"}),e.jsx("p",{className:"page-subtitle",children:"A modern, full-stack blogging platform built with cutting-edge technologies"})]}),e.jsxs("div",{className:"about-content",children:[e.jsxs("section",{className:"content-section",children:[e.jsx("h2",{className:"section-title",children:"Our Mission"}),e.jsx("p",{className:"section-text",children:"MERN Blog is designed to provide a seamless and intuitive platform for writers, developers, and content creators to share their knowledge, experiences, and insights with a global audience. We believe in the power of community-driven content and the importance of accessible, high-quality information sharing."})]}),e.jsxs("section",{className:"content-section",children:[e.jsx("h2",{className:"section-title",children:"Technology Stack"}),e.jsx("p",{className:"section-text",children:"Built with the MERN stack, our platform leverages modern web technologies to deliver a fast, secure, and scalable blogging experience."}),e.jsxs("div",{className:"tech-grid",children:[e.jsxs("div",{className:"tech-card",children:[e.jsx("div",{className:"tech-icon",children:"🍃"}),e.jsx("h3",{className:"tech-name",children:"MongoDB"}),e.jsx("p",{className:"tech-description",children:"NoSQL database for flexible and scalable data storage, perfect for handling blog posts, user data, and comments."})]}),e.jsxs("div",{className:"tech-card",children:[e.jsx("div",{className:"tech-icon",children:"🚀"}),e.jsx("h3",{className:"tech-name",children:"Express.js"}),e.jsx("p",{className:"tech-description",children:"Fast and minimalist web framework for Node.js, providing robust API endpoints and middleware support."})]}),e.jsxs("div",{className:"tech-card",children:[e.jsx("div",{className:"tech-icon",children:"⚛️"}),e.jsx("h3",{className:"tech-name",children:"React"}),e.jsx("p",{className:"tech-description",children:"Modern JavaScript library for building interactive user interfaces with component-based architecture."})]}),e.jsxs("div",{className:"tech-card",children:[e.jsx("div",{className:"tech-icon",children:"💚"}),e.jsx("h3",{className:"tech-name",children:"Node.js"}),e.jsx("p",{className:"tech-description",children:"JavaScript runtime environment that enables server-side development with high performance and scalability."})]})]})]}),e.jsxs("section",{className:"content-section",children:[e.jsx("h2",{className:"section-title",children:"Key Features"}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-item",children:[e.jsx("div",{className:"feature-icon",children:"🔐"}),e.jsx("h3",{className:"feature-title",children:"Secure Authentication"}),e.jsx("p",{className:"feature-description",children:"JWT-based authentication system with password hashing and secure session management."})]}),e.jsxs("div",{className:"feature-item",children:[e.jsx("div",{className:"feature-icon",children:"📱"}),e.jsx("h3",{className:"feature-title",children:"Responsive Design"}),e.jsx("p",{className:"feature-description",children:"Mobile-first design approach ensuring optimal experience across all devices and screen sizes."})]}),e.jsxs("div",{className:"feature-item",children:[e.jsx("div",{className:"feature-icon",children:"⚡"}),e.jsx("h3",{className:"feature-title",children:"Fast Performance"}),e.jsx("p",{className:"feature-description",children:"Optimized for speed with efficient data loading, caching, and modern build tools."})]}),e.jsxs("div",{className:"feature-item",children:[e.jsx("div",{className:"feature-icon",children:"🎨"}),e.jsx("h3",{className:"feature-title",children:"Modern UI/UX"}),e.jsx("p",{className:"feature-description",children:"Clean, intuitive interface with smooth animations and accessibility-focused design."})]}),e.jsxs("div",{className:"feature-item",children:[e.jsx("div",{className:"feature-icon",children:"🔍"}),e.jsx("h3",{className:"feature-title",children:"Search & Filter"}),e.jsx("p",{className:"feature-description",children:"Advanced search functionality with category filtering and tag-based organization."})]}),e.jsxs("div",{className:"feature-item",children:[e.jsx("div",{className:"feature-icon",children:"👥"}),e.jsx("h3",{className:"feature-title",children:"User Profiles"}),e.jsx("p",{className:"feature-description",children:"Comprehensive user profiles with customizable avatars, bios, and activity tracking."})]})]})]}),e.jsxs("section",{className:"content-section",children:[e.jsx("h2",{className:"section-title",children:"Development Principles"}),e.jsxs("div",{className:"principles-list",children:[e.jsxs("div",{className:"principle-item",children:[e.jsx("h3",{className:"principle-title",children:"🏗️ Clean Architecture"}),e.jsx("p",{className:"principle-description",children:"Following MVC pattern and separation of concerns for maintainable and scalable codebase."})]}),e.jsxs("div",{className:"principle-item",children:[e.jsx("h3",{className:"principle-title",children:"🛡️ Security First"}),e.jsx("p",{className:"principle-description",children:"Implementing best security practices including input validation, CORS protection, and secure authentication."})]}),e.jsxs("div",{className:"principle-item",children:[e.jsx("h3",{className:"principle-title",children:"♿ Accessibility"}),e.jsx("p",{className:"principle-description",children:"Ensuring the platform is accessible to all users with proper ARIA labels, keyboard navigation, and screen reader support."})]}),e.jsxs("div",{className:"principle-item",children:[e.jsx("h3",{className:"principle-title",children:"🧪 Testing"}),e.jsx("p",{className:"principle-description",children:"Comprehensive testing strategy including unit tests, integration tests, and end-to-end testing."})]})]})]}),e.jsxs("section",{className:"content-section",children:[e.jsx("h2",{className:"section-title",children:"Open Source"}),e.jsx("p",{className:"section-text",children:"MERN Blog is built as an open-source project to help developers learn and understand full-stack development with the MERN stack. The codebase serves as a comprehensive example of modern web development practices, including authentication, database design, API development, and responsive frontend implementation."}),e.jsx("p",{className:"section-text",children:"Whether you're a beginner looking to understand how full-stack applications work or an experienced developer seeking a solid foundation for your next project, MERN Blog provides a well-documented and thoroughly tested starting point."})]}),e.jsx("section",{className:"cta-section",children:e.jsxs("div",{className:"cta-content",children:[e.jsx("h2",{className:"cta-title",children:"Get In Touch"}),e.jsx("p",{className:"cta-description",children:"Have questions, suggestions, or want to contribute? We'd love to hear from you!"}),e.jsxs("div",{className:"cta-actions",children:[e.jsx("a",{href:"/contact",className:"btn-primary",children:"Contact Us"}),e.jsx("a",{href:"https://github.com/your-username/mern-blog",target:"_blank",rel:"noopener noreferrer",className:"btn-secondary",children:"View on GitHub"})]})]})})]})]}),e.jsx("style",{jsx:!0,children:`
        .about-page {
          min-height: 100vh;
          padding: var(--spacing-2xl) 0;
        }

        .about-hero {
          text-align: center;
          margin-bottom: var(--spacing-2xl);
          padding: var(--spacing-2xl) 0;
          background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-sm);
        }

        .page-title {
          font-size: var(--font-size-4xl);
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: var(--spacing-lg);
          background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .page-subtitle {
          font-size: var(--font-size-lg);
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .about-content {
          max-width: 1000px;
          margin: 0 auto;
        }

        .content-section {
          margin-bottom: var(--spacing-2xl);
          padding: var(--spacing-xl);
          background-color: var(--bg-primary);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border-color);
        }

        .section-title {
          font-size: var(--font-size-2xl);
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: var(--spacing-lg);
          position: relative;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 50px;
          height: 3px;
          background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
          border-radius: 2px;
        }

        .section-text {
          font-size: var(--font-size-base);
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: var(--spacing-lg);
        }

        .section-text:last-child {
          margin-bottom: 0;
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-lg);
          margin-top: var(--spacing-xl);
        }

        .tech-card {
          background-color: var(--bg-secondary);
          padding: var(--spacing-lg);
          border-radius: var(--radius-lg);
          text-align: center;
          border: 1px solid var(--border-color);
          transition: all var(--transition-normal);
        }

        .tech-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: var(--primary-color);
        }

        .tech-icon {
          font-size: 3rem;
          margin-bottom: var(--spacing-md);
        }

        .tech-name {
          font-size: var(--font-size-lg);
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--spacing-sm);
        }

        .tech-description {
          font-size: var(--font-size-sm);
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-lg);
          margin-top: var(--spacing-xl);
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-md);
          padding: var(--spacing-lg);
          background-color: var(--bg-secondary);
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-color);
          transition: all var(--transition-normal);
        }

        .feature-item:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-sm);
        }

        .feature-icon {
          font-size: var(--font-size-2xl);
          flex-shrink: 0;
          margin-top: var(--spacing-xs);
        }

        .feature-content {
          flex: 1;
        }

        .feature-title {
          font-size: var(--font-size-lg);
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--spacing-sm);
        }

        .feature-description {
          font-size: var(--font-size-sm);
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .principles-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
          margin-top: var(--spacing-xl);
        }

        .principle-item {
          padding: var(--spacing-lg);
          background-color: var(--bg-secondary);
          border-radius: var(--radius-lg);
          border-left: 4px solid var(--primary-color);
        }

        .principle-title {
          font-size: var(--font-size-lg);
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--spacing-sm);
        }

        .principle-description {
          font-size: var(--font-size-sm);
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .cta-section {
          background: linear-gradient(135deg, var(--primary-color), var(--primary-hover));
          color: var(--text-light);
          padding: var(--spacing-2xl);
          border-radius: var(--radius-xl);
          text-align: center;
          margin-top: var(--spacing-2xl);
        }

        .cta-title {
          font-size: var(--font-size-2xl);
          font-weight: 700;
          margin-bottom: var(--spacing-md);
          color: var(--text-light);
        }

        .cta-description {
          font-size: var(--font-size-lg);
          margin-bottom: var(--spacing-xl);
          opacity: 0.9;
        }

        .cta-actions {
          display: flex;
          gap: var(--spacing-md);
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-actions .btn-secondary {
          background-color: transparent;
          color: var(--text-light);
          border-color: var(--text-light);
        }

        .cta-actions .btn-secondary:hover {
          background-color: var(--text-light);
          color: var(--primary-color);
        }

        @media (max-width: 768px) {
          .about-page {
            padding: var(--spacing-lg) 0;
          }

          .page-title {
            font-size: var(--font-size-3xl);
          }

          .content-section {
            padding: var(--spacing-lg);
          }

          .tech-grid,
          .features-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-md);
          }

          .feature-item {
            flex-direction: column;
            text-align: center;
          }

          .cta-actions {
            flex-direction: column;
            align-items: center;
          }

          .cta-actions a {
            width: 100%;
            max-width: 300px;
          }
        }

        @media (max-width: 480px) {
          .about-hero {
            padding: var(--spacing-lg) 0;
          }

          .page-title {
            font-size: var(--font-size-2xl);
          }

          .content-section {
            padding: var(--spacing-md);
          }

          .tech-card,
          .feature-item,
          .principle-item {
            padding: var(--spacing-md);
          }
        }
      `})]}),Ua=()=>{const[a,s]=v.useState({name:"",email:"",subject:"",message:""}),[c,i]=v.useState(!1),[r,o]=v.useState(null),l=g=>{const{name:d,value:u}=g.target;s(b=>({...b,[d]:u}))},x=async g=>{g.preventDefault(),i(!0),o(null);try{await new Promise(d=>setTimeout(d,2e3)),o({type:"success",message:"Thank you for your message! We'll get back to you soon."}),s({name:"",email:"",subject:"",message:""})}catch{o({type:"error",message:"Failed to send message. Please try again later."})}finally{i(!1)}};return e.jsxs("div",{className:"contact-page",children:[e.jsxs("div",{className:"container",children:[e.jsxs("section",{className:"contact-hero",children:[e.jsx("h1",{className:"page-title",children:"Get In Touch"}),e.jsx("p",{className:"page-subtitle",children:"Have questions, suggestions, or want to collaborate? We'd love to hear from you!"})]}),e.jsxs("div",{className:"contact-content",children:[e.jsxs("div",{className:"contact-form-section",children:[e.jsxs("div",{className:"form-header",children:[e.jsx("h2",{className:"form-title",children:"Send us a Message"}),e.jsx("p",{className:"form-description",children:"Fill out the form below and we'll get back to you as soon as possible."})]}),e.jsxs("form",{onSubmit:x,className:"contact-form",children:[e.jsxs("div",{className:"form-row",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"name",className:"form-label",children:"Name *"}),e.jsx("input",{type:"text",id:"name",name:"name",value:a.name,onChange:l,required:!0,className:"form-input",placeholder:"Your full name"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"email",className:"form-label",children:"Email *"}),e.jsx("input",{type:"email",id:"email",name:"email",value:a.email,onChange:l,required:!0,className:"form-input",placeholder:"your.email@example.com"})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"subject",className:"form-label",children:"Subject *"}),e.jsx("input",{type:"text",id:"subject",name:"subject",value:a.subject,onChange:l,required:!0,className:"form-input",placeholder:"What's this about?"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"message",className:"form-label",children:"Message *"}),e.jsx("textarea",{id:"message",name:"message",value:a.message,onChange:l,required:!0,rows:"6",className:"form-textarea",placeholder:"Tell us more about your inquiry..."})]}),r&&e.jsx("div",{className:`alert alert-${r.type}`,children:r.message}),e.jsx("button",{type:"submit",disabled:c,className:`submit-btn ${c?"loading":""}`,children:c?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"loading-spinner"}),"Sending..."]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"btn-icon",children:"📧"}),"Send Message"]})})]})]}),e.jsxs("div",{className:"contact-info-section",children:[e.jsx("h2",{className:"info-title",children:"Other Ways to Reach Us"}),e.jsxs("div",{className:"contact-methods",children:[e.jsxs("div",{className:"contact-method",children:[e.jsx("div",{className:"method-icon",children:"📧"}),e.jsxs("div",{className:"method-content",children:[e.jsx("h3",{className:"method-title",children:"Email"}),e.jsx("p",{className:"method-description",children:"For general inquiries and support"}),e.jsx("a",{href:"mailto:hello@mernblog.com",className:"method-link",children:"hello@mernblog.com"})]})]}),e.jsxs("div",{className:"contact-method",children:[e.jsx("div",{className:"method-icon",children:"💬"}),e.jsxs("div",{className:"method-content",children:[e.jsx("h3",{className:"method-title",children:"Community"}),e.jsx("p",{className:"method-description",children:"Join our community discussions"}),e.jsx("a",{href:"#",className:"method-link",children:"Discord Server"})]})]}),e.jsxs("div",{className:"contact-method",children:[e.jsx("div",{className:"method-icon",children:"🐙"}),e.jsxs("div",{className:"method-content",children:[e.jsx("h3",{className:"method-title",children:"GitHub"}),e.jsx("p",{className:"method-description",children:"Report bugs or contribute to the project"}),e.jsx("a",{href:"https://github.com/your-username/mern-blog",target:"_blank",rel:"noopener noreferrer",className:"method-link",children:"View Repository"})]})]}),e.jsxs("div",{className:"contact-method",children:[e.jsx("div",{className:"method-icon",children:"📱"}),e.jsxs("div",{className:"method-content",children:[e.jsx("h3",{className:"method-title",children:"Social Media"}),e.jsx("p",{className:"method-description",children:"Follow us for updates and news"}),e.jsxs("div",{className:"social-links",children:[e.jsx("a",{href:"#",className:"social-link",children:"Twitter"}),e.jsx("a",{href:"#",className:"social-link",children:"LinkedIn"})]})]})]})]}),e.jsxs("div",{className:"faq-section",children:[e.jsx("h3",{className:"faq-title",children:"Frequently Asked Questions"}),e.jsxs("div",{className:"faq-list",children:[e.jsxs("div",{className:"faq-item",children:[e.jsx("h4",{className:"faq-question",children:"How do I create an account?"}),e.jsx("p",{className:"faq-answer",children:`Click on the "Sign Up" button in the navigation bar and fill out the registration form. You'll receive a confirmation email to verify your account.`})]}),e.jsxs("div",{className:"faq-item",children:[e.jsx("h4",{className:"faq-question",children:"Can I edit my posts after publishing?"}),e.jsx("p",{className:"faq-answer",children:'Yes! You can edit your posts at any time from your dashboard. Edited posts will show an "Updated" indicator with the modification date.'})]}),e.jsxs("div",{className:"faq-item",children:[e.jsx("h4",{className:"faq-question",children:"Is MERN Blog open source?"}),e.jsx("p",{className:"faq-answer",children:"Yes, MERN Blog is completely open source. You can view the source code, contribute to the project, or use it as a foundation for your own blog platform."})]}),e.jsxs("div",{className:"faq-item",children:[e.jsx("h4",{className:"faq-question",children:"How do I report a bug or request a feature?"}),e.jsx("p",{className:"faq-answer",children:"You can report bugs or request features by creating an issue on our GitHub repository or by contacting us through this form."})]})]})]})]})]})]}),e.jsx("style",{jsx:!0,children:`
        .contact-page {
          min-height: 100vh;
          padding: var(--spacing-2xl) 0;
        }

        .contact-hero {
          text-align: center;
          margin-bottom: var(--spacing-2xl);
          padding: var(--spacing-2xl) 0;
          background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-sm);
        }

        .page-title {
          font-size: var(--font-size-4xl);
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: var(--spacing-lg);
          background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .page-subtitle {
          font-size: var(--font-size-lg);
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-2xl);
          max-width: 1200px;
          margin: 0 auto;
        }

        .contact-form-section,
        .contact-info-section {
          background-color: var(--bg-primary);
          padding: var(--spacing-2xl);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border-color);
        }

        .form-header {
          margin-bottom: var(--spacing-xl);
        }

        .form-title,
        .info-title {
          font-size: var(--font-size-2xl);
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: var(--spacing-md);
        }

        .form-description {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-lg);
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .form-label {
          font-weight: 600;
          color: var(--text-primary);
          font-size: var(--font-size-sm);
        }

        .form-input,
        .form-textarea {
          padding: var(--spacing-md);
          border: 2px solid var(--border-color);
          border-radius: var(--radius-md);
          font-size: var(--font-size-base);
          transition: all var(--transition-fast);
          background-color: var(--bg-primary);
          color: var(--text-primary);
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
          font-family: inherit;
        }

        .submit-btn {
          background: linear-gradient(135deg, var(--primary-color), var(--primary-hover));
          color: var(--text-light);
          border: none;
          padding: var(--spacing-md) var(--spacing-xl);
          border-radius: var(--radius-lg);
          font-size: var(--font-size-base);
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-normal);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-sm);
          box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .submit-btn.loading {
          pointer-events: none;
        }

        .loading-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid var(--text-light);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .btn-icon {
          font-size: var(--font-size-lg);
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-2xl);
        }

        .contact-method {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-md);
          padding: var(--spacing-lg);
          background-color: var(--bg-secondary);
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-color);
          transition: all var(--transition-normal);
        }

        .contact-method:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-sm);
        }

        .method-icon {
          font-size: var(--font-size-2xl);
          flex-shrink: 0;
        }

        .method-content {
          flex: 1;
        }

        .method-title {
          font-size: var(--font-size-lg);
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--spacing-xs);
        }

        .method-description {
          font-size: var(--font-size-sm);
          color: var(--text-secondary);
          margin-bottom: var(--spacing-sm);
        }

        .method-link {
          color: var(--primary-color);
          font-weight: 500;
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .method-link:hover {
          color: var(--primary-hover);
          text-decoration: underline;
        }

        .social-links {
          display: flex;
          gap: var(--spacing-md);
        }

        .social-link {
          color: var(--primary-color);
          font-weight: 500;
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .social-link:hover {
          color: var(--primary-hover);
          text-decoration: underline;
        }

        .faq-section {
          border-top: 1px solid var(--border-color);
          padding-top: var(--spacing-xl);
        }

        .faq-title {
          font-size: var(--font-size-lg);
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--spacing-lg);
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }

        .faq-item {
          padding: var(--spacing-lg);
          background-color: var(--bg-secondary);
          border-radius: var(--radius-md);
          border-left: 4px solid var(--primary-color);
        }

        .faq-question {
          font-size: var(--font-size-base);
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--spacing-sm);
        }

        .faq-answer {
          font-size: var(--font-size-sm);
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-xl);
          }

          .contact-form-section,
          .contact-info-section {
            padding: var(--spacing-lg);
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: var(--spacing-md);
          }

          .page-title {
            font-size: var(--font-size-3xl);
          }
        }

        @media (max-width: 480px) {
          .contact-page {
            padding: var(--spacing-lg) 0;
          }

          .contact-hero {
            padding: var(--spacing-lg) 0;
          }

          .page-title {
            font-size: var(--font-size-2xl);
          }

          .contact-form-section,
          .contact-info-section {
            padding: var(--spacing-md);
          }

          .contact-method {
            flex-direction: column;
            text-align: center;
          }

          .social-links {
            justify-content: center;
          }
        }
      `})]})},f=J.create({baseURL:"http://localhost:5000/api",timeout:1e4,headers:{"Content-Type":"application/json"}});f.interceptors.request.use(a=>{const s=localStorage.getItem("token");return s&&(a.headers.Authorization=`Bearer ${s}`),a},a=>Promise.reject(a));f.interceptors.response.use(a=>a.data,a=>{if(a.response){const{status:s,data:c}=a.response;if(s===401)return localStorage.removeItem("token"),window.location.href="/login",Promise.reject(new Error("Authentication required"));if(s===400&&c.errors){const r=c.errors.map(o=>o.msg).join(", ");return Promise.reject(new Error(r))}const i=c.message||`HTTP ${s} Error`;return Promise.reject(new Error(i))}return a.code==="ECONNABORTED"?Promise.reject(new Error("Request timeout. Please try again.")):a.response?Promise.reject(a):Promise.reject(new Error("Network error. Please check your connection."))});const w={auth:{register:async a=>{try{return await f.post("/auth/register",a)}catch(s){throw s}},login:async a=>{try{return await f.post("/auth/login",a)}catch(s){throw s}},logout:async()=>{try{const a=await f.post("/auth/logout");return localStorage.removeItem("token"),a}catch(a){throw localStorage.removeItem("token"),a}},getProfile:async()=>{try{return await f.get("/auth/profile")}catch(a){throw a}},updateProfile:async a=>{try{return await f.put("/auth/profile",a)}catch(s){throw s}},changePassword:async a=>{try{return await f.put("/auth/change-password",a)}catch(s){throw s}},verifyToken:async()=>{try{return await f.get("/auth/verify")}catch(a){throw a}}},posts:{getAll:async(a={})=>{try{return await f.get("/posts",{params:a})}catch(s){throw s}},getFeatured:async(a=6)=>{try{return await f.get(`/posts/featured?limit=${a}`)}catch(s){throw s}},getById:async a=>{try{return await f.get(`/posts/${a}`)}catch(s){throw s}},create:async a=>{try{return await f.post("/posts",a)}catch(s){throw s}},update:async(a,s)=>{try{return await f.put(`/posts/${a}`,s)}catch(c){throw c}},delete:async a=>{try{return await f.delete(`/posts/${a}`)}catch(s){throw s}},getUserPosts:async(a={})=>{try{return await f.get("/posts/my-posts",{params:a})}catch(s){throw s}}},contact:{submit:async a=>{try{return await f.post("/contact",a)}catch(s){throw s}}},utils:{healthCheck:async()=>{try{return await f.get("/health")}catch(a){throw a}},uploadFile:async(a,s="general")=>{try{const c=new FormData;return c.append("file",a),c.append("type",s),await f.post("/upload",c,{headers:{"Content-Type":"multipart/form-data"}})}catch(c){throw c}}}};w.auth.register;w.auth.login;w.auth.logout;w.auth.getProfile;w.auth.updateProfile;w.auth.changePassword;w.auth.verifyToken;const Ha=({onLogin:a})=>{var C;const s=I(),[c,i]=v.useState({email:"",password:""}),[r,o]=v.useState({}),[l,x]=v.useState(!1),[g,d]=v.useState(!1);(C=s.state)!=null&&C.from;const u=y=>{const{name:N,value:L}=y.target;i(A=>({...A,[N]:L})),r[N]&&o(A=>({...A,[N]:""}))},b=()=>{const y={};return c.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email)||(y.email="Please enter a valid email address"):y.email="Email is required",c.password?c.password.length<6&&(y.password="Password must be at least 6 characters long"):y.password="Password is required",o(y),Object.keys(y).length===0},z=async y=>{if(y.preventDefault(),!!b()){x(!0),o({});try{const N=await w.auth.login({email:c.email.trim().toLowerCase(),password:c.password});N.success?a(N.data.user,N.data.token):o({general:N.message||"Login failed"})}catch(N){console.error("Login error:",N),o({general:N.message||"Login failed. Please try again."})}finally{x(!1)}}},k=()=>{d(!g)};return e.jsxs("div",{className:"login-page",children:[e.jsx("div",{className:"container",children:e.jsxs("div",{className:"login-container",children:[e.jsxs("div",{className:"login-form-section",children:[e.jsxs("div",{className:"form-header",children:[e.jsx("h1",{className:"form-title",children:"Welcome Back"}),e.jsx("p",{className:"form-subtitle",children:"Sign in to your account to continue"})]}),e.jsxs("form",{onSubmit:z,className:"login-form",children:[r.general&&e.jsx("div",{className:"alert alert-error",children:r.general}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"email",className:"form-label",children:"Email Address"}),e.jsxs("div",{className:"input-wrapper",children:[e.jsx("input",{type:"email",id:"email",name:"email",value:c.email,onChange:u,className:`form-input ${r.email?"error":""}`,placeholder:"Enter your email",autoComplete:"email",disabled:l}),e.jsx("span",{className:"input-icon",children:"📧"})]}),r.email&&e.jsx("span",{className:"error-message",children:r.email})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"password",className:"form-label",children:"Password"}),e.jsxs("div",{className:"input-wrapper",children:[e.jsx("input",{type:g?"text":"password",id:"password",name:"password",value:c.password,onChange:u,className:`form-input ${r.password?"error":""}`,placeholder:"Enter your password",autoComplete:"current-password",disabled:l}),e.jsx("button",{type:"button",className:"password-toggle",onClick:k,"aria-label":g?"Hide password":"Show password",children:g?"🙈":"👁️"})]}),r.password&&e.jsx("span",{className:"error-message",children:r.password})]}),e.jsxs("div",{className:"form-options",children:[e.jsxs("label",{className:"checkbox-label",children:[e.jsx("input",{type:"checkbox",className:"checkbox"}),e.jsx("span",{className:"checkbox-text",children:"Remember me"})]}),e.jsx(h,{to:"/forgot-password",className:"forgot-link",children:"Forgot password?"})]}),e.jsx("button",{type:"submit",disabled:l,className:`submit-btn ${l?"loading":""}`,children:l?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"loading-spinner"}),"Signing In..."]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"btn-icon",children:"🚀"}),"Sign In"]})}),e.jsx("div",{className:"form-footer",children:e.jsxs("p",{className:"signup-prompt",children:["Don't have an account?"," ",e.jsx(h,{to:"/signup",className:"signup-link",children:"Sign up here"})]})})]})]}),e.jsx("div",{className:"welcome-section",children:e.jsxs("div",{className:"welcome-content",children:[e.jsx("h2",{className:"welcome-title",children:"Join Our Community"}),e.jsx("p",{className:"welcome-description",children:"Connect with fellow writers, share your thoughts, and discover amazing content from our vibrant blogging community."}),e.jsxs("div",{className:"features-list",children:[e.jsxs("div",{className:"feature-item",children:[e.jsx("span",{className:"feature-icon",children:"✍️"}),e.jsx("span",{className:"feature-text",children:"Write and publish your stories"})]}),e.jsxs("div",{className:"feature-item",children:[e.jsx("span",{className:"feature-icon",children:"👥"}),e.jsx("span",{className:"feature-text",children:"Connect with other writers"})]}),e.jsxs("div",{className:"feature-item",children:[e.jsx("span",{className:"feature-icon",children:"📈"}),e.jsx("span",{className:"feature-text",children:"Track your post performance"})]}),e.jsxs("div",{className:"feature-item",children:[e.jsx("span",{className:"feature-icon",children:"🎯"}),e.jsx("span",{className:"feature-text",children:"Reach your target audience"})]})]}),e.jsxs("div",{className:"stats",children:[e.jsxs("div",{className:"stat",children:[e.jsx("div",{className:"stat-number",children:"1000+"}),e.jsx("div",{className:"stat-label",children:"Active Writers"})]}),e.jsxs("div",{className:"stat",children:[e.jsx("div",{className:"stat-number",children:"5000+"}),e.jsx("div",{className:"stat-label",children:"Published Posts"})]}),e.jsxs("div",{className:"stat",children:[e.jsx("div",{className:"stat-number",children:"50K+"}),e.jsx("div",{className:"stat-label",children:"Monthly Readers"})]})]})]})})]})}),e.jsx("style",{jsx:!0,children:`
        .login-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
          padding: var(--spacing-xl) 0;
        }

        .login-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          max-width: 1200px;
          margin: 0 auto;
          background-color: var(--bg-primary);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-lg);
          overflow: hidden;
          border: 1px solid var(--border-color);
        }

        .login-form-section {
          padding: var(--spacing-2xl);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .form-header {
          text-align: center;
          margin-bottom: var(--spacing-2xl);
        }

        .form-title {
          font-size: var(--font-size-3xl);
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: var(--spacing-md);
          background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .form-subtitle {
          color: var(--text-secondary);
          font-size: var(--font-size-lg);
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .form-label {
          font-weight: 600;
          color: var(--text-primary);
          font-size: var(--font-size-sm);
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .form-input {
          width: 100%;
          padding: var(--spacing-md) var(--spacing-lg);
          padding-right: 3rem;
          border: 2px solid var(--border-color);
          border-radius: var(--radius-lg);
          font-size: var(--font-size-base);
          transition: all var(--transition-fast);
          background-color: var(--bg-primary);
          color: var(--text-primary);
        }

        .form-input:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }

        .form-input.error {
          border-color: var(--error-color);
        }

        .form-input:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .input-icon {
          position: absolute;
          right: var(--spacing-md);
          font-size: var(--font-size-lg);
          color: var(--text-muted);
          pointer-events: none;
        }

        .password-toggle {
          position: absolute;
          right: var(--spacing-md);
          background: none;
          border: none;
          font-size: var(--font-size-lg);
          cursor: pointer;
          padding: var(--spacing-xs);
          border-radius: var(--radius-sm);
          transition: background-color var(--transition-fast);
        }

        .password-toggle:hover {
          background-color: var(--bg-secondary);
        }

        .error-message {
          color: var(--error-color);
          font-size: var(--font-size-sm);
          font-weight: 500;
        }

        .form-options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: var(--spacing-sm);
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          cursor: pointer;
          font-size: var(--font-size-sm);
          color: var(--text-secondary);
        }

        .checkbox {
          width: 16px;
          height: 16px;
          accent-color: var(--primary-color);
        }

        .forgot-link {
          color: var(--primary-color);
          font-size: var(--font-size-sm);
          font-weight: 500;
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .forgot-link:hover {
          color: var(--primary-hover);
          text-decoration: underline;
        }

        .submit-btn {
          background: linear-gradient(135deg, var(--primary-color), var(--primary-hover));
          color: var(--text-light);
          border: none;
          padding: var(--spacing-md) var(--spacing-xl);
          border-radius: var(--radius-lg);
          font-size: var(--font-size-base);
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-normal);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-sm);
          box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
          margin-top: var(--spacing-md);
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .loading-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid var(--text-light);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .btn-icon {
          font-size: var(--font-size-lg);
        }

        .form-footer {
          text-align: center;
          margin-top: var(--spacing-lg);
        }

        .signup-prompt {
          color: var(--text-secondary);
          font-size: var(--font-size-sm);
        }

        .signup-link {
          color: var(--primary-color);
          font-weight: 600;
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .signup-link:hover {
          color: var(--primary-hover);
          text-decoration: underline;
        }

        .welcome-section {
          background: linear-gradient(135deg, var(--primary-color), var(--primary-hover));
          color: var(--text-light);
          padding: var(--spacing-2xl);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .welcome-content {
          text-align: center;
          max-width: 400px;
        }

        .welcome-title {
          font-size: var(--font-size-2xl);
          font-weight: 700;
          margin-bottom: var(--spacing-lg);
          color: var(--text-light);
        }

        .welcome-description {
          font-size: var(--font-size-base);
          line-height: 1.6;
          margin-bottom: var(--spacing-xl);
          opacity: 0.9;
        }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-xl);
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          text-align: left;
        }

        .feature-icon {
          font-size: var(--font-size-xl);
          flex-shrink: 0;
        }

        .feature-text {
          font-size: var(--font-size-sm);
          opacity: 0.9;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--spacing-lg);
          margin-top: var(--spacing-xl);
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          font-size: var(--font-size-xl);
          font-weight: 700;
          margin-bottom: var(--spacing-xs);
        }

        .stat-label {
          font-size: var(--font-size-xs);
          opacity: 0.8;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .login-container {
            grid-template-columns: 1fr;
            margin: var(--spacing-lg);
          }

          .welcome-section {
            order: -1;
            padding: var(--spacing-xl);
          }

          .login-form-section {
            padding: var(--spacing-xl);
          }

          .form-title {
            font-size: var(--font-size-2xl);
          }

          .stats {
            grid-template-columns: 1fr;
            gap: var(--spacing-md);
          }

          .form-options {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 480px) {
          .login-page {
            padding: var(--spacing-md) 0;
          }

          .login-container {
            margin: var(--spacing-md);
          }

          .login-form-section,
          .welcome-section {
            padding: var(--spacing-lg);
          }

          .form-title {
            font-size: var(--font-size-xl);
          }

          .welcome-title {
            font-size: var(--font-size-xl);
          }
        }
      `})]})},Wa=({onLogin:a})=>{const[s,c]=v.useState({name:"",email:"",password:"",confirmPassword:""}),[i,r]=v.useState({}),[o,l]=v.useState(!1),[x,g]=v.useState(!1),[d,u]=v.useState(!1),[b,z]=v.useState(!1),k=p=>{const{name:j,value:M}=p.target;c(S=>({...S,[j]:M})),i[j]&&r(S=>({...S,[j]:""}))},C=()=>{const p={};return s.name.trim()?s.name.trim().length<2?p.name="Name must be at least 2 characters long":s.name.trim().length>50?p.name="Name cannot exceed 50 characters":/^[a-zA-Z\s]+$/.test(s.name.trim())||(p.name="Name can only contain letters and spaces"):p.name="Name is required",s.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.email)||(p.email="Please enter a valid email address"):p.email="Email is required",s.password?s.password.length<6?p.password="Password must be at least 6 characters long":/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(s.password)||(p.password="Password must contain at least one lowercase letter, one uppercase letter, and one number"):p.password="Password is required",s.confirmPassword?s.password!==s.confirmPassword&&(p.confirmPassword="Passwords do not match"):p.confirmPassword="Please confirm your password",b||(p.terms="You must accept the terms and conditions"),r(p),Object.keys(p).length===0},y=async p=>{if(p.preventDefault(),!!C()){l(!0),r({});try{const j=await w.auth.register({name:s.name.trim(),email:s.email.trim().toLowerCase(),password:s.password});j.success?a(j.data.user,j.data.token):r({general:j.message||"Registration failed"})}catch(j){console.error("Registration error:",j),r({general:j.message||"Registration failed. Please try again."})}finally{l(!1)}}},N=()=>{g(!x)},L=()=>{u(!d)},P=(p=>{let j=0;const M={length:p.length>=6,lowercase:/[a-z]/.test(p),uppercase:/[A-Z]/.test(p),number:/\d/.test(p),special:/[!@#$%^&*(),.?":{}|<>]/.test(p)};j=Object.values(M).filter(Boolean).length;const S=["Very Weak","Weak","Fair","Good","Strong"],F=["#ef4444","#f59e0b","#eab308","#22c55e","#16a34a"];return{score:j,level:S[Math.min(j-1,4)]||"Very Weak",color:F[Math.min(j-1,4)]||"#ef4444",checks:M}})(s.password);return e.jsxs("div",{className:"signup-page",children:[e.jsx("div",{className:"container",children:e.jsxs("div",{className:"signup-container",children:[e.jsx("div",{className:"welcome-section",children:e.jsxs("div",{className:"welcome-content",children:[e.jsx("h2",{className:"welcome-title",children:"Start Your Journey"}),e.jsx("p",{className:"welcome-description",children:"Join thousands of writers and readers in our vibrant community. Share your stories, discover new perspectives, and connect with like-minded individuals."}),e.jsxs("div",{className:"benefits-list",children:[e.jsxs("div",{className:"benefit-item",children:[e.jsx("span",{className:"benefit-icon",children:"🚀"}),e.jsxs("div",{className:"benefit-content",children:[e.jsx("h3",{className:"benefit-title",children:"Easy Publishing"}),e.jsx("p",{className:"benefit-description",children:"Write and publish your posts with our intuitive editor"})]})]}),e.jsxs("div",{className:"benefit-item",children:[e.jsx("span",{className:"benefit-icon",children:"🌟"}),e.jsxs("div",{className:"benefit-content",children:[e.jsx("h3",{className:"benefit-title",children:"Build Your Audience"}),e.jsx("p",{className:"benefit-description",children:"Grow your readership and engage with your community"})]})]}),e.jsxs("div",{className:"benefit-item",children:[e.jsx("span",{className:"benefit-icon",children:"📊"}),e.jsxs("div",{className:"benefit-content",children:[e.jsx("h3",{className:"benefit-title",children:"Track Performance"}),e.jsx("p",{className:"benefit-description",children:"Monitor your post views, engagement, and growth"})]})]})]}),e.jsxs("div",{className:"testimonial",children:[e.jsx("p",{className:"testimonial-text",children:'"MERN Blog has transformed how I share my ideas. The platform is intuitive, and the community is incredibly supportive!"'}),e.jsxs("div",{className:"testimonial-author",children:[e.jsx("div",{className:"author-avatar",children:"JS"}),e.jsxs("div",{className:"author-info",children:[e.jsx("div",{className:"author-name",children:"Jane Smith"}),e.jsx("div",{className:"author-title",children:"Tech Writer"})]})]})]})]})}),e.jsxs("div",{className:"signup-form-section",children:[e.jsxs("div",{className:"form-header",children:[e.jsx("h1",{className:"form-title",children:"Create Account"}),e.jsx("p",{className:"form-subtitle",children:"Join our community and start sharing your stories"})]}),e.jsxs("form",{onSubmit:y,className:"signup-form",children:[i.general&&e.jsx("div",{className:"alert alert-error",children:i.general}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"name",className:"form-label",children:"Full Name"}),e.jsxs("div",{className:"input-wrapper",children:[e.jsx("input",{type:"text",id:"name",name:"name",value:s.name,onChange:k,className:`form-input ${i.name?"error":""}`,placeholder:"Enter your full name",autoComplete:"name",disabled:o}),e.jsx("span",{className:"input-icon",children:"👤"})]}),i.name&&e.jsx("span",{className:"error-message",children:i.name})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"email",className:"form-label",children:"Email Address"}),e.jsxs("div",{className:"input-wrapper",children:[e.jsx("input",{type:"email",id:"email",name:"email",value:s.email,onChange:k,className:`form-input ${i.email?"error":""}`,placeholder:"Enter your email",autoComplete:"email",disabled:o}),e.jsx("span",{className:"input-icon",children:"📧"})]}),i.email&&e.jsx("span",{className:"error-message",children:i.email})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"password",className:"form-label",children:"Password"}),e.jsxs("div",{className:"input-wrapper",children:[e.jsx("input",{type:x?"text":"password",id:"password",name:"password",value:s.password,onChange:k,className:`form-input ${i.password?"error":""}`,placeholder:"Create a strong password",autoComplete:"new-password",disabled:o}),e.jsx("button",{type:"button",className:"password-toggle",onClick:N,"aria-label":x?"Hide password":"Show password",children:x?"🙈":"👁️"})]}),s.password&&e.jsxs("div",{className:"password-strength",children:[e.jsx("div",{className:"strength-bar",children:e.jsx("div",{className:"strength-fill",style:{width:`${P.score/5*100}%`,backgroundColor:P.color}})}),e.jsx("span",{className:"strength-text",style:{color:P.color},children:P.level})]}),i.password&&e.jsx("span",{className:"error-message",children:i.password})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"confirmPassword",className:"form-label",children:"Confirm Password"}),e.jsxs("div",{className:"input-wrapper",children:[e.jsx("input",{type:d?"text":"password",id:"confirmPassword",name:"confirmPassword",value:s.confirmPassword,onChange:k,className:`form-input ${i.confirmPassword?"error":""}`,placeholder:"Confirm your password",autoComplete:"new-password",disabled:o}),e.jsx("button",{type:"button",className:"password-toggle",onClick:L,"aria-label":d?"Hide password":"Show password",children:d?"🙈":"👁️"})]}),i.confirmPassword&&e.jsx("span",{className:"error-message",children:i.confirmPassword})]}),e.jsxs("div",{className:"form-group",children:[e.jsxs("label",{className:"checkbox-label",children:[e.jsx("input",{type:"checkbox",className:"checkbox",checked:b,onChange:p=>z(p.target.checked),disabled:o}),e.jsxs("span",{className:"checkbox-text",children:["I agree to the"," ",e.jsx(h,{to:"/terms",className:"terms-link",children:"Terms of Service"})," ","and"," ",e.jsx(h,{to:"/privacy",className:"terms-link",children:"Privacy Policy"})]})]}),i.terms&&e.jsx("span",{className:"error-message",children:i.terms})]}),e.jsx("button",{type:"submit",disabled:o,className:`submit-btn ${o?"loading":""}`,children:o?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"loading-spinner"}),"Creating Account..."]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"btn-icon",children:"🎉"}),"Create Account"]})}),e.jsx("div",{className:"form-footer",children:e.jsxs("p",{className:"login-prompt",children:["Already have an account?"," ",e.jsx(h,{to:"/login",className:"login-link",children:"Sign in here"})]})})]})]})]})}),e.jsx("style",{jsx:!0,children:`
        .signup-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
          padding: var(--spacing-xl) 0;
        }

        .signup-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          max-width: 1200px;
          margin: 0 auto;
          background-color: var(--bg-primary);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-lg);
          overflow: hidden;
          border: 1px solid var(--border-color);
        }

        .welcome-section {
          background: linear-gradient(135deg, var(--primary-color), var(--primary-hover));
          color: var(--text-light);
          padding: var(--spacing-2xl);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .welcome-content {
          max-width: 400px;
        }

        .welcome-title {
          font-size: var(--font-size-2xl);
          font-weight: 700;
          margin-bottom: var(--spacing-lg);
          color: var(--text-light);
        }

        .welcome-description {
          font-size: var(--font-size-base);
          line-height: 1.6;
          margin-bottom: var(--spacing-xl);
          opacity: 0.9;
        }

        .benefits-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-xl);
        }

        .benefit-item {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-md);
        }

        .benefit-icon {
          font-size: var(--font-size-xl);
          flex-shrink: 0;
          margin-top: var(--spacing-xs);
        }

        .benefit-content {
          flex: 1;
        }

        .benefit-title {
          font-size: var(--font-size-base);
          font-weight: 600;
          margin-bottom: var(--spacing-xs);
          color: var(--text-light);
        }

        .benefit-description {
          font-size: var(--font-size-sm);
          opacity: 0.8;
          line-height: 1.5;
        }

        .testimonial {
          background-color: rgba(255, 255, 255, 0.1);
          padding: var(--spacing-lg);
          border-radius: var(--radius-lg);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .testimonial-text {
          font-size: var(--font-size-sm);
          font-style: italic;
          line-height: 1.6;
          margin-bottom: var(--spacing-md);
          opacity: 0.9;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
        }

        .author-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: var(--font-size-sm);
        }

        .author-info {
          flex: 1;
        }

        .author-name {
          font-weight: 600;
          font-size: var(--font-size-sm);
        }

        .author-title {
          font-size: var(--font-size-xs);
          opacity: 0.8;
        }

        .signup-form-section {
          padding: var(--spacing-2xl);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .form-header {
          text-align: center;
          margin-bottom: var(--spacing-2xl);
        }

        .form-title {
          font-size: var(--font-size-3xl);
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: var(--spacing-md);
          background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .form-subtitle {
          color: var(--text-secondary);
          font-size: var(--font-size-lg);
        }

        .signup-form {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .form-label {
          font-weight: 600;
          color: var(--text-primary);
          font-size: var(--font-size-sm);
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .form-input {
          width: 100%;
          padding: var(--spacing-md) var(--spacing-lg);
          padding-right: 3rem;
          border: 2px solid var(--border-color);
          border-radius: var(--radius-lg);
          font-size: var(--font-size-base);
          transition: all var(--transition-fast);
          background-color: var(--bg-primary);
          color: var(--text-primary);
        }

        .form-input:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }

        .form-input.error {
          border-color: var(--error-color);
        }

        .form-input:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .input-icon {
          position: absolute;
          right: var(--spacing-md);
          font-size: var(--font-size-lg);
          color: var(--text-muted);
          pointer-events: none;
        }

        .password-toggle {
          position: absolute;
          right: var(--spacing-md);
          background: none;
          border: none;
          font-size: var(--font-size-lg);
          cursor: pointer;
          padding: var(--spacing-xs);
          border-radius: var(--radius-sm);
          transition: background-color var(--transition-fast);
        }

        .password-toggle:hover {
          background-color: var(--bg-secondary);
        }

        .password-strength {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          margin-top: var(--spacing-xs);
        }

        .strength-bar {
          flex: 1;
          height: 4px;
          background-color: var(--bg-tertiary);
          border-radius: 2px;
          overflow: hidden;
        }

        .strength-fill {
          height: 100%;
          transition: all var(--transition-normal);
          border-radius: 2px;
        }

        .strength-text {
          font-size: var(--font-size-xs);
          font-weight: 500;
          min-width: 80px;
          text-align: right;
        }

        .error-message {
          color: var(--error-color);
          font-size: var(--font-size-sm);
          font-weight: 500;
        }

        .checkbox-label {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-sm);
          cursor: pointer;
          font-size: var(--font-size-sm);
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .checkbox {
          width: 16px;
          height: 16px;
          accent-color: var(--primary-color);
          margin-top: 2px;
          flex-shrink: 0;
        }

        .terms-link {
          color: var(--primary-color);
          font-weight: 500;
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .terms-link:hover {
          color: var(--primary-hover);
          text-decoration: underline;
        }

        .submit-btn {
          background: linear-gradient(135deg, var(--primary-color), var(--primary-hover));
          color: var(--text-light);
          border: none;
          padding: var(--spacing-md) var(--spacing-xl);
          border-radius: var(--radius-lg);
          font-size: var(--font-size-base);
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-normal);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-sm);
          box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
          margin-top: var(--spacing-md);
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .loading-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid var(--text-light);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .btn-icon {
          font-size: var(--font-size-lg);
        }

        .form-footer {
          text-align: center;
          margin-top: var(--spacing-lg);
        }

        .login-prompt {
          color: var(--text-secondary);
          font-size: var(--font-size-sm);
        }

        .login-link {
          color: var(--primary-color);
          font-weight: 600;
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .login-link:hover {
          color: var(--primary-hover);
          text-decoration: underline;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .signup-container {
            grid-template-columns: 1fr;
            margin: var(--spacing-lg);
          }

          .signup-form-section {
            padding: var(--spacing-xl);
          }

          .welcome-section {
            padding: var(--spacing-xl);
          }

          .form-title {
            font-size: var(--font-size-2xl);
          }

          .welcome-title {
            font-size: var(--font-size-xl);
          }

          .benefits-list {
            gap: var(--spacing-md);
          }
        }

        @media (max-width: 480px) {
          .signup-page {
            padding: var(--spacing-md) 0;
          }

          .signup-container {
            margin: var(--spacing-md);
          }

          .signup-form-section,
          .welcome-section {
            padding: var(--spacing-lg);
          }

          .form-title {
            font-size: var(--font-size-xl);
          }

          .welcome-title {
            font-size: var(--font-size-lg);
          }

          .benefit-item {
            flex-direction: column;
            text-align: center;
            gap: var(--spacing-sm);
          }

          .testimonial-author {
            flex-direction: column;
            text-align: center;
            gap: var(--spacing-sm);
          }
        }
      `})]})},R=({children:a,isAuthenticated:s,redirectTo:c="/login",requireAuth:i=!0})=>{const r=I();return i&&!s?e.jsx(H,{to:c,state:{from:r.pathname},replace:!0}):a};function Ya(){const[a,s]=v.useState(null),[c,i]=v.useState(!0),[r,o]=v.useState(!1);v.useEffect(()=>{(async()=>{try{if(localStorage.getItem("token")){const u=await w.verifyToken();u.success?(s(u.data.user),o(!0)):localStorage.removeItem("token")}}catch(d){console.error("Auth check failed:",d),localStorage.removeItem("token")}finally{i(!1)}})()},[]);const l=(g,d)=>{s(g),o(!0),localStorage.setItem("token",d)},x=()=>{s(null),o(!1),localStorage.removeItem("token")};return c?e.jsxs("div",{className:"loading-container",children:[e.jsx("div",{className:"loading-spinner"}),e.jsx("p",{children:"Loading..."})]}):e.jsxs("div",{className:"App",children:[e.jsx(Be,{user:a,isAuthenticated:r,onLogout:x}),e.jsx("main",{className:"main-content",children:e.jsxs(W,{children:[e.jsx(_,{path:"/",element:e.jsx(T,{user:a,isAuthenticated:r})}),e.jsx(_,{path:"/about",element:e.jsx(Oa,{})}),e.jsx(_,{path:"/contact",element:e.jsx(Ua,{})}),e.jsx(_,{path:"/login",element:r?e.jsx(T,{user:a,isAuthenticated:r}):e.jsx(Ha,{onLogin:l})}),e.jsx(_,{path:"/signup",element:r?e.jsx(T,{user:a,isAuthenticated:r}):e.jsx(Wa,{onLogin:l})}),e.jsx(_,{path:"/profile",element:e.jsx(R,{isAuthenticated:r,children:e.jsxs("div",{className:"profile-page",children:[e.jsx("h1",{children:"User Profile"}),e.jsxs("div",{className:"profile-info",children:[e.jsxs("h2",{children:["Welcome, ",a==null?void 0:a.name,"!"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Email:"})," ",a==null?void 0:a.email]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Bio:"})," ",(a==null?void 0:a.bio)||"No bio provided"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Member since:"})," ",a!=null&&a.createdAt?new Date(a.createdAt).toLocaleDateString():"Unknown"]})]})]})})}),e.jsx(_,{path:"/dashboard",element:e.jsx(R,{isAuthenticated:r,children:e.jsxs("div",{className:"dashboard-page",children:[e.jsx("h1",{children:"Dashboard"}),e.jsxs("p",{children:["Welcome to your dashboard, ",a==null?void 0:a.name,"!"]}),e.jsxs("div",{className:"dashboard-stats",children:[e.jsxs("div",{className:"stat-card",children:[e.jsx("h3",{children:"Your Posts"}),e.jsx("p",{children:"0"})]}),e.jsxs("div",{className:"stat-card",children:[e.jsx("h3",{children:"Comments"}),e.jsx("p",{children:"0"})]}),e.jsxs("div",{className:"stat-card",children:[e.jsx("h3",{children:"Views"}),e.jsx("p",{children:"0"})]})]})]})})}),e.jsx(_,{path:"*",element:e.jsxs("div",{className:"not-found",children:[e.jsx("h1",{children:"404 - Page Not Found"}),e.jsx("p",{children:"The page you are looking for does not exist."})]})})]})}),e.jsx("footer",{className:"app-footer",children:e.jsxs("div",{className:"footer-content",children:[e.jsx("p",{children:"© 2024 MERN Blog App. All rights reserved."}),e.jsx("p",{children:"Built with React, Node.js, Express, and MongoDB"})]})})]})}E.createRoot(document.getElementById("root")).render(e.jsx(U.StrictMode,{children:e.jsx(Y,{children:e.jsx(Ya,{})})}));
//# sourceMappingURL=index-C43J7hpI.js.map
