import React from "react";
import Navbar from "../../src/client/Components/Navbar";
import Layout from "../../src/client/Layout";

function Artworks() {
  return (
    <Layout>
      <div className="root">
        <Navbar artworksActive />
      </div>
    </Layout>
  );
}

export default Artworks;
