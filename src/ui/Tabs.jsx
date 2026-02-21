import { useState } from "react";
import { BsArrowRight, BsStar, BsStarFill } from "react-icons/bs";
import Button from "./Button";

function Tabs() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="px-10 my-10">
      <ul className="flex justify-center gap-6 text-sm mb-10">
        <li>
          <button
            className={`uppercase cursor-pointer px-4 pb-2 ${activeTab === 1 ? "border-b-2 border-dashed" : "opacity-60"}`}
            onClick={() => setActiveTab(1)}
          >
            Description
          </button>
        </li>
        <li>
          <button
            className={`uppercase cursor-pointer px-4 pb-2 ${activeTab === 2 ? "border-b-2 border-dashed" : "opacity-60"}`}
            onClick={() => setActiveTab(2)}
          >
            Additional information
          </button>
        </li>
        <li>
          <button
            className={`uppercase cursor-pointer px-4 pb-2 ${activeTab === 3 ? "border-b-2 border-dashed" : "opacity-60"}`}
            onClick={() => setActiveTab(3)}
          >
            Reviews
          </button>
        </li>
      </ul>

      <div>
        <div className={activeTab === 1 ? "" : "hidden"}>
          <p className="text-gray-700 mb-3 leading-6 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p className="text-gray-700 leading-6 text-sm">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga.
          </p>
        </div>

        <div className={activeTab === 2 ? "" : "hidden"}>
          <ul>
            <li className="flex py-2 border-t border-b border-green-200 px-4">
              <strong className="flex-1">ID</strong>
              <span className="flex-1 text-sm">#1253458</span>
            </li>
          </ul>
        </div>

        <div className={activeTab === 3 ? "" : "hidden"}>
          <div className="flex gap-3 pt-2 pb-4 border-b border-gray-200 last:border-b-0">
            <div className="w-24">
              <img
                src="https://thumbs.dreamstime.com/b/classic-men-s-t-shirt-short-sleeve-white-background-front-view-mockup-illustration-102846908.jpg"
                alt=""
                className="min-w-12 h-12 object-cover rounded-full"
              />
            </div>
            <div>
              <div>
                <strong className="font-medium">Daniel Rajdesh</strong>
                <div className="text-xs opacity-60">13th March 2025</div>
              </div>
              <p className="text-gray-500 mt-2 leading-6 text-sm">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum
              </p>
            </div>
            <div className="flex gap-1 text-[0.7rem] text-amber-400">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-normal mb-4">Submit Rating</h3>
            <div className="mt-3 bg-gray-100 p-2 px-4 rounded-lg flex items-center justify-between">
              <div className="flex gap-1 cursor-pointer">
                <BsStar title="star 1" />
                <BsStar title="star 2" />
                <BsStar title="star 3" />
                <BsStar title="star 4" />
                <BsStar title="star 5" />
              </div>
              <div>4 Star</div>
            </div>

            <form action="" className="mt-5">
              <div className="flex flex-wrap gap-5">
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="fullName" className="text-sm flex-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    className="p-2 border border-gray-300 rounded-md flex-1"
                  />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="email" className="text-sm flex-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="p-2 border border-gray-300 rounded-md flex-1"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 flex-1 mt-5">
                <label htmlFor="description" className="text-sm flex-1">
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  className="p-2 border border-gray-300 rounded-md flex-1"
                  rows={5}
                ></textarea>
              </div>

              <Button variant="v3" className="rounded-md mt-5">
                Submit Review
                <BsArrowRight />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
