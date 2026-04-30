function solution(prices) {
    const answer = new Array(prices.length).fill(0);
    const stack = [];

    for (let i = 0; i < prices.length; i++) {
        
        while (
            stack.length &&
            prices[stack[stack.length - 1]] > prices[i]
        ) {
            const top = stack.pop();
            answer[top] = i - top;
        }

        stack.push(i);
    }

    while (stack.length) {
        const top = stack.pop();
        answer[top] = prices.length - 1 - top;
    }

    return answer;
}