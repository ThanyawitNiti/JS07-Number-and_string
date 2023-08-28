
// - จงเขียนฟังก์ชันในการแปลงตัวเลข โดยให้ผลลัพธ์เป็นตัวเลขที่มีทศนิยม 2 ตำแหน่ง 
// - หากตัวเลขที่ต้องการแปลงไม่มีจุดทศนิยมหรือมีทศนิยมไม่ถึง 2 ตำแหน่งให้เติมเลข 0 ต่อท้ายจนได้ทศนิยม 2 ตำแหน่ง
// - หากตัวเลขที่ต้องการแปลงมีจุดทศนิยมมากกว่า 2 ตำแหน่งให้ปัดตัวเลขตั้งแต่หลังจุดทศนิยมตำแหน่งที่ 2 ทิ้งให้หมด
// - เช่น แปลง 10 ต้องได้ 10.00, แปลง 5.1 ต้องได้ 5.10, แปลง 3.1289 ต้องได้ 3.12


// 10 => 10.00  5.1 => 5.10 3.1289=> 3.12

// const num =10 ;
// const num =5.12 ;
const num = 3.1289 ;

const result = (Math.floor(num *100) / 100).toFixed(2); 

function trunc(num) {
    return (Math.floor(num *100) / 100).toFixed(2);

}
console.log(trunc(num))