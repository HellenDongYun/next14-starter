import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2> 404 NotFound</h2>
      <p> sorry, this page you are looking for is not exist!</p>
      <Link href="/">go home page</Link>
    </div>
  );
};

export default NotFound;
