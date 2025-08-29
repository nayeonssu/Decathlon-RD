//메인화면 동작


/* ---------------------------------------------------------------------------a 버튼 이동 없앰 */
const links = document.querySelectorAll("a");
links.forEach((a) => {
    a.addEventListener("click", (e) => {
    if (a.getAttribute("href") == "#") {
        e.preventDefault();
    }
    });
});

/* ---------------------------------------------------------------------------신제품 목록 */
const manNew = document.querySelector('#new .man-swiper .swiper-wrapper');
const womanNew = document.querySelector('#new .woman-swiper .swiper-wrapper');
const kidsNew = document.querySelector('#new .kids-swiper .swiper-wrapper');

function renderProducts(container, items) {
    container.innerHTML = ''; // 초기화
    
    items.forEach(product => {
        let colorDots = '';
        /* 컬러 반복문 */
        if (product.color) {
            product.color.forEach(c => {
                colorDots += `<span class="color-dot" style="background-color: ${c};" title="${c}"></span>`;
            });
        }
        /* 상품 디자인 */
        container.innerHTML += `
            <div class="swiper-slide">
                <div class="pd-img">
                    ${product.badge ? `<span class="badge badge-${product.badge.toLowerCase()}">${product.badge}</span>` : ''}
                    <div class="pd-color">${colorDots}</div>
                    <button type="button" class="cart-in">
                        <img src="../images/icon/icon_cart_save.png" alt="장바구니 담기"/>
                    </button>
                    <img src="${product.image}" alt="${product.name}" />
                </div>
                <div class="pd-info">
                    <a href="#" class="info-top">
                        <p class="brand">${product.brand}</p>
                        <h3 class="pd-name">${product.name}</h3>
                    </a>
                        <a href="#" class="info-bottom">
                        ${product.originalPrice ? `<del>${product.originalPrice.toLocaleString()}</del>` : ''}
                        <div class="pd-price">
                            ${product.salePercent ? `<span class="price-sale">${product.salePercent}%</span>` : ''}
                            <span>₩${product.price.toLocaleString()}</span>
                        </div>
                    </a>
                </div>
            </div>
        `;
    });
}

// NEW인 제품만 필터링
const newItems = products.filter(p => p.badge === 'NEW');

// man, woman, kids 카테고리별로 필터링
const manItems = newItems.filter(p => p.category.includes('man')).slice(0, 7);
const womanItems = newItems.filter(p => p.category.includes('woman')).slice(0, 7);
const kidsItems = newItems.filter(p => p.category.includes('kids')).slice(0, 7);

// 각각 렌더링
renderProducts(manNew, manItems);
renderProducts(womanNew, womanItems);
renderProducts(kidsNew, kidsItems);

/* ---------------------------------------------------------------------------계절 목록 */

const manSeason = document.querySelector('#season .man-swiper .swiper-wrapper');
const womanSeason = document.querySelector('#season .woman-swiper .swiper-wrapper');
const kidsSeason = document.querySelector('#season .kids-swiper .swiper-wrapper');

function renderProducts(container, items) {
    container.innerHTML = ''; // 초기화

    items.forEach(product => {
        let colorDots = '';
        /* 컬러 반복문 */
        if (product.color) {
            product.color.forEach(c => {
                colorDots += `<span class="color-dot" style="background-color: ${c};" title="${c}"></span>`;
            });
        }
        /* 상품 디자인 */
        container.innerHTML += `
            <div class="swiper-slide">
                <div class="pd-img">
                    ${product.badge ? `<span class="badge badge-${product.badge.toLowerCase()}">${product.badge}</span>` : ''}
                    <div class="pd-color">${colorDots}</div>
                    <button type="button" class="cart-in">
                        <img src="../images/icon/icon_cart_save.png" alt="장바구니 담기"/>
                    </button>
                    <img src="${product.image}" alt="${product.name}" />
                </div>
                <div class="pd-info">
                    <a href="#" class="info-top">
                        <p class="brand">${product.brand}</p>
                        <h3 class="pd-name">${product.name}</h3>
                    </a>
                    <a href="#" class="info-bottom">
                        ${product.originalPrice ? `<del>${product.originalPrice.toLocaleString()}</del>` : ''}
                        <div class="pd-price">
                            ${product.salePercent ? `<span class="price-sale">${product.salePercent}%</span>` : ''}
                            <span>${product.price.toLocaleString()}</span>
                        </div>
                    </a>
                </div>
            </div>
        `;
    });
}

// NEW인 제품만 필터링
const seasonItems = products.filter(p => p.category.includes('summer'));

