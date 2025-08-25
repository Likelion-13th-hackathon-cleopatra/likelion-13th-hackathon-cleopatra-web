export const won = (n: number) => "₩" + (n ?? 0).toLocaleString("ko-KR");

// 만 원 단위로 변환하는 함수
export const wonInMan = (n: number) => {
  if (!n) return "0만 원";
  
  // 1만 = 10,000원이므로 10,000으로 나누기
  const man = n / 10000;
  
  // 소수점이 있으면 반올림
  const roundedMan = Math.round(man);
  
  // 천 단위 콤마 추가
  return roundedMan.toLocaleString("ko-KR") + "만 원";
};
