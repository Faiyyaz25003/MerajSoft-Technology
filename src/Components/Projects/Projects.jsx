"use client";

import { useState } from "react";

/* ─── Unique SVG Dashboard Previews (light-adapted) ─── */

const FinTechSVG = ({ accent }) => (
  <svg viewBox="0 0 320 200" className="w-full h-full">
    <rect width="320" height="200" fill="#f8faff" />
    {[40, 80, 120, 160].map((y) => (
      <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="#00000008" strokeWidth="1" />
    ))}
    <defs>
      <linearGradient id="fg1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={accent} stopOpacity="0.25" />
        <stop offset="100%" stopColor={accent} stopOpacity="0" />
      </linearGradient>
    </defs>
    <polygon
      points="0,160 30,140 60,145 90,110 120,120 150,80 180,90 210,55 240,70 270,40 300,50 320,45 320,200 0,200"
      fill="url(#fg1)"
    />
    <polyline
      points="0,160 30,140 60,145 90,110 120,120 150,80 180,90 210,55 240,70 270,40 300,50 320,45"
      fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round"
    />
    {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((i) => {
      const h = [30,50,25,65,40,70,35,80,45,60,30,75,55,85,40,65][i];
      return <rect key={i} x={8+i*19} y={200-h} width="12" height={h} rx="2" fill={accent} opacity="0.12" />;
    })}
    <rect x="8" y="8" width="58" height="18" rx="4" fill={accent+"22"} />
    <text x="37" y="20" fill={accent} fontSize="9" fontWeight="bold" textAnchor="middle">2.4M+ TXN</text>
    <rect x="72" y="8" width="48" height="18" rx="4" fill="#00000008" />
    <text x="96" y="20" fill="#00000055" fontSize="9" textAnchor="middle">99.9% UP</text>
    <circle cx="302" cy="45" r="4" fill={accent} />
    <circle cx="302" cy="45" r="8" fill={accent} opacity="0.2" />
    <text x="8" y="195" fill="#00000018" fontSize="7">JAN</text>
    <text x="80" y="195" fill="#00000018" fontSize="7">APR</text>
    <text x="155" y="195" fill="#00000018" fontSize="7">JUL</text>
    <text x="230" y="195" fill="#00000018" fontSize="7">OCT</text>
    <text x="295" y="195" fill="#00000018" fontSize="7">DEC</text>
  </svg>
);

const HospitalSVG = ({ accent }) => (
  <svg viewBox="0 0 320 200" className="w-full h-full">
    <rect width="320" height="200" fill="#f8faff" />
    <rect x="0" y="0" width="90" height="200" fill="#f0f4ff" />
    {[["OPD","142"],["IPD","38"],["Lab","95"],["Pharm","61"],["Bills","204"]].map(([l,v],i) => (
      <g key={l}>
        <rect x="6" y={10+i*36} width="78" height="28" rx="6" fill={i===0 ? accent+"18" : "#00000006"} />
        <text x="14" y={26+i*36} fill={i===0 ? accent : "#00000040"} fontSize="8" fontWeight="bold">{l}</text>
        <text x="70" y={26+i*36} fill={i===0 ? "#111" : "#00000030"} fontSize="10" fontWeight="bold" textAnchor="end">{v}</text>
      </g>
    ))}
    {[55,80,45,90,60,75,40,85,65,70].map((h,i) => (
      <g key={i}>
        <rect x={100+i*21} y={130-h} width="14" height={h} rx="3" fill={accent} opacity={i===3 ? 0.8 : 0.18} />
        {i===3 && <rect x={100+i*21} y={126-h} width="14" height="4" rx="2" fill={accent} />}
      </g>
    ))}
    <polyline points="100,90 115,90 120,75 125,105 130,70 135,90 150,90 165,90 170,80 175,100 180,65 185,90 200,90 215,90 220,78 225,102 230,72 235,90 250,90"
      fill="none" stroke={accent} strokeWidth="1.5" opacity="0.5" />
    <rect x="100" y="8" width="70" height="20" rx="5" fill={accent+"18"} />
    <text x="135" y="21" fill={accent} fontSize="9" fontWeight="bold" textAnchor="middle">500+ Doctors</text>
    <text x="200" y="20" fill="#00000025" fontSize="8">40% faster</text>
    <text x="270" y="20" fill="#00000020" fontSize="8">HIPAA ✓</text>
    <line x1="98" y1="132" x2="320" y2="132" stroke="#00000010" strokeWidth="1" />
  </svg>
);

const RealEstateSVG = ({ accent }) => (
  <svg viewBox="0 0 320 200" className="w-full h-full">
    <rect width="320" height="200" fill="#f8faff" />
    {[...Array(8)].map((_,i) => <line key={i} x1={0} y1={i*28} x2={320} y2={i*28} stroke="#00000005" strokeWidth="1" />)}
    {[...Array(10)].map((_,i) => <line key={i} x1={i*35} y1={0} x2={i*35} y2={200} stroke="#00000005" strokeWidth="1" />)}
    {[[60,80],[130,50],[200,120],[260,70],[100,140],[170,90],[240,150],[80,40],[300,110]].map(([x,y],i) => (
      <g key={i}>
        <circle cx={x} cy={y} r={i<3?12:8} fill={i<3 ? accent+"35" : "#00000008"} />
        <circle cx={x} cy={y} r={i<3?5:3} fill={i<3 ? accent : "#00000020"} />
        {i<3 && <circle cx={x} cy={y} r="16" fill={accent} opacity="0.08" />}
      </g>
    ))}
    <rect x="45" y="58" width="36" height="14" rx="3" fill={accent} />
    <text x="63" y="68" fill="#fff" fontSize="7" fontWeight="bold" textAnchor="middle">₹85L</text>
    <rect x="115" y="28" width="36" height="14" rx="3" fill="#00000010" />
    <text x="133" y="38" fill="#00000070" fontSize="7" textAnchor="middle">₹1.2Cr</text>
    <rect x="184" y="98" width="36" height="14" rx="3" fill="#00000010" />
    <text x="202" y="108" fill="#00000070" fontSize="7" textAnchor="middle">₹62L</text>
    <rect x="0" y="0" width="320" height="28" fill="#f0f4ff" />
    <rect x="6" y="5" width="100" height="18" rx="5" fill="#00000008" />
    <text x="10" y="17" fill="#00000035" fontSize="8">🔍 Search location...</text>
    <rect x="240" y="5" width="50" height="18" rx="5" fill={accent+"20"} />
    <text x="265" y="17" fill={accent} fontSize="8" fontWeight="bold" textAnchor="middle">2500+ Listings</text>
  </svg>
);

