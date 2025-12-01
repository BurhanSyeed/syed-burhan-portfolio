import { useState } from "react";

function Home() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between p-10 gap-6">
      {/* Text on the left */}
      <div className="md:w-1/2 text-center md:text-left">
        <p className="text-3xl md:text-4xl font-bold">asdfsdfsdf</p>
        <p className="mt-4 text-gray-600">
          Add your description or subtitle here. It will appear under the main
          text.
        </p>
      </div>

      {/* Image on the right */}
      <div className="md:w-1/2">
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Web Dev"
          className="w-full md:h-96 sm:h-60 rounded-3xl object-cover"
        />
      </div>
    </section>
  );
}

export default Home;
