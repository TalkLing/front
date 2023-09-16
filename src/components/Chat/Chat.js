import axios from "axios";
import s from "./Chat.module.scss";

export const Chat = () => {
  const API_BASE_URL =
    "https://server-your-price-booking.onrender.com/api/acsess-to-admin";

  async function getStatistic() {
    try {
      const response = await axios.get(`${API_BASE_URL}/statistic`);
      return response.data;
    } catch (error) {
      console.error("Ошибка при получении статистики: ", error);
      throw error;
    }
  }
  getStatistic();
  return <div className={s.logo}>Chat</div>;
};
