(function(){
  var NAME = "AutoTalk AI";
  var PHONE_DISPLAY = "+92 327 1288575";
  var PHONE_TEL = "+923271288575";
  var WA = "923271288575";
  var EMAIL = "khadijailyas31@gmail.com";
  var HOURS = "Mon-Sat, 9 am to 5 pm";

  var pages = [["index.html","Home"],["services.html","Services"],["about.html","About"],["pricing.html","Pricing"],["contact.html","Contact"]];
  var cur = location.pathname.split("/").pop() || "index.html";

  // ---------- Header ----------
  var h = document.getElementById("site-header");
  if(h){
    var links = pages.map(function(p){return '<a href="'+p[0]+'"'+(p[0]===cur?' class="on"':'')+'>'+p[1]+'</a>';}).join("");
    h.innerHTML = '<header><div class="wrap"><a class="logo" href="index.html"><i></i>'+NAME+'</a>'+
      '<button class="burger" aria-label="Menu" id="burger">&#9776;</button>'+
      '<nav id="nav">'+links+'<a href="contact.html" class="cta">Get a demo</a></nav></div></header>';
    document.getElementById("burger").onclick=function(){document.getElementById("nav").classList.toggle("open");};
  }

  // ---------- Footer ----------
  var f = document.getElementById("site-footer");
  if(f){
    f.innerHTML = '<footer><div class="wrap"><div class="fgrid">'+
      '<div><h4>'+NAME+'</h4><p>AI call agents and chatbots that answer your customers 24/7.</p><a class="fbtn" href="contact.html">Contact us</a></div>'+
      '<div><h4>Pages</h4>'+pages.map(function(p){return '<a class="flink2" href="'+p[0]+'">'+p[1]+'</a>';}).join("")+'</div>'+
      '<div><h4>Contact</h4>'+
        '<a class="flink" href="tel:'+PHONE_TEL+'">'+PHONE_DISPLAY+'</a>'+
        '<a class="flink" href="mailto:'+EMAIL+'">'+EMAIL+'</a>'+
        '<span class="ftime">'+HOURS+'</span>'+
        '<a class="fbtn wa" href="https://wa.me/'+WA+'" target="_blank" rel="noopener">WhatsApp us</a></div>'+
      '</div><div class="copy">&copy; 2026 '+NAME+'. All rights reserved.</div></div></footer>';
  }

  // ---------- Contact form ----------
  var form = document.getElementById("quote-form");
  if(form){
    form.addEventListener("submit",function(e){
      e.preventDefault();
      var t = "Name: "+document.getElementById("name").value+"\nPhone: "+document.getElementById("phone").value+"\nRequest: "+document.getElementById("msg").value;
      window.open("https://wa.me/"+WA+"?text="+encodeURIComponent(t),"_blank");
    });
  }

  // ---------- Cat chat button ----------
  var CAT = '<svg viewBox="225 70 300 310" role="img" aria-hidden="true">'+
  '<ellipse cx="340" cy="372" rx="130" ry="12" fill="#241F3D"/>'+
  '<g><animateTransform attributeName="transform" type="rotate" values="-7 412 336;10 412 336;-7 412 336" dur="2.6s" repeatCount="indefinite"/><path d="M412 340 C 486 340, 500 266, 462 224" fill="none" stroke="#8B5CF6" stroke-width="20" stroke-linecap="round"/><path d="M412 340 C 486 340, 500 266, 462 224" fill="none" stroke="#1A1530" stroke-width="13" stroke-linecap="round"/></g>'+
  '<g class="cat-body"><ellipse cx="340" cy="296" rx="88" ry="72" fill="#1A1530" stroke="#8B5CF6" stroke-width="3"/><ellipse cx="340" cy="316" rx="40" ry="46" fill="#2A2350"/><path d="M290 270 q-8 14 -2 28 M392 270 q8 14 2 28 M312 250 q-4 10 0 20 M370 250 q4 10 0 20" fill="none" stroke="#8B5CF6" stroke-width="2" stroke-linecap="round" opacity="0.4"/></g>'+
  '<g class="cat-head"><ellipse cx="262" cy="206" rx="16" ry="20" fill="#1A1530" stroke="#8B5CF6" stroke-width="3"/><ellipse cx="418" cy="206" rx="16" ry="20" fill="#1A1530" stroke="#8B5CF6" stroke-width="3"/>'+
  '<polygon points="268,152 256,84 326,126" fill="#1A1530" stroke="#8B5CF6" stroke-width="3" stroke-linejoin="round"/><polygon points="277,136 270,104 306,126" fill="#4C2A9E"/>'+
  '<g><animateTransform attributeName="transform" type="rotate" values="0 412 130;0 412 130;-8 412 130;0 412 130" keyTimes="0;0.7;0.76;1" dur="4s" repeatCount="indefinite"/><polygon points="412,152 424,84 354,126" fill="#1A1530" stroke="#8B5CF6" stroke-width="3" stroke-linejoin="round"/><polygon points="403,136 410,104 374,126" fill="#4C2A9E"/></g>'+
  '<ellipse cx="340" cy="192" rx="84" ry="70" fill="#1A1530" stroke="#8B5CF6" stroke-width="3"/><path d="M340 128 L340 150 M322 132 L326 150 M358 132 L354 150" stroke="#8B5CF6" stroke-width="3" stroke-linecap="round" opacity="0.55" fill="none"/><ellipse cx="340" cy="218" rx="28" ry="19" fill="#2A2350"/>'+
  '<g class="cat-eyes"><ellipse cx="308" cy="188" rx="16" ry="17" fill="#C4B5FD"><animate attributeName="ry" values="17;17;1;17" keyTimes="0;0.92;0.96;1" dur="4s" repeatCount="indefinite"/></ellipse><ellipse cx="372" cy="188" rx="16" ry="17" fill="#C4B5FD"><animate attributeName="ry" values="17;17;1;17" keyTimes="0;0.92;0.96;1" dur="4s" repeatCount="indefinite"/></ellipse><ellipse cx="308" cy="189" rx="4.5" ry="13" fill="#07060C"/><ellipse cx="372" cy="189" rx="4.5" ry="13" fill="#07060C"/><circle cx="313" cy="182" r="3.5" fill="#fff"/><circle cx="377" cy="182" r="3.5" fill="#fff"/></g>'+
  '<path d="M332 208 L348 208 L340 219 Z" fill="#8B5CF6" stroke="#8B5CF6" stroke-width="2" stroke-linejoin="round"/><path d="M340 219 C 340 231, 326 233, 320 226 M340 219 C 340 231, 354 233, 360 226" fill="none" stroke="#C4B5FD" stroke-width="2.2" stroke-linecap="round"/>'+
  '<g><animateTransform attributeName="transform" type="rotate" values="0 340 216;-3 340 216;0 340 216;3 340 216;0 340 216" dur="3s" repeatCount="indefinite"/><path d="M300 212 L246 200 M300 220 L246 224 M300 228 L252 246 M380 212 L434 200 M380 220 L434 224 M380 228 L428 246" stroke="#C4B5FD" stroke-width="1.8" stroke-linecap="round" opacity="0.8"/></g></g>'+
  '<g><ellipse cx="308" cy="358" rx="28" ry="15" fill="#1A1530" stroke="#8B5CF6" stroke-width="3"/><ellipse cx="372" cy="358" rx="28" ry="15" fill="#1A1530" stroke="#8B5CF6" stroke-width="3"/><path d="M300 352 v10 M312 352 v10 M364 352 v10 M376 352 v10" stroke="#8B5CF6" stroke-width="2" stroke-linecap="round" opacity="0.6"/></g>'+
  '<g fill="#C4B5FD" font-weight="500" font-family="Arial,sans-serif"><text class="cat-z" x="430" y="196" font-size="22">z</text><text class="cat-z" x="456" y="162" font-size="28" style="animation-delay:.8s">z</text><text class="cat-z" x="486" y="124" font-size="34" style="animation-delay:1.6s">Z</text></g></svg>';

  var box = document.createElement("div");
  box.innerHTML =
    '<div id="cat-bubble">Hi! How can I help?</div>'+
    '<button id="chat-btn" aria-label="Chat with us">'+CAT+'</button>'+
    '<div id="chat" role="dialog" aria-label="Chat"><div class="ch-head"><div><b>'+NAME+' Assistant</b><small>Auto-reply &middot; online</small></div><button id="chat-x" aria-label="Close">&times;</button></div>'+
    '<div class="ch-body" id="ch-body"></div>'+
    '<div class="quick" id="ch-quick"></div>'+
    '<form class="ch-form" id="ch-form"><input id="ch-in" placeholder="Type your message..." autocomplete="off"><button aria-label="Send">&#10148;</button></form></div>';
  document.body.appendChild(box);

  var btn = document.getElementById("chat-btn");
  var bubble = document.getElementById("cat-bubble");
  var chatEl = document.getElementById("chat");
  var body = document.getElementById("ch-body");
  var quick = document.getElementById("ch-quick");
  var opened = false, sleeping = false, last = Date.now(), bubbleTimer = null;

  function showBubble(ms){
    if(chatEl.classList.contains("open")) return;
    bubble.classList.add("show");
    clearTimeout(bubbleTimer);
    bubbleTimer = setTimeout(function(){ bubble.classList.remove("show"); }, ms);
  }
  function hideBubble(){ clearTimeout(bubbleTimer); bubble.classList.remove("show"); }

  function sleepCat(){
    if(sleeping || chatEl.classList.contains("open")) return;
    sleeping = true;
    btn.classList.remove("stretch");
    btn.classList.add("sleep");
    hideBubble();
  }
  function wakeCat(){
    last = Date.now();
    if(!sleeping) return;
    sleeping = false;
    btn.classList.remove("sleep");
    btn.classList.add("stretch");
    setTimeout(function(){ btn.classList.remove("stretch"); }, 1100);
    showBubble(4000);
  }
  ["scroll","wheel","touchmove","keydown"].forEach(function(ev){
    window.addEventListener(ev, wakeCat, {passive:true});
  });
  setInterval(function(){
    if(!sleeping && Date.now() - last > 6000) sleepCat();
  }, 1000);
  setTimeout(function(){ showBubble(5000); }, 1500);

  // ---------- Chat logic (English, Roman Urdu if the customer writes it) ----------
  function add(t,who){
    var d = document.createElement("div");
    d.className = "cm "+who;
    d.innerHTML = t;
    body.appendChild(d);
    body.scrollTop = body.scrollHeight;
  }
  function reply(t){
    var typing = document.createElement("div");
    typing.className="cm bot"; typing.textContent="...";
    body.appendChild(typing); body.scrollTop = body.scrollHeight;
    setTimeout(function(){ typing.remove(); add(t,"bot"); }, 600);
  }
  function wa(lang){
    return '<a href="https://wa.me/'+WA+'" target="_blank" rel="noopener">'+(lang==="ro" ? "WhatsApp par message karein" : "message us on WhatsApp")+'</a>';
  }

  var R = {
    hello:{
      en:"Hi! How can I help you today?",
      ro:"Hi! Main aap ki kya madad kar sakta hoon?"},
    how:{
      en:"I'm doing great, thank you for asking! How can I help you today?",
      ro:"Main bilkul theek hoon, shukriya! Aap ki kya madad kar sakta hoon?"},
    services:{
      en:"We build <b>AI call agents</b> (they answer calls and book appointments), <b>AI chatbots</b> for websites and WhatsApp, and <b>outbound calling</b>. See the <a href=\"services.html\">Services page</a>.",
      ro:"Hum <b>AI call agents</b>, website aur WhatsApp ke <b>AI chatbots</b>, aur <b>outbound calling</b> banate hain. Dekhein: <a href=\"services.html\">Services page</a>."},
    price:{
      en:"Our prices start from <b>$149</b> for a chatbot, <b>$299</b> for a call agent and <b>$599</b> for the full package. The exact price depends on your needs. See the <a href=\"pricing.html\">Pricing page</a>.",
      ro:"Hamari prices chatbot ke liye <b>$149</b>, call agent ke liye <b>$299</b> aur full package ke liye <b>$599</b> se shuru hoti hain. Asli price aap ki zaroorat par depend karti hai. <a href=\"pricing.html\">Pricing page</a>."},
    hours:{
      en:"Our team is available Monday to Saturday, 9 am to 5 pm. This assistant is online 24/7.",
      ro:"Hamari team Monday se Saturday, subah 9 se shaam 5 baje tak available hai. Ye assistant 24/7 online hai."},
    demo:{
      en:"To book a free demo, fill in the form on the <a href=\"contact.html\">Contact page</a> or ",
      ro:"Free demo book karne ke liye <a href=\"contact.html\">Contact page</a> par form bhar dein, ya ",
      wa:true},
    human:{
      en:"You can call us at <a href=\"tel:"+PHONE_TEL+"\">"+PHONE_DISPLAY+"</a>, email <a href=\"mailto:"+EMAIL+"\">"+EMAIL+"</a>, or ",
      ro:"Aap seedha call karein: <a href=\"tel:"+PHONE_TEL+"\">"+PHONE_DISPLAY+"</a>, email karein <a href=\"mailto:"+EMAIL+"\">"+EMAIL+"</a>, ya ",
      wa:true},
    lang:{
      en:"Yes! We can build your agent in English or in other languages you need. Tell us what you have in mind.",
      ro:"Ji! Hum agent English ya aap ki zaroorat ki doosri zubaanon mein bana sakte hain."},
    thanks:{
      en:"You're welcome! Let me know if you have any other questions.",
      ro:"Aap ka shukriya! Aur kuch poochna ho to likh dein."},
    fallback:{
      en:"I'm replying on behalf of the owner, who is away right now. Please leave your question and phone number and the team will get back to you. Or ",
      ro:"Main abhi owner ki taraf se jawab de raha hoon. Apna sawal aur number likh dein, team jald contact karegi. Ya ",
      wa:true}
  };

  function detectLang(q){
    if(/\b(kya|kitn[a-z]*|kab|hai|hain|aap|ap|mujhe|mujhy|karte|karni|chahiye|chahie|assalam|shukria|theek|nahi|kaise|batao|bata|paisa|qeemat|zaroorat|zarurat|ji|jee|acha|achha|mein|hum|apka|aapka|wali|wala|salam)\b/i.test(q)) return "ro";
    return "en";
  }
  function intent(q){
    var s = q.toLowerCase();
    if(/(how are you|how r u|how do you do|kaise ho|kese ho|kaisay)/.test(s)) return "how";
    if(/(service|what do you|chatbot|chat bot|call agent|ai agent|agents?\b|kya karte|kaam)/.test(s)) return "services";
    if(/(price|pricing|cost|rate|charge|fee|how much|kitn|paisa|qeemat)/.test(s)) return "price";
    if(/(time|timing|hour|open|available|when|kab|working)/.test(s)) return "hours";
    if(/(demo|book|appointment|meeting|trial)/.test(s)) return "demo";
    if(/(phone|call me|number|contact|email|whatsapp|human|person|team|talk)/.test(s)) return "human";
    if(/(language|english|urdu|zubaan)/.test(s)) return "lang";
    if(/(thank|thanks|shukria)/.test(s)) return "thanks";
    if(/^(hi|hello|hey|hii|salam|assalam|aoa|good (morning|afternoon|evening|night))/.test(s) && s.length<30) return "hello";
    return "fallback";
  }
  function build(key,lang,q){
    if(key==="hello"){
      var m = /good (morning|afternoon|evening|night)/i.exec(q||"");
      if(m){
        var g = "Good "+m[1].toLowerCase();
        return lang==="ro" ? g+"! Main aap ki kya madad kar sakta hoon?" : g+"! How can I help you today?";
      }
    }
    var r = R[key], t = r[lang];
    if(r.wa) t += wa(lang) + ".";
    return t;
  }

  [["Services","services"],["Pricing","price"],["Working hours","hours"],["Book a demo","demo"],["Talk to us","human"]].forEach(function(b){
    var el = document.createElement("button");
    el.type="button"; el.textContent=b[0];
    el.onclick=function(){ add(b[0],"me"); reply(build(b[1],"en")); };
    quick.appendChild(el);
  });

  function toggle(){
    chatEl.classList.toggle("open");
    if(chatEl.classList.contains("open")){
      hideBubble();
      if(sleeping){ sleeping=false; btn.classList.remove("sleep"); btn.classList.add("stretch"); setTimeout(function(){btn.classList.remove("stretch");},1100); }
      last = Date.now();
      if(!opened){
        opened = true;
        reply("Hi! I'm the AutoTalk AI assistant. The owner is away right now, but I can help. Choose an option below or type your question.");
      }
    } else { last = Date.now(); }
  }
  btn.onclick = toggle;
  document.getElementById("chat-x").onclick = toggle;
  document.getElementById("ch-form").addEventListener("submit",function(e){
    e.preventDefault();
    var i = document.getElementById("ch-in");
    var v = i.value.trim();
    if(!v) return;
    add(v.replace(/</g,"&lt;"),"me");
    i.value="";
    reply(build(intent(v), detectLang(v), v));
  });
})();
