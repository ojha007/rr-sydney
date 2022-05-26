import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link to="/login">Login</Link>
      <h1>HOME</h1>
    </div>
  );
}
