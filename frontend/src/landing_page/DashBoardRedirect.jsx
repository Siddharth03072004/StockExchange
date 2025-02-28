import React, { useEffect } from "react";
import { GridLoader } from "react-spinners";

const DashboardRedirect = () => {
  const dashboardURL = "https://stock-exchange-ds.vercel.app/";

  useEffect(() => {
    window.location.href = dashboardURL;
  }, []);

  return (
    <div style={styles.container}>
      <GridLoader color="#9B59B6" size={15} />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
};

export default DashboardRedirect;
