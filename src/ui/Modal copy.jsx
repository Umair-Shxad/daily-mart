import { CgClose } from "react-icons/cg";
import ColorsList from "./ColorsList";

function Modal() {
  return (
    <div className="fixed inset-0 z-10 flex items-center">
      <div className="p-5! rounded-xl bg-white shadow-lg container">
        <div className="relative">
          <button className="absolute right-0 rounded-2xl p-2 bg-gray-200 cursor-pointer">
            <CgClose />
          </button>
        </div>
        <div>
          <div></div>
          <div>
            <span className="inline-flex items-center rounded-lg bg-green-500 px-2 py-1 text-xs font-medium text-white inset-ring inset-ring-gray-500/10">
              Sale
            </span>
            <h2 className="mb-1 text-3xl font-Sans font-semibold my-2">
              Wooden Rocking Chair
            </h2>
            <div className="flex items-center gap-2">
              <span className="font-medium text-md line-through text-gray-500">
                $199
              </span>
              <span className="font-semibold text-xl text-brand">$110</span>
            </div>
            <p className="text-gray-700 mb-3">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores.
            </p>

            <ColorsList
              list={[
                { color: "gray-500" },
                { color: "red-500" },
                { color: "green-500" },
                { color: "blue-500" },
              ]}
            />
            <SizeList
              list={[{ size: 28 }, { size: 30 }, { size: 32 }, { size: 34 }]}
            />
            <h3 className="font-medium text-sm">Size:</h3>
            <div className="my-3 flex gap-1">
              <button className="inline-flex items-center justify-center p-3 px-4 border border-gray-300 rounded-sm cursor-pointer">
                28
              </button>
              <button className="inline-flex items-center justify-center p-3 px-4 border border-gray-300 rounded-sm cursor-pointer">
                30
              </button>
              <button className="inline-flex items-center justify-center p-3 px-4 border border-gray-300 rounded-sm cursor-pointer">
                32
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
