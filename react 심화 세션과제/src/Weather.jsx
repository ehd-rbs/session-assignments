import React, { useState, useEffect } from "react";
import axios from "axios";

function Weather() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchDust = async () => {
      try {
        const response = await axios.get(
          "https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty",
          {
            params: {
              serviceKey: import.meta.env.VITE_API_KEY,
              returnType: "json",
              numOfRows: 5,
              pageNo: 1,
              sidoName: "서울",
              ver: "1.0",
            },
          }
        );

        console.log(response.data);

        const data = response.data.response.body.items;
        setItems(data);
      } catch (error) {
        console.error("에러 발생:", error);
      }
    };

    fetchDust();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8 text-blue-600">
        서울 미세먼지 정보
      </h1>

      <div className="flex flex-col gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-5 w-80"
          >
            <p className="text-xl font-bold text-gray-800 mb-2">
              {item.stationName}
            </p>

            <p className="text-gray-600">
              미세먼지(PM10): {item.pm10Value}
            </p>

            <p className="text-gray-600">
              초미세먼지(PM2.5): {item.pm25Value}
            </p>

            <p className="text-sm text-gray-400 mt-2">
              측정시간: {item.dataTime}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Weather;