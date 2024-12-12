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
// export const calculateBillingMonth = (createDate) => {
//   const datePart = createDate.split(' ')[0];
//   const [day, month, year] = datePart.split('-');
//   const formattedDate = new Date(year, month - 1, day); 
  
//   if (isNaN(formattedDate)) {
//     console.error("Không thể tạo đối tượng Date từ ngày tháng:", createDate);
//     return null;
//   }
//   formattedDate.setMonth(formattedDate.getMonth() - 1);
//   return formattedDate.getMonth() + 1;
// };

export const calculateBillingMonth = (createDate) => {
  const datePart = createDate.split(' ')[0];
  const [day, month, year] = datePart.split('-');
  const formattedDate = new Date(year, month - 1, day); 
  
  if (isNaN(formattedDate)) {
    console.error("Không thể tạo đối tượng Date từ ngày tháng:", createDate);
    return null;
  }

  // Trừ đi 1 tháng
  formattedDate.setMonth(formattedDate.getMonth() - 1);

  // Lấy tháng và năm
  const billingMonth = formattedDate.getMonth() + 1;
  const billingYear = formattedDate.getFullYear();

  // Trả về định dạng "MM/YYYY"
  return `${billingMonth < 10 ? '0' + billingMonth : billingMonth}/${billingYear}`;
};


// -----------------------tinh tháng mới nhất-----------
import moment from 'moment'; // Cần cài đặt thư viện moment.js

export const getLatestMonthUsages = (utilityUsages) => {
  if (!utilityUsages || utilityUsages.length === 0) {
    return [];
  }

  // Tìm tháng mới nhất
  const latestMonth = utilityUsages.reduce((latest, item) => {
    const currentDate = moment(item.create_date, 'DD-MM-YYYY HH:mm:ss'); // Parse ngày
    return currentDate.isAfter(latest) ? currentDate : latest;
  }, moment(utilityUsages[0].create_date, 'DD-MM-YYYY HH:mm:ss'));

  // Lọc các mục thuộc tháng mới nhất
  const filteredUsages = utilityUsages.filter((item) => {
    const currentDate = moment(item.create_date, 'DD-MM-YYYY HH:mm:ss');
    return (
      currentDate.isSame(latestMonth, 'month') && currentDate.isSame(latestMonth, 'year')
    );
  });

  return filteredUsages;
};


