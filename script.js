let fruits = ['banan','shaftoli','baklajan','olma']

console.log(fruits)

alert(`Boshlanishida Arryning uzunligi ${fruits.length}`)

// let confirmation = confirm("Sizning Arrayingizni olib tashlamoqchimiz!")

// alert = (`${confirmation}`)

if (confirm("Sizning Arrayingizni olib tashlamoqchimiz!")) {
    fruits.pop();
    alert(`Boshlanishida Arryning uzunligi ${fruits.length}`);
    console.log(fruits);
} else {
    alert(`Arrayning uzunligi ${fruits.length}`);
}