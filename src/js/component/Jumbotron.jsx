import React from "react";

export default function Jumbotron() {
  return (
    <section className="container m-4">
      <div className="jumbotron bg-light px-4 py-5 rounded">
        <h1 className="display-1">A Warm Welcome!</h1>
        <p className="lead">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
          sit laboriosam impedit nulla tempore ad dolores dolor sequi quos fugit
          harum at, reiciendis recusandae necessitatibus.
        </p>
        <button className="btn btn-lg btn-primary">
          Call to action!
        </button>
      </div>
    </section>
  );
}
