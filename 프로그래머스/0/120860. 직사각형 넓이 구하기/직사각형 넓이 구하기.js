function solution(dots) {
    var answer = 0;
    
    let minX = dots[0][0];
    let maxX = dots[0][0];
    let minY = dots[0][1];
    let maxY = dots[0][1];
    
    for (let i = 1; i < dots.length; i++) {
        let x = dots[i][0];
        let y = dots[i][1];
        
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
    }
    
    let width = maxX - minX;
    let height = maxY - minY;
    
    return width * height;
}