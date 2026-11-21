
for (const size of) {
  const many = Array.from({ length: size }, (_, i) => ({
    id: i + 1,
    name: `Товар ${i + 1}`,
    price: 100 + i
  }));
  const t0 = performance.now();
  setState({ products: many });
  const t1 = performance.now();
  console.log(`render ${size} товаров: ${(t1 - t0).toFixed(1)} мс`);
}
