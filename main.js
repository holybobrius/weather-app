(()=>{"use strict";const e=document.querySelector("#mainP"),a=document.querySelector("#feels_like"),t=document.querySelector("#locationP"),c=document.querySelector("#slider-container"),s=document.querySelector("i");let n=document.querySelector(".check").checked;const o=document.querySelector(".switch");console.log(n);const l=async l=>{(await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${l}&APPID=ad5fe16a4535b8d1f2a2656afa96c6eb&units=metric`,{mode:"cors"})).json().then((l=>{console.log(l);const r={city:l.name,country:l.sys.country,temp:Math.round(l.main.temp),feels_like:Math.round(l.main.feels_like),main:l.weather[0].main};o.addEventListener("click",(()=>{var t,c,s;n=document.querySelector(".check").checked,n?(t=r.temp,c=r.feels_like,s=r.main,t=Math.round(9*t/5+32),c=Math.round(9*c/5+32),e.innerHTML=`${t}°F, ${s}`,a.innerHTML=`Feels like: ${c}°F`):((t,c,s)=>{e.innerHTML=`${t}°C, ${s}`,a.innerHTML=`Feels like: ${c}°C`})(r.temp,r.feels_like,r.main)})),console.log(r),((n,o,l,r,i)=>{switch(t.innerHTML=`${r}, ${i}`,e.innerHTML=`${n}°C, ${l}`,a.innerHTML=`Feels like: ${o}°C`,c.style.display="flex",console.log(`Weather: ${l}`),l){case"Snow":s.classList.add("fas","fa-snowflake");break;case"Clouds":s.classList.add("fas","fa-cloud");break;case"Clear":s.classList.add("fas","fa-sun");break;case"Rain":s.classList.add("fas","fa-cloud-showers-heavy");break;case"Fog":case"Mist":s.classList.add("fas","fa-smog")}})(r.temp,r.feels_like,r.main,r.city,r.country)}))},r=document.querySelector("#input-city"),i=document.querySelector("i");l("Sasovo"),r.addEventListener("keydown",(e=>{13===e.keyCode&&(i.className="",l(r.value))}))})();