//데이터베이스
const products = [
    {
        image: "./images/main/product/man/img_man_001.jpg",
        brand: "KALENJI",
        name: "남성 러닝 반팔 티셔츠 RUN DRY 100",
        price: 9900,
        category: ["man", "summer", "running"],
        color: ["black", "blue"],
        badge: "NEW"
    },
    {
        image: "./images/main/product/man/img_man_002.jpg",
        brand: "KIPRUN",
        name: "남성 러닝 반팔 티셔츠 KIPRUN LIGHT",
        price: 34900,
        originalPrice: 39900,
        salePercent: 13,
        category: ["man", "summer", "running"],
        color: ["yellow", "black"],
        badge: "SALE"
    },
    {
        image: "./images/main/product/woman/img_woman_001.jpg",
        brand: "DOMYOS",
        name: "여성 피트니스 레깅스 ESSENTIALS",
        price: 19900,
        originalPrice: 29900,
        salePercent: 33,
        category: ["woman", "spring", "pilates"],
        color: ["black"],
        badge: "SALE"
    },
    {
        image: "./images/main/product/kids/man/img_kids_man_001.jpg",
        brand: "NABAIJI",
        name: "남아 수영 반팔 래쉬가드",
        price: 14900,
        category: ["kids", "summer", "swimming"],
        color: ["blue", "yellow"],
        badge: "NEW"
    },
    {
        image: "./images/main/product/woman/img_woman_002.jpg",
        brand: "QUECHUA",
        name: "여성 하이킹 바람막이 자켓",
        price: 45900,
        category: ["woman", "autumn", "hiking"],
        color: ["red", "black", "gray"],
        badge: ""
    },
    {
        image: "./images/main/product/man/img_man_003.jpg",
        brand: "BTWIN",
        name: "성인 자전거 반팔 500",
        price: 29900,
        category: ["man", "summer", "bike"],
        color: ["white", "black"],
        badge: "NEW"
    },
    {
        image: "./images/main/product/woman/img_woman_003.jpg",
        brand: "KALENJI",
        name: "여성 러닝 숏팬츠 LIGHT",
        price: 25900,
        originalPrice: 29900,
        salePercent: 13,
        category: ["woman", "summer", "running"],
        color: ["pink", "black"],
        badge: "SALE"
    },
    {
        image: "./images/main/product/man/img_man_004.jpg",
        brand: "DOMYOS",
        name: "남성 피트니스 반팔 티셔츠",
        price: 15900,
        category: ["man", "spring", "pilates"],
        color: ["gray", "black"],
        badge: ""
    },
    {
        image: "./images/main/product/kids/man/img_kids_man_002.jpg",
        brand: "QUECHUA",
        name: "남아 하이킹 팬츠",
        price: 27900,
        category: ["kids", "autumn", "hiking"],
        color: ["green", "brown"],
        badge: "NEW"
    },
    {
        image: "./images/main/product/woman/img_woman_004.jpg",
        brand: "NABAIJI",
        name: "여성 원피스 수영복 BASIC",
        price: 19900,
        originalPrice: 24900,
        salePercent: 20,
        category: ["woman", "summer", "swimming"],
        color: ["blue", "navy"],
        badge: "SALE"
    },
    {
        image: "./images/main/product/kids/woman/img_kids_woman_001.jpg",
        brand: "BTWIN",
        name: "여아 자전거 장갑",
        price: 12900,
        category: ["kids", "spring", "bike"],
        color: ["blue", "black"],
        badge: "NEW"
    },
    {
        image: "./images/main/product/woman/img_woman_005.jpg",
        brand: "DOMYOS",
        name: "여성 필라테스 매트 6mm",
        price: 24900,
        originalPrice: 29900,
        salePercent: 17,
        category: ["woman", "summer", "pilates"],
        color: ["purple", "pink"],
        badge: "SALE"
    },
    {
        image: "./images/main/product/man/img_man_005.jpg",
        brand: "KIPRUN",
        name: "남성 러닝 긴팔 티셔츠 DRY",
        price: 29900,
        category: ["man", "autumn", "running"],
        color: ["black", "gray"],
        badge: ""
    },
    {
        image: "./images/main/product/woman/img_woman_006.jpg",
        brand: "QUECHUA",
        name: "여성 하이킹 티셔츠",
        price: 19900,
        category: ["woman", "summer", "hiking"],
        color: ["green", "white"],
        badge: "NEW"
    },
    {
        image: "./images/main/product/man/img_man_006.jpg",
        brand: "NABAIJI",
        name: "남성 수영 반바지 SHORT",
        price: 15900,
        originalPrice: 19900,
        salePercent: 20,
        category: ["man", "summer", "swimming"],
        color: ["navy", "blue", "yellow"],
        badge: "SALE"
    },
    {
        image: "./images/main/product/woman/img_woman_007.jpg",
        brand: "KALENJI",
        name: "여성 러닝 스포츠 브라 BASIC",
        price: 14900,
        category: ["woman", "summer", "running"],
        color: ["black", "white"],
        badge: ""
    },
    {
        image: "./images/main/product/kids/woman/img_kids_woman_002.jpg",
        brand: "DOMYOS",
        name: "여아 필라테스 반팔 티셔츠",
        price: 12900,
        category: ["kids", "spring", "pilates"],
        color: ["blue", "yellow", "red"],
        badge: "NEW"
    },
    {
        image: "./images/main/product/man/img_man_007.jpg",
        brand: "QUECHUA",
        name: "남성 겨울 하이킹 자켓 WARM",
        price: 59900,
        originalPrice: 69900,
        salePercent: 14,
        category: ["man", "winter", "hiking"],
        color: ["black", "gray"],
        badge: "SALE"
    },
    {
        image: "./images/main/product/woman/img_woman_008.jpg",
        brand: "BTWIN",
        name: "여성 자전거 반바지 COMFORT",
        price: 29900,
        category: ["woman", "summer", "bike"],
        color: ["black"],
        badge: "NEW"
    },
    {
        image: "./images/main/product/kids/woman/img_kids_woman_003.jpg",
        brand: "KIPRUN",
        name: "여아 러닝 반팔 티셔츠 EASY",
        price: 10900,
        category: ["kids", "spring", "running"],
        color: ["red", "white"],
        badge: ""
    },
    {
        image: "./images/main/product/man/img_man_008.jpg",
        brand: "DOMYOS",
        name: "남성 필라테스 긴팔 티셔츠",
        price: 21900,
        category: ["man", "autumn", "pilates"],
        color: ["gray", "blue"],
        badge: ""
    },
    {
        image: "./images/main/product/kids/man/img_kids_man_003.jpg",
        brand: "QUECHUA",
        name: "남아 하이킹 반팔 티셔츠",
        price: 9900,
        category: ["kids", "summer", "hiking"],
        color: ["green", "yellow"],
        badge: "NEW"
    },
    {
        image: "./images/main/product/woman/img_woman_009.jpg",
        brand: "KALENJI",
        name: "여성 러닝 타이츠 DRY",
        price: 24900,
        originalPrice: 29900,
        salePercent: 17,
        category: ["woman", "autumn", "running"],
        color: ["black", "purple"],
        badge: "SALE"
    },
    {
        image: "./images/main/product/man/img_man_009.jpg",
        brand: "BTWIN",
        name: "남성 자전거 저지 CLASSIC",
        price: 39900,
        category: ["man", "summer", "bike"],
        color: ["red", "black", "white"],
        badge: "NEW"
    },
    {
        image: "./images/main/product/woman/img_woman_010.jpg",
        brand: "NABAIJI",
        name: "여성 수영 고글 EASY",
        price: 12900,
        category: ["woman", "summer", "swimming"],
        color: ["blue", "white"],
        badge: ""
    },
    {
        image: "./images/main/product/kids/man/img_kids_man_004.jpg",
        brand: "KIPRUN",
        name: "남아 러닝 숏팬츠 LIGHT",
        price: 13900,
        category: ["kids", "summer", "running"],
        color: ["black", "yellow"],
        badge: "NEW"
    },
    {
        image: "./images/main/product/woman/img_woman_001.jpg",
        brand: "DOMYOS",
        name: "여성 필라테스 레깅스 STRETCH",
        price: 19900,
        originalPrice: 24900,
        salePercent: 20,
        category: ["woman", "spring", "pilates"],
        color: ["gray", "black"],
        badge: "SALE"
    },
    {
        image: "./images/main/product/man/img_man_010.jpg",
        brand: "QUECHUA",
        name: "남성 하이킹 바람막이",
        price: 32900,
        category: ["man", "autumn", "hiking"],
        color: ["blue", "navy"],
        badge: ""
    },
    {
        image: "./images/main/product/kids/woman/img_kids_woman_004.jpg",
        brand: "BTWIN",
        name: "여아 자전거 헬멧 KIDS 100",
        price: 18900,
        category: ["kids", "spring", "bike"],
        color: ["yellow", "blue", "red"],
        badge: "NEW"
    },
    {
        image: "./images/main/product/man/img_man_001.jpg",
        brand: "KALENJI",
        name: "남성 러닝 바람막이 자켓 WIND",
        price: 45900,
        originalPrice: 59900,
        salePercent: 23,
        category: ["man", "spring", "running"],
        color: ["black", "gray", "red"],
        badge: "SALE"
    },
    {
        image: "./images/main/product/kids/woman/img_kids_woman_005.jpg",
        brand: "DOMYOS",
        name: "여아 필라테스 숏팬츠 BASIC",
        price: 11900,
        category: ["kids", "summer", "pilates"],
        color: ["blue", "black"],
        badge: "NEW"
    },
    {
        image: "./images/main/product/woman/img_woman_002.jpg",
        brand: "QUECHUA",
        name: "여성 겨울 하이킹 패딩 자켓",
        price: 69900,
        originalPrice: 79900,
        salePercent: 13,
        category: ["woman", "winter", "hiking"],
        color: ["black", "gray"],
        badge: "SALE"
    },
    {
        image: "./images/main/product/man/img_man_002.jpg",
        brand: "KALENJI",
        name: "남성 러닝 반바지 ESSENTIAL",
        price: 15900,
        category: ["man", "summer", "running"],
        color: ["black"],
        badge: ""
    },
    {
        image: "./images/main/product/kids/man/img_kids_man_005.jpg",
        brand: "NABAIJI",
        name: "남아 수영 모자 BASIC",
        price: 5900,
        category: ["kids", "summer", "swimming"],
        color: ["blue", "yellow", "pink"],
        badge: "NEW"
    },
    {
        image: "./images/main/product/woman/img_woman_003.jpg",
        brand: "BTWIN",
        name: "여성 자전거 장갑 ROAD",
        price: 15900,
        originalPrice: 19900,
        salePercent: 20,
        category: ["woman", "spring", "bike"],
        color: ["black", "white"],
        badge: "SALE"
    },
    {
        image: "./images/main/product/man/img_man_003.jpg",
        brand: "DOMYOS",
        name: "남성 필라테스 팬츠 COMFORT",
        price: 24900,
        category: ["man", "autumn", "pilates"],
        color: ["gray", "navy"],
        badge: ""
    },
    {
        image: "./images/main/product/woman/img_woman_004.jpg",
        brand: "KIPRUN",
        name: "여성 러닝 스포츠 브라 SUPPORT",
        price: 19900,
        category: ["woman", "summer", "running"],
        color: ["black", "pink"],
        badge: "NEW"
    },
    {
        image: "./images/main/product/kids/man/img_kids_man_006.jpg",
        brand: "QUECHUA",
        name: "남아 하이킹 모자",
        price: 9900,
        category: ["kids", "summer", "hiking"],
        color: ["blue", "white"],
        badge: ""
    },
    {
        image: "./images/main/product/woman/img_woman_005.jpg",
        brand: "NABAIJI",
        name: "여성 수영 반바지 SHORT",
        price: 14900,
        originalPrice: 19900,
        salePercent: 25,
        category: ["woman", "summer", "swimming"],
        color: ["navy", "blue"],
        badge: "SALE"
    },
    {
        image: "./images/main/product/man/img_man_004.jpg",
        brand: "KALENJI",
        name: "남성 러닝 기능성 양말",
        price: 7900,
        category: ["man", "spring", "running"],
        color: ["black", "white", "gray"],
        badge: "NEW"
    },
    {
        image: "./images/main/product/woman/img_woman_006.jpg",
        brand: "DOMYOS",
        name: "여성 필라테스 탑 BASIC",
        price: 17900,
        category: ["woman", "summer", "pilates"],
        color: ["purple", "black"],
        badge: "NEW"
    },
    {
        image: "./images/main/product/man/img_man_005.jpg",
        brand: "QUECHUA",
        name: "남성 하이킹 반팔 티셔츠",
        price: 22900,
        originalPrice: 27900,
        salePercent: 18,
        category: ["man", "summer", "hiking"],
        color: ["green", "gray"],
        badge: "SALE"
    },
    {
        image: "./images/main/product/kids/man/img_kids_man_007.jpg",
        brand: "KIPRUN",
        name: "남아 러닝 긴팔 티셔츠 WARM",
        price: 14900,
        category: ["kids", "autumn", "running"],
        color: ["red", "blue"],
        badge: ""
    },
    {
        image: "./images/main/product/woman/img_woman_007.jpg",
        brand: "BTWIN",
        name: "여성 자전거 헬멧 500",
        price: 29900,
        category: ["woman", "summer", "bike"],
        color: ["white", "black"],
        badge: "NEW"
    },
    {
        image: "./images/main/product/man/img_man_006.jpg",
        brand: "KALENJI",
        name: "남성 러닝 조깅팬츠 LIGHT",
        price: 25900,
        category: ["man", "spring", "running"],
        color: ["gray", "black"],
        badge: ""
    },
    {
        image: "./images/main/product/kids/woman/img_kids_woman_006.jpg",
        brand: "DOMYOS",
        name: "여아 필라테스 요가매트",
        price: 15900,
        originalPrice: 19900,
        salePercent: 20,
        category: ["kids", "summer", "pilates"],
        color: ["blue", "yellow"],
        badge: "SALE"
    },
    {
        image: "./images/main/product/woman/img_woman_008.jpg",
        brand: "QUECHUA",
        name: "여성 하이킹 레깅스",
        price: 24900,
        category: ["woman", "autumn", "hiking"],
        color: ["black", "green"],
        badge: "NEW"
    },
    {
        image: "./images/main/product/man/img_man_007.jpg",
        brand: "NABAIJI",
        name: "남성 수영 반팔 티셔츠",
        price: 19900,
        originalPrice: 24900,
        salePercent: 20,
        category: ["man", "summer", "swimming"],
        color: ["blue", "white"],
        badge: "SALE"
    },
    {
        image: "./images/main/product/woman/img_woman_009.jpg",
        brand: "KIPRUN",
        name: "여성 러닝 조깅팬츠 ESSENTIAL",
        price: 21900,
        category: ["woman", "summer", "running"],
        color: ["black", "pink", "purple"],
        badge: ""
    },
    {
        image: "./images/main/product/kids/woman/img_kids_woman_007.jpg",
        brand: "BTWIN",
        name: "여아 자전거 저지 COMFORT",
        price: 15900,
        category: ["kids", "spring", "bike"],
        color: ["red", "blue"],
        badge: "NEW"
    },
    {
        image: "./images/main/product/man/img_man_008.jpg",
        brand: "KALENJI",
        name: "남성 러닝 반팔 티셔츠 RUN DRY 100",
        price: 12900,
        category: ["man", "summer", "running"],
        color: ["black", "blue"],
        badge: "NEW"
    },
    {
        image: "./images/main/product/man/img_man_009.jpg",
        brand: "KIPRUN",
        name: "남성 러닝 조깅팬츠 LIGHT",
        price: 19900,
        category: ["man", "spring", "running"],
        color: ["gray", "black"],
        badge: "NEW"
    },
    {
        image: "./images/main/product/man/img_man_010.jpg",
        brand: "BTWIN",
        name: "남성 자전거 헬멧 500",
        price: 24900,
        category: ["man", "summer", "bike"],
        color: ["white", "black"],
        badge: "NEW"
    },
    {
        image: "./images/main/product/woman/img_woman_010.jpg",
        brand: "DOMYOS",
        name: "여성 필라테스 레깅스 ESSENTIAL",
        price: 19900,
        category: ["woman", "summer", "pilates"],
        color: ["black", "purple"],
        badge: ""
    },
    {
        image: "./images/main/product/woman/img_woman_001.jpg",
        brand: "DOMYOS",
        name: "여성 러닝 반팔 티셔츠 ESSENTIAL",
        price: 19900,
        category: ["woman", "summer", "running"],
        color: ["black", "purple"],
        badge: ""
    },
    {
        image: "./images/main/product/woman/img_woman_002.jpg",
        brand: "KALENJI",
        name: "여성 러닝 숏팬츠 LIGHT",
        price: 15900,
        category: ["woman", "spring", "running"],
        color: ["pink", "black"],
        badge: ""
    },
    {
        image: "./images/main/product/man/img_man_001.jpg",
        brand: "QUECHUA",
        name: "남성 하이킹 자켓 PRO",
        price: 49900,
        originalPrice: 59900,
        salePercent: 17,
        category: ["man", "autumn", "hiking"],
        color: ["blue", "gray"],
        badge: "SALE"
    },
    {
        image: "./images/main/product/woman/img_woman_003.jpg",
        brand: "QUECHUA",
        name: "여성 하이킹 바람막이 WARM",
        price: 45900,
        originalPrice: 55900,
        salePercent: 18,
        category: ["woman", "winter", "hiking"],
        color: ["red", "black", "gray"],
        badge: "SALE"
    },
    {
        image: "./images/main/product/kids/woman/img_kids_woman_008.jpg",
        brand: "QUECHUA",
        name: "여아 하이킹 자켓 KIDS 100",
        price: 29900,
        originalPrice: 39900,
        salePercent: 25,
        category: ["kids", "summer", "hiking"],
        color: ["green", "yellow"],
        badge: "SALE"
    },
    {
        image: "./images/main/product/man/img_man_002.jpg",
        brand: "QUECHUA",
        name: "남성 하이킹 레깅스 PRO",
        price: 25900,
        originalPrice: 32900,
        salePercent: 21,
        category: ["man", "spring", "hiking"],
        color: ["black", "gray"],
        badge: "SALE"
    },
    {
        image: "./images/main/product/man/img_man_003.jpg",
        brand: "KALENJI",
        name: "남성 러닝 반팔 티셔츠 RUN DRY 100",
        price: 29900,
        originalPrice: 39900,
        salePercent: 25,
        category: ["man", "summer", "running"],
        color: ["black", "blue"],
        badge: "SALE"
    },
    {
        image: "./images/main/product/woman/img_woman_004.jpg",
        brand: "KIPRUN",
        name: "여성 러닝 숏팬츠 LIGHT",
        price: 19900,
        originalPrice: 24900,
        salePercent: 20,
        category: ["woman", "spring", "running"],
        color: ["pink", "black"],
        badge: "SALE"
    },
    {
        image: "./images/main/product/man/img_man_004.jpg",
        brand: "KALENJI",
        name: "남성 러닝 긴팔 티셔츠 WARM",
        price: 34900,
        originalPrice: 44900,
        salePercent: 22,
        category: ["man", "autumn", "running"],
        color: ["gray", "black"],
        badge: "SALE"
    },
    {
        image: "./images/main/product/man/img_man_005.jpg",
        brand: "KALENJI",
        name: "남성 서핑 반팔 티셔츠 PRO",
        price: 34900,
        originalPrice: 44900,
        salePercent: 22,
        category: ["man", "summer", "surfing"],
        color: ["blue", "white"],
        badge: "SALE"
    },
    {
        image: "./images/main/product/woman/img_woman_005.jpg",
        brand: "NABAIJI",
        name: "여성 서핑 래쉬가드 LIGHT",
        price: 29900,
        originalPrice: 39900,
        salePercent: 25,
        category: ["woman", "summer", "surfing"],
        color: ["pink", "black"],
        badge: "SALE"
    },
    {
        image: "./images/main/product/man/img_man_006.jpg",
        brand: "KIPRUN",
        name: "남성 서핑 숏팬츠 PRO",
        price: 25900,
        originalPrice: 32900,
        salePercent: 21,
        category: ["man", "summer", "surfing"],
        color: ["blue", "gray"],
        badge: "SALE"
    },
    {
        image: "./images/main/product/woman/img_woman_006.jpg",
        brand: "DOMYOS",
        name: "여성 서핑 바람막이 자켓",
        price: 45900,
        originalPrice: 59900,
        salePercent: 23,
        category: ["woman", "spring", "surfing"],
        color: ["red", "black"],
        badge: "SALE"
    },
    {
        image: "./images/main/product/man/img_man_007.jpg",
        brand: "QUECHUA",
        name: "남성 서핑 레깅스 PRO",
        price: 27900,
        originalPrice: 34900,
        salePercent: 20,
        category: ["man", "summer", "surfing"],
        color: ["black", "gray"],
        badge: "SALE"
    },
    {
        image: "./images/main/product/woman/img_woman_007.jpg",
        brand: "BTWIN",
        name: "여성 서핑 반바지 LIGHT",
        price: 19900,
        originalPrice: 24900,
        salePercent: 20,
        category: ["woman", "summer", "surfing"],
        color: ["yellow", "blue"],
        badge: "SALE"
    },
    {
        image: "./images/main/product/man/img_man_008.jpg",
        brand: "KALENJI",
        name: "남성 서핑 후드 티셔츠 PRO",
        price: 32900,
        originalPrice: 39900,
        salePercent: 18,
        category: ["man", "spring", "surfing"],
        color: ["black", "blue"],
        badge: "SALE"
    },
    {
        image: "./images/main/product/man/img_man_009.jpg",
        brand: "NABAIJI",
        name: "남성 수영 반팔 티셔츠 PRO",
        price: 29900,
        originalPrice: 39900,
        salePercent: 25,
        category: ["man", "summer", "swimming"],
        color: ["blue", "black"],
        badge: "SALE"
    },
    {
        image: "./images/main/product/woman/img_woman_008.jpg",
        brand: "NABAIJI",
        name: "여성 원피스 수영복 BASIC",
        price: 19900,
        originalPrice: 24900,
        salePercent: 20,
        category: ["woman", "summer", "swimming"],
        color: ["blue", "navy"],
        badge: "SALE"
    },
    {
        image: "./images/main/product/man/img_man_010.jpg",
        brand: "NABAIJI",
        name: "남성 수영 반바지 SHORT",
        price: 15900,
        originalPrice: 19900,
        salePercent: 20,
        category: ["man", "summer", "swimming"],
        color: ["navy", "blue", "yellow"],
        badge: "SALE"
    },
    {
        image: "./images/main/product/man/img_man_001.jpg",
        brand: "BTWIN",
        name: "남성 자전거 헬멧 500",
        price: 29900,
        originalPrice: 39900,
        salePercent: 25,
        category: ["man", "summer", "bike"],
        color: ["black", "white"],
        badge: "SALE"
    },
    {
        image: "./images/main/product/woman/img_woman_009.jpg",
        brand: "BTWIN",
        name: "여성 자전거 반바지 COMFORT",
        price: 25900,
        originalPrice: 32900,
        salePercent: 21,
        category: ["woman", "summer", "bike"],
        color: ["black", "pink"],
        badge: "SALE"
    },
    {
        image: "./images/main/product/kids/man/img_kids_man_008.jpg",
        brand: "BTWIN",
        name: "남아 자전거 헬멧 KIDS 100",
        price: 18900,
        originalPrice: 23900,
        salePercent: 21,
        category: ["kids", "spring", "bike"],
        color: ["yellow", "blue", "red"],
        badge: "SALE"
    },
    {
        image: "./images/main/product/man/img_man_002.jpg",
        brand: "BTWIN",
        name: "남성 자전거 저지 ROAD",
        price: 34900,
        originalPrice: 44900,
        salePercent: 22,
        category: ["man", "summer", "bike"],
        color: ["red", "black", "white"],
        badge: "SALE"
    },
    {
        image: "./images/main/product/woman/img_woman_010.jpg",
        brand: "BTWIN",
        name: "여성 자전거 장갑 ROAD",
        price: 15900,
        originalPrice: 19900,
        salePercent: 20,
        category: ["woman", "spring", "bike"],
        color: ["black", "white"],
        badge: "SALE"
    },
    {
        image: "./images/main/product/kids/man/img_kids_man_009.jpg",
        brand: "BTWIN",
        name: "남아 자전거 저지 COMFORT",
        price: 15900,
        originalPrice: 19900,
        salePercent: 20,
        category: ["kids", "spring", "bike"],
        color: ["red", "blue"],
        badge: "SALE"
    },
    {
        image: "./images/main/product/woman/img_woman_001.jpg",
        brand: "DOMYOS",
        name: "여성 필라테스 레깅스 STRETCH",
        price: 19900,
        originalPrice: 24900,
        salePercent: 20,
        category: ["woman", "spring", "pilates"],
        color: ["gray", "black"],
        badge: "SALE"
    },
    {
        image: "./images/main/product/man/img_man_003.jpg",
        brand: "DOMYOS",
        name: "남성 필라테스 팬츠 COMFORT",
        price: 24900,
        originalPrice: 29900,
        salePercent: 17,
        category: ["man", "autumn", "pilates"],
        color: ["gray", "navy"],
        badge: "SALE"
    },
    {
        image: "./images/main/product/kids/woman/img_kids_woman_009.jpg",
        brand: "DOMYOS",
        name: "여아 필라테스 숏팬츠 BASIC",
        price: 11900,
        originalPrice: 14900,
        salePercent: 20,
        category: ["kids", "summer", "pilates"],
        color: ["blue", "black"],
        badge: "SALE"
    },
    {
        image: "./images/main/product/kids/woman/img_kids_woman_010.jpg",
        brand: "KIPRUN",
        name: "여아 러닝 반팔 티셔츠 LIGHT",
        price: 13900,
        category: ["kids", "summer", "running"],
        color: ["black", "yellow"],
        badge: "NEW"
    },
    {
        image: "./images/main/product/kids/man/img_kids_man_001.jpg",
        brand: "KALENJI",
        name: "남아 러닝 숏팬츠 ESSENTIAL",
        price: 12900,
        category: ["kids", "spring", "running"],
        color: ["blue", "green"],
        badge: ""
    },
    {
        image: "./images/main/product/kids/woman/img_kids_woman_001.jpg",
        brand: "KIPRUN",
        name: "여아 러닝 긴팔 티셔츠 WARM",
        price: 14900,
        category: ["kids", "autumn", "running"],
        color: ["red", "blue"],
        badge: "NEW"
    },
    {
        image: "./images/main/product/kids/man/img_kids_man_010.jpg",
        brand: "KALENJI",
        name: "남아 러닝 바람막이 자켓 WIND",
        price: 15900,
        category: ["kids", "spring", "running"],
        color: ["gray", "black"],
        badge: ""
    }
]