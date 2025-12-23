import"./main-Cnp8N0kj.js";import{i as e,n as t,r as n,t as r}from"./renderUtils-CQWDP5it.js";import{t as i}from"./modalUtils-DrQWLGV4.js";var a=[{iconId:`speedometer`,title:`Быстро вникаю`,description:`Понимаю задачу и контекст без лишних итераций.`},{iconId:`target`,title:`Под платформу`,description:`Звук адаптирован под конкретный формат и носитель.`},{iconId:`brain`,title:`Думаю шире звука`,description:`Работаю как медиа-специалист, а не только техник.`},{iconId:`handshake`,title:`Надёжно и спокойно`,description:`Чёткие сроки, чистый процесс, предсказуемый результат.`}],o=({iconId:e,title:t,description:n})=>{let r=document.createElement(`div`);return r.className=`flex-[1_1_240px]`,r.innerHTML=`
    <div
      class="flex flex-col gap-2.5 items-center mb-[15px] text-center text-additional"
    >
      <svg class="fill-current aspect-square h-10">
        <use href="./sprite.svg#${e}" />
      </svg>
      <h3 class="font-semibold">${t}</h3>
    </div>
    <p class="text-center">
      ${n}
    </p>
  `,r};i();var s=document.querySelector(`[data-service-container]`),c=document.querySelector(`[data-benefit-container]`),l=document.querySelector(`[data-review-container]`),u=document.querySelector(`[data-project-container]`);if(!s)throw Error(`Service container not found`);if(!c)throw Error(`Benefit container not found`);if(!l)throw Error(`Review container not found`);if(!u)throw Error(`Project container not found`);var d=a;e(s,e=>!!e.isPopular),r(c,d,o),n(l,e=>!!e.isPopular),t(u,e=>!!e.isPopular);