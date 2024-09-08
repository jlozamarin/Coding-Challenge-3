// Task 1: Create a Function to Calculate Average Sales
function calculateAverageSales(salesAmount) { 
    if (salesAmount.length === 0) return 0;
    const totalSales = salesAmount.reduce((acc, curr) => acc + curr, 0);
    return totalSales / salesAmount.length;
}