const EdTechSVG = ({ accent }) => (
  <svg viewBox="0 0 320 200" className="w-full h-full">
    <rect width="320" height="200" fill="#f8faff" />
    {[["UI/UX Design","85%"],["React Advanced","62%"],["Node.js APIs","91%"]].map(([title,pct],i) => {
      const x=8,y=8+i*62;
      return (
        <g key={i}>
          <rect x={x} y={y} width="140" height="64" rx="8" fill="#f0f4ff" />
          <text x={x+10} y={y+18} fill={i===2 ? accent : "#111"} fontSize="9" fontWeight="bold">{title}</text>
          <rect x={x+10} y={y+26} width="110" height="5" rx="2" fill="#00000010" />
          <rect x={x+10} y={y+26} width={110*parseFloat(pct)/100} height="5" rx="2" fill={accent} />
          <text x={x+10} y={y+46} fill="#00000040" fontSize="7">Progress: {pct}</text>
          <rect x={x+105} y={y+36} width="28" height="16" rx="4" fill={accent+"20"} />
          <text x={x+119} y={y+47} fill={accent} fontSize="7" textAnchor="middle">Resume</text>
        </g>
      );
    })}
    <rect x="160" y="8" width="152" height="184" rx="10" fill="#f0f4ff" />
    <text x="168" y="24" fill="#00000050" fontSize="8" fontWeight="bold">LIVE CLASSES</text>
    {[["Web Dev Bootcamp","2:30 PM","42"],["AI Fundamentals","4:00 PM","28"],["DSA Masterclass","6:00 PM","67"],["React Patterns","8:00 PM","15"]].map(([name,time,students],i) => (
      <g key={i}>
        <rect x="168" y={32+i*40} width="136" height="32" rx="6" fill={i===0 ? "#fff" : "#00000005"} />
        {i===0 && <rect x="168" y={32+i*40} width="3" height="32" rx="2" fill={accent} />}
        <text x="178" y={46+i*40} fill={i===0 ? "#111" : "#00000045"} fontSize="8" fontWeight={i===0?"bold":"normal"}>{name}</text>
        <text x="178" y={58+i*40} fill={i===0 ? accent : "#00000025"} fontSize="7">{time} · {students} students</text>
        {i===0 && <circle cx="294" cy={48+i*40} r="5" fill={accent} />}
        {i===0 && <circle cx="294" cy={48+i*40} r="8" fill={accent} opacity="0.25" />}
      </g>
    ))}
    <rect x="168" y="176" width="56" height="12" rx="3" fill={accent+"18"} />
    <text x="196" y="185" fill={accent} fontSize="7" textAnchor="middle">10K+ Students</text>
  </svg>
);

const RestaurantSVG = ({ accent }) => (
  <svg viewBox="0 0 320 200" className="w-full h-full">
    <rect width="320" height="200" fill="#f8faff" />
    {[[10,10,"T1","Occupied",3],[10,70,"T2","Free",0],[10,130,"T3","Bill",5],[80,10,"T4","Occupied",2],[80,70,"T5","Occupied",4],[80,130,"T6","Free",0]].map(([x,y,t,status,count],i) => (
      <g key={i}>
        <rect x={x} y={y} width="60" height="52" rx="8"
          fill={status==="Occupied"?"#f0f4ff":status==="Bill"?accent+"15":"#f8faff"}
          stroke={status==="Occupied"?accent+"35":status==="Bill"?accent:"#00000012"}
          strokeWidth={status==="Bill"?1.5:0.5} />
        <text x={x+30} y={y+18} fill={status==="Bill"?accent:"#00000055"} fontSize="9" fontWeight="bold" textAnchor="middle">{t}</text>
        <text x={x+30} y={y+32} fill={status==="Free"?"#00000020":status==="Bill"?accent:"#00000040"} fontSize="7" textAnchor="middle">{status}</text>
        {count>0 && <text x={x+30} y={y+44} fill="#00000025" fontSize="6" textAnchor="middle">{count} guests</text>}
      </g>
    ))}
    <rect x="155" y="0" width="165" height="200" fill="#f0f4ff" />
    <text x="163" y="16" fill="#00000040" fontSize="8" fontWeight="bold">KITCHEN ORDERS</text>
    {[["#K041","Butter Chicken x2","Ready",accent],["#K042","Paneer Tikka","Cooking","#f59e0b"],["#K043","Dal Makhani x3","Pending","#00000025"],["#K044","Naan x6","Ready",accent]].map(([id,item,status,color],i) => (
      <g key={i}>
        <rect x="163" y={22+i*42} width="148" height="34" rx="6" fill="#fff" />
        <text x="172" y={34+i*42} fill={color} fontSize="8" fontWeight="bold">{id}</text>
        <text x="172" y={46+i*42} fill="#00000060" fontSize="7">{item}</text>
        <rect x="275" y={24+i*42} width="30" height="12" rx="3" fill={color+"20"} />
        <text x="290" y={33+i*42} fill={color} fontSize="6" textAnchor="middle">{status}</text>
      </g>
    ))}
    <rect x="163" y="194" width="80" height="4" rx="2" fill={accent+"25"} />
    <rect x="163" y="194" width="56" height="4" rx="2" fill={accent} />
  </svg>
);