// man, woman, kids 카테고리별로 필터링
const manItemsSe = seasonItems.filter(p => p.category.includes('man')).slice(0, 7);
const womanItemsSe = seasonItems.filter(p => p.category.includes('woman')).slice(0, 7);
const kidsItemsSe = seasonItems.filter(p => p.category.includes('kids')).slice(0, 7);

// 각각 렌더링
renderProducts(manSeason, manItemsSe);
renderProducts(womanSeason, womanItemsSe);
renderProducts(kidsSeason, kidsItemsSe);

/* ---------------------------------------------------------------------------스포츠 목록 */

const manSports = document.querySelector('#sports .man-swiper .swiper-wrapper');
const womanSports = document.querySelector('#sports .woman-swiper .swiper-wrapper');
const kidsSports = document.querySelector('#sports .kids-swiper .swiper-wrapper');

function renderProducts(container, items) {
    container.innerHTML = ''; // 초기화

    items.forEach(product => {
        let colorDots = '';
        /* 컬러 반복문 */
        if (product.color) {
            product.color.forEach(c => {
                colorDots += `<span class="color-dot" style="background-color: ${c};" title="${c}"></span>`;
            });
        }
        /* 상품 디자인 */
        container.innerHTML += `
            <div class="swiper-slide">
                <div class="pd-img">
                    ${product.badge ? `<span class="badge badge-${product.badge.toLowerCase()}">${product.badge}</span>` : ''}
                    <div class="pd-color">${colorDots}</div>
                    <button type="button" class="cart-in">
                        <img src="../images/icon/icon_cart_save.png" alt="장바구니 담기"/>
                    </button>
                    <img src="${product.image}" alt="${product.name}" />
                </div>
                <div class="pd-info">
                    <a href="#" class="info-top">
                        <p class="brand">${product.brand}</p>
                        <h3 class="pd-name">${product.name}</h3>
                    </a>
                    <a href="#" class="info-bottom">
                        ${product.originalPrice ? `<del>${product.originalPrice.toLocaleString()}</del>` : ''}
                        <div class="pd-price">
                            ${product.salePercent ? `<span class="price-sale">${product.salePercent}%</span>` : ''}
                            <span>${product.price.toLocaleString()}</span>
                        </div>
                    </a>
                </div>
            </div>
        `;
    });
}

// NEW인 제품만 필터링
const sportsItems = products.filter(p => p.category.includes('running'));

// man, woman, kids 카테고리별로 필터링
const manItemsSp = sportsItems.filter(p => p.category.includes('man')).slice(0, 7);
const womanItemsSp = sportsItems.filter(p => p.category.includes('woman')).slice(0, 7);
const kidsItemsSp = sportsItems.filter(p => p.category.includes('kids')).slice(0, 7);

// 각각 렌더링
renderProducts(manSports, manItemsSp);
renderProducts(womanSports, womanItemsSp);
renderProducts(kidsSports, kidsItemsSp);

/* ---------------------------------------------------------------------------키즈룩 목록 */

const mankidsLook = document.querySelector('#kids-look .man-swiper .swiper-wrapper');
const womankidsLook = document.querySelector('#kids-look .woman-swiper .swiper-wrapper');

function renderProducts(container, items) {
    container.innerHTML = ''; // 초기화

    items.forEach(product => {
        let colorDots = '';
        /* 컬러 반복문 */
        if (product.color) {
            product.color.forEach(c => {
                colorDots += `<span class="color-dot" style="background-color: ${c};" title="${c}"></span>`;
            });
        }
        /* 상품 디자인 */
        container.innerHTML += `
            <div class="swiper-slide">
                <div class="pd-img">
                    ${product.badge ? `<span class="badge badge-${product.badge.toLowerCase()}">${product.badge}</span>` : ''}
                    <div class="pd-color">${colorDots}</div>
                    <button type="button" class="cart-in">
                        <img src="../images/icon/icon_cart_save.png" alt="장바구니 담기"/>
                    </button>
                    <img src="${product.image}" alt="${product.name}" />
                </div>
                <div class="pd-info">
                    <a href="#" class="info-top">
                        <p class="brand">${product.brand}</p>
                        <h3 class="pd-name">${product.name}</h3>
                    </a>
                    <a href="#" class="info-bottom">
                        ${product.originalPrice ? `<del>${product.originalPrice.toLocaleString()}</del>` : ''}
                        <div class="pd-price">
                            ${product.salePercent ? `<span class="price-sale">${product.salePercent}%</span>` : ''}
                            <span>${product.price.toLocaleString()}</span>
                        </div>
                    </a>
                </div>
            </div>
        `;
    });
}

// 키즈인 제품만 필터링
const kidsLookItems = products.filter(p => p.category.includes('kids'));

// man, woman 카테고리별로 필터링
const boyItemsKL = kidsLookItems.filter(p => p.name.includes('남아')).slice(0, 7);
const girlItemsKL = kidsLookItems.filter(p => p.name.includes('여아')).slice(0, 7);

