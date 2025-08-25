import React from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import SearchIcon from "../assets/community/search.svg?react";
import NotificationIcon from "../assets/community/notification.svg?react";
import Picture1 from "../assets/community/picture1.svg?react";
import Picture2 from "../assets/community/picture2.svg?react";
import Picture3 from "../assets/community/picture3.svg?react";
import Picture4 from "../assets/community/picture4.svg?react";
import Picture5 from "../assets/community/picture5.svg?react";
import Picture6 from "../assets/community/picture6.svg?react";
import PostCard from "../components/community/PostCard";

const keywords = [
  "임대료",
  "고객유치율",
  "이탈률",
  "현금흐름",
  "창업지원",
  "평점관리",
  "고정비",
  "리텐션",
  "상권분석",
  "배달앱",
  "권리금",
];

const groups = [
  { name: "카페 사장님", Img: Picture1 },
  { name: "채소 도매", Img: Picture2 },
  { name: "중식 창업", Img: Picture3 },
  { name: "공릉동 주민", Img: Picture4 },
  { name: "무인가게 운영", Img: Picture5 },
  { name: "자영업 법률", Img: Picture6 },
];

const hotPosts = new Array(2).fill(0).map((_, i) => ({
  id: i,
  title: "새벽 4시에 CCTV 돌려보다가 진짜 멘탈 터졌습니다..",
  author: "홍길동",
  badge: "헬스장",
  preview:
    "안녕하세요, 소형 PT샵 운영한 지 3년차 되는 헬스장 사장입니다. 진짜 어디 상상도...",
  likes: 40,
  comments: 24,
  views: 234,
}));

const feedPosts = new Array(4).fill(0).map((_, i) => ({
  id: i,
  title: "새벽 4시에 CCTV 돌려보다가 진짜 멘탈 터졌습니다..",
  author: "홍길동",
  badge: "헬스장",
  body: "안녕하세요, 소형 PT샵 운영한 지 3년차 되는 헬스장 사장입니다. 진짜 어디 상상도한 대가 없어서 여기에 글 올립니다. 오늘 새벽에 있었던...",
  likes: 40,
  comments: 24,
  views: 234,
  time: "38분 전",
}));

export default function CommunityPage() {
  // 정렬 드롭다운 (최신순/인기순) - UI만 토글
  const [sort, setSort] = React.useState("latest"); // "latest" | "popular"
  const [openSort, setOpenSort] = React.useState(false);
  const sortLabel = sort === "latest" ? "최신순" : "인기순";

  // 필터 칩 선택 - UI만 토글
  const chipOptions = [
    "🚀  창업 준비 중",
    "🏗️  오픈 초기",
    "💸  매출 고민",
    "📢  마케팅",
  ];
  const [selectedChips, setSelectedChips] = React.useState(["창업 준비 중"]);
  const toggleChip = (label: string) => {
    setSelectedChips((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  return (
    <div className="mx-auto max-w-md bg-grayscale-5 text-[#242424] min-h-screen">
      {/* 상단 바 */}
      <header className="z-10 h-[60px] bg-grayscale-5">
        <div className="relative flex h-full items-center justify-center px-6">
          <h1 className="Sub_Bold_14 text-primary-green">커뮤니티</h1>
          <div className="absolute right-6 top-1/2 flex -translate-y-1/2 items-center gap-3">
            <SearchIcon width={24} height={24} />
            <NotificationIcon width={16} height={20} />
          </div>
        </div>
      </header>

      <main className="space-y-[30px]">
        {/* 인기 키워드: 가로 스크롤 */}
        <section>
          <h2 className="px-6 Head_Bold_16 text-primary-green80 mb-[10px]">
            인기 키워드 검색 바로가기
          </h2>
          <div className="pl-6 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="inline-flex gap-[6px]">
              {keywords.map((k) => (
                <span
                  key={k}
                  className="shrink-0 inline-flex items-center Sub_Bold_12 text-grayscale-white rounded-[5px] px-[6px] py-[2px] bg-primary-green"
                >
                  #{k}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 커뮤니티 그룹 */}
        <section>
          <h2 className="px-6 Head_Bold_16 text-primary-green80 mb-4">
            커뮤니티 그룹
          </h2>
          <div className="pl-6 flex gap-4 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {groups.map((g) => (
              <div key={g.name} className="shrink-0 w-[50px]">
                <div className="h-[50px] w-[50px] rounded-[15px] overflow-hidden">
                  <g.Img className="h-full w-full object-cover" />
                </div>
                <p className="mt-[10px] text-center Sub_Bold_10 text-primary-green80 whitespace-nowrap overflow-hidden text-ellipsis">
                  {g.name}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 지금 인기 있는 글 */}
        <section>
          <div className="px-6 flex items-center justify-between mb-4">
            <h2 className="Head_Bold_16 text-primary-green80">
              지금 인기 있는 글
            </h2>
            <button className="flex items-center gap-1 Body_Regular_10">
              <span className="text-grayscale-25">더보기</span>
              <ChevronRight className="w-4 h-4 text-[#0DB659]" />
            </button>
          </div>
          <div className="pl-6 flex gap-4 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {hotPosts.map((p) => (
              <PostCard key={p.id} post={p} type="hot" />
            ))}
          </div>
        </section>

        {/* 추천 피드 */}
        <section>
          <div className="px-6 flex items-center justify-between mb-3">
            <h2 className="Head_Bold_16 text-primary-green80">
              홍길동 님 추천 피드
            </h2>
            {/* 정렬 드롭다운 */}
            <div
              className="relative"
              tabIndex={0}
              onBlur={() => setOpenSort(false)}
            >
              <button
                className="inline-flex items-center gap-1 rounded-full border bg-white px-3 py-1 text-xs"
                onClick={() => setOpenSort((v) => !v)}
              >
                {sortLabel}
                <ChevronDown
                  className={`w-4 h-4 transition text-primary-green ${
                    openSort ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openSort && (
                <div className="absolute right-0 mt-1 w-28 rounded-xl border bg-white shadow-lg p-1 text-xs">
                  <button
                    className={`block w-full text-left rounded-lg px-3 py-2 ${
                      sort === "latest"
                        ? "bg-[#0DB659]/10 text-[#0DB659]"
                        : "hover:bg-[#0DB659]/5"
                    }`}
                    onClick={() => {
                      setSort("latest");
                      setOpenSort(false);
                    }}
                  >
                    최신순
                  </button>
                  <button
                    className={`block w-full text-left rounded-lg px-3 py-2 ${
                      sort === "popular"
                        ? "bg-[#0DB659]/10 text-[#0DB659]"
                        : "hover:bg-[#0DB659]/5"
                    }`}
                    onClick={() => {
                      setSort("popular");
                      setOpenSort(false);
                    }}
                  >
                    인기순
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* 필터 칩스 (선택 토글) */}
          <div className="pl-6 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden mb-3">
            <div className="inline-flex gap-[6px]">
              {chipOptions.map((label) => {
                const active = selectedChips.includes(label);
                return (
                  <button
                    key={label}
                    className={
                      "shrink-0 inline-flex items-center rounded-full border px-2 py-1 Sub_Bold_12 transition " +
                      (active
                        ? "border-[#0DB659] bg-[#0DB659]/10 text-[#0DB659]"
                        : "border-[#0DB659]/20 bg-white text-[#242424]")
                    }
                    onClick={() => toggleChip(label)}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="px-6 space-y-[14px]">
            {feedPosts.map((p) => (
              <PostCard key={p.id} post={p} type="feed" />
            ))}
          </div>
        </section>

        <div className="h-[112px]" />
      </main>
    </div>
  );
}
