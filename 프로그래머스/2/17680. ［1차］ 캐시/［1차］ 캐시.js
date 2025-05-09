function solution(cacheSize, cities) {
    var answer = 0;
    let cache = []
    const miss = 5
    const hit = 1
    
    if(cacheSize === 0) return cities.length * miss
    
    cities.forEach(city => {
        city = city.toLowerCase()
        const idx = cache.indexOf(city)
        
        if(idx !== -1){
            cache.splice(idx, 1)
            cache.push(city)
            answer += hit
        }else{
            if(cache.length >= cacheSize) cache.shift()
                cache.push(city)
                answer += miss
            }
    })
    return answer;
}

