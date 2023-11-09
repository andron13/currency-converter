import moment from "moment";

import InputList from "../FormElements/InputLists";

function BlockConverter() {
  return (
    <form className="rounded-md bg-gray-200 w-fit items-center flex flex-col">
      <InputList />
      <time className="space-x-2 p-2 text-sm">
        {moment().format("MMMM Do YYYY, h:mm:ss")}
      </time>
    </form>
  );
}

export default BlockConverter;
