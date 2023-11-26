# ejs_practice
ejs 템플릿 엔진 수업 복습!

# 1일차...
TMDB 사이트에서 open api를 가져와서 현재 상영작을 home.ejs에 뿌려주기<br/>
Promise 함수를 사용해 비동기 처리를 했고,
Handlebars를 사용해서 뿌려줬다.
<img width="1035" alt="스크린샷 2023-11-25 오후 6 49 44" src="https://github.com/jungtaeyeon/ejs_practice/assets/145528409/b1d128cb-a0af-4743-867d-3f124c7b3d46">
<img width="459" alt="스크린샷 2023-11-25 오후 6 51 49" src="https://github.com/jungtaeyeon/ejs_practice/assets/145528409/a4d71395-3019-4c14-8132-031a8a4f2a80">

# 1일차 결과 화면
<img width="1438" alt="스크린샷 2023-11-25 오후 6 47 19" src="https://github.com/jungtaeyeon/ejs_practice/assets/145528409/f3baaeed-e915-4d8c-ab92-6e618806a4d0">
<img width="1438" alt="스크린샷 2023-11-25 오후 6 47 37" src="https://github.com/jungtaeyeon/ejs_practice/assets/145528409/5af09136-6227-410d-a44d-24f8d2ceb1b8">

# 2일차 -> 구글firebase에 등록한 아이디 로그인, 카카오 로그인 구현.. REST API 키 사용도 생각해서 바꿔보기..!!
- 구글firebase에 등록한 이메일 및 비밀번호를 입력 후 로그인버튼 클릭 시,<br/>
입력한 이메일 및 uid를 localStorage에 담아서 localStorage에 값이 있을 경우 로그인 상태<br/>
- 로그인 상태에서 숨겨놨던 버튼 (장바구니, 마이페이지, 로그인->로그아웃)이 보이게(.toggle()) 처리.<br/>
카카오 로그인 시, 카카오 로그아웃 버튼으로 설정.<br/>
- 로그아웃 버튼 클릭 시, jquery에서 제공하는 함수 signOut()을 사용해서 로그아웃 처리.<br/>
로그아웃 시 localStorage.clear()를 사용해서 값 지우기.
<img width="798" alt="스크린샷 2023-11-26 오후 3 53 02" src="https://github.com/jungtaeyeon/ejs_practice/assets/145528409/9617313d-6bde-45e5-9466-5b22eed36a5b">
<img width="717" alt="스크린샷 2023-11-26 오후 3 52 51" src="https://github.com/jungtaeyeon/ejs_practice/assets/145528409/900b0fc6-d816-48b1-9285-80d7bd0d211c">
<img width="570" alt="스크린샷 2023-11-26 오후 3 59 33" src="https://github.com/jungtaeyeon/ejs_practice/assets/145528409/f26ab5d8-e766-4a74-ba5a-8ebf55de4bbc"> <br/>
<br/>
- 카카오 에서 발급받은 api 키 중 javascript키를 사용해 카카오 로그인 구현.<br/>
  로그인 시 id를 localStorage에 넣어 MyPage 대신 id를 넣어줌<br/>
- 카카오 로그인 시, 카카오 로그아웃 버튼이 보이게 해서 로그아웃 시<br/>
localStorage 값 지우기 및 카카오 로그인 토큰을 같이 지워줬다.
<img width="1008" alt="스크린샷 2023-11-26 오후 8 51 33" src="https://github.com/jungtaeyeon/ejs_practice/assets/145528409/f829e25b-4f99-4ef9-9042-edb3fe29a97b">
<img width="693" alt="스크린샷 2023-11-26 오후 8 52 53" src="https://github.com/jungtaeyeon/ejs_practice/assets/145528409/314278c9-0943-4834-af84-cadde0dada08">



