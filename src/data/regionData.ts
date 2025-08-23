export interface Dong {
  id: string;
  name: string;
}

export interface District {
  id: string;
  name: string;
  dongs: Dong[];
}

export interface City {
  id: string;
  name: string;
  districts: Record<string, District>;
}

const seoulDistricts: Record<string, District> = {
  jongno: {
    id: 'jongno',
    name: '종로구',
    dongs: [
      { id: 'cheongun-hyoja', name: '청운효자동' },
      { id: 'sajik', name: '사직동' },
      { id: 'samcheong', name: '삼청동' },
      { id: 'buam', name: '부암동' },
      { id: 'pyeongchang', name: '평창동' },
      { id: 'mugyo', name: '무교동' },
      { id: 'jongno1234ga', name: '종로1,2,3,4가동' },
      { id: 'jongno56ga', name: '종로5,6가동' },
      { id: 'iwhwa', name: '이화동' },
      { id: 'hyehwa', name: '혜화동' },
      { id: 'myeongnyun', name: '명륜3가동' },
      { id: 'changsin1', name: '창신1동' },
      { id: 'changsin2', name: '창신2동' },
      { id: 'changsin3', name: '창신3동' },
      { id: 'sungin1', name: '숭인1동' },
      { id: 'sungin2', name: '숭인2동' }
    ]
  },
  jung: {
    id: 'jung',
    name: '중구',
    dongs: [
      { id: 'sogong', name: '소공동' },
      { id: 'hoehyeon', name: '회현동' },
      { id: 'myeong', name: '명동' },
      { id: 'pil', name: '필동' },
      { id: 'jangchung', name: '장충동' },
      { id: 'gwanghui', name: '광희동' },
      { id: 'euljiro', name: '을지로동' },
      { id: 'sindang1', name: '신당1동' },
      { id: 'sindang2', name: '신당2동' },
      { id: 'sindang3', name: '신당3동' },
      { id: 'sindang4', name: '신당4동' },
      { id: 'sindang5', name: '신당5동' },
      { id: 'sindang6', name: '신당6동' },
      { id: 'hwanghak', name: '황학동' },
      { id: 'jungnang', name: '중림동' }
    ]
  },
  yongsan: {
    id: 'yongsan',
    name: '용산구',
    dongs: [
      { id: 'hangangno', name: '한강로동' },
      { id: 'yongsan2ga', name: '용산2가동' },
      { id: 'namyeong', name: '남영동' },
      { id: 'wonhyoro1', name: '원효로1동' },
      { id: 'wonhyoro2', name: '원효로2동' },
      { id: 'hyochang', name: '효창동' },
      { id: 'yongmun', name: '용문동' },
      { id: 'hannam', name: '한남동' },
      { id: 'itaewon1', name: '이태원1동' },
      { id: 'itaewon2', name: '이태원2동' },
      { id: 'seobinggo', name: '서빙고동' },
      { id: 'bogwang', name: '보광동' },
      { id: 'cheongpa1', name: '청파1동' },
      { id: 'cheongpa2', name: '청파2동' },
      { id: 'wonhyo', name: '원효동' }
    ]
  },
  seongdong: {
    id: 'seongdong',
    name: '성동구',
    dongs: [
      { id: 'wangsimni1', name: '왕십리1동' },
      { id: 'wangsimni2', name: '왕십리2동' },
      { id: 'haengdang1', name: '행당1동' },
      { id: 'haengdang2', name: '행당2동' },
      { id: 'geumho1', name: '금호1가동' },
      { id: 'geumho2', name: '금호2·3가동' },
      { id: 'geumho4', name: '금호4가동' },
      { id: 'oksu', name: '옥수동' },
      { id: 'seongsu1ga1', name: '성수1가1동' },
      { id: 'seongsu1ga2', name: '성수1가2동' },
      { id: 'seongsu2ga1', name: '성수2가1동' },
      { id: 'seongsu2ga3', name: '성수2가3동' },
      { id: 'yongdap', name: '용답동' },
      { id: 'ttukseom', name: '뚝섬동' }
    ]
  },
  gwangjin: {
    id: 'gwangjin',
    name: '광진구',
    dongs: [
      { id: 'hwayang', name: '화양동' },
      { id: 'gunja', name: '군자동' },
      { id: 'junggok', name: '중곡동' },
      { id: 'neungdong', name: '능동' },
      { id: 'gwangjang', name: '광장동' },
      { id: 'jayang1', name: '자양1동' },
      { id: 'jayang2', name: '자양2동' },
      { id: 'jayang3', name: '자양3동' },
      { id: 'jayang4', name: '자양4동' },
      { id: 'guui1', name: '구의1동' },
      { id: 'guui2', name: '구의2동' },
      { id: 'guui3', name: '구의3동' }
    ]
  },
  dongdaemun: {
    id: 'dongdaemun',
    name: '동대문구',
    dongs: [
      { id: 'yongdu', name: '용두동' },
      { id: 'jegi', name: '제기동' },
      { id: 'jeongnong1', name: '전농1동' },
      { id: 'jeongnong2', name: '전농2동' },
      { id: '답십리1', name: '답십리1동' },
      { id: 'ansimni', name: '안심니동' },
      { id: 'cheongnyangni', name: '청량리동' },
      { id: 'hwigyeong1', name: '회기동' },
      { id: 'hwigyeong2', name: '휘경1동' },
      { id: 'hwigyeong3', name: '휘경2동' },
      { id: 'imunseorin', name: '이문1동' },
      { id: 'imun2', name: '이문2동' },
      { id: 'janganpyeong', name: '장안1동' },
      { id: 'jangan2', name: '장안2동' }
    ]
  },
  jungnang: {
    id: 'jungnang',
    name: '중랑구',
    dongs: [
      { id: 'myeonmok1', name: '면목1동' },
      { id: 'myeonmok2', name: '면목2동' },
      { id: 'myeonmok3-8', name: '면목3·8동' },
      { id: 'myeonmok4', name: '면목4동' },
      { id: 'myeonmok5', name: '면목5동' },
      { id: 'myeonmok7', name: '면목7동' },
      { id: 'sanggye1', name: '상봉1동' },
      { id: 'sanggye2', name: '상봉2동' },
      { id: 'jung1', name: '중화1동' },
      { id: 'jung2', name: '중화2동' },
      { id: 'mukdong', name: '묵동' },
      { id: 'mangu', name: '망우동' },
      { id: 'sinnaehyeon', name: '신내동' }
    ]
  },
  seongbuk: {
    id: 'seongbuk',
    name: '성북구',
    dongs: [
      { id: 'seongjuk', name: '성북동' },
      { id: 'dongsomun1', name: '동소문1동' },
      { id: 'dongsomun2', name: '동소문2동' },
      { id: 'dongsomun3', name: '동소문3동' },
      { id: 'dongsomun4', name: '동소문4동' },
      { id: 'dongsomun5', name: '동소문5동' },
      { id: 'dongsomun6', name: '동소문6동' },
      { id: 'dongsomun7', name: '동소문7동' },
      { id: 'samseongon', name: '삼선동' },
      { id: 'dongseong', name: '동선동' },
      { id: 'jonggok', name: '종암동' },
      { id: 'wolgok1', name: '월곡1동' },
      { id: 'wolgok2', name: '월곡2동' },
      { id: 'jangwi1', name: '장위1동' },
      { id: 'jangwi2', name: '장위2동' },
      { id: 'jangwi3', name: '장위3동' },
      { id: 'seongbuk', name: '성북구' },
      { id: 'gireum1', name: '길음1동' },
      { id: 'gireum2', name: '길음2동' },
      { id: 'gireum', name: '길음동' },
      { id: 'jonggeon', name: '정릉1동' },
      { id: 'jonggeon2', name: '정릉2동' },
      { id: 'jonggeon3', name: '정릉3동' },
      { id: 'jonggeon4', name: '정릉4동' }
    ]
  },
  gangbuk: {
    id: 'gangbuk',
    name: '강북구',
    dongs: [
      { id: 'samyang1', name: '삼양동' },
      { id: 'samgak', name: '삼각산동' },
      { id: 'beon1', name: '번1동' },
      { id: 'beon2', name: '번2동' },
      { id: 'beon3', name: '번3동' },
      { id: 'susyu1', name: '수유1동' },
      { id: 'susyu2', name: '수유2동' },
      { id: 'susyu3', name: '수유3동' },
      { id: 'uijeongbu1', name: '우이동' },
      { id: 'insu', name: '인수동' },
      { id: 'songcheon', name: '송천동' },
      { id: 'songjeong', name: '송정동' },
      { id: 'mia1', name: '미아1동' },
      { id: 'mia3', name: '미아3동' }
    ]
  },
  dobong: {
    id: 'dobong',
    name: '도봉구',
    dongs: [
      { id: 'ssangmun1', name: '쌍문1동' },
      { id: 'ssangmun2', name: '쌍문2동' },
      { id: 'ssangmun3', name: '쌍문3동' },
      { id: 'ssangmun4', name: '쌍문4동' },
      { id: 'bangha1', name: '방학1동' },
      { id: 'bangha2', name: '방학2동' },
      { id: 'bangha3', name: '방학3동' },
      { id: 'changi1', name: '창1동' },
      { id: 'changi2', name: '창2동' },
      { id: 'changi3', name: '창3동' },
      { id: 'changi4', name: '창4동' },
      { id: 'changi5', name: '창5동' },
      { id: 'dohyeon', name: '도봉1동' },
      { id: 'dobong2', name: '도봉2동' }
    ]
  },
  nowon: {
    id: 'nowon',
    name: '노원구',
    dongs: [
      { id: 'wolgye1', name: '월계1동' },
      { id: 'wolgye2', name: '월계2동' },
      { id: 'wolgye3', name: '월계3동' },
      { id: 'gongneung1', name: '공릉1동' },
      { id: 'gongneung2', name: '공릉2동' },
      { id: 'hagye1', name: '하계1동' },
      { id: 'hagye2', name: '하계2동' },
      { id: 'junggye1', name: '중계1동' },
      { id: 'junggye2-3', name: '중계2·3동' },
      { id: 'junggye4', name: '중계4동' },
      { id: 'sanggye1', name: '상계1동' },
      { id: 'sanggye2', name: '상계2동' },
      { id: 'sanggye3-4', name: '상계3·4동' },
      { id: 'sanggye5', name: '상계5동' },
      { id: 'sanggye6-7', name: '상계6·7동' },
      { id: 'sanggye8', name: '상계8동' },
      { id: 'sanggye9', name: '상계9동' },
      { id: 'sanggye10', name: '상계10동' }
    ]
  },
  eunpyeong: {
    id: 'eunpyeong',
    name: '은평구',
    dongs: [
      { id: 'nokbeon', name: '녹번동' },
      { id: 'bulkwang1', name: '불광1동' },
      { id: 'bulkwang2', name: '불광2동' },
      { id: 'gaynyeong', name: '갈현1동' },
      { id: 'gallyeon2', name: '갈현2동' },
      { id: 'galhyeon', name: '구산동' },
      { id: 'daejolli', name: '대조동' },
      { id: 'sinsa1', name: '신사1동' },
      { id: 'sinsa2', name: '신사2동' },
      { id: 'jeungsan', name: '증산동' },
      { id: 'suyun', name: '수색동' },
      { id: 'sinseonji', name: '신정1동' },
      { id: 'sinseongaechae', name: '신정2동' },
      { id: 'sinjeong3', name: '신정3동' },
      { id: 'sinjeong4', name: '신정4동' },
      { id: 'sinjeong6', name: '신정6동' },
      { id: 'sinjeong7', name: '신정7동' },
      { id: 'yeokchon', name: '역촌동' }
    ]
  },
  seodaemun: {
    id: 'seodaemun',
    name: '서대문구',
    dongs: [
      { id: 'chungjeong-ro', name: '충정로동' },
      { id: 'cheonyeonnyeong', name: '천연동' },
      { id: 'bugahyeon', name: '북아현동' },
      { id: 'cheongun', name: '충현동' },
      { id: 'sinchon', name: '신촌동' },
      { id: 'yeeonhyeon', name: '연희동' },
      { id: 'segeom', name: '서강동' },
      { id: 'mangwon1', name: '망원1동' },
      { id: 'mangwon2', name: '망원2동' },
      { id: 'yeonnam', name: '연남동' },
      { id: 'seongsan1', name: '성산1동' },
      { id: 'seongsan2', name: '성산2동' },
      { id: 'hapjeong', name: '합정동' },
      { id: 'daeheung', name: '대흥동' },
      { id: 'hyeongwon', name: '현저동' }
    ]
  },
  mapo: {
    id: 'mapo',
    name: '마포구',
    dongs: [
      { id: 'gongdeok', name: '공덕동' },
      { id: 'aheyon', name: '아현동' },
      { id: 'dohwa', name: '도화동' },
      { id: 'yonggang', name: '용강동' },
      { id: 'tojeong', name: '토정동' },
      { id: 'mapo', name: '마포동' },
      { id: 'seogyo', name: '서교동' },
      { id: 'hongik', name: '홍익동' },
      { id: 'sangsoo', name: '상수동' },
      { id: 'hapjeong', name: '합정동' },
      { id: 'yangwha', name: '양화동' },
      { id: 'seongsan1', name: '성산1동' },
      { id: 'seongsan2', name: '성산2동' },
      { id: 'mangwon1', name: '망원1동' },
      { id: 'mangwon2', name: '망원2동' },
      { id: 'yeonnam', name: '연남동' }
    ]
  },
  yangcheon: {
    id: 'yangcheon',
    name: '양천구',
    dongs: [
      { id: 'mokdong', name: '목1동' },
      { id: 'mok2', name: '목2동' },
      { id: 'mok3', name: '목3동' },
      { id: 'mok4', name: '목4동' },
      { id: 'mok5', name: '목5동' },
      { id: 'sinjeong1', name: '신정1동' },
      { id: 'sinjeong2', name: '신정2동' },
      { id: 'sinjeong3', name: '신정3동' },
      { id: 'sinjeong4', name: '신정4동' },
      { id: 'sinjeong6', name: '신정6동' },
      { id: 'sinjeong7', name: '신정7동' },
      { id: 'sinwol1', name: '신월1동' },
      { id: 'sinwol2', name: '신월2동' },
      { id: 'sinwol3', name: '신월3동' },
      { id: 'sinwol4', name: '신월4동' },
      { id: 'sinwol5', name: '신월5동' },
      { id: 'sinwol6', name: '신월6동' },
      { id: 'sinwol7', name: '신월7동' }
    ]
  },
  gangseo: {
    id: 'gangseo',
    name: '강서구',
    dongs: [
      { id: 'banghwa1', name: '방화1동' },
      { id: 'banghwa2', name: '방화2동' },
      { id: 'banghwa3', name: '방화3동' },
      { id: 'deungchon1', name: '등촌1동' },
      { id: 'deungchon2', name: '등촌2동' },
      { id: 'deungchon3', name: '등촌3동' },
      { id: 'hwagok1', name: '화곡1동' },
      { id: 'hwagok2', name: '화곡2동' },
      { id: 'hwagok3', name: '화곡3동' },
      { id: 'hwagok4', name: '화곡4동' },
      { id: 'hwagok6', name: '화곡6동' },
      { id: 'hwagok8', name: '화곡8동' },
      { id: 'gayang1', name: '가양1동' },
      { id: 'gayang2', name: '가양2동' },
      { id: 'gayang3', name: '가양3동' },
      { id: 'balsan1', name: '발산1동' },
      { id: 'balsan2', name: '발산2동' },
      { id: 'gonggdong', name: '공항동' },
      { id: 'ggomak1', name: '염창동' },
      { id: 'ggumak2', name: '마곡1동' },
      { id: 'ggumak3', name: '마곡2동' }
    ]
  },
  guro: {
    id: 'guro',
    name: '구로구',
    dongs: [
      { id: 'guro1', name: '구로1동' },
      { id: 'guro2', name: '구로2동' },
      { id: 'guro3', name: '구로3동' },
      { id: 'guro4', name: '구로4동' },
      { id: 'guro5', name: '구로5동' },
      { id: 'gasan', name: '가산동' },
      { id: 'sindorim', name: '신도림동' },
      { id: 'doksan1', name: '독산1동' },
      { id: 'doksan2', name: '독산2동' },
      { id: 'doksan3', name: '독산3동' },
      { id: 'doksan4', name: '독산4동' },
      { id: 'siheung', name: '시흥1동' },
      { id: 'siheung2', name: '시흥2동' },
      { id: 'siheung3', name: '시흥3동' },
      { id: 'siheung4', name: '시흥4동' },
      { id: 'siheung5', name: '시흥5동' }
    ]
  },
  geumcheon: {
    id: 'geumcheon',
    name: '금천구',
    dongs: [
      { id: 'gasan1', name: '가산1동' },
      { id: 'gasan2', name: '가산2동' },
      { id: 'doksan1', name: '독산1동' },
      { id: 'doksan2', name: '독산2동' },
      { id: 'doksan3', name: '독산3동' },
      { id: 'doksan4', name: '독산4동' },
      { id: 'siheung1', name: '시흥1동' },
      { id: 'siheung2', name: '시흥2동' },
      { id: 'siheung3', name: '시흥3동' },
      { id: 'siheung4', name: '시흥4동' },
      { id: 'siheung5', name: '시흥5동' }
    ]
  },
  yeongdeungpo: {
    id: 'yeongdeungpo',
    name: '영등포구',
    dongs: [
      { id: 'yeongdeungpo', name: '영등포동' },
      { id: 'yeouido', name: '여의도동' },
      { id: 'dangsanmyeong1', name: '당산1동' },
      { id: 'dangsanmyeong2', name: '당산2동' },
      { id: 'noryangjin1', name: '노량진1동' },
      { id: 'noryangjin2', name: '노량진2동' },
      { id: 'daelim1', name: '대림1동' },
      { id: 'daelim2', name: '대림2동' },
      { id: 'daelim3', name: '대림3동' },
      { id: 'singil1', name: '신길1동' },
      { id: 'singil3', name: '신길3동' },
      { id: 'singil4', name: '신길4동' },
      { id: 'singil5', name: '신길5동' },
      { id: 'singil6', name: '신길6동' },
      { id: 'singil7', name: '신길7동' },
      { id: 'dorim', name: '도림동' },
      { id: 'munrae', name: '문래동' }
    ]
  },
  dongjak: {
    id: 'dongjak',
    name: '동작구',
    dongs: [
      { id: 'noryangjin1', name: '노량진1동' },
      { id: 'noryangjin2', name: '노량진2동' },
      { id: 'sangsoo1', name: '상도1동' },
      { id: 'sangsoo2', name: '상도2동' },
      { id: 'sangsoo3', name: '상도3동' },
      { id: 'sangsoo4', name: '상도4동' },
      { id: 'heukseok', name: '흑석동' },
      { id: 'dongjakdayang', name: '동작동' },
      { id: 'sadang1', name: '사당1동' },
      { id: 'sadang2', name: '사당2동' },
      { id: 'sadang3', name: '사당3동' },
      { id: 'sadang4', name: '사당4동' },
      { id: 'sadang5', name: '사당5동' },
      { id: 'sindeagem', name: '신대방1동' },
      { id: 'sindaebang2', name: '신대방2동' }
    ]
  },
  gwanak: {
    id: 'gwanak',
    name: '관악구',
    dongs: [
      { id: 'bongcheon', name: '봉천동' },
      { id: 'sillim', name: '신림동' },
      { id: 'nanhyang', name: '난향동' },
      { id: 'seocho', name: '서초동' },
      { id: 'saemul', name: '삼성동' },
      { id: 'nakseongdae', name: '낙성대동' },
      { id: 'cheongnyun', name: '청룡동' },
      { id: 'haenggung', name: '행궁동' },
      { id: 'gwanangsinsa', name: '관악신사동' },
      { id: 'inhundong', name: '인헌동' },
      { id: 'sillim1', name: '신림1동' },
      { id: 'sillim2', name: '신림2동' },
      { id: 'sillim3', name: '신림3동' },
      { id: 'sillim4', name: '신림4동' },
      { id: 'sillim5', name: '신림5동' },
      { id: 'sillim6', name: '신림6동' },
      { id: 'sillim7', name: '신림7동' },
      { id: 'sillim8', name: '신림8동' },
      { id: 'sillim9', name: '신림9동' },
      { id: 'sillim10', name: '신림10동' },
      { id: 'sillim11', name: '신림11동' },
      { id: 'sillim12', name: '신림12동' }
    ]
  },
  seocho: {
    id: 'seocho',
    name: '서초구',
    dongs: [
      { id: 'seocho1', name: '서초1동' },
      { id: 'seocho2', name: '서초2동' },
      { id: 'seocho3', name: '서초3동' },
      { id: 'seocho4', name: '서초4동' },
      { id: 'jamwon', name: '잠원동' },
      { id: 'banpo1', name: '반포1동' },
      { id: 'banpo2', name: '반포2동' },
      { id: 'banpo3', name: '반포3동' },
      { id: 'banpo4', name: '반포4동' },
      { id: 'banpo-bon', name: '반포본동' },
      { id: 'naegok', name: '내곡동' },
      { id: 'yeongsinsa', name: '염곡동' },
      { id: 'banpoi', name: '방배1동' },
      { id: 'banpo2', name: '방배2동' },
      { id: 'banpo3', name: '방배3동' },
      { id: 'banpo4', name: '방배4동' }
    ]
  },
  gangnam: {
    id: 'gangnam',
    name: '강남구',
    dongs: [
      { id: 'sinsa', name: '신사동' },
      { id: 'nonhyeon1', name: '논현1동' },
      { id: 'nonhyeon2', name: '논현2동' },
      { id: 'apgujeong', name: '압구정동' },
      { id: 'cheongdam', name: '청담동' },
      { id: 'samseong1', name: '삼성1동' },
      { id: 'samseong2', name: '삼성2동' },
      { id: 'daechi1', name: '대치1동' },
      { id: 'daechi2', name: '대치2동' },
      { id: 'daechi4', name: '대치4동' },
      { id: 'yeoksam1', name: '역삼1동' },
      { id: 'yeoksam2', name: '역삼2동' },
      { id: 'dogok1', name: '도곡1동' },
      { id: 'dogok2', name: '도곡2동' },
      { id: 'gaepo1', name: '개포1동' },
      { id: 'gaepo2', name: '개포2동' },
      { id: 'gaepo4', name: '개포4동' },
      { id: 'segok', name: '세곡동' },
      { id: 'ilwon1', name: '일원1동' },
      { id: 'ilwon2', name: '일원2동' },
      { id: 'ilwon-bon', name: '일원본동' },
      { id: 'suseo', name: '수서동' }
    ]
  },
  songpa: {
    id: 'songpa',
    name: '송파구',
    dongs: [
      { id: 'pungmapa1', name: '풍납1동' },
      { id: 'pungmapa2', name: '풍납2동' },
      { id: 'geoyeo1', name: '거여1동' },
      { id: 'geoyeo2', name: '거여2동' },
      { id: 'macheon1', name: '마천1동' },
      { id: 'macheon2', name: '마천2동' },
      { id: 'bangidong', name: '방이1동' },
      { id: 'bangi2', name: '방이2동' },
      { id: 'ogeum', name: '오금동' },
      { id: 'songpa1', name: '송파1동' },
      { id: 'songpa2', name: '송파2동' },
      { id: 'seokchon', name: '석촌동' },
      { id: 'samjeon', name: '삼전동' },
      { id: 'garak1', name: '가락1동' },
      { id: 'garak2', name: '가락2동' },
      { id: 'garak-bon', name: '가락본동' },
      { id: 'munjeong1', name: '문정1동' },
      { id: 'munjeong2', name: '문정2동' },
      { id: 'jamsil2', name: '잠실2동' },
      { id: 'jamsil3', name: '잠실3동' },
      { id: 'jamsil4', name: '잠실4동' },
      { id: 'jamsil6', name: '잠실6동' },
      { id: 'jamsil7', name: '잠실7동' },
      { id: 'jamsil-bon', name: '잠실본동' },
      { id: 'bangi', name: '방이동' },
      { id: 'olyuimpag', name: '올림픽파크포레온' },
      { id: 'gaepo', name: '개포동' }
    ]
  },
  gangdong: {
    id: 'gangdong',
    name: '강동구',
    dongs: [
      { id: 'cheonho1', name: '천호1동' },
      { id: 'cheonho2', name: '천호2동' },
      { id: 'cheonho3', name: '천호3동' },
      { id: 'seongna1', name: '성내1동' },
      { id: 'seongna2', name: '성내2동' },
      { id: 'seongna3', name: '성내3동' },
      { id: 'gangilmyeong', name: '길동' },
      { id: 'dundcon1', name: '둔촌1동' },
      { id: 'dundcon2', name: '둔촌2동' },
      { id: 'amsa1', name: '암사1동' },
      { id: 'amsa2', name: '암사2동' },
      { id: 'amsa3', name: '암사3동' },
      { id: 'godeck', name: '고덕1동' },
      { id: 'godeck2', name: '고덕2동' },
      { id: 'mingwon', name: '명일1동' },
      { id: 'myeongji2', name: '명일2동' },
      { id: 'sangil', name: '상일동' }
    ]
  }
};

// 전국 시도 데이터
export const cityData: Record<string, City> = {
  seoul: {
    id: 'seoul',
    name: '서울특별시',
    districts: seoulDistricts
  }
  // TODO: 추후 다른 시도 추가 가능
  // busan: {
  //   id: 'busan',
  //   name: '부산광역시',
  //   districts: busanDistricts
  // }
};

// 유틸리티 함수들
export const getCityById = (cityId: string): City | undefined => {
  return cityData[cityId];
};

export const getDistrictById = (cityId: string, districtId: string): District | undefined => {
  const city = getCityById(cityId);
  return city?.districts[districtId];
};

export const getDongById = (cityId: string, districtId: string, dongId: string): Dong | undefined => {
  const district = getDistrictById(cityId, districtId);
  return district?.dongs.find(dong => dong.id === dongId);
};

export const getAllCities = (): City[] => {
  return Object.values(cityData);
};

export const getDistrictsByCity = (cityId: string): District[] => {
  const city = getCityById(cityId);
  return city ? Object.values(city.districts) : [];
};

export const getDongsByDistrict = (cityId: string, districtId: string): Dong[] => {
  const district = getDistrictById(cityId, districtId);
  return district?.dongs || [];
};