const LogisticsSVG = ({ accent }) => (
  <svg viewBox="0 0 320 200" className="w-full h-full">
    <rect width="320" height="200" fill="#f8faff" />
    <line x1="0" y1="100" x2="320" y2="100" stroke="#00000006" strokeWidth="8" />
    <line x1="160" y1="0" x2="160" y2="200" stroke="#00000005" strokeWidth="6" />
    <line x1="0" y1="50" x2="320" y2="150" stroke="#00000004" strokeWidth="4" />
    <polyline points="20,170 60,140 120,110 180,80 250,60 300,40" fill="none" stroke={accent} strokeWidth="2" strokeDasharray="6,3" opacity="0.7" />
    {[[60,140,"V12"],[180,80,"V07"],[250,60,"V03"]].map(([x,y,id],i) => (
      <g key={i}>
        <circle cx={x} cy={y} r="12" fill={i===1?accent+"30":"#00000008"} stroke={i===1?accent:"#00000015"} strokeWidth="1" />
        <text x={x} y={y+4} fill={i===1?accent:"#00000045"} fontSize="7" fontWeight="bold" textAnchor="middle">{id}</text>
        {i===1 && <circle cx={x} cy={y} r="18" fill={accent} opacity="0.08" />}
      </g>
    ))}
    {[[20,170,"HUB"],[300,40,"DEST"]].map(([x,y,label],i) => (
      <g key={i}>
        <rect x={x-16} y={y-10} width="32" height="20" rx="4" fill={i===0?"#00000010":accent+"22"} />
        <text x={x} y={y+4} fill={i===0?"#00000050":accent} fontSize="7" fontWeight="bold" textAnchor="middle">{label}</text>
      </g>
    ))}
    <rect x="0" y="0" width="320" height="28" fill="#f0f4ff" />
    <text x="10" y="17" fill="#00000040" fontSize="8">Fleet Dashboard</text>
    <rect x="160" y="5" width="50" height="18" rx="4" fill={accent+"18"} />
    <text x="185" y="17" fill={accent} fontSize="7" fontWeight="bold" textAnchor="middle">200 Vehicles</text>
    <rect x="220" y="5" width="50" height="18" rx="4" fill="#00000008" />
    <text x="245" y="17" fill="#00000045" fontSize="7" textAnchor="middle">30% saved</text>
    <rect x="275" y="5" width="38" height="18" rx="4" fill="#10b98115" />
    <text x="294" y="17" fill="#10b981" fontSize="7" textAnchor="middle">LIVE</text>
    <circle cx="308" cy="14" r="4" fill="#10b981" />
    <circle cx="308" cy="14" r="7" fill="#10b981" opacity="0.25" />
  </svg>
);

const NGOSvg = ({ accent }) => (
  <svg viewBox="0 0 320 200" className="w-full h-full">
    <rect width="320" height="200" fill="#f8faff" />
    {[["Education Fund","₹8.2L","₹10L",82],["Medical Aid","₹4.5L","₹6L",75],["Food Drive","₹2.1L","₹2.5L",84]].map(([name,raised,goal,pct],i) => (
      <g key={i}>
        <rect x="8" y={8+i*62} width="190" height="54" rx="8" fill="#f0f4ff" />
        <text x="18" y={24+i*62} fill={i===0?accent:"#111"} fontSize="9" fontWeight="bold">{name}</text>
        <text x="18" y={36+i*62} fill="#00000040" fontSize="7">Raised: {raised} / {goal}</text>
        <rect x="18" y={40+i*62} width="160" height="6" rx="3" fill="#00000010" />
        <rect x="18" y={40+i*62} width={160*pct/100} height="6" rx="3" fill={accent} opacity={i===0?1:0.6} />
        <text x="185" y={48+i*62} fill={accent} fontSize="8" fontWeight="bold" textAnchor="end">{pct}%</text>
      </g>
    ))}
    <rect x="206" y="8" width="106" height="184" rx="10" fill="#f0f4ff" />
    <text x="215" y="24" fill="#00000035" fontSize="7" fontWeight="bold">RECENT DONORS</text>
    {[["Amit S.","₹5000"],["Priya M.","₹2500"],["Raj K.","₹10000"],["Neha P.","₹1500"],["Vivek D.","₹7500"]].map(([name,amt],i) => (
      <g key={i}>
        <circle cx="222" cy={40+i*32} r="10" fill={accent+"22"} />
        <text x="222" y={44+i*32} fill={accent} fontSize="7" fontWeight="bold" textAnchor="middle">{name[0]}</text>
        <text x="236" y={38+i*32} fill="#00000060" fontSize="7">{name}</text>
        <text x="236" y={49+i*32} fill={accent} fontSize="7" fontWeight="bold">{amt}</text>
      </g>
    ))}
  </svg>
);

const HRSvg = ({ accent }) => (
  <svg viewBox="0 0 320 200" className="w-full h-full">
    <rect width="320" height="200" fill="#f8faff" />
    <rect x="120" y="8" width="80" height="32" rx="8" fill={accent+"18"} stroke={accent+"40"} strokeWidth="1" />
    <text x="160" y="20" fill={accent} fontSize="8" fontWeight="bold" textAnchor="middle">HR Dashboard</text>
    <text x="160" y="32" fill={accent+"99"} fontSize="7" textAnchor="middle">500+ Employees</text>
    <line x1="160" y1="40" x2="160" y2="55" stroke="#00000012" strokeWidth="1" />
    <line x1="60" y1="55" x2="260" y2="55" stroke="#00000012" strokeWidth="1" />
    {[60,160,260].map(x => <line key={x} x1={x} y1="55" x2={x} y2="68" stroke="#00000012" strokeWidth="1" />)}
    {[[20,"Engineering","148","↑12%"],[110,"Marketing","62","↑5%"],[210,"Operations","94","↑8%"]].map(([x,dept,count,change],i) => (
      <g key={i}>
        <rect x={x} y="68" width="90" height="44" rx="7" fill="#f0f4ff" />
        <text x={x+45} y="82" fill="#111" fontSize="8" fontWeight="bold" textAnchor="middle">{dept}</text>
        <text x={x+45} y="96" fill={accent} fontSize="12" fontWeight="bold" textAnchor="middle">{count}</text>
        <text x={x+45} y="107" fill="#10b981" fontSize="7" textAnchor="middle">{change}</text>
      </g>
    ))}
    <rect x="8" y="125" width="148" height="68" rx="8" fill="#f0f4ff" />
    <text x="18" y="140" fill="#00000040" fontSize="7" fontWeight="bold">LEAVE TRACKER</text>
    {[["Sick","12","#ef4444"],["Casual","34","#f59e0b"],["Earned","89",accent]].map(([type,count,color],i) => (
      <g key={i}>
        <rect x="18" y={148+i*14} width={parseInt(count)*1.2} height="9" rx="2" fill={color} opacity="0.5" />
        <text x="18" y={157+i*14} fill={color} fontSize="6">{type}: {count}</text>
      </g>
    ))}
    <rect x="165" y="125" width="147" height="68" rx="8" fill="#f0f4ff" />
    <text x="175" y="140" fill="#00000040" fontSize="7" fontWeight="bold">THIS MONTH PAYROLL</text>
    <text x="175" y="158" fill={accent} fontSize="16" fontWeight="bold">₹42.6L</text>
    <text x="175" y="170" fill="#00000030" fontSize="7">500 employees processed</text>
    <rect x="175" y="176" width="120" height="6" rx="3" fill="#00000010" />
    <rect x="175" y="176" width="100" height="6" rx="3" fill={accent} />
  </svg>
);

