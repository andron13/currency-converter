import ccdesign from "../assets/ccdesign.png";

import BlockConverter from "./converter/BlockConverter.tsx";
import LineConverter from "./converter/LineConverter.tsx";
import PictureWithCaption from "./design/design";

function MainPage() {
  return (
    <div className="flex justify-around w-full">
      <div className="w-1/3">
        <LineConverter />
      </div>
      <div className="w-1/6">
        <BlockConverter />
      </div>
      <div className="w-1/6">
        <PictureWithCaption src={ccdesign} alt="design" caption="design" />
      </div>
    </div>
  );
}

export default MainPage;
