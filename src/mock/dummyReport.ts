// mock/dummyReport.ts
export const dummyReport = {
  status: "success",
  data: {
    report_id: 1,
    primary: "외식업",
    secondary: "일식",
    district: "노원구",
    neighborhood: "공릉동",
    sub_neighborhood: "공릉 1동",
    created_at: "2025-08-23T00:00:00",
    description_summary: {
      total_description:
        "공릉동은 **중위소득 수준의 4050대** 비중이 높고, 주택가 중심의 조용한 분위기와 **가성비 좋은 일식 수요**가 뚜렷하게 나타나는 지역이에요.",
      line_1: "특히 **오후와 점심 시간대**에 방문객이 집중되는 경향이 있어요.",
      line_2:
        "부동산 시세는 m²당 평균 **573만 원**, 중위 **583만 원** 수준이며 최근 3개월간 거래량은 감소세예요.",
      line_3:
        "소비자들은 **신선한 재료, 청결, 친절한 서비스**를 중요하게 생각해요."
    },
    keywords: [
      {
        platform: "NAVER_BLOG",
        keywords: ["맛집추천", "예스키즈존", "카공"],
        descript:
          "연령대가 양극화되어 있고, 대학가 쪽은 젊은 층의 수요가 많아 가성비 있는 식사와 카페형 요식업이 주로 자리잡았어요."
      },
      {
        platform: "NAVER_REVIEW",
        keywords: ["직거래", "중고가전", "새상품"],
        descript:
          "20~40대 젊은 층이 많아 중고 거래·직거래 플랫폼 이용이 활발하며, 합리적인 가격대 제품에 대한 수요가 높아요."
      },
      {
        platform: "YOUTUBE",
        keywords: ["과제", "야식", "친구"],
        descript:
          "대학생과 청년층이 많아 야식·배달·친구 모임 콘텐츠가 인기를 끌며, 저녁 시간대 소비 패턴이 뚜렷해요."
      }
    ],
    population: {
      total_resident: 12121,
      ages: {
        resident: {
          age_10_resident: 121,
          age_20_resident: 121,
          age_30_resident: 121,
          age_40_resident: 121,
          age_50_resident: 121,
          age_60_plus_resident: 121
        },
        percent: {
          age_10_percent: 10.1,
          age_20_percent: 20.0,
          age_30_percent: 25.0,
          age_40_percent: 22.0,
          age_50_percent: 15.0,
          age_60_plus_percent: 10.0
        }
      },
      gender: {
        resident: { male_resident: 123123, female_resident: 1213213 },
        percent: { male_percent: 48.1, female_percent: 51.9 }
      },
      description_population: {
        age:
          "공릉 1동은 20~40대가 전체의 67%를 차지해 젊은 소비층 중심의 상권 형성이 뚜렷해요. 50대 이상은 25% 수준으로, 고연령층보다는 청장년층을 대상으로 한 소비 전략이 효과적일 가능성이 커요.",
        gender:
          "여성 인구가 약간 더 많아, 특히 20~40대 여성층을 중심으로 뷰티·패션·F&B 업종의 성장 잠재력이 보여요. 남녀 비율이 비슷해 전통적인 카페·문화·생활 서비스 같은 생활 밀접 업종의 안정적인 수요가 예상돼요."
      }
    },
    price: {
      big: { big_average: 60310000, big_middle: 60310000, big_count: 50 },
      small: { small_average: 60310000, small_middle: 60310000, small_count: 50 },
      price_per_meter: 5730000,
      price_per_pyeong: 3300000,
      trading_volume: {
        "2024_3_quarter": 4700,
        "2024_4_quarter": 3600,
        "2025_1_quarter": 4500,
        "2025_2_quarter": 4100
      },
      description_price: {
        value_average:
          "지난 4년 동안 시세가 꾸준히 상승해 평균 m²당 573만 원 수준을 형성하고 있어요.",
        value_pyeong:
          "창업 예정 지역의 평당 가격은 약 330만 원으로 서울 평균과 유사하며 비싼 편에 속해요.",
        volume:
          "거래량은 2023년 하반기 1,250~3,000건에서 2025년 상반기 4,100~5,200건 수준으로 변동하며 최근 3개월간은 감소 추세예요."
      }
    },
    income_consumption: {
      income: { monthly_income_average: 335335, income_class_code: "05" },
      consumption: {
        spending_total: 213123123,
        expend: {
          food: 20.0,
          clothing_footwear: 13.0,
          living_goods: 8.0,
          medical: 9.0,
          transport: 8.0,
          education: 11.0,
          leisure_culture: 8.0,
          other: 16.0,
          eating_out: 5.0
        },
        percent: {
          food: 20.0,
          clothing_footwear: 13.0,
          living_goods: 8.0,
          medical: 9.0,
          transport: 8.0,
          education: 11.0,
          leisure_culture: 8.0,
          other: 16.0,
          eating_out: 5.0
        }
      },
      income_consumption_description:
        "공릉 1동은 소득구간이 중위 수준으로, 월평균 소득 금액은 안정적이에요. 소비 항목별로 보면 외식과 식품 지출 비중이 높고, 생활용품·의류·교육에도 꾸준한 소비가 이루어지고 있어 창업 시 이러한 소비 패턴을 반영하는 것이 필요해요."
    },
    description_strategy: {
      review: {
        head: "**점심 세트 메뉴 할인 프로모션**",
        body: [
          "**SNS(인스타그램) 이벤트**를 통해 방문 후기 공유 시 할인 혜택을 제공합니다.",
          "예약 고객 대상 **프라이빗 룸 할인 또는 서비스 업그레이드**를 제공합니다.",
          "인기 메뉴를 중심으로 **가성비 좋은 패키지 상품**을 개발합니다.",
          "배달 플랫폼과 연계한 할인 및 일식 메뉴 **배달 서비스 강화**를 추진합니다."
        ]
      },
      kpi: {
        head: "**방문 고객 수 및 예약 문의 건수**",
        body: [
          "**점심 및 저녁 시간대 매출 비중**",
          "SNS 및 블로그 **후기 수와 평점**",
          "재구매율 및 **고객 만족도**",
          "배달 주문 건수 및 **배달 만족도**"
        ]
      },
      improvements: {
        head: "리뷰에서 지속적으로 **주차장이 불편하다**는 언급이 있어요.",
        body: ["**주차장 위치** 안내 강화", "**주차장 정산 방식** 개선", "**주차장 수용 규모 확대**"]
      }
    }
  }
};
