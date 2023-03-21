import axios from "axios";
import React, { useEffect, useState } from "react";

export const Skins = () => {
  const [skins, setSkins] = useState([]);
  useEffect(() => {
    axios
      .get("https://valorant-api.com/v1/weapons/skins")
      .then((res) => {
        setSkins(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {skins?.map((skin) => (
        <div key={skin.uuid}>{skin.displayName}</div>
      ))}
    </div>
  );
};
