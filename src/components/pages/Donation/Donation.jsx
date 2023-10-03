import React, { useState } from "react";

const Donation = () => {
  const [isSlice, setIsSlice] = useState(true);
  let donationComplete = [];
  const getData = JSON.parse(localStorage.getItem("donations"));

  if (getData && getData.length > 0) {
    for (let i = 0; i < getData.length; i++) {
      const element = getData[i];
      donationComplete.push(element.key);
    }
  }

  const slice = () => {
    setIsSlice(false);
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5">
        {isSlice && donationComplete.length > 3
          ? donationComplete?.slice(0, 4).map((d) => (
              <div key={d.id}
                className="flex justify-start rounded-md"
                style={{ background: d.card_bg_color }}
              >
                <div>
                  <img
                    className="w-48 lg:w-80 md:w-48 h-full"
                    src={d?.picture}
                    alt={d?.title}
                  />
                </div>
                <div className="px-5 py-5">
                  <h2
                    className="w-28 px-2 text-center rounded-md py-1"
                    style={{
                      background: d.text_button_bg_color,
                      color: d.category_bg_color,
                    }}
                  >
                    {d?.category}
                  </h2>
                  <p className="text-2xl font-semibold py-2">{d?.title}</p>
                  <p
                    className="text-xl font-semibold pb-2"
                    style={{ color: d.category_bg_color }}
                  >
                    {d?.price}
                  </p>
                  <h2
                    className="w-28 py-1 px-2 text-center rounded-md font-semibold"
                    style={{ background: d.category_bg_color, color: "white" }}
                  >
                    View Details
                  </h2>
                </div>
              </div>
            ))
          : donationComplete.map((d) => (
              <div key={d.id}
                className="flex justify-start rounded-md"
                style={{ background: d.card_bg_color }}
              >
                <div>
                  <img
                    className="w-48 lg:w-80 md:w-48 h-full"
                    src={d?.picture}
                    alt={d?.title}
                  />
                </div>
                <div className="px-5 py-5">
                  <h2
                    className="w-28 px-2 text-center rounded-md py-1"
                    style={{
                      background: d.text_button_bg_color,
                      color: d.category_bg_color,
                    }}
                  >
                    {d?.category}
                  </h2>
                  <p className="text-2xl font-semibold py-2">{d?.title}</p>
                  <p
                    className="text-xl font-semibold pb-2"
                    style={{ color: d.category_bg_color }}
                  >
                    {d?.price}
                  </p>
                  <h2
                    className="w-28 py-1 px-2 text-center rounded-md font-semibold"
                    style={{ background: d.category_bg_color, color: "white" }}
                  >
                    View Details
                  </h2>
                </div>
              </div>
            ))}
      </div>
      {isSlice && donationComplete.length > 3 ? (
        <div className="text-center my-10">
          <button
            className="py-2 px-5 bg-blue-600 rounded-md text-white"
            onClick={slice}
          >
            See all
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Donation;
