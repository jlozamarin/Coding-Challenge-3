// Task 1: Create a Function to Calculate Average Sales
function calculateAverageSales(salesAmount) { 
    if (salesAmount.length === 0) return 0;
    const totalSales = salesAmount.reduce((acc, curr) => acc + curr, 0);
    return totalSales / salesAmount.length;
}

// Task 2: Create a Function to Determine Performance Rating
const averageSales = totalSales/salesAmount.length;
function determinePerformanceRating(averageSales) { 
    if (averageSales > 10000) return "Excellent"; // Sales amounts above 10,000
    else if (averageSales >= 7000) return "Good"; // Sales amounts between 7,000 and 10,000
    else if (averageSales >= 4000) return "Satisfactory"; // Sales amounts between 4,000 and 7,000
    else return "Needs Improvement";  // Sales amounts under 4,000
}

