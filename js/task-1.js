// task-1
function slugify(title) {
  return title
    .toLowerCase() // Başlığı küçük harflere dönüştür
    .trim() // Başlık başındaki ve sonundaki boşlukları temizle
    .split(/\s+/) // Boşluk karakterlerine göre parçala
    .join("-"); // Parçaları tire ile birleştir
}

// Test kodları
console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
