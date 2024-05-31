import { Link } from "react-router-dom";

export const MiniPost = ({ title, id }: { id: string; title: string }) => {
  return (
    <Link to={`/task/${id}`}>
      <h1>{title}</h1>
    </Link>
  );
};
