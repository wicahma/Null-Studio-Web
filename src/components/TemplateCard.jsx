import React from "react";
import { EyeIcon, CheckBadgeIcon } from "@heroicons/react/20/solid";
import { Navigate } from "react-router-dom";

const TemplateCard = (props) => {
  return (
    <div className="rounded-2xl overflow-hidden relative group/template text-white">
      <img
        src={`https://drive.google.com/uc?export=view&id=${props.imgID}`}
        alt=""
        className="object-cover"
      />
      <div className="absolute w-full h-full p-3 opacity-0 group-hover/template:opacity-100 top-0 backdrop-blur-md bg-neutral-900/50 transition-all flex flex-col items-center justify-between">
        <div className="bg-red-500 px-3 py-[.1rem] rounded-lg">
          <p>Web</p>
        </div>
        <div className="text-center font-extralight">
          <h3 className="text-xl font-semibold">{props.judul}</h3>
          <p>{props.deskripsi}</p>
        </div>
        <div className="flex gap-2">
          <button
            className="btn btn-square btn-sm border-2 tooltip"
            data-tip={"Lihat di halaman baru"}
            onClick={() => window.open(props.url)}
          >
            <EyeIcon />
          </button>
          <button
            className="btn btn-square btn-sm border-2 tooltip"
            data-tip={"Pesan Template ini"}
            onClick={() => Navigate("/reservasi")}
          >
            <CheckBadgeIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
