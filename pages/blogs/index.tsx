import React from "react";
import Navbar from "../../src/client/Components/Navbar";
import Layout from "../../src/client/Layout";

function Blogs() {
  return (
    <Layout>
      <div className="root">
        <Navbar blogsActive />
      </div>
    </Layout>
  );
}

export default Blogs;
