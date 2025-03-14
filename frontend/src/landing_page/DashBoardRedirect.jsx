import React, { useEffect } from "react";
import { GridLoader } from "react-spinners";

const DashboardRedirect = () => {
  const dashboardURL = "http://localhost:5173/";

  useEffect(() => {
    window.location.replace(dashboardURL); // Use replace() to avoid history issues
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