const WalletSVG = ({ accent }) => (
  <svg viewBox="0 0 320 200" className="w-full h-full">
    <rect width="320" height="200" fill="#f8faff" />
    <defs>
      <linearGradient id="wg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor={accent+"70"} />
        <stop offset="100%" stopColor={accent+"25"} />
      </linearGradient>
    </defs>
    <rect x="8" y="8" width="160" height="90" rx="14" fill="url(#wg)" />
    <circle cx="130" cy="30" r="28" fill="#00000006" />
    <circle cx="148" cy="30" r="28" fill="#00000004" />
    <text x="20" y="50" fill="#fff" fontSize="12" fontWeight="bold" letterSpacing="3">9876 •• •• 5432</text>
    <text x="20" y="68" fill="#ffffffcc" fontSize="7">QUICKPAY WALLET</text>
    <text x="20" y="88" fill="#fff" fontSize="8" fontWeight="bold">₹ 24,580.00</text>
    <text x="140" y="88" fill="#fff" fontSize="7" textAnchor="end">UPI ✓</text>
    {[["Send","↑",accent+"30"],["Receive","↓","#10b98130"],["Pay","⚡","#f59e0b30"],["More","…","#00000010"]].map(([label,icon,bg],i) => (
      <g key={i}>
        <circle cx={24+i*40} cy={122} r="16" fill={bg} />
        <text x={24+i*40} y={127} fill="#111" fontSize="11" textAnchor="middle">{icon}</text>
        <text x={24+i*40} y={146} fill="#00000045" fontSize="7" textAnchor="middle">{label}</text>
      </g>
    ))}
    <rect x="178" y="8" width="134" height="184" rx="10" fill="#f0f4ff" />
    <text x="188" y="24" fill="#00000035" fontSize="7" fontWeight="bold">TRANSACTIONS</text>
    {[["Swiggy","Food","-₹340",accent],["Salary","Income","+₹55K","#10b981"],["Netflix","Sub","-₹199","#ef4444"],["Amazon","Shop","-₹1240","#f59e0b"],["Refund","Credit","+₹450","#10b981"]].map(([name,cat,amt,color],i) => (
      <g key={i}>
        <rect x="188" y={30+i*30} width="116" height="24" rx="5" fill="#fff" />
        <text x="196" y={42+i*30} fill="#111" fontSize="8" fontWeight="bold">{name}</text>
        <text x="196" y={51+i*30} fill="#00000030" fontSize="6">{cat}</text>
        <text x="296" y={44+i*30} fill={color} fontSize="8" fontWeight="bold" textAnchor="end">{amt}</text>
      </g>
    ))}
    <rect x="188" y="182" width="80" height="8" rx="2" fill="#10b98115" />
    <text x="228" y="188" fill="#10b981" fontSize="6" textAnchor="middle">AI Fraud Shield ✓</text>
  </svg>
);

const NewsSVG = ({ accent }) => (
  <svg viewBox="0 0 320 200" className="w-full h-full">
    <rect width="320" height="200" fill="#f8faff" />
    <rect x="0" y="0" width="320" height="24" fill="#f0f4ff" />
    <text x="10" y="15" fill={accent} fontSize="9" fontWeight="bold">DailyPulse</text>
    {["Politics","Tech","Business","Sports"].map((cat,i) => (
      <text key={cat} x={85+i*55} y="15" fill={i===1?accent:"#00000035"} fontSize="7">{cat}</text>
    ))}
    <text x="290" y="15" fill="#00000025" fontSize="7">5M+ readers</text>
    <rect x="8" y="30" width="200" height="90" rx="8" fill="#f0f4ff" />
    <rect x="8" y="30" width="200" height="45" rx="8" fill={accent+"12"} />
    <rect x="8" y="30" width="4" height="45" rx="2" fill={accent} />
    <text x="18" y="44" fill={accent} fontSize="7" fontWeight="bold">BREAKING</text>
    <text x="18" y="56" fill="#111" fontSize="9" fontWeight="bold">India's Tech Sector</text>
    <text x="18" y="67" fill="#111" fontSize="9" fontWeight="bold">Hits $500B Valuation</text>
    <text x="18" y="82" fill="#00000040" fontSize="7">3 hours ago · 12 min read</text>
    <text x="18" y="95" fill="#00000030" fontSize="6">The domestic technology market has seen unprecedented</text>
    <text x="18" y="104" fill="#00000030" fontSize="6">growth driven by AI adoption and digital payments...</text>
    <rect x="18" y="110" width="40" height="8" rx="2" fill="#00000008" />
    <text x="38" y="116" fill="#00000040" fontSize="5" textAnchor="middle">Read more →</text>
    {[["Markets Rally 2%","Business","1h ago"],["AI Policy Update","Tech","3h ago"],["Sports Roundup","Sports","5h ago"]].map(([title,cat,time],i) => (
      <g key={i}>
        <rect x="216" y={30+i*58} width="96" height="50" rx="7" fill="#f0f4ff" />
        <rect x="216" y={30+i*58} width="96" height="14" rx="7" fill={i===0?accent+"15":"#00000005"} />
        <text x="222" y={40+i*58} fill={i===0?accent:"#00000030"} fontSize="6" fontWeight="bold">{cat}</text>
        <text x="222" y={53+i*58} fill="#111" fontSize="7" fontWeight="bold">{title}</text>
        <text x="222" y={64+i*58} fill="#00000030" fontSize="6">{time}</text>
      </g>
    ))}
    <rect x="8" y="130" width="200" height="62" rx="8" fill="#f0f4ff" />
    <text x="16" y="144" fill="#00000035" fontSize="7" fontWeight="bold">TRENDING NOW</text>
    {[["#StartupIndia","42K"],["#BudgetSession","31K"],["#AIChatbot","28K"]].map(([tag,count],i) => (
      <g key={i}>
        <text x="16" y={160+i*16} fill={accent} fontSize="8" fontWeight="bold">{tag}</text>
        <text x="120" y={160+i*16} fill="#00000030" fontSize="7">{count} posts</text>
      </g>
    ))}
  </svg>
);

