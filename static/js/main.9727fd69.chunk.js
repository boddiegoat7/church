(this["webpackJsonpnavbar-dropdown-v1"]=this["webpackJsonpnavbar-dropdown-v1"]||[]).push([[0],[,,,,,,,function(e,a,t){},,,,,,,function(e,a,t){},,,function(e,a,t){e.exports=t(37)},,,,,function(e,a,t){},,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(15),c=t.n(r),s=t(11),m=(t(22),t(1)),i=["btn--primary","btn--outline","btn--test"],o=["btn--medium","btn--large"],E=function(e){var a=e.children,t=e.type,n=e.onClick,r=e.buttonStyle,c=e.buttonSize,s=i.includes(r)?r:i[0],E=o.includes(c)?c:o[0];return l.a.createElement(m.b,{to:"/contact-us",className:"btn-mobile"},l.a.createElement("button",{className:"btn ".concat(s," ").concat(E),onClick:n,type:t},a))};t(31);var u=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!0),i=Object(s.a)(c,2),o=i[0],u=i[1],b=function(){return r(!1)},g=function(){window.innerWidth<=960?u(!1):u(!0)};return Object(n.useEffect)((function(){g()}),[]),window.addEventListener("resize",g),l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{className:"navbar-container"},l.a.createElement(m.b,{to:"/",className:"navbar-logo",onClick:b},"TRVL",l.a.createElement("i",{class:"fab fa-typo3"})),l.a.createElement("div",{className:"menu-icon",onClick:function(){return r(!t)}},l.a.createElement("i",{className:t?"fas fa-times":"fas fa-bars"})),l.a.createElement("ul",{className:t?"nav-menu active":"nav-menu"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{to:"/",className:"nav-links",onClick:b},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{to:"/events",className:"nav-links",onClick:b},"Events")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{to:"/prayer",className:"nav-links",onClick:b},"Prayer")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{to:"/minestry",className:"nav-links",onClick:b},"Minestry")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{to:"/about-us",className:"nav-links",onClick:b},"About Us")),l.a.createElement("li",null,l.a.createElement(m.b,{to:"/contact-us",className:"nav-links-mobile",onClick:b},"Contact Us"))),o&&l.a.createElement(E,{buttonStyle:"btn--outline"},"Contact Us"))))};t(7),t(14);var b=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"cards__item"},l.a.createElement(m.b,{className:"cards__item__link",to:e.path},l.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},l.a.createElement("img",{className:"cards__item__img",alt:"Travel Image",src:e.src})),l.a.createElement("div",{className:"cards__item__info"},l.a.createElement("h5",{className:"cards__item__text"},e.text)))))};var g=function(){return l.a.createElement("div",{className:"cards"},l.a.createElement("h1",null,"Come Join A Community Of Fellowship!"),l.a.createElement("div",{className:"cards__container"},l.a.createElement("div",{className:"cards__wrapper"},l.a.createElement("ul",{className:"cards__items"},l.a.createElement(b,{src:"images/img-9.jpg",text:"Weekly Services Upcoming Events",label:"Events",path:"/events"}),l.a.createElement(b,{src:"images/img-2.jpg",text:"Corporate Prayer & Fasting Guide",label:"Prayer",path:"/prayer"})),l.a.createElement("ul",{className:"cards__items"},l.a.createElement(b,{src:"images/img-3.jpg",text:"Meet The Leaders Of The Congragation",label:"Minestry",path:"/minestry"}),l.a.createElement(b,{src:"images/img-4.jpg",text:"Our Community Vision",label:"About Us",path:"/about-us"}),l.a.createElement(b,{src:"images/img-8.jpg",text:"Ride through the Sahara Desert on a guided camel tour",label:"Contact Us",path:"/contact-us"})))))};t(32);var p=function(){return l.a.createElement("div",{className:"hero-container"},l.a.createElement("video",{src:"/videos/video-1.mp4",autoPlay:!0,loop:!0,muted:!0}),l.a.createElement("h1",null,"THE DIVINE CHURCH"),l.a.createElement("p",null,"Building Strong Families in Christ"),l.a.createElement("div",{className:"hero-btns"},l.a.createElement(E,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large"},"Donate"),l.a.createElement(E,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",onClick:console.log("hey")},"Service Times ",l.a.createElement("i",{className:"far fa-play-circle"}))))};t(33);var v=function(){return l.a.createElement("div",{className:"footer-container"},l.a.createElement("section",{className:"footer-subscription"},l.a.createElement("p",{className:"footer-subscription-heading"},"Join the Adventure newsletter to receive our best vacation deals"),l.a.createElement("p",{className:"footer-subscription-text"},"You can unsubscribe at any time."),l.a.createElement("div",{className:"input-areas"},l.a.createElement("form",null,l.a.createElement("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),l.a.createElement(E,{buttonStyle:"btn--outline"},"Subscribe")))),l.a.createElement("div",{class:"footer-links"},l.a.createElement("div",{className:"footer-link-wrapper"},l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"About Us"),l.a.createElement(m.b,{to:"/sign-up"},"How it works"),l.a.createElement(m.b,{to:"/"},"Testimonials"),l.a.createElement(m.b,{to:"/"},"Careers"),l.a.createElement(m.b,{to:"/"},"Investors"),l.a.createElement(m.b,{to:"/"},"Terms of Service")),l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"Contact Us"),l.a.createElement(m.b,{to:"/"},"Contact"),l.a.createElement(m.b,{to:"/"},"Support"),l.a.createElement(m.b,{to:"/"},"Destinations"),l.a.createElement(m.b,{to:"/"},"Sponsorships"))),l.a.createElement("div",{className:"footer-link-wrapper"},l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"Videos"),l.a.createElement(m.b,{to:"/"},"Submit Video"),l.a.createElement(m.b,{to:"/"},"Ambassadors"),l.a.createElement(m.b,{to:"/"},"Agency"),l.a.createElement(m.b,{to:"/"},"Influencer")),l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"Social Media"),l.a.createElement(m.b,{to:"/"},"Instagram"),l.a.createElement(m.b,{to:"/"},"Facebook"),l.a.createElement(m.b,{to:"/"},"Youtube"),l.a.createElement(m.b,{to:"/"},"Twitter")))),l.a.createElement("section",{class:"social-media"},l.a.createElement("div",{class:"social-media-wrap"},l.a.createElement("div",{class:"footer-logo"},l.a.createElement(m.b,{to:"/",className:"social-logo"},"TRVL",l.a.createElement("i",{class:"fab fa-typo3"}))),l.a.createElement("small",{class:"website-rights"},"TRVL \xa9 2020"),l.a.createElement("div",{class:"social-icons"},l.a.createElement(m.b,{class:"social-icon-link facebook",to:"/",target:"_blank","aria-label":"Facebook"},l.a.createElement("i",{class:"fab fa-facebook-f"})),l.a.createElement(m.b,{class:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram"},l.a.createElement("i",{class:"fab fa-instagram"})),l.a.createElement(m.b,{class:"social-icon-link youtube",to:"/",target:"_blank","aria-label":"Youtube"},l.a.createElement("i",{class:"fab fa-youtube"})),l.a.createElement(m.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter"},l.a.createElement("i",{class:"fab fa-twitter"})),l.a.createElement(m.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"LinkedIn"},l.a.createElement("i",{class:"fab fa-linkedin"}))))))};var d=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p,null),l.a.createElement(g,null),l.a.createElement(v,null))},N=t(2);t(34);var f=function(){return l.a.createElement("div",{className:"event"},l.a.createElement("h1",null,"Below are up coming Community Events!"),l.a.createElement("div",{className:"event__container"},l.a.createElement("div",{className:"event__wrapper"},l.a.createElement("ul",{className:"event__items"},l.a.createElement(b,{src:"images/img-2.jpg",text:" 6 am Intercessory Prayer Call Tel: (571) 525-1291 Access Code: 47-90-167 11 a.m. Worship Service (Doors open at 10:45 a.m.) ",label:"Sunday and Thursday Events"}),l.a.createElement(b,{src:"images/img-3.jpg",text:" 9pm - Intercessory Prayer Call Tel: (571) 525-1291 Access Code: 47-90-167 ",label:"Tuesday Events"}),l.a.createElement(b,{src:"images/img-3.jpg",text:" 7:00pm - Bible Study Doors open at 6:45 p.m. ",label:"Wednesday Events"})))),l.a.createElement("h1",null,"Below Is the Montly Event Calender For 2023!"),l.a.createElement("div",{className:"event__container"},l.a.createElement("div",{className:"event__wrapper"}),l.a.createElement("ul",{className:"event__items"},l.a.createElement(b,{src:"images/img-2.jpg",text:"COMEBACK FOR FUTURE ANOUNCEMENTS!",label:"January"}),l.a.createElement(b,{src:"images/img-3.jpg",text:"COMEBACK FOR FUTURE ANOUNCEMENTS!",label:"Febuary"})),l.a.createElement("ul",{className:"event__items"},l.a.createElement(b,{src:"images/img-4.jpg",text:"COMEBACK FOR FUTURE ANOUNCEMENTS!",label:"March"}),l.a.createElement(b,{src:"images/img-8.jpg",text:"COMEBACK FOR FUTURE ANOUNCEMENTS!",label:"April"})),l.a.createElement("ul",{className:"event__items"},l.a.createElement(b,{src:"images/img-4.jpg",text:"COMEBACK FOR FUTURE ANOUNCEMENTS!",label:"May"}),l.a.createElement(b,{src:"images/img-8.jpg",text:"COMEBACK FOR FUTURE ANOUNCEMENTS!",label:"June"})),l.a.createElement("ul",{className:"event__items"},l.a.createElement(b,{src:"images/img-4.jpg",text:"COMEBACK FOR FUTURE ANOUNCEMENTS!",label:"July"}),l.a.createElement(b,{src:"images/img-8.jpg",text:"COMEBACK FOR FUTURE ANOUNCEMENTS!",label:"August"})),l.a.createElement("ul",{className:"event__items"},l.a.createElement(b,{src:"images/img-4.jpg",text:"COMEBACK FOR FUTURE ANOUNCEMENTS!",label:"Septemebr"}),l.a.createElement(b,{src:"images/img-8.jpg",text:"COMEBACK FOR FUTURE ANOUNCEMENTS!",label:"October"})),l.a.createElement("ul",{className:"event__items"},l.a.createElement(b,{src:"images/img-4.jpg",text:"COMEBACK FOR FUTURE ANOUNCEMENTS!",label:"November"}),l.a.createElement(b,{src:"images/img-8.jpg",text:"COMEBACK FOR FUTURE ANOUNCEMENTS!",label:"December"}))))};t(35);var h=function(){return l.a.createElement("div",{className:"event-container"},l.a.createElement("img",{src:"images/img-1.jpg"}),l.a.createElement("h1",null,"Weekly Services Upcoming Events"))};var C=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h,null),l.a.createElement(f,null),l.a.createElement(v,null))};var y=function(){return l.a.createElement("div",{className:"cards"},l.a.createElement("h1",null,"Come Join A Community Of Fellowship!"),l.a.createElement("div",{className:"cards__container"},l.a.createElement("div",{className:"cards__wrapper"},l.a.createElement("ul",{className:"cards__items"},l.a.createElement(b,{src:"images/img-9.jpg",text:" 1. Improves your ability to hear from God (Ezra 8:21) 2. Builds you up spiritually (Matthew 4:2, 23, 24) 3. Lifts oppression and breaks demonic powers ( Mark 9:29, Isaiah 58: 6-8) 4. Leads you into a time of humility and repentance (Psalm 109:22-26) 5. Causes health to spring forth speedily (Isaiah 58:8)",label:"Events"}),l.a.createElement(b,{src:"images/img-2.jpg",text:"Corporate Prayer & Fasting Guide",label:"Prayer",path:"/prayer"})),l.a.createElement("ul",{className:"cards__items"},l.a.createElement(b,{src:"images/img-3.jpg",text:"Meet The Leaders Of The Congragation",label:"Minestry",path:"/minestry"}),l.a.createElement(b,{src:"images/img-4.jpg",text:"Our Community Vision",label:"About Us",path:"/about-us"}),l.a.createElement(b,{src:"images/img-8.jpg",text:"Ride through the Sahara Desert on a guided camel tour",label:"Contact Us",path:"/contact-us"})))))};t(36);var _=function(){return l.a.createElement("div",{className:"prayer-container"},l.a.createElement("img",{src:"images/img-1.jpg"}),l.a.createElement("h1",null,"CORPORATE PRAYER & FASTING GUIDE"),l.a.createElement("p",null,"I beseech you therefore; brethren, by the mercies of God, that you present your bodies a living sacrifice, holy, acceptable to God, which is your reasonable service. \u2014 Romans 12:1"))};var O=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement(y,null),l.a.createElement(v,null))};function U(){return l.a.createElement("h1",{className:"minestry"},"MINISTERS")}function k(){return l.a.createElement("h1",{className:"about"},"ABOUT")}function T(){return l.a.createElement("h1",{className:"contact"},"CONTACT US")}var A=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,null,l.a.createElement(u,null),l.a.createElement(N.a,{path:"/",exact:!0,component:d}),l.a.createElement(N.a,{path:"/events",component:C}),l.a.createElement(N.a,{path:"/prayer",component:O}),l.a.createElement(N.a,{path:"/minestry",component:U}),l.a.createElement(N.a,{path:"/about-us",component:k}),l.a.createElement(N.a,{path:"/contact-us",component:T})))};c.a.render(l.a.createElement(A,null),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.9727fd69.chunk.js.map