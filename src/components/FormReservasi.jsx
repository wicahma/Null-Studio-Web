import axios from "axios";
import React, { useEffect } from "react";
import Loading from "./Loading";

const FormReservasi = (props) => {
  const [form, setForm] = React.useState({
    nama: "",
    email: "",
    telepon: "",
    jenis: "",
    template: "",
    domain: "",
  });
  const [keyError, setKeyError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const handleChange = (e) => {
    e.target.id === keyError && setKeyError(null);
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const checker = (data) => {
    let validate = true;
    for (const [key, value] of Object.entries(data)) {
      if (value === undefined || value === "" || value === "none") {
        if (key === "jenis") break;
        setKeyError(key);
        validate = false;
        break;
      }
    }
    return validate;
  };

  const handleSend = (e) => {
    if (checker(e)) {
      setLoading(true);
      axios
        .post(`${process.env.REACT_APP_API_URL}/reservation`, form)
        .then((res) => {
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
        });
    }
  };

  return (
    <div className="md:mt-24 mt-5 relative dark:text-neutral-900 text-white">
      <div className="md:w-[80%] mx-5">
        <h2 className="text-start bg-orange-500 mb-5 rounded-[20px] p-5 md:absolute -top-16 md:w-[50%] w-full right-0 font-serif text-4xl font-extrabold z-10 leading-9">
          Mulai Resrvasi anda untuk Membuat Website di Null Studio
        </h2>
        <form className="bg-purple-500 p-5 rounded-[20px] max-w-full grid grid-cols-3 indicator gap-3 pt-14">
          {/* @desc input nama */}
          <div className="form-control w-full sm:col-span-2 col-span-3">
            <label className="label">
              <span className="label-text">Masukkan nama kalian</span>
            </label>
            <input
              type="text"
              id="nama"
              onChange={(e) => handleChange(e)}
              placeholder="ex: Teguh Dwi Cahya Kuswanto"
              className={`input input-bordered w-full dark:bg-neutral-800 text-white border-none ${
                keyError === "nama" ? "ring-red-500 ring-4" : ""
              }`}
            />
          </div>

          {/* @desc input email */}
          <div className="form-control w-full sm:col-span-1 col-span-3">
            <label className="label">
              <span className="label-text">Masukkan email kalian</span>
            </label>
            <input
              id="email"
              type="email"
              onChange={(e) => handleChange(e)}
              placeholder="ex: youremail@mail.com"
              className={`input input-bordered w-full dark:bg-neutral-800 text-white border-none ${
                keyError === "email" ? "ring-red-500 ring-4" : ""
              }`}
            />
            <label className="label">
              <span className="label-text">
                Pastikan email yang dimasukkan merupakan email aktif
              </span>
            </label>
          </div>

          {/* @desc input telepon */}
          <div className="form-control w-full sm:col-span-2 col-span-3">
            <label className="label">
              <span className="label-text">Masukkan Nomor telepon kalian</span>
            </label>
            <input
              id="telepon"
              type="number"
              onChange={(e) => handleChange(e)}
              placeholder="ex: 085751457898"
              className={`input input-bordered w-full dark:bg-neutral-800 text-white border-none ${
                keyError === "telepon" ? "ring-red-500 ring-4" : ""
              }`}
            />
            <label className="label">
              <span className="label-text">
                Pastikan nomor telepon merupakan nomor untuk WhatsApp
              </span>
            </label>
          </div>

          {/* @desc input jenis web */}
          <div className="form-control w-full sm:col-span-1 col-span-3">
            <label className="label">
              <span className="label-text">Masukkan jenis website</span>
            </label>
            <select
              id="jenis"
              onChange={(e) => handleChange(e)}
              defaultValue={"none"}
              className={`input input-bordered w-full dark:bg-neutral-800 text-white border-none ${
                keyError === "jenis" ? "ring-red-500 ring-4" : ""
              }`}
            >
              <option disabled>none</option>
              <option>Portofolio Web</option>
              <option>Company Web</option>
              <option>Online Shop Web</option>
              <option>Service Web</option>
            </select>
          </div>

          {/* @desc input template web */}
          <div className="form-control w-full sm:col-span-1 col-span-3">
            <label className="label">
              <span className="label-text">Masukkan template (bila ada)</span>
            </label>
            <select
              id="template"
              onChange={(e) => handleChange(e)}
              defaultValue={"none"}
              className={`input input-bordered w-full dark:bg-neutral-800 text-white border-none ${
                keyError === "template" ? "ring-red-500 ring-4" : ""
              }`}
            >
              <option disabled>none</option>
              <option>Template 1 | Plombo</option>
              <option>Template 2 | News Today</option>
              <option>Template 3 | DA Exhib</option>
              <option>Template 4 | Reksata</option>
              <option>Template 5 | Star Camp</option>
            </select>
          </div>

          {/* @desc input nama domain */}
          <div className="form-control w-full sm:col-span-2 col-span-3">
            <label className="label">
              <span className="label-text">
                Masukkan nama domain yang ingin kalian buat
              </span>
            </label>
            <input
              type="text"
              id="domain"
              onChange={(e) => handleChange(e)}
              placeholder="ex: nullstudio.com"
              className={`input input-bordered w-full dark:bg-neutral-800 text-white border-none ${
                keyError === "domain" ? "ring-red-500 ring-4" : ""
              }`}
            />
            <label className="label">
              <span className="label-text">
                * Admin akan melakukan konfirmasi ulang, apabila nama domain
                yang diinginkan tidak tersedia.
              </span>
            </label>
          </div>

          <div className="sm:indicator-item indicator-bottom">
            <button
              onClick={() => handleSend(form)}
              type="button"
              className="btn bg-neutral-50 hover:bg-neutral-50 px-10"
            >
              Send
            </button>
          </div>
        </form>
        {keyError && (
          <div className="bg-red-400 max-w-fit px-3 py-[.1rem] mt-2 rounded-lg font-semibold">
            <p>Isi form pada bagian {keyError}</p>
          </div>
        )}
        {loading && <Loading />}
      </div>
    </div>
  );
};

export default FormReservasi;