const EventSVG = ({ accent }) => (
  <svg viewBox="0 0 320 200" className="w-full h-full">
    <rect width="320" height="200" fill="#f8faff" />
    <rect x="8" y="8" width="200" height="70" rx="10" fill={accent+"12"} stroke={accent+"25"} strokeWidth="1" />
    <text x="20" y="28" fill={accent} fontSize="10" fontWeight="bold">TechConf 2024</text>
    <text x="20" y="42" fill="#111" fontSize="8">📍 Mumbai · Dec 15-16</text>
    <text x="20" y="55" fill="#00000040" fontSize="7">1200 Attendees · 45 Speakers</text>
    <rect x="20" y="60" width="60" height="14" rx="4" fill={accent} />
    <text x="50" y="70" fill="#fff" fontSize="7" fontWeight="bold" textAnchor="middle">View Tickets</text>
    <rect x="216" y="8" width="96" height="96" rx="10" fill="#f0f4ff" />
    <text x="264" y="24" fill="#00000035" fontSize="7" textAnchor="middle">QR CHECK-IN</text>
    {[[1,0,1,0,1],[0,1,1,0,0],[1,0,0,1,1],[0,1,0,1,0],[1,1,0,0,1]].map((row,i) =>
      row.map((on,j) => (
        <rect key={`${i}-${j}`} x={226+j*14} y={30+i*14} width="10" height="10" rx="2"
          fill={on?accent+"45":"#00000008"} />
      ))
    )}
    <text x="264" y="98" fill={accent} fontSize="6" textAnchor="middle">Scan to Enter</text>
    {[["Startup Summit","Nov 20","380 tix"],["Design Week","Nov 28","240 tix"],["AI Forum","Dec 5","520 tix"]].map(([name,date,tix],i) => (
      <g key={i}>
        <rect x="8" y={88+i*36} width="200" height="30" rx="7" fill="#f0f4ff" />
        <rect x="8" y={88+i*36} width="3" height="30" rx="2" fill={accent} opacity={i===0?1:0.35} />
        <text x="18" y={100+i*36} fill={i===0?"#111":"#00000060"} fontSize="8" fontWeight={i===0?"bold":"normal"}>{name}</text>
        <text x="18" y={112+i*36} fill="#00000030" fontSize="6">{date}</text>
        <text x="200" y={106+i*36} fill={accent} fontSize="7" fontWeight="bold" textAnchor="end">{tix}</text>
      </g>
    ))}
    <rect x="216" y="112" width="96" height="76" rx="10" fill="#f0f4ff" />
    {[["Events","200+",0],["Cities","15+",1],["Sponsors","80+",2]].map(([label,val],i) => (
      <g key={i}>
        <text x="264" y={130+i*22} fill={accent} fontSize="11" fontWeight="bold" textAnchor="middle">{val}</text>
        <text x="264" y={140+i*22} fill="#00000030" fontSize="6" textAnchor="middle">{label}</text>
      </g>
    ))}
  </svg>
);

const IoTSVG = ({ accent }) => (
  <svg viewBox="0 0 320 200" className="w-full h-full">
    <rect width="320" height="200" fill="#f8faff" />
    <polygon points="60,80 100,45 140,80" fill="none" stroke="#00000012" strokeWidth="1.5" />
    <rect x="65" y="80" width="70" height="55" fill="none" stroke="#00000010" strokeWidth="1" />
    {[[100,65,"⌂","Hub",accent,true],[68,95,"💡","Light","#f59e0b",false],[128,95,"❄️","AC","#38bdf8",false],[80,120,"🔒","Lock","#10b981",false],[115,120,"📺","TV","#8b5cf6",false]].map(([x,y,icon,label,color,active],i) => (
      <g key={i}>
        {active && <circle cx={x} cy={y} r="16" fill={color} opacity="0.12" />}
        <circle cx={x} cy={y} r="10" fill={active?color+"30":"#00000008"} stroke={active?color:"#00000015"} strokeWidth="1" />
        <text x={x} y={y+4} fontSize="8" textAnchor="middle">{icon}</text>
        <text x={x} y={y+20} fill={active?color:"#00000030"} fontSize="6" textAnchor="middle">{label}</text>
        {!active && <line x1="100" y1="65" x2={x} y2={y} stroke="#00000008" strokeWidth="0.8" strokeDasharray="3,2" />}
        {active && <line x1="100" y1="65" x2={x} y2={y} stroke={color} strokeWidth="1" strokeDasharray="3,2" opacity="0.35" />}
      </g>
    ))}
    <rect x="165" y="8" width="147" height="100" rx="10" fill="#f0f4ff" />
    <text x="175" y="24" fill="#00000035" fontSize="7" fontWeight="bold">ENERGY USAGE (kWh)</text>
    {[60,45,70,40,55,30,65,25,50,35,45,30].map((h,i) => (
      <rect key={i} x={175+i*10} y={90-h} width="7" height={h} rx="2" fill={accent} opacity={i===11?0.8:0.2} />
    ))}
    <line x1="175" y1="92" x2="306" y2="92" stroke="#00000010" strokeWidth="0.5" />
    <text x="175" y="104" fill="#00000020" fontSize="6">MON</text>
    <text x="265" y="104" fill="#00000020" fontSize="6">TODAY</text>
    <rect x="238" y="12" width="68" height="20" rx="5" fill={accent+"20"} />
    <text x="272" y="25" fill={accent} fontSize="9" fontWeight="bold" textAnchor="middle">25% saved</text>
    <rect x="165" y="116" width="147" height="76" rx="10" fill="#f0f4ff" />
    <text x="175" y="132" fill="#00000035" fontSize="7" fontWeight="bold">DEVICE STATUS</text>
    {[["Living Room","22°C","Cooling",accent],["Bedroom","Auto","Standby","#00000025"],["Security","Armed","Active","#10b981"]].map(([room,val,status,color],i) => (
      <g key={i}>
        <rect x="175" y={138+i*16} width="130" height="12" rx="3" fill="#fff" />
        <text x="180" y={148+i*16} fill="#00000060" fontSize="7">{room}</text>
        <text x="280" y={148+i*16} fill={color} fontSize="7" fontWeight="bold" textAnchor="end">{val} · {status}</text>
      </g>
    ))}
  </svg>
);

