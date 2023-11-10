import React from "react";

export default function Question() {
  return (
    <>
      <div className="row card-question">
        <div className="col">
          <div className="row">
            <h2 className="pertanyaan">Pertanyaan</h2>
          </div>
          <div className="row">
            <div className="col">
              <h3>Mendatar</h3>
              <ul>
                <li>1. Penyanyi Lagu Love Story</li>
                <li>2. Hewan Ciri Khas Australia</li>
                <li>3. Ibu Kota Jawa Barat</li>
                <li>4. Letak Klub Manchester United</li>
              </ul>
            </div>
            <div className="col">
              <h3>Menurun</h3>
              <ul>
                <li>5. Ibu Kota Australia</li>
                <li>6. Penggemar Taylor Swift </li>
                <li>7. Oleh - Oleh Khas Kota Cianjur </li>
                <li>8. Bahasa Inggris "Sekarang" </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
