import { useEffect } from "react";
export default function Items() {
  useEffect(() => {
    var apiUrl =
      "https://react-http-cf04d-default-rtdb.firebaseio.com/onlineShopping";
    fetch({
      apiKey: "AIzaSyAlk1glvirG2TH46j9InlyR7yd41aBEpX4",
      authDomain: "react-http-cf04d.firebaseapp.com",
      databaseURL: apiUrl,
      projectId: "react-http-cf04d",
      storageBucket: "react-http-cf04d.appspot.com",
      messagingSenderId: "157136709289",
      appId: "1:157136709289:web:f0bc66686222b2a7f0ebb8"
    })
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
  });
  return <div>ww</div>;
}
