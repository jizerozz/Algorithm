function solution(bridge_length, weight, truck_weights) {
    let answer = 0;

    // 다리 위 트럭
    let onBridgeTrucks = [];

    // 현재 다리 위 무게
    let sum = 0;

    while (truck_weights.length > 0 || onBridgeTrucks.length > 0) {
        answer++;

        // 다리 위 트럭 이동
        for (let i = 0; i < onBridgeTrucks.length; i++) {
            onBridgeTrucks[i].time++;
        }

        // 다 건넌 트럭 제거
        if (
            onBridgeTrucks.length &&
            onBridgeTrucks[0].time > bridge_length
        ) {
            sum -= onBridgeTrucks[0].weight;
            onBridgeTrucks.shift();
        }

        // 다음 트럭 올릴 수 있으면 올림
        if (
            truck_weights.length &&
            sum + truck_weights[0] <= weight
        ) {
            const truck = truck_weights.shift();

            onBridgeTrucks.push({
                weight: truck,
                time: 1,
            });

            sum += truck;
        }
    }

    return answer;
}