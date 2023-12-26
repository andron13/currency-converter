import moment from "moment";

import im from "../../assets/im.png";
import InputList from "../FormElements/InputLists";

function BlockConverter() {
  return (
    <form className="rounded-md bg-gray-200 w-fit items-center flex flex-col">
      <InputList />
      <footer className="flex justify-between items-center w-full px-4">
        <time className="space-x-2 p-2 text-sm">
          {moment().format("DD.MM.YYYY, HH:mm")}
        </time>
        <a href="#">
          <img src={im} className="w-4 h-4" alt="andron13" title="andron13" />
        </a>
      </footer>
    </form>
  );
}

export default BlockConverter;
