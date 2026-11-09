(function(){
  var NAME = "AutoTalk AI";
  var PHONE_DISPLAY = "+92 327 1288575";
  var PHONE_TEL = "+923271288575";
  var WA = "923271288575";
  var EMAIL = "youremail@gmail.com"; // yahan apni email likhein

  var pages = [["index.html","Home"],["services.html","Services"],["about.html","About"],["pricing.html","Pricing"],["contact.html","Contact"]];
  var cur = location.pathname.split("/").pop() || "index.html";

  // Header
  var h = document.getElementById("site-header");
  if(h){
    var links = pages.slice(0,4).map(function(p){return '<a href="'+p[0]+'"'+(p[0]===cur?' class="on"':'')+'>'+p[1]+'</a>';}).join("");
    h.innerHTML = '<header><div class="wrap"><a class="logo" href="index.html"><i></i>'+NAME+'</a>'+
      '<button class="burger" aria-label="Menu" id="burger">&#9776;</button>'+
      '<nav id="nav">'+links+'<a href="contact.html" class="cta">Get a demo</a></nav></div></header>';
    document.getElementById("burger").onclick=function(){document.getElementById("nav").classList.toggle("open");};
  }

  // Footer
  var f = document.getElementById("site-footer");
  if(f){
    f.innerHTML = '<footer><div class="wrap"><div class="fgrid">'+
      '<div><h4>'+NAME+'</h4><p>AI call agents and chatbots that answer your customers 24/7.</p></div>'+
      '<div><h4>Pages</h4>'+pages.map(function(p){return '<a href="'+p[0]+'">'+p[1]+'</a>';}).join("")+'</div>'+
      '<div><h4>Contact</h4><a href="tel:'+PHONE_TEL+'">'+PHONE_DISPLAY+'</a><a href="mailto:'+EMAIL+'">'+EMAIL+'</a><a>Mon-Sat, 9 am to 5 pm</a></div>'+
      '</div><div class="copy">&copy; 2026 '+NAME+'. All rights reserved.</div></div></footer>';
  }

  // Contact form
  var form = document.getElementById("quote-form");
  if(form){
    form.addEventListener("submit",function(e){
      e.preventDefault();
      var t = "Name: "+document.getElementById("name").value+"\nPhone: "+document.getElementById("phone").value+"\nRequest: "+document.getElementById("msg").value;
      window.open("https://wa.me/"+WA+"?text="+encodeURIComponent(t),"_blank");
    });
  }

  // ---------- Live chat widget (English + Urdu) ----------
  var box = document.createElement("div");
  box.innerHTML =
    '<button id="chat-btn" aria-label="Open chat">&#128172;</button>'+
    '<div id="chat" role="dialog" aria-label="Chat"><div class="ch-head"><div><b>'+NAME+' Assistant</b><small>Auto-reply &middot; online</small></div><button id="chat-x" aria-label="Close">&times;</button></div>'+
    '<div class="ch-body" id="ch-body"></div>'+
    '<div class="quick" id="ch-quick"></div>'+
    '<form class="ch-form" id="ch-form"><input id="ch-in" placeholder="Type your message / پیغام لکھیں" autocomplete="off"><button aria-label="Send">&#10148;</button></form></div>';
  document.body.appendChild(box);

  var body = document.getElementById("ch-body");
  var quick = document.getElementById("ch-quick");
  var opened = false;

  function add(t,who){
    var d = document.createElement("div");
    d.className = "cm "+who;
    d.innerHTML = t;
    if(who==="bot" && /[\u0600-\u06FF]/.test(t) && !/[A-Za-z]{4}/.test(t.replace(/<[^>]*>/g,""))) d.setAttribute("dir","rtl");
    body.appendChild(d);
    body.scrollTop = body.scrollHeight;
  }
  function reply(arr){
    var typing = document.createElement("div");
    typing.className="cm bot"; typing.textContent="...";
    body.appendChild(typing); body.scrollTop = body.scrollHeight;
    setTimeout(function(){
      typing.remove();
      (Array.isArray(arr)?arr:[arr]).forEach(function(t){ add(t,"bot"); });
    }, 600);
  }

  function wa(lang){
    var t = lang==="ur" ? "واٹس ایپ پر پیغام بھیجیں" : lang==="ro" ? "WhatsApp par message karein" : "Message us on WhatsApp";
    return '<a href="https://wa.me/'+WA+'" target="_blank" rel="noopener">'+t+'</a>';
  }

  // Replies in 3 styles: en (English), ro (Roman Urdu), ur (Urdu script)
  var R = {
    hello:{
      en:"Hello! I'm the AutoTalk AI assistant. Ask me about our services, pricing or booking a demo.",
      ro:"Assalam o Alaikum! Main AutoTalk AI ka assistant hoon. Services, pricing ya demo ke baare mein pooch sakte hain.",
      ur:"السلام علیکم! میں آٹو ٹاک اے آئی کا اسسٹنٹ ہوں۔ آپ خدمات، قیمت یا ڈیمو کے بارے میں پوچھ سکتے ہیں۔"},
    services:{
      en:"We build <b>AI call agents</b> (answer calls and book appointments), <b>AI chatbots</b> for websites and WhatsApp, and <b>outbound calling</b>. See the <a href=\"services.html\">Services page</a>.",
      ro:"Hum <b>AI call agents</b>, website aur WhatsApp ke <b>AI chatbots</b>, aur <b>outbound calling</b> banate hain. Dekhein: <a href=\"services.html\">Services page</a>.",
      ur:"ہم <b>اے آئی کال ایجنٹ</b>، ویب سائٹ اور واٹس ایپ کے <b>چیٹ بوٹس</b>، اور <b>آؤٹ باؤنڈ کالنگ</b> بناتے ہیں۔ تفصیل: <a href=\"services.html\">Services page</a>۔"},
    price:{
      en:"Our prices start from <b>$149</b> for a chatbot, <b>$299</b> for a call agent and <b>$599</b> for the full package. The exact price depends on your needs. See the <a href=\"pricing.html\">Pricing page</a>.",
      ro:"Hamari prices chatbot ke liye <b>$149</b>, call agent ke liye <b>$299</b> aur full package ke liye <b>$599</b> se shuru hoti hain. Asli price aapki zaroorat par depend karti hai. <a href=\"pricing.html\">Pricing page</a>.",
      ur:"ہماری قیمتیں چیٹ بوٹ کے لیے <b>$149</b>، کال ایجنٹ کے لیے <b>$299</b> اور فل پیکج کے لیے <b>$599</b> سے شروع ہوتی ہیں۔ اصل قیمت آپ کی ضرورت پر منحصر ہے۔ <a href=\"pricing.html\">Pricing page</a>۔"},
    hours:{
      en:"Our team is available Monday to Saturday, 9 am to 5 pm (PKT). This assistant is online 24/7.",
      ro:"Hamari team Monday se Saturday, subah 9 se shaam 5 baje (PKT) available hai. Ye assistant 24/7 online hai.",
      ur:"ہماری ٹیم پیر سے ہفتہ، صبح 9 سے شام 5 بجے (پاکستانی وقت) دستیاب ہے۔ یہ اسسٹنٹ 24/7 آن لائن ہے۔"},
    demo:{
      en:"To book a free demo, fill in the form on the <a href=\"contact.html\">Contact page</a> or ",
      ro:"Free demo book karne ke liye <a href=\"contact.html\">Contact page</a> par form bhar dein, ya ",
      ur:"مفت ڈیمو کے لیے <a href=\"contact.html\">Contact page</a> پر فارم بھریں، یا ",
      wa:true},
    human:{
      en:"You can call us at <a href=\"tel:"+PHONE_TEL+"\">"+PHONE_DISPLAY+"</a> or ",
      ro:"Aap seedha call karein: <a href=\"tel:"+PHONE_TEL+"\">"+PHONE_DISPLAY+"</a>, ya ",
      ur:"آپ ہمیں <a href=\"tel:"+PHONE_TEL+"\">"+PHONE_DISPLAY+"</a> پر کال کر سکتے ہیں، یا ",
      wa:true},
    lang:{
      en:"Yes! We can build your agent in English, Urdu, or both.",
      ro:"Ji! Hum agent English, Urdu ya dono zubaanon mein bana sakte hain.",
      ur:"جی ہاں! ہم آپ کا ایجنٹ انگریزی، اردو یا دونوں زبانوں میں بنا سکتے ہیں۔"},
    thanks:{
      en:"You're welcome! Let me know if you have any other questions.",
      ro:"Aap ka shukriya! Aur kuch poochna ho to likh dein.",
      ur:"آپ کا شکریہ! کچھ اور پوچھنا ہو تو لکھ دیں۔"},
    fallback:{
      en:"I'm replying on behalf of the owner, who is away right now. Please leave your question and phone number and the team will get back to you. Or ",
      ro:"Main abhi owner ki taraf se jawab de raha hoon. Apna sawal aur number likh dein, team jald contact karegi. Ya ",
      ur:"میں ابھی مالک کی طرف سے جواب دے رہا ہوں۔ اپنا سوال اور نمبر لکھ دیں، ٹیم جلد رابطہ کرے گی۔ یا ",
      wa:true}
  };

  function detectLang(q){
    if(/[\u0600-\u06FF]/.test(q)) return "ur";
    if(/\b(kya|kitn[a-z]*|kab|hai|hain|aap|ap|mujhe|mujhy|karte|karni|chahiye|chahie|salam|assalam|shukria|theek|nahi|kaise|batao|bata|paisa|qeemat|zaroorat|zarurat|ji|jee|acha|achha|mein|hum|apka|aapka|wali|wala)\b/i.test(q)) return "ro";
    return "en";
  }

  function intent(q){
    var s = q.toLowerCase();
    if(/(service|what do you|chatbot|chat bot|call agent|ai agent|agents?\b|کیا کرتے|خدمات|سروس|چیٹ|کال ایجنٹ|kya karte|kaam)/.test(s)) return "services";
    if(/(price|pricing|cost|rate|charge|fee|how much|kitn|paisa|qeemat|قیمت|ریٹ|کتنے|کتنا|فیس|پیسے)/.test(s)) return "price";
    if(/(time|timing|hour|open|available|when|kab|working|وقت|ٹائم|کب|کھلا)/.test(s)) return "hours";
    if(/(demo|book|appointment|meeting|trial|ڈیمو|بک)/.test(s)) return "demo";
    if(/(phone|call me|number|contact|email|whatsapp|human|person|team|talk|رابطہ|نمبر|فون|واٹس|انسان)/.test(s)) return "human";
    if(/(urdu|english|language|zubaan|زبان|اردو|انگریزی)/.test(s)) return "lang";
    if(/(thank|thanks|shukria|شکریہ)/.test(s)) return "thanks";
    if(/^(hi|hello|hey|salam|assalam|aoa|سلام|السلام|ہیلو)/.test(s) && s.length<25) return "hello";
    return "fallback";
  }

  function build(key,lang){
    var r = R[key];
    var t = r[lang];
    if(r.wa) t += wa(lang) + (lang==="ur" ? "۔" : ".");
    return t;
  }

  function answer(q){
    return build(intent(q), detectLang(q));
  }
  // For the buttons: reply in BOTH English and Urdu
  function answerBoth(key){
    return [build(key,"en"), build(key,"ur")];
  }

  var btns = [["Services / خدمات","services"],["Pricing / قیمت","price"],["Hours / اوقات","hours"],["Book a demo / ڈیمو","demo"],["Talk to us / رابطہ","human"]];
  btns.forEach(function(b){
    var el = document.createElement("button");
    el.type="button"; el.textContent=b[0];
    el.onclick=function(){ add(b[0],"me"); reply(answerBoth(b[1])); };
    quick.appendChild(el);
  });

  function toggle(){
    var c = document.getElementById("chat");
    c.classList.toggle("open");
    if(c.classList.contains("open") && !opened){
      opened = true;
      reply([
        "Hello! I'm the AutoTalk AI assistant. The owner is away right now, but I can help. Choose an option below or type your question in English or Urdu.",
        "السلام علیکم! میں آٹو ٹاک اے آئی کا اسسٹنٹ ہوں۔ مالک ابھی دستیاب نہیں، لیکن میں آپ کی مدد کر سکتا ہوں۔ نیچے سے چنیں یا اردو/انگریزی میں سوال لکھیں۔"
      ]);
    }
  }
  document.getElementById("chat-btn").onclick = toggle;
  document.getElementById("chat-x").onclick = toggle;
  document.getElementById("ch-form").addEventListener("submit",function(e){
    e.preventDefault();
    var i = document.getElementById("ch-in");
    var v = i.value.trim();
    if(!v) return;
    add(v.replace(/</g,"&lt;"),"me");
    i.value="";
    reply(answer(v));
  });
})();
