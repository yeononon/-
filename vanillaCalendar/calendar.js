const days = ["일", "월", "화", "수", "목", "금", "토"];
const today = new Date();
// Date: 현재 날짜, 시간을 가진 객체
// #1. setDate: 날짜를 지정하기
// #2. getDate: 날짜를 가져오기
// #3. toLocalDateString: 문자열로 변환 25/01/21 이런식
const CalendarYear = today.getFullYear();
const CalendarMonth = today.getMonth() + 1;
const CalendarDay = today.getDate();
// -> ** CalendarDay는 변수로 활용(어차피 )
//날짜 가지고 오기
// getMonth(): 0부터 시작
// getDate(): 1부터 시작
console.log(CalendarYear);
console.log(CalendarMonth);
console.log(CalendarDay);

const MonthLastDate = new Date(CalendarYear, CalendarMonth, 0).getDate();
const MonthStartDay = new Date(CalendarYear, CalendarMonth, 1).getDay();
// 달력 구성 위해, 시작"요일"과 종료"날짜" 계산
// new Date(년, 월, 일) -> 일은 1부터 시작이므로
// 0: 마지막 날 / 1: 시작 날
console.log(MonthLastDate);
console.log(MonthStartDay);

const CalendarWeekCount = Math.ceil((MonthLastDate + MonthStartDay) / 7);

// 남은 내용:: table 추가되는 함수, 버튼과 연결
// #1. 요일 thead넣기
// 요일을 배열로 넣었기 때문에 forEach 배열 반복문 사용
let html = "<table>";
html += `<thead class='days-of-weeks'><tr>`;
days.forEach((day, index) => {
  html += `<th class='day-of-weeks-item>${day}</th>`;
});
// ${문자}는 문자열을 동적으로 다른 요소 안에 넣음
// 원래는 <th> + day + <th>여야 함
// ${} 있으면, 백틱으로 감싸야 함!
// <thead> - <tr> - <th>
// <tbody> - <tr> - <td>

// #2. 본격적 달력 날짜 tbody 완성하기
html += "<tbody>";
let calendarPos = 0;
let calendarDay = 0;
// 주(tr)-> 일(td)
// for문 let 변수=0
// 1) 주: CalendarWeekCount 될 때까지 반복해서 생성-> for문 사용용
for (let week = 0; week < CalendarWeekCount; week++) {
  html += `<tr class='week week height'>`;
  for (let date = 0; date < 7; date++) {
    // if (week === 0 && date < MonthStartDay) {
    //   html += `<td></td>`;
    // } else if (CurrentDay > MonthLastDate) {
    //   html += `<td></td>`;
    // } else {
    //   const isToday = CurrentDay === CalendarDay; // 오늘 날짜인지 확인
    //   html += `<td id='day-${CurrentDay}' class='${
    //     isToday ? "today" : ""
    //   }'>${CurrentDay}</td>`;
    //   CurrentDay++;
    // }
    if (calendarPos < MonthStartDay || calendarDay > MonthLastDate) {
      // 빈 칸 처리
      html += `<td></td>`;
    } else {
      // 날짜 추가
      calendarDay++;
      const isToday =
        calendarDay === CalendarDay &&
        CalendarYear === today.getFullYear() &&
        CalendarMonth === today.getMonth() + 1;
      html += `<td><span class="day-number ${
        isToday ? "today" : ""
      }">${calendarDay}</span></td>`;
    }
    calendarPos++;
  }

  html += `</tr>`;
}
html += "</tbody></table>";
// 결과 HTML을 DOM에 추가
document.getElementById("calendar").innerHTML = html;
