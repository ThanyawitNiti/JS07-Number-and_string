// จงเขียนฟังก์ชันในการแปลงค่าจากองศาเป็นเรเดียน


// <!-- PI rad = 1 * PI  === 180 -->
// <!-- PI rad = 1 * PI  === 180 -->

// <!-- 180 deg === PI rad -->
// <!-- 1  deg  ===  1*PI / 180 -->
// <!-- n deg  ===  n*PI / 180 -->


function getTanFromDegrees(degrees) {
    return Math.tan((degrees * Math.PI) / 180);
  }

console.log(getTanFromDegrees(50))