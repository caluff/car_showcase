"use client"

import {CustomFilterProps} from "@/types";
import {Listbox} from "@headlessui/react";
import {useState} from "react";

const CustomFilter = ({title,options}:CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className={"w-fit"}>
      <Listbox>
        <div className={"relative w-fit z-10"}>
          <Listbox.Button className={"relative w-full min-w-[127px] flex justify-between items-center cursor-default rounded-lg bg-white py-2 px-3 text-left shadow-md sm:text-sm border"}>
            <span>Filter</span>
          </Listbox.Button>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
