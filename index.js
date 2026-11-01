import{a as d,S as p,i as l}from"./assets/vendor-Pp936Fs7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();d.defaults.baseURL="https://pixabay.com/api/";const m="58355213-20d92452112ec05f5bea62a94";function y(o){return d.get("",{params:{key:m,q:o}})}const u=document.querySelector(".gallery"),f=document.querySelector(".loader"),g=new p(".gallery a",{captionsData:"alt",captionDelay:250});function h(o){const s=o.map(t=>`
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
      `).join("");u.innerHTML=s,g.refresh()}function v(){u.innerHTML=""}function L(){f.classList.remove("is-hidden")}function w(){f.classList.add("is-hidden")}const a={createGallery:h,clearGallery:v,showLoader:L,hideLoader:w},c=document.querySelector(".search-form");c.addEventListener("submit",o=>{o.preventDefault();const s=c.elements.input.value.trim();s!==""&&(a.clearGallery(),a.showLoader(),y(s).then(t=>{const i=t.data.hits;if(i.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}a.createGallery(i)}).catch(t=>{console.log(t),l.error({message:"Something went wrong. Please try again!",position:"topRight"})}).finally(()=>{a.hideLoader()}))});
//# sourceMappingURL=index.js.map