// 각각 렌더링
renderProducts(mankidsLook, boyItemsKL);
renderProducts(womankidsLook, girlItemsKL);

/* ---------------------------------------------------------------------------세일 목록 */

const sport1ssale = document.querySelector('#sale .sports1-swiper .swiper-wrapper');
const sport2ssale = document.querySelector('#sale .sports2-swiper .swiper-wrapper');
const sport3ssale = document.querySelector('#sale .sports3-swiper .swiper-wrapper');
const sport4ssale = document.querySelector('#sale .sports4-swiper .swiper-wrapper');
const sport5ssale = document.querySelector('#sale .sports5-swiper .swiper-wrapper');
const sport6ssale = document.querySelector('#sale .sports6-swiper .swiper-wrapper');


function renderProducts(container, items) {
    container.innerHTML = ''; // 초기화

    items.forEach(product => {
        let colorDots = '';
        /* 컬러 반복문 */
        if (product.color) {
            product.color.forEach(c => {
                colorDots += `<span class="color-dot" style="background-color: ${c};" title="${c}"></span>`;
            });
        }
        /* 상품 디자인 */
        container.innerHTML += `
            <div class="swiper-slide">
                <div class="pd-img">
                    ${product.badge ? `<span class="badge badge-${product.badge.toLowerCase()}">${product.badge}</span>` : ''}
                    <div class="pd-color">${colorDots}</div>
                    <button type="button" class="cart-in">
                        <img src="../images/icon/icon_cart_save.png" alt="장바구니 담기"/>
                    </button>
                    <img src="${product.image}" alt="${product.name}" />
                </div>
                <div class="pd-info">
                    <a href="#" class="info-top">
                        <p class="brand">${product.brand}</p>
                        <h3 class="pd-name">${product.name}</h3>
                    </a>
                    <a href="#" class="info-bottom">
                        ${product.originalPrice ? `<del>${product.originalPrice.toLocaleString()}</del>` : ''}
                        <div class="pd-price">
                            ${product.salePercent ? `<span class="price-sale">${product.salePercent}%</span>` : ''}
                            <span>${product.price.toLocaleString()}</span>
                        </div>
                    </a>
                </div>
            </div>
        `;
    });
}

// NEW인 제품만 필터링
const saleItems = products.filter(p => p.badge === 'SALE');

// man, woman, kids 카테고리별로 필터링
const sportsItems1 = saleItems.filter(p => p.category.includes('hiking')).slice(0, 7);
const sportsItems2 = saleItems.filter(p => p.category.includes('running')).slice(0, 7);
const sportsItems3 = saleItems.filter(p => p.category.includes('surfing')).slice(0, 7);
const sportsItems4 = saleItems.filter(p => p.category.includes('swimming')).slice(0, 7);
const sportsItems5 = saleItems.filter(p => p.category.includes('bike')).slice(0, 7);
const sportsItems6 = saleItems.filter(p => p.category.includes('pilates')).slice(0, 7);

// 각각 렌더링
renderProducts(sport1ssale, sportsItems1);
renderProducts(sport2ssale, sportsItems2);
renderProducts(sport3ssale, sportsItems3);
renderProducts(sport4ssale, sportsItems4);
renderProducts(sport5ssale, sportsItems5);
renderProducts(sport6ssale, sportsItems6);

/* ---------------------------------------------------------------------------------------tap 컨트롤 */
/* 각 섹션마다 탭기능 다르게 */
function setupTabs(sectionId) {
    const section = document.getElementById(sectionId);
    const tabButtons = section.querySelectorAll('.tap button');
    const swipers = section.querySelectorAll('.container .swiper');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            swipers.forEach(swiper => swiper.style.display = 'none');

            let btnClass = btn.classList[0];
            /* tap의 girl -> woman 이름변경 */
            let swiperClass = btnClass === 'girl' ? 'woman' : btnClass;

            section.querySelector(`.${swiperClass}-swiper`).style.display = 'block';
        });
    });

    // 초기화 - 첫 탭 활성화, 첫 swiper 보이기
    swipers.forEach(swiper => swiper.style.display = 'none');
    ///배열1번째(0번째)에 class=active추가
    tabButtons[0].classList.add('active');
    //첫 번째 탭 버튼의 클래스들 중 첫 번째 클래스를 변수 firstClass 에 저장
    const firstClass = tabButtons[0].classList[0];
    section.querySelector(`.${firstClass}-swiper`).style.display = 'block';
}

// 각각 섹션에 대해 실행
setupTabs('new');
setupTabs('season');
setupTabs('sports');
setupTabs('kids-look');
setupTabs('sale');