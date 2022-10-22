import React from "react";

function About() {
  return (
    <section className="min-h-[90vh]">
      <h1 className="text-color-title text-center xs:text-start">
        Things that I do that might interest you
      </h1>
      <div className="grid gap-5 grid-cols-1 xs:grid-cols-2 md:grid-cols-3"></div>
    </section>
  );
}

export default React.memo(About);
