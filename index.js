import{a as d,S as p,i as l}from"./assets/vendor-Pp936Fs7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();d.defaults.baseURL="https://pixabay.com/api/";const m="58355213-20d92452112ec05f5bea62a94";async function y(r){return(await d.get("",{params:{key:m,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const u=document.querySelector(".gallery"),f=document.querySelector(".loader"),g=new p(".gallery a",{captionsData:"alt",captionDelay:250});function h(r){const o=r.map(t=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${t.largeImageURL}">
            <img
              class="gallery-image"
              src="${t.webformatURL}"
              alt="${t.tags}"
            />
          </a>

          <div class="gallery-info">
            <div class="info-item">
              <p class="info-title">Likes</p>
              <p class="info-value">${t.likes}</p>
            </div>

            <div class="info-item">
              <p class="info-title">Views</p>
              <p class="info-value">${t.views}</p>
            </div>

            <div class="info-item">
              <p class="info-title">Comments</p>
              <p class="info-value">${t.comments}</p>
            </div>

            <div class="info-item">
              <p class="info-title">Downloads</p>
              <p class="info-value">${t.downloads}</p>
            </div>
          </div>
        </li>
      `).join("");u.innerHTML=o,g.refresh()}function v(){u.innerHTML=""}function L(){f.classList.remove("is-hidden")}function w(){f.classList.add("is-hidden")}const n={createGallery:h,clearGallery:v,showLoader:L,hideLoader:w},c=document.querySelector(".form");c.addEventListener("submit",r=>{r.preventDefault();const o=c.elements.input.value.trim();o!==""&&(n.clearGallery(),n.showLoader(),y(o).then(t=>{console.log(t);const i=t.hits;if(i.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}n.createGallery(i)}).catch(t=>{console.log(t),l.error({message:"Something went wrong. Please try again!",position:"topRight"})}).finally(()=>{n.hideLoader()}))});
//# sourceMappingURL=index.js.map
