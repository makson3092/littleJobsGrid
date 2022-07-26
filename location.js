let showMapPoint = document.querySelector(".map");
let btn1Map = document.querySelector(".ShowMap1");
let btn2Map = document.querySelector(".ShowMap2");
let btn3Map = document.querySelector(".ShowMap3");
let btn4Map = document.querySelector(".ShowMap4");

let iframe = `<iframe class="mapDiv" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.948444961575!2d24.022510977522582!3d49.843426219786544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add73a5d4170d%3A0xd6f7d038d1a384e7!2z0YPQuy4g0JPQvtGA0L7QtNC-0YbQutCw0Y8sIDE1LCDQm9GM0LLQvtCyLCDQm9GM0LLQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDc5MDAw!5e0!3m2!1sru!2sua!4v1658771887512!5m2!1sru!2sua" width="898" height="577" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

let iframe2 = `<iframe class="mapDiv" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1819.2417498125446!2d24.025941768619067!3d49.84628383160955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473adda8e6d730d3%3A0xd7a22c5fe73eebe8!2zUmVpa2FydHog0JzRg9GA0LDQuyDQm9GM0LLRltCy!5e0!3m2!1sru!2sua!4v1658780003718!5m2!1sru!2sua" width="898" height="0" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

let iframe3 = `<iframe class="mapDiv" src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3059.8362154795736!2d24.025342767548008!3d49.84235784492156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x473add726ae40001%3A0x1e862664d860a4c2!2zT3BlcmEgUGFzc2FnZSBIb3RlbCAmIEFwYXJ0bWVudHMsINC_0YDQvtGB0L_QtdC60YIg0KHQstC-0LHQvtC00LgsIDI3LCDQm9GM0LLRltCyLCDQm9GM0LLRltCy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDc5MDAw!3m2!1d49.842183899999995!2d24.0264719!5e0!3m2!1sru!2sua!4v1658782207029!5m2!1sru!2sua" width="898" height="577" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

let iframe4 = `<iframe class="mapDiv" src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3059.8829242579554!2d24.019752552469424!3d49.84161983131776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x473add76b2ec0001%3A0xb07d716decda0dc3!2zQW50cmVzb2wsINCy0YPQu9C40YbRjyDQhtCy0LDQvdCwINCe0LPRltGU0L3QutCwLCAxMtCwLCDQm9GM0LLRltCyLCDQm9GM0LLRltCy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDc5MDAw!3m2!1d49.841629399999995!2d24.0194249!5e0!3m2!1sru!2sua!4v1658782755018!5m2!1sru!2sua" width="898" height="577" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

btn1Map.addEventListener("click", function () {
  showMapPoint.innerHTML = iframe;
  showMapPoint.style.visibility = "visible";
});

btn2Map.addEventListener("click", function () {
  showMapPoint.innerHTML = iframe2;
  showMapPoint.style.visibility = "visible";
});
btn3Map.addEventListener("click", function () {
  showMapPoint.innerHTML = iframe3;
  showMapPoint.style.visibility = "visible";
});
btn4Map.addEventListener("click", function () {
  showMapPoint.innerHTML = iframe4;
  showMapPoint.style.visibility = "visible";
});

// function success(position) {
//   let map2,
//     marker,
//     latitude = position.coords.latitude,
//     longitude = position.coords.longitude;

//   // Получаем карту с использованием leaflet
//   map2 = L.map("map2").setView([latitude, longitude], 13);

//   L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//     maxZoom: 18,
//   }).addTo(map2);

//   // Маркер с использованием leaflet
//   marker = L.marker([latitude, longitude]).addTo(map2);
// }

// function error() {
//   alert(
//     "Получить текущую позицию не удалось. Пожалуйста, разрешите доступ к геолокации."
//   );
// }
// navigator.geolocation.getCurrentPosition(success, error);
