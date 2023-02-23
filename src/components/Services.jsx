import React from "react";
import women_ask from "../assets/images/women-ask.png";
import TemplateCard from "./TemplateCard";

const Services = (props) => {
  return (
    <section
      id="services"
      className=" flex justify-center flex-col gap-10 mx-5 mb-36"
    >
      <div className="flex items-center max-h-fit justify-between bg-red-500 rounded-[50px]">
        <div className="m-10 self-start dark:text-neutral-900 text-white">
          <h1 className="font-serif text-7xl font-bold">
            Didn't know about choosing a Web Design?
          </h1>
          <p className="mt-5 text-lg">
            <span className="dark:bg-neutral-900 bg-white px-3 py-1 text-red-500">
              Dont worry!
            </span>{" "}
            check out our template below
          </p>
        </div>
        <div className="grow w-[870px] lg:block hidden">
          <img src={women_ask} alt="" className="max-h-[500px]" />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-flow-row-dense gap-5 w-full">
        <TemplateCard
          judul="Plombo"
          deskripsi="Website Company profile yang berkerja dan juga bergerak di bidang pariwisata"
          url="https://plombo-web-application.vercel.app/"
          imgID="1YoiGXNqLKBs88oQxxzwpwghAuZCU2fwq"
        />
        <TemplateCard
          judul="News Today"
          deskripsi="Website penyedia layanan berita terkini yang disukai oleh anak muda."
          url="https://news-today-three.vercel.app/"
          imgID="1rV7LkypWLCN4h8fG8i_Tv0YI-yHOBFxb"
        />
        <TemplateCard
          judul="DA Exhib"
          deskripsi="Website yang memfasilitasi para kreator seni yang ada di Indonesia."
          url="https://da-exhib.vercel.app/home"
          imgID="1QqKkX8oZasczwrpvnFeuJ3yLBhw66CyC"
        />
        <TemplateCard
          judul="Reksata"
          deskripsi="Website Reservasi online untuk memudahkan pemesanan pada suatu Cafe."
          url="https://reksata-app.vercel.app/"
          imgID="1a_y2od-iE97frlgB0Vmzmzvrz__ixEaN"
        />
        <TemplateCard
          judul="Star Camp"
          deskripsi="Website persewaan alat alat gunung yang sudah terpercaya dan juga terkenal di Jogja."
          url="https://star-camp.vercel.app/"
          imgID="1y4AEksL90iWfjVx2f7Zzt1T8TULchb8r"
        />
      </div>
    </section>
  );
};

export default Services;
