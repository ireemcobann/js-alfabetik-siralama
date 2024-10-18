// Kullanıcıdan kaç adet isim gireceğini soralım
// Girdiği her bir ismi "isimler" dizisine kaydedelim.
// Kaydettikten sonra bir listeleyelim.
// Daha sonra tüm girilen isimleri alfabetik olarak sıralayalım. (ipucu: sort() 'u araştırabilirsiniz)

let isimAdedi = prompt("Kaç adet isim girmek istiyorsun?");
let isimler = [];

function listISim() {
  for (let i = 0; i < isimAdedi; i++) {
    let isim = prompt(i + 1 + ". ismi giriniz:");
    isimler.push(isim);
  }
}

listISim();
console.log("Girdiğin isimler:", isimler);

isimler.sort();

console.table(isimler);
console.log("isimler alfabetik sıralamaya göre sıralandı. ");
