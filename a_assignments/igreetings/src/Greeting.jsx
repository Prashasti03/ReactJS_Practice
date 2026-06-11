function Greeting() {
  const currentHour = new Date().getHours();
  let time = new Date().toLocaleTimeString();

  let message;

  if (currentHour < 12) {
    message = "Good Morning";
  } else if (currentHour >= 12 && currentHour <= 18) {
    message = "Good Afternoon";
  } else {
    message = "Good Evening";
  }

  return (
    <div style={styles.container}>
      <h1>{message}</h1>
      <p>Current Time: {time}</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial"
  }
};

export default Greeting;
