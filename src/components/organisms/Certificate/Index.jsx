import React, { useState } from "react";
import TitleSection from "../../atom/TitleSection";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const Certificate = () => {
  const [certificates] = useState([
    "https://res.cloudinary.com/dg3vgxclp/image/upload/v1650254131/portfolio/sertificate_dicoding_page-0001_2_gs7y32.jpg",
    "https://res.cloudinary.com/dg3vgxclp/image/upload/v1650254235/portfolio/sertifikat_progate_page-0001_1_wwqqcn.jpg",
    "https://res.cloudinary.com/dg3vgxclp/image/upload/v1650262358/portfolio/02114745121-12_Regi_Rianto_Suyono_page-0001_1_jsmuul.jpg",
  ]);
  return (
    <div className="my-20">
      <TitleSection title="Certificate" />
      <div className="flex md:flex-row flex-col justify-center w-full gap-11 p-6 ">
        {certificates.map((certificate, i) => (
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            key={certificate}
          >
            <a href={certificate} data-aos="fade-down">
              <img
                src={certificate}
                alt="Certificate"
                className="md:w-[450px] w-full shadow-xl"
                data-aos="flip-up"
                data-aos-delay={20 * (i + 1 * 50)}
                data-aos-duration={400 * (i + 1)}
                data-aos-easing="linear"
              />
            </a>
          </LightGallery>
        ))}
      </div>
    </div>
  );
};

export default Certificate;
