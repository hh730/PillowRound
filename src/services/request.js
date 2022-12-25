import axios from 'axios';

export const getMarketData = async (
  pageNumber = 1,
  order = 'market_cap_desc',
) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=${order}&per_page=15&page=${pageNumber}&sparkline=false&price_change_percentage=24h`,
    );
    console.log('response', response.data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const serachCoins = async coinName => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/search?query=${coinName}`,
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
