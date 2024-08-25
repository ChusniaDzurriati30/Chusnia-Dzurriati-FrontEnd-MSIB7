function penjumlahanDiagonal(matrix) {
  const n = matrix.length;
  let totalPenjumlahan = 0;

  for (let i = 0; i < n; i++) {
    totalPenjumlahan += matrix[i][i];
    totalPenjumlahan += matrix[i][n - 1 - i];
  }

  if (n % 2 === 1) {
    const midIndex = (n - 1) / 2;
    totalPenjumlahan -= matrix[midIndex][midIndex];
  }

  return totalPenjumlahan;
}
console.log(
  penjumlahanDiagonal([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

console.log(
  penjumlahanDiagonal([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);

console.log(
  penjumlahanDiagonal([
    [2, 3],
    [4, 5],
  ])
);

console.log(
  penjumlahanDiagonal([
    [7, 8, 9],
    [6, 5, 4],
    [3, 2, 1],
  ])
);

console.log(
  penjumlahanDiagonal([
    [16, 2, 3, 13],
    [5, 11, 10, 8],
    [9, 7, 6, 12],
    [4, 14, 15, 1],
  ])
);

console.log(
  penjumlahanDiagonal([
    [5, 9, 1, 3, 8],
    [7, 2, 4, 6, 0],
    [5, 8, 3, 2, 7],
    [9, 1, 6, 4, 5],
    [3, 7, 2, 8, 1],
  ])
);
