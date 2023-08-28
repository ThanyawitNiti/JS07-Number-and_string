// จงเขียนฟังก์ชันในการสุ่มตัวเลขลูกเต๋า โดยผลลัพธ์ต้องเป็นตัวเลขจำนวนเต็มตั้งแต่ 1 ถึง 6

let min =1 ;
let max = 6;

let r = min + Math.floor(Math.random()*(max-min+1))
console.log(r)