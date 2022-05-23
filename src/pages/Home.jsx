import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd-mobile";

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
      <Button color="primary" fill="solid">
        Solid
      </Button>
    </>
  );
}

export default Home;
