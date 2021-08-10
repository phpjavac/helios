import { generatePeoplsList } from "./people";

const moneyType = [3, 5, 7];

const buy = (goods = 85): Number => { 
    // 1、  确定状态
    // dp[n]
    // 2、转移方程
    // dp[n] = dp[n-3] + dp[n-5] + dp[n-7]
    // 3<n <5 dp[n] = dp[n-3]+1
    // 5<n <7 dp[n] = dp[n-3]+dp[n-5] +1
    // 3<n <5 dp[n] = dp[n-3]+1
    // 3、确定边界值
    // if（1 or 2 ）return 0
    // 3、5、7==》1
    var dp = new Array(goods + 1).fill(0);
    if(goods < 3) {
        return 0
    }
    if(goods)
    dp[3] = 1;
    dp[5] = 1;
    dp[6] = 1;
    dp[7] = 1;
    for(let i=8;i<goods+1;i+=1) {
        dp[i] = dp[i-3] + dp[i-5] + dp[i-7]
    }
  return dp[goods];
};


const peoplsList = generatePeoplsList(100)
console.dir(peoplsList, {depth: null, colors: true, maxArrayLength: null});
const max = 80;

// const getpeopls = () => {
    // state value => dp[n]
    // dp[n] = dp[n-2] + 
// }


module.exports = { buy };
