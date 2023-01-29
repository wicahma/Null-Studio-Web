import React from "react";
import { EyeIcon, CheckBadgeIcon } from "@heroicons/react/20/solid";

const TemplateCard = (props) => {
  return (
    <div className="rounded-2xl overflow-hidden relative group/template text-white">
      <img
        src="https://picsum.photos/1200/800"
        alt=""
        className="object-cover"
      />
      <div className="absolute w-full h-full p-3 opacity-0 group-hover/template:opacity-100 top-0 backdrop-blur-md bg-neutral-900/50 transition-all flex flex-col items-center justify-between">
        <div className="bg-red-500 px-3 py-[.1rem] rounded-lg">
          <p>Web</p>
        </div>
        <div className="text-center font-extralight">
          <h3 className="text-xl font-semibold">Judulnyah</h3>
          <p>Deskripsinya</p>
        </div>
        <div className="flex gap-2">
          <button
            className="btn btn-square btn-sm border-2 tooltip"
            data-tip={"Lihat di halaman baru"}
          >
            <EyeIcon />
          </button>
          <button
            className="btn btn-square btn-sm border-2 tooltip"
            data-tip={"Pesan Template ini"}
          >
            <CheckBadgeIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
