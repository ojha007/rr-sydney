import PrivateRoute from "./routes/frontend/private.route";
import PublicRoute from "./routes/frontend/public.route";

const App = () => {
  return (
    <>
      <PublicRoute />
      <PrivateRoute />
    </>
  );
};
export default App;
