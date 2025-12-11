class Service {
  constructor(
    public name: string,
    public iconId: string,
    public description: string,
    public includes: string[],
    public priceFrom: number,
    public time: string
  ) {}

  createElement() {
    const serviceElement = document.createElement('div');
    serviceElement.className =
      'flex-1 flex flex-col gap-[15px] bg-bg-secondary rounded-[35px] p-25px';

    serviceElement.innerHTML = `
      <div class="flex gap-[15px]">
        <h3 class="flex-1 text-2xl font-semibold">
          ${this.name}
        </h3>
        <svg class="fill-white h-7.5 aspect-square">
          <use href="/sprite.svg#${this.iconId}" />
        </svg>
      </div>
      <p>
        ${this.description}
      </p>
      <button class="font-semibold flex gap-2.5 items-center">
        Подробнее
        <svg class="arrow fill-white">
          <use href="/sprite.svg#arrow" />
        </svg>
      </button>
      <ul>
        ${this.includes.map((item) => `<li>${item}</li>`).join('')}
      </ul>
      <span class="text-[32px] font-medium text-right">
        От ${this.priceFrom} &#x20bd;
      </span>
      <div class="flex justify-between items-center">
        <span class="text-additional font-medium">${this.time}</span> 
        <a href="/contacts.html" class="btn">Обсудить проект</a>
      </div>
      `;
    return serviceElement;
  }
}

export const services: Service[] = [
  new Service(
    'Создание инструментала / аранжировка',
    'drum',
    'Разрабатываю оригинальные минусовки и аранжировки в нужном стиле — от pop и R’n’B до trap, jazz или кинотемы. Подстраиваюсь подголос, жанр и настроение трека.',
    [
      'Разработка гармонии, ритма и структуры композиции',
      'Подбор инструментов и тембров',
      'Программирование ударных, баса, синтезаторов',
      'Возможность добавления живых инструментов',
    ],
    7000,
    '3-7 дней'
  ),
  new Service(
    'Запись вокала и инструментов',
    'mic',
    'Студийная запись с индивидуальным подбором микрофона и оборудования под твой тембр. Контролирую процесс записи, чтобы каждая фраза звучала идеально.',
    [
      'Настройка оборудования и акустики студии',
      'Запись вокала или инструментов в нескольких дублях',
      'Компинг, чистка и базовая обработка',
      'Возможность онлайн-сессий',
    ],
    1500,
    'По сессий'
  ),
];
