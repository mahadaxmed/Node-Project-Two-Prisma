// Import server here and start the application
import app from "./api/server.js";
const port = 900;

app.listen(port, () => {
  console.log(`listening port ${port}`);
});
