import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
// import { initializeApp } from "firebase/app"; 로컬에 firebase 설치되어 있을 때 사용하기.
// type=module 을 사용해야함
// 여기 생성된 객체는 어떻게 사용되죠?

const firebaseConfig = {
  // 객체 - 키: 값
  apiKey: "AIzaSyBbKMZh-XdiAUn-45V-BMkZMcCVXFso1YM",
    authDomain: "mybook-28ad3.firebaseapp.com",
    databaseURL: "https://mybook-28ad3-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "mybook-28ad3",
    storageBucket: "mybook-28ad3.appspot.com",
    messagingSenderId: "419512552070",
    appId: "1:419512552070:web:72f810fe9d7058bbde5f07"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); // 초기화 - 인증 - 서버측 요청 - 응답(토큰값을 쥔다)
