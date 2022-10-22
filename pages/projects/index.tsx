import React from "react";
import Navbar from "../../src/client/Components/Navbar";
import Layout from "../../src/client/Layout";

function Projects() {
  return (
    <Layout>
      <div className="root">
        <Navbar projectsActive />
      </div>
    </Layout>
  );
}

export default Projects;
