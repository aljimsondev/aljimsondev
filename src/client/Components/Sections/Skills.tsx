import React from "react";

function Skills() {
  return (
    <section className="min-h-[90vh] my-9">
      <h1 className="text-color-title text-center xs:text-start">
        Tools and Familiarity
      </h1>
      <div className="grid gap-5 grid-cols-1 xs:grid-cols-2 md:grid-cols-3"></div>
    </section>
  );
}

export default React.memo(Skills);
