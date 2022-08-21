const generate2DArray = (height, width) => {
  // height個の要素それぞれに、値が0のwidth個の要素
  return [...Array(height)].map(() => Array(width).fill(0));
};

function knapsack(items, weightLimit) {
  const listHeight = items.length;
  // 動的計画法に必要な0行目・0列目を含む二次元配列を生成
  let dp = generate2DArray(listHeight + 1, weightLimit + 1);
  // 列方向はitemsの要素数を上限
  for (let col = 0; col < listHeight; col++) {
    // 行方向はweightLimitを上限
    for (let row = 0; row < weightLimit + 1; row++) {
      // 探索している行数がcol番目の品物のweight以上
      if (row >= items[col][0]) {
        // col+1列row行に、col列row行の値と、
        // col列【row - (col番目の品物のweight)】行の値に
        // col番目の品物のvalueの値を加えた値の大きい方を代入
        dp[col + 1][row] = Math.max(
          dp[col][row],
          dp[col][row - items[col][0]] + items[col][1]
        );
        // 探索している行数がcol番目の品物のweight未満
      } else {
        // col+1列row行に、col列row行の値を代入
        dp[col + 1][row] = dp[col][row];
      }
    }
  }
  // 最終列の最終行の値が最大となる値となるので、それを返却
  return dp[listHeight][weightLimit];
}

module.exports = knapsack;
