function solution(num, k) {
    const idx = String(num).split("").findIndex(item => Number(item) === k)
    return idx === -1 ? -1 : idx + 1
}