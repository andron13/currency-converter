import ccdesign from "../assets/ccdesign.png";

import BlockConverter from "./converter/BlockConverter";
import LineConverter from "./converter/LineConverter";
import PictureWithCaption from "./design/design";

function MainPage() {
  return (
    <main className="flex justify-around w-full m-2 bg-cover bg-blue-50">
      <div className="w-1/3 flex-1 p-4 bg-white bg-opacity-50 rounded shadow-lg">
        <LineConverter />
      </div>
      <div className="w-1/6 flex-1 p-4 bg-white bg-opacity-50 rounded shadow-lg">
        <BlockConverter />
      </div>
      <div className="w-1/6 p-4 bg-white bg-opacity-50 rounded shadow-lg">
        <PictureWithCaption src={ccdesign} alt="design" caption="design" />
      </div>
    </main>
  );
}

export default MainPage;
