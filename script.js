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

  // Live chat widget (auto-reply when owner is away)
  var box = document.createElement("div");
  box.innerHTML =
    '<button id="chat-btn" aria-label="Open chat">&#128172;</button>'+
    '<div id="chat" role="dialog" aria-label="Chat"><div class="ch-head"><div><b>'+NAME+' Assistant</b><small>Auto-reply &middot; online</small></div><button id="chat-x" aria-label="Close">&times;</button></div>'+
    '<div class="ch-body" id="ch-body"></div>'+
    '<div class="quick" id="ch-quick"></div>'+
    '<form class="ch-form" id="ch-form"><input id="ch-in" placeholder="Type your message..." autocomplete="off"><button aria-label="Send">&#10148;</button></form></div>';
  document.body.appendChild(box);

  var body = document.getElementById("ch-body");
  var quick = document.getElementById("ch-quick");
  var opened = false;

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
  var waLink = '<a href="https://wa.me/'+WA+'" target="_blank" rel="noopener">WhatsApp par message karein</a>';

  function answer(q){
    q = q.toLowerCase();
    if(/hi|hello|salam|assalam|hey/.test(q) && q.length<20) return "Hello! Main "+NAME+" ka AI assistant hoon. Aap services, pricing ya demo ke baare mein pooch sakte hain.";
    if(/service|kya karte|what do you|chatbot|call agent|agent/.test(q)) return "Hum 3 cheezen banate hain: <b>AI call agents</b> (calls answer karte hain), <b>AI chatbots</b> (website aur WhatsApp ke liye) aur <b>outbound calling</b>. Details: <a href=\"services.html\">Services page</a>.";
    if(/price|pricing|cost|rate|charges|kitn|paisa|fee/.test(q)) return "Price aapki zaroorat par depend karti hai. Apne business ke baare mein bata dein, hum quote bhej denge. Plans: <a href=\"pricing.html\">Pricing page</a>.";
    if(/time|timing|hour|open|available|kab/.test(q)) return "Hamari team Monday se Saturday, subah 9 se shaam 5 baje tak available hai. Ye assistant 24/7 online hai.";
    if(/demo|book|appointment|meeting/.test(q)) return "Demo book karne ke liye <a href=\"contact.html\">Contact page</a> par form bhar dein, ya "+waLink+".";
    if(/phone|call|number|contact|email|whatsapp|human|insan|team/.test(q)) return "Aap seedha call karein: <a href=\"tel:"+PHONE_TEL+"\">"+PHONE_DISPLAY+"</a>, ya "+waLink+". Team jaldi reply karegi.";
    if(/urdu|english|language|zubaan/.test(q)) return "Hum agents Urdu, English ya dono mein bana sakte hain.";
    if(/thank|shukria|ok|theek/.test(q)) return "Aap ka shukriya! Aur kuch poochna ho to likh dein.";
    return "Main abhi owner ki taraf se jawab de raha hoon. Aap apna sawal aur number likh dein, team jald contact karegi. Ya seedha "+waLink+".";
  }

  var qs = ["Services","Pricing","Working hours","Book a demo","Talk to a human"];
  var qmap = {"Services":"services","Pricing":"pricing","Working hours":"timing","Book a demo":"demo","Talk to a human":"human"};
  qs.forEach(function(q){
    var b = document.createElement("button");
    b.type="button"; b.textContent=q;
    b.onclick=function(){ add(q,"me"); reply(answer(qmap[q])); };
    quick.appendChild(b);
  });

  function toggle(){
    var c = document.getElementById("chat");
    c.classList.toggle("open");
    if(c.classList.contains("open") && !opened){
      opened = true;
      reply("Assalam o Alaikum! Main "+NAME+" ka AI assistant hoon. Owner abhi available nahi hain, lekin main aap ki madad kar sakta hoon. Neeche se choose karein ya apna sawal likhein.");
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
