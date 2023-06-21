// Container with Most Water

const ContainerWithMostWater = (arr, n) => {
  let l = 0;
  let r = n - 1;
  let area = 0;

  while (l < r) {
    area = Math.max(area, Math.min(arr[l], arr[r]) * (r - l));

    if (arr[l] < arr[r]) l += 1;
    else r -= 1;
  }

  console.log(area);
};

ContainerWithMostWater([1, 5, 4, 3], 4);
