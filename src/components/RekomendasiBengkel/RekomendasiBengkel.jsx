// import React from 'react'
import { Link } from "react-router-dom";

function RekomendasiBengkel() {
  return (
    <section className="rekomendasi mt-4">
      <h5 className="judul flex justify-center">
        <b>Rekomendasi bengkel</b>
      </h5>
      <p className="okee p-5">
        <b>Rekomendasi Mitra</b>
      </p>
      {/* rekomendasi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-5 overflow-x-auto">
        <div className="col-span-1 g-3 p-3">
          <div className="card">
            <img
              src="./assets/bengkel5.jpg"
              className="card-img-top"
              style={{ height: "200px", borderRadius: "16px 16px 0 0" }}
              alt="..."
            />
            <div className=" card-body">
              <p className="mt-3">⭐⭐⭐⭐⭐</p>
              <h5 className="card-title mt-3">
                <b>Aneka Motor</b>
              </h5>
              <p className="card-text">
                <ul>
                  <li>Aru Lubeg, Lubuk Begalung</li>
                  <li>09.00-17.00 WIB</li>
                  <li>08776653424</li>
                </ul>
              </p>
              <div className="content-end">
                <Link
                  to="/bengkel"
                  className="text-white px-5 py-2"
                  style={{ borderRadius: "20px", alignItems: "right", backgroundColor: "#172EFE" }}
                >
                  More Detail
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 g-3 p-3">
          <div className="card">
            <img
              src="./assets/bengkel5.jpg"
              className="card-img-top"
              style={{ height: "200px", borderRadius: "16px 16px 0 0" }}
              alt="..."
            />
            <div className=" card-body">
              <p className="mt-3">⭐⭐⭐⭐⭐</p>
              <h5 className="card-title mt-3">
                <b>Aneka Motor</b>
              </h5>
              <p className="card-text">
                <ul>
                  <li>Aru Lubeg, Lubuk Begalung</li>
                  <li>09.00-17.00 WIB</li>
                  <li>08776653424</li>
                </ul>
              </p>
              <div className="content-end">
                <Link
                  to="/bengkel"
                  className="text-white px-5 py-2"
                  style={{ borderRadius: "20px", alignItems: "right", backgroundColor: "#172EFE" }}
                >
                  More Detail
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 g-3 p-3">
          <div className="card">
            <img
              src="./assets/bengkel5.jpg"
              className="card-img-top"
              style={{ height: "200px", borderRadius: "16px 16px 0 0" }}
              alt="..."
            />
            <div className="card-body">
              <p className="mt-3">⭐⭐⭐⭐⭐</p>
              <h5 className="card-title mt-3">
                <b>Raka Motor</b>
              </h5>
              <p className="card-text">
                <ul>
                  <li>Marapalam, Padang Timur</li>
                  <li>10.00-17.00 WIB</li>
                  <li>082388540724</li>
                </ul>
              </p>
              <Link
                to="/bengkel"
                className="text-white px-5 py-2"
                style={{ borderRadius: "20px", alignItems: "right", backgroundColor: "#172EFE" }}
              >
                More Detail
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-1 g-3 p-3">
          <div className="card">
            <img
              src="./assets/bengkel5.jpg"
              className="card-img-top"
              style={{ height: "200px", borderRadius: "16px 16px 0 0" }}
              alt="..."
            />
            <div className="card-body">
              <p className="mt-3">⭐⭐⭐⭐⭐</p>
              <h5 className="card-title mt-3">
                <b>Baba Service</b>
              </h5>
              <p className="card-text">
                <ul>
                  <li>Aru Lubeg, Lubuk Begalung</li>
                  <li>09.00-17.00 WIB</li>
                  <li>08776653424</li>
                </ul>
              </p>
              <Link
                to="/bengkel"
                className="text-white px-5 py-2"
                style={{ borderRadius: "20px", alignItems: "right", backgroundColor: "#172EFE" }}
              >
                More Detail
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-1 g-3 p-3">
          <div className="card">
            <img
              src="./assets/bengkel1.jpeg"
              className="card-img-top"
              style={{ height: "200px", borderRadius: "16px 16px 0 0" }}
              alt="..."
            />
            <div className="card-body">
              <p className="mt-3">⭐⭐⭐⭐⭐</p>
              <h5 className="card-title mt-3">
                <b>Bengkel Jaya Motor </b>
              </h5>
              <p className="card-text">
                <ul>
                  <li>Parak Karakah, Padang Timur</li>
                  <li>07.00-18.00 WIB</li>
                  <li>08776653424</li>
                </ul>
              </p>
              <Link
                to="/bengkel"
                className="text-white px-5 py-2"
                style={{ borderRadius: "20px", alignItems: "right", backgroundColor: "#172EFE" }}
              >
                More Detail
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Mitra End */}
      <p className="okee p-5">
        <b>Bengkel Favorit</b>
      </p>
      {/* Bengkel Favorit */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-5">
        <div className="col-span-1 g-3 p-3">
          <div className="card">
            <img
              src="./assets/bengkel5.jpg"
              className="card-img-top"
              style={{ height: "200px", borderRadius: "16px 16px 0 0" }}
              alt="..."
            />
            <div className="card-body">
              <p className="mt-3">⭐⭐⭐⭐⭐</p>
              <h5 className="card-title mt-3">
                <b>Aneka Motor</b>
              </h5>

              <p className="card-text">
                <ul>
                  <li>Aru Lubeg, Lubuk Begalung</li>
                  <li>09.00-17.00 WIB</li>
                  <li>08776653424</li>
                </ul>
              </p>
              <Link
                to="/bengkel"
                className="text-white px-5 py-2"
                style={{ borderRadius: "20px", alignItems: "right", backgroundColor: "#172EFE" }}
              >
                More Detail
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RekomendasiBengkel;
