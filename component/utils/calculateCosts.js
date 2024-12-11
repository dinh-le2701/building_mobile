// Bảng giá điện
export const electricityRates = [
  { limit: 50, rate: 1893 },
  { limit: 100, rate: 1956 },
  { limit: 200, rate: 2271 },
  { limit: 300, rate: 2860 },
  { limit: 400, rate: 3197 },
  { limit: Infinity, rate: 3302 }
];

// Tính tiền điện
export const calculateElectricityCost = (usage) => {
  let cost = 0;
  let remainingUsage = usage;

  for (const rate of electricityRates) {
    if (remainingUsage > 0) {
      const usageInThisTier = Math.min(remainingUsage, rate.limit);
      cost += usageInThisTier * rate.rate;
      remainingUsage -= usageInThisTier;
    } else {
      break;
    }
  }

  return cost;
};

// Bảng giá nước
export const waterRates = [
  { limit: 10, rate: 4500 },
  { limit: 20, rate: 5600 },
  { limit: 30, rate: 6700 },
  { limit: Infinity, rate: 9200 }
];

// Tính tiền nước
export const calculateWaterCost = (usage) => {
  let cost = 0;
  let remainingUsage = usage;

  for (const rate of waterRates) {
    if (remainingUsage > 0) {
      const usageInThisTier = Math.min(remainingUsage, rate.limit);
      cost += usageInThisTier * rate.rate;
      remainingUsage -= usageInThisTier;
    } else {
      break;
    }
  }

  return cost;
};

// Tính tổng tiền
export const calculateTotalAmount = (usages) => {
  let totalElectricity = 0;
  let totalWater = 0;

  usages.forEach((item) => {
    totalElectricity += calculateElectricityCost(item.electricity_usage);
    totalWater += calculateWaterCost(item.water_usage);
  });

  const managementFee = 300000; 
  return totalElectricity + totalWater + managementFee;
};

// Hàm tính hóa đơn tháng
export const calculateBillingMonth = (createDate) => {
  const datePart = createDate.split(' ')[0];
  const [day, month, year] = datePart.split('-');
  const formattedDate = new Date(year, month - 1, day); 
  
  if (isNaN(formattedDate)) {
    console.error("Không thể tạo đối tượng Date từ ngày tháng:", createDate);
    return null;
  }
  formattedDate.setMonth(formattedDate.getMonth() - 1);
  return formattedDate.getMonth() + 1;
};


