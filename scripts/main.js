//메인화면 동작
// summer 카테고리인 것만 필터링
const summerItems = products.filter(product => product.category.includes('summer'));

// 최대 4개까지만 화면에 보이도록 한다.
const limitedItems = summerItems.slice(0, 3);

//html의 id가 summer-products인 요소를 부른다.
/* const container = document.getElementById('summer-products'); */
const container = document.querySelector('.container .swiper-wrapper');

limitedItems.forEach(product => {
    // 컬러칩 원 생성
    let colorDots = '';
    if (product.color && product.color.length > 0) {
        product.color.forEach(c => {
            colorDots += `<span class="color-dot" style="background-color: ${c};" title="${c}"></span>`;
        });
    }

    //만약 DB에 originalPrice가 있다면 1000단위로 쉼표를 찍으면서 보여줘라 그렇지 않으면 보이지 않는다
    let original = product.originalPrice ? `<del>₩${product.originalPrice.toLocaleString()}</del>` : '';
    //만약 DB에 sale이 있다면 ???%로 보여줘라 그렇지 않으면 보이지 않는다
    let sale = product.salePercent ? `<span class="sale">${product.salePercent}%</span>` : '';
    
    // badge처리
    let moreBadge = '';
    if (product.Badge) {
        moreBadge = `<span class="badge badge-${product.Badge.toLowerCase()}">${product.Badge}</span>`;
    }


    //자바스크립트에서 작성하는 html구조 -> 위에서 forEach(반복문)을 활용해서 html도 제품1개의 디자인정도만 작성하면된다.
    //<div id="summer-products"></div> 여기에 들어간다.
    container.innerHTML += `
    <div class="swiper-slide">
        <div class="pd-img">
            ${product.Badge ? `<span class="badge badge-${product.Badge.toLowerCase()}">${product.Badge}</span>` : ''}
            <div class="pd-color">${colorDots}</div>
            <button type="button" class="cart-in">
                <img src="#" alt="장바구니 담기"/>
            </button>
            <img src="${product.image}" alt="${product.name}" />
        </div>
        <div class="pd-info">
            <a href="#" class="info-top">
                <p class="brand">${product.brand}</p>
                <h3 class="pd-name">${product.name}</h3>
            </a>
            <a href="#" class="info-bottom">
                ${product.originalPrice ? `<del>₩${product.originalPrice.toLocaleString()}</del>` : ''}
                <div class="pd-price">
                    ${product.salePercent ? `<span class="price-sale">${product.salePercent}%</span>` : ''}
                    <span>₩${product.price.toLocaleString()}</span>
                </div>
            </a>
        </div>
    </div>
`;
});