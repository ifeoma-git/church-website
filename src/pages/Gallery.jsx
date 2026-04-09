import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Import gallery images
import choir1 from "../assets/gallery/choir_members_gallery6.jpg";
import choir2 from "../assets/gallery/choir_members2_gallery6.jpg";
import church1 from "../assets/gallery/church_members_gallery6.jpg";
import church2 from "../assets/gallery/church_members2_gallery6.jpg";
import prayer1 from "../assets/gallery/prayers1_gallery4.jpg";
import prayer2 from "../assets/gallery/prayers2_gallery4.jpg";
import prayer3 from "../assets/gallery/prayers3_gallery4.jpg";
import ristoRetirement from "../assets/gallery/revd_risto_retirement_gallery1.jpg";
import tuomasSendforth1 from "../assets/gallery/revd_tuomas_sendforth1_gallery1.jpg";
import tuomasSendforth3 from "../assets/gallery/revd_tuomas_sendforth3_gallery1.jpg";
import springPicnic from "../assets/gallery/spring_picnic_gallery5.jpg";
import xmasParty from "../assets/gallery/xmas_party_gallery5.jpg";

// Image data with captions
const images = [
  { src: choir1, title: "Choir Members" },
  { src: choir2, title: "Choir Members" },
  { src: church1, title: "Church Members" },
  { src: church2, title: "Church Members" },
  { src: prayer1, title: "Prayer Session" },
  { src: prayer2, title: "Prayer Session" },
  { src: prayer3, title: "Prayer Session" },
  { src: ristoRetirement, title: "Rev. Risto Retirement" },
  { src: tuomasSendforth1, title: "Rev. Tuomas Sendforth" },
  { src: tuomasSendforth3, title: "Rev. Tuomas Sendforth" },
  { src: springPicnic, title: "Spring Picnic" },
  { src: xmasParty, title: "Christmas Party" },
];

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* Page Title */}
      <h2 className="text-3xl font-bold text-blue-800 text-center mb-8">
        Photo Gallery
      </h2>

      {/* Responsive Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image, i) => (
          <div key={i} className="text-center">
            <img
              src={image.src}
              alt={image.title}
              loading="lazy"
              className="w-full h-64 object-cover rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition duration-300"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            />
            {/* Caption */}
            <p className="mt-2 text-gray-700 font-medium">{image.title}</p>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images}
        carousel={{ finite: false }}
      />
    </div>
  );
};

export default Gallery;