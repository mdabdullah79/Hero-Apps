import axios from "axios";
import { use, useEffect, useState } from "react";

const useApps = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios("/MoreAppsData.json")
      .then((data) => setData(data.data))
      .finally(() => {
        setTimeout(()=>{
            setLoading(false)
        },500)
      });
  }, []);

  return { data, loading };
};

export default useApps;
