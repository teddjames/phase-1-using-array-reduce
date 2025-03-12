// index.js

const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Compute the sum of all batteries using reduce and assign to totalBatteries
const totalBatteries = batteryBatches.reduce((acc, batch) => acc + batch, 0);

module.exports = { batteryBatches, totalBatteries };
