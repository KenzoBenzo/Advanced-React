import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <p>hello</p>
      <Link href="/sell">
        <a>sell!</a>
      </Link>
    </div>
  );
};

export default HomePage;
