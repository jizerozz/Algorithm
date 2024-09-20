function solution(num_list) {
  return num_list.findIndex((num) => Math.sign(num) === -1)
}