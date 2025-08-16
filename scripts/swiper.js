//모든 스와이퍼 동작
/* ------------------------------------------------------------1행 ad스와이퍼 */
var adSwiper = new Swiper('#ad .ad-swiper', { 
    loop:true,/* 무한루프 */
    autoplay:{delay:5000},
    direction:'horizontal',/* 이동하는 방향 */
    /* 방향 */
    navigation:{
        prevEl:'#ad .swiper-button-prev',
        nextEl:'#ad .swiper-button-next',
    },
    /* 페이지번호 */
    pagination: {
        el: '#ad .page-bar .swiper-pagination',
        type:'fraction',
    },
    /* 스크롤바 */
    scrollbar:{
        el: '#ad .page-bar .swiper-scrollbar', // 스크롤바 요소 선택자
        draggable: true, // 드래그 가능
        snapOnRelease: true, // 드래그 끝나면 해당 슬라이드로 스냅
    },
})

var seasonSwiper = new Swiper('#season .ad-swiper', { 
    loop:true,/* 무한루프 */
    autoplay:{delay:3000},
    direction:'horizontal',/* 이동하는 방향 */
    /* 방향 */
    navigation:{
        prevEl:'#ad .swiper-button-prev',
        nextEl:'#ad .swiper-button-next',
    },
    /* 페이지번호 */
    pagination: {
        el: '#ad .page-bar .swiper-pagination',
        type:'fraction',
    },
    /* 스크롤바 */
    scrollbar:{
        el: '#ad .page-bar .swiper-scrollbar', // 스크롤바 요소 선택자
        draggable: true, // 드래그 가능
        snapOnRelease: true, // 드래그 끝나면 해당 슬라이드로 스냅
    },
})

/* ------------------------------------------------------------제품 스와이퍼 */
const allSwiper = new Swiper('.container .swiper', {
    slidesPerView:'auto',
    centeredSlides: false,
})

/* ------------------------------------------------------------9행 new스와이퍼 */
const activeSwiper = new Swiper('.active-swiper', {
    slidesPerView:'auto',
    loop:true,
    centeredSlides:true,
    autoplay:{delay:3000},
    direction:'horizontal',
})