/* ─── Projects Data ─── */
const projects = [
  { id:1, title:"NeoBank — AI Finance Platform", category:"FinTech", accent:"#0066ff", tech:["Next.js","Node.js","PostgreSQL","OpenAI","Stripe"], stats:[{value:"2.4M+",label:"Transactions"},{value:"99.9%",label:"Uptime"},{value:"4.8★",label:"Rating"}], about:"AI-powered banking dashboard with real-time fraud detection, personalized financial insights, and seamless multi-currency support for 2.4M+ transactions.", features:["Real-time analytics","AI fraud detection","Multi-currency wallet","Instant transfers","KYC onboarding","Smart budgeting"], techStack:["Next.js","Node.js","PostgreSQL","OpenAI","Stripe","Redis"], metrics:"2.4M+ transactions · 99.9% uptime · 12ms TTFB · 98/100 Lighthouse · 4.8★ rating", SVGComponent:FinTechSVG },
  { id:2, title:"MedCore — Hospital Management", category:"HealthTech", accent:"#0ea5e9", tech:["React","Django","PostgreSQL"], stats:[{value:"40%",label:"Time Saved"},{value:"500+",label:"Doctors"},{value:"4.9★",label:"Rating"}], about:"End-to-end hospital management covering OPD/IPD, billing, pharmacy, lab reports, and patient records with role-based access control.", features:["OPD/IPD management","Smart billing","Pharmacy module","Lab integration","Role-based access","Patient portal"], techStack:["React","Django","PostgreSQL","Redis","Docker"], metrics:"500+ doctors · 40% admin time saved · 99.5% uptime · HIPAA compliant", SVGComponent:HospitalSVG },
  { id:3, title:"PropNest — Real Estate Portal", category:"PropTech", accent:"#f59e0b", tech:["Next.js","Tailwind","Firebase"], stats:[{value:"2500+",label:"Listings"},{value:"12K+",label:"Users"},{value:"4.7★",label:"Rating"}], about:"Premium property listing portal with 3D virtual tours, map-based search, EMI calculator, and lead management dashboard for agents.", features:["3D virtual tours","Map-based search","EMI calculator","Lead management","Agent dashboard","AI recommendations"], techStack:["Next.js","Tailwind","Firebase","Google Maps","Stripe"], metrics:"2500+ listings · 12K monthly users · 3x lead conversion · 4.7★ rating", SVGComponent:RealEstateSVG },
  { id:4, title:"LearnSphere — EdTech Platform", category:"EdTech", accent:"#7c3aed", tech:["React Native","Express","AWS"], stats:[{value:"10K+",label:"Students"},{value:"500+",label:"Courses"},{value:"4.9★",label:"Rating"}], about:"Interactive learning platform with live classes, recorded content, quizzes, progress tracking, and automated certificate generation.", features:["Live classes","Recorded content","Quiz engine","Progress tracking","Certificates","Offline mode"], techStack:["React Native","Express","AWS S3","WebRTC","MongoDB"], metrics:"10K+ students · 500+ courses · 94% completion rate · 4.9★ rating", SVGComponent:EdTechSVG },
  { id:5, title:"Spice Route — Restaurant POS", category:"FoodTech", accent:"#ea580c", tech:["Vue.js","Laravel","MySQL"], stats:[{value:"15",label:"Branches"},{value:"4K+",label:"Orders/Day"},{value:"4.8★",label:"Rating"}], about:"Cloud-based POS system with table management, kitchen display, digital menu, GST billing, and multi-branch reporting for restaurant chains.", features:["Table management","Kitchen display","Digital menu","GST billing","Multi-branch","Analytics"], techStack:["Vue.js","Laravel","MySQL","Redis","Socket.io"], metrics:"15 branches · 4K+ daily orders · 99% uptime · GST compliant", SVGComponent:RestaurantSVG },
  { id:6, title:"SwiftMove — Logistics Tracker", category:"LogTech", accent:"#0891b2", tech:["React","Node.js","Maps API"], stats:[{value:"30%",label:"Fuel Saved"},{value:"200+",label:"Vehicles"},{value:"15",label:"Cities"}], about:"Real-time fleet tracking dashboard with route optimization, driver management, delivery status updates, and analytics for logistics operations.", features:["Real-time tracking","Route optimization","Driver management","Delivery alerts","Analytics","Multi-city"], techStack:["React","Node.js","Google Maps","Socket.io","MongoDB"], metrics:"200+ vehicles · 30% fuel savings · 15 cities · 98.7% on-time delivery", SVGComponent:LogisticsSVG },
  { id:7, title:"HopeConnect — NGO Platform", category:"SocialTech", accent:"#16a34a", tech:["Next.js","Stripe","Sanity CMS"], stats:[{value:"₹50L+",label:"Raised"},{value:"1200+",label:"Donors"},{value:"8",label:"Campaigns"}], about:"Transparent donation management platform with campaign tracking, donor portals, impact reports, and 80G receipt automation.", features:["Campaign tracking","Donor portals","Impact reports","80G automation","Payment gateway","Real-time updates"], techStack:["Next.js","Stripe","Sanity CMS","PostgreSQL","SendGrid"], metrics:"₹50L+ raised · 1200+ donors · 8 active campaigns · 80G automated", SVGComponent:NGOSvg },
  { id:8, title:"TalentCore — Corporate HRMS", category:"HRTech", accent:"#e11d48", tech:["React","Spring Boot","Oracle DB"], stats:[{value:"500+",label:"Employees"},{value:"₹42L",label:"Payroll/Mo"},{value:"4.8★",label:"Rating"}], about:"Comprehensive HRMS covering recruitment, onboarding, payroll, leave management, appraisals, and employee self-service portal.", features:["Recruitment","Onboarding","Payroll","Leave management","Appraisals","Self-service"], techStack:["React","Spring Boot","Oracle DB","Redis","Docker"], metrics:"500+ employees · ₹42L monthly payroll · 40% HR time saved · 4.8★", SVGComponent:HRSvg },
  { id:9, title:"QuickPay — Fintech Wallet", category:"FinTech", accent:"#4f46e5", tech:["React Native","Node.js","Redis"], stats:[{value:"1L+",label:"Txn/Month"},{value:"0.1s",label:"Avg Speed"},{value:"4.8★",label:"Rating"}], about:"UPI-integrated digital wallet with P2P transfers, bill payments, investment tracking, and AI-powered fraud detection system.", features:["UPI integration","P2P transfers","Bill payments","Investment tracking","Fraud detection","Split bills"], techStack:["React Native","Node.js","Redis","PostgreSQL","ML models"], metrics:"1L+ txn/month · 0.1s avg speed · PCI-DSS compliant · 4.8★", SVGComponent:WalletSVG },
  { id:10, title:"DailyPulse — News Portal", category:"MediaTech", accent:"#b45309", tech:["Next.js","WordPress API","CloudFront"], stats:[{value:"5M+",label:"Readers"},{value:"200+",label:"Journalists"},{value:"12",label:"Languages"}], about:"High-performance news portal with multi-language support, AMP pages, ad management, subscription paywall, and journalist CMS.", features:["Multi-language","AMP pages","Ad management","Subscription paywall","Journalist CMS","Push notifications"], techStack:["Next.js","WordPress API","CloudFront","Elasticsearch","Redis"], metrics:"5M+ monthly readers · 200+ journalists · 12 languages · 98/100 Lighthouse", SVGComponent:NewsSVG },
  { id:11, title:"Eventify — Event Management", category:"EventTech", accent:"#9333ea", tech:["React","Node.js","Razorpay"], stats:[{value:"200+",label:"Events"},{value:"50K+",label:"Tickets Sold"},{value:"15",label:"Cities"}], about:"End-to-end event management with ticket booking, QR check-ins, speaker management, sponsor portals, and live streaming integration.", features:["Ticket booking","QR check-ins","Speaker management","Sponsor portals","Live streaming","Analytics"], techStack:["React","Node.js","Razorpay","Socket.io","AWS"], metrics:"200+ events · 50K+ tickets sold · 15 cities · 99% scan success rate", SVGComponent:EventSVG },
  { id:12, title:"IntelliHome — IoT Dashboard", category:"IoTech", accent:"#0d9488", tech:["React","MQTT","InfluxDB"], stats:[{value:"25%",label:"Energy Saved"},{value:"50+",label:"Devices"},{value:"4.9★",label:"Rating"}], about:"Real-time IoT dashboard for smart home device control, energy consumption analytics, automation rules, and predictive maintenance alerts.", features:["Device control","Energy analytics","Automation rules","Predictive maintenance","Voice control","Mobile app"], techStack:["React","MQTT","InfluxDB","Node.js","TensorFlow"], metrics:"25% energy savings · 50+ devices · 99.9% uptime · 4.9★ rating", SVGComponent:IoTSVG },
];

