function solution(bandage, health, attacks) {
    let current=health
    let lastAttack=attacks.at(-1).at(0)
    let contsuccess=0 //연속 성공 횟수 
    let cntAttack=0 //공격 카운트
    
    for(let i=1;i<=lastAttack;i++){
        if(i === attacks[cntAttack][0]){
            current -= attacks[cntAttack][1]
            cntAttack++; //공격 당하면 카운트 올라감
            contsuccess = 0; //공격 당해서 연속 성공 초기화
            
            if(current <= 0){
                return -1;    
            }            
        }
        //붕대 감으면서 체력 회복... 
        else{
            current += bandage[1] //초마다 bandage[1] 만큼의 체력 회복
            contsuccess++;
            
            if(bandage[0] === contsuccess){
                current += bandage[2]
                contsuccess = 0;
            }
        }
        current = current > health ? health : current
    }
    return current
}

//기술 시전 시간, 초당 회복량, 추가 회복량
//attacks는 공격시간, 피해량

//attacks[i][0]초에 몬스터의 마지막 공격이 이루어지니까 그만큼 반복
//공격 당하면 health-attacks[공격횟수][1]

//만약 attacks[i][0]에 값이 없으면 health+=bandage[1]
//만약 bandage[0]의 갯수만큼 값이 없었으면 이 때 health+=babdage[2]
//만약 health의 값이 0보다 같거나 작으면 -1 리턴

//체력이 0이하가 되면 리턴 -1하고 gg

