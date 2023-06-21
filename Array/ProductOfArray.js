// Product of Array except itself

// if solve in nested loop in o(n^2) time.

const ProductOfArray1 = (n, arr) => {
  const res = [];
  for (let value1 of arr) {
    let mul = 1;
    for (let value2 of arr) if (value1 !== value2) mul *= value2;
    res.push(mul);
  }

  console.log(res.join(" "));
};

ProductOfArray1(5, [10, 3, 5, 6, 2]);

// if solve in O(n) time and 0(n) space.

const ProductOfArray2 = (n, arr) => {
  let left = new Array(n);
  let right = new Array(n);
  let product = new Array(n);

  left[0] = 1;
  right[n - 1] = 1;

  for (let i = 1; i < n; i++) left[i] = arr[i - 1] * left[i - 1];

  for (let i = n - 2; i >= 0; i--) right[i] = arr[i + 1] * right[i + 1];

  for (let i = 0; i < n; i++) product[i] = right[i] * left[i];

  console.log(product.join(" "));
};

ProductOfArray2(5, [10, 3, 5, 6, 2]);

// if solve in O(n) time and 0(1) space.

const ProductOfArray3 = (n, arr) => {
  let temp = 1;

  let product = Array(n).fill(0);

  for (let i = 0; i < n; i++) product[i] = 1;

  for (let i = 0; i < n; i++) {
    product[i] = temp;
    temp *= arr[i];
  }

  temp = 1;

  for (let i = n - 1; i >= 0; i--) {
    product[i] *= temp;
    temp *= arr[i];
  }

  console.log(product.join(" "));
};

ProductOfArray3(5, [10, 3, 5, 6, 2]);