/* ─── Flip Card Component ─── */
function ProjectCard({ project }) {
  const [flipped, setFlipped] = useState(false);
  const { SVGComponent, accent } = project;

  return (
    <div
      className="relative w-full cursor-pointer select-none"
      style={{ height: "430px", perspective: "1400px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.65s cubic-bezier(0.4,0.2,0.2,1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* ── FRONT ── */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{ backfaceVisibility:"hidden", WebkitBackfaceVisibility:"hidden" }}
        >
          <div
            className="w-full h-full flex flex-col rounded-2xl overflow-hidden"
            style={{
              background: "#ffffff",
              border: "1px solid #e8edf5",
              boxShadow: "0 2px 12px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)",
            }}
          >
            {/* SVG preview */}
            <div className="relative overflow-hidden" style={{ height:"220px" }}>
              <SVGComponent accent={accent} />
              {/* Subtle rounded top-border accent */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: accent }}
              />
              {/* Category badge */}
              <div className="absolute top-4 left-3 z-10">
                <span
                  className="text-[10px] font-black tracking-[0.18em] uppercase px-3 py-1.5 rounded-full"
                  style={{
                    background: "#fff",
                    color: accent,
                    border: `1px solid ${accent}40`,
                    boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                  }}
                >
                  {project.category}
                </span>
              </div>
              {/* Arrow icon */}
              <div className="absolute top-3 right-3 z-10">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center shadow-sm"
                  style={{ background: accent }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 10L10 2M10 2H4M10 2V8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              {/* Bottom fade */}
              <div
                className="absolute bottom-0 left-0 right-0 h-10"
                style={{ background: "linear-gradient(to top, #ffffff, transparent)" }}
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 px-5 py-4 gap-3">
              <div>
                <h3 className="font-bold text-[14.5px] leading-snug" style={{ color: "#111827" }}>
                  {project.title}
                </h3>
                <p className="text-[11px] mt-1 tracking-wide" style={{ color: "#9ca3af" }}>
                  {project.tech.join(" · ")}
                </p>
              </div>
              <div
                className="flex gap-5 pt-3"
                style={{ borderTop: "1px solid #f3f4f6" }}
              >
                {project.stats.map((s, i) => (
                  <div key={i}>
                    <p className="text-[16px] font-black leading-none" style={{ color: i===0 ? accent : "#111827" }}>
                      {s.value}
                    </p>
                    <p className="text-[10px] mt-1" style={{ color: "#9ca3af" }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Bottom accent strip */}
            <div className="h-1 w-full" style={{ background: `linear-gradient(to right, ${accent}, ${accent}20)` }} />
          </div>
        </div>

        {/* ── BACK ── */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{
            backfaceVisibility:"hidden",
            WebkitBackfaceVisibility:"hidden",
            transform:"rotateY(180deg)",
          }}
        >
          <div
            className="w-full h-full rounded-2xl flex flex-col"
            style={{
              background: "#ffffff",
              border: `1.5px solid ${accent}30`,
              boxShadow: `0 8px 32px ${accent}18, 0 2px 8px rgba(0,0,0,0.06)`,
            }}
          >
            {/* Top accent bar */}
            <div className="h-[3px] rounded-t-2xl w-full" style={{ background: accent }} />

            {/* Header */}
            <div className="px-5 py-4 flex items-center justify-between" style={{ borderBottom: "1px solid #f3f4f6" }}>
              <h3 className="text-[13.5px] font-black leading-tight" style={{ color: accent }}>
                {project.title}
              </h3>
              <span
                className="text-[9px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full flex-shrink-0 ml-2"
                style={{ background: accent+"12", color: accent, border: `1px solid ${accent}30` }}
              >
                {project.category}
              </span>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-4">
              <div>
                <p className="text-[9px] font-black tracking-[0.22em] uppercase mb-2" style={{ color: accent }}>
                  About Project
                </p>
                <p className="text-[11.5px] leading-relaxed" style={{ color: "#4b5563" }}>
                  {project.about}
                </p>
              </div>
              <div>
                <p className="text-[9px] font-black tracking-[0.22em] uppercase mb-2" style={{ color: accent }}>
                  Main Features
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.features.map(f => (
                    <span key={f} className="text-[10px] font-semibold px-2.5 py-1 rounded-md"
                      style={{ background: accent+"0f", color: accent, border: `1px solid ${accent}22` }}>
                      {f}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[9px] font-black tracking-[0.22em] uppercase mb-2" style={{ color: accent }}>
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map(t => (
                    <span key={t} className="text-[10px] font-semibold px-2.5 py-1 rounded-md"
                      style={{ background: "#f9fafb", color: "#6b7280", border: "1px solid #e5e7eb" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[9px] font-black tracking-[0.22em] uppercase mb-2" style={{ color: accent }}>
                  Project Metrics
                </p>
                <p className="text-[11px] leading-relaxed" style={{ color: "#6b7280" }}>
                  {project.metrics}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="px-5 pb-4 pt-3" style={{ borderTop: "1px solid #f3f4f6" }}>
              <button
                className="w-full py-3 rounded-xl text-[11px] font-black tracking-[0.12em] uppercase transition-all hover:opacity-90 hover:shadow-lg"
                style={{ background: accent, color: "#ffffff", boxShadow: `0 4px 14px ${accent}35` }}
              >
                View Full Project →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Page ─── */
export default function ProjectsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#f8faff" }}>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-100"
        style={{ background: "linear-gradient(135deg, #ffffff 0%, #f0f6ff 50%, #ffffff 100%)" }}>
        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "radial-gradient(circle, #c7d8f0 1px, transparent 1px)",
          backgroundSize: "38px 38px",
          opacity: 0.5,
        }} />
        {/* Decorative accent blob */}
        <div className="absolute -top-20 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, #dbeafe 0%, transparent 70%)", opacity: 0.6 }} />

        <div className="relative max-w-6xl mx-auto px-6 py-16 pb-14">
          <p className="text-[11px] font-black tracking-[0.3em] uppercase mb-3" style={{ color: "#3b82f6" }}>
            Application Services
          </p>
          <h1 className="text-5xl md:text-6xl font-black leading-none mb-5" style={{ color: "#0f172a", fontFamily: "'Barlow Condensed', 'Arial Black', sans-serif" }}>
            Our{" "}
            <span style={{ color: "#3b82f6" }}>Projects</span>
          </h1>
          <p className="text-sm max-w-md leading-relaxed mb-7" style={{ color: "#64748b" }}>
            We craft digital experiences that drive real results. Hover any project card to explore the full story.
          </p>
          <div className="flex gap-3 flex-wrap">
            <button
              className="px-7 py-3 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-lg"
              style={{ background: "#1d4ed8", color: "#fff", boxShadow: "0 4px 20px rgba(29,78,216,0.25)" }}
            >
              Get Free Quote →
            </button>
            <button
              className="px-7 py-3 rounded-full font-semibold text-sm border transition-colors hover:bg-blue-50"
              style={{ color: "#1d4ed8", borderColor: "#bfdbfe", background: "transparent" }}
            >
              See Our Work
            </button>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="border-b border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-5 grid grid-cols-4 divide-x divide-gray-100">
          {[
            { num:"12+", label:"Projects" },
            { num:"50+", label:"Clients" },
            { num:"8+", label:"Years" },
            { num:"100%", label:"Satisfaction" },
          ].map(s => (
            <div key={s.label} className="px-6 first:pl-0 last:pr-0 flex flex-col items-center">
              <span className="text-2xl font-black" style={{ color: "#0f172a" }}>{s.num}</span>
              <span className="text-[10px] tracking-widest uppercase mt-1" style={{ color: "#94a3b8" }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Cards grid */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <p className="text-[11px] font-black tracking-[0.25em] uppercase mb-8" style={{ color: "#94a3b8" }}>
          — Featured Work · Hover to Explore
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-100 py-16 bg-white">
        <div className="max-w-2xl mx-auto text-center px-6">
          <p className="text-[11px] font-black tracking-[0.3em] uppercase mb-3" style={{ color: "#3b82f6" }}>
            Start a Project
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "#0f172a", fontFamily: "'Barlow Condensed', 'Arial Black', sans-serif" }}>
            Ready to build something{" "}
            <span style={{ color: "#3b82f6" }}>great?</span>
          </h2>
          <p className="mb-8 text-sm leading-relaxed" style={{ color: "#64748b" }}>
            Tell us about your project and we&apos;ll get back to you within 24 hours with a free consultation.
          </p>
          <button
            className="px-10 py-4 rounded-full font-bold text-sm transition-all hover:scale-105 hover:shadow-2xl"
            style={{ background: "#1d4ed8", color: "#fff", boxShadow: "0 4px 20px rgba(29,78,216,0.25)" }}
          >
            Get Free Quote →
          </button>
        </div>
      </section>
    </div>
  );
}