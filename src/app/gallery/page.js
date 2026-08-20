import Link from "next/link";

const galleryMedia = [
  {
    src: "/assets/image/gallery/gallery-1.jpeg",
    alt: "CropGen agriculture",
    type: "image"
  },
  {
    src: "/assets/image/gallery/gallery-2.jpeg",
    alt: "Smart farming",
    type: "image"
  },
  {
    src: "/assets/image/gallery/gallery-3.jpeg",
    alt: "Crop monitoring",
    type: "image"
  },
  {
    src: "/assets/image/gallery/gallery-4.jpeg",
    alt: "Agricultural field",
    type: "image"
  },
  {
    src: "/assets/image/gallery/gallery-5.jpeg",
    alt: "Precision agriculture",
    type: "image"
  },
  {
    src: "/assets/image/gallery/gallery-6.jpeg",
    alt: "Farm analytics",
    type: "image"
  },
  {
    src: "/assets/image/gallery/gallery-7.jpeg",
    alt: "Sustainable agriculture",
    type: "image"
  },
  {
    src: "/assets/image/gallery/gallery-8.jpeg",
    alt: "CropGen technology",
    type: "image"
  },
  {
    src: "/assets/image/gallery/gallery-9.mp4",
    alt: "Smart farming technology",
    type: "video"
  },
  {
    src: "/assets/image/gallery/gallery-10.jpeg",
    alt: "Agricultural landscape",
    type: "image"
  },
  {
    src: "/assets/image/gallery/gallery-11.jpeg",
    alt: "CropGen agriculture",
    type: "image"
  },
  {
    src: "/assets/image/gallery/gallery-12.jpeg",
    alt: "Smart farming",
    type: "image"
  },
  {
    src: "/assets/image/gallery/gallery-13.mp4",
    alt: "Crop monitoring",
    type: "video"
  },
  {
    src: "/assets/image/gallery/gallery-14.jpeg",
    alt: "Agricultural field",
    type: "image"
  },
  {
    src: "/assets/image/gallery/gallery-15.jpeg",
    alt: "Precision agriculture",
    type: "image"
  },
  {
    src: "/assets/image/gallery/gallery-16.jpeg",
    alt: "Farm analytics",
    type: "image"
  },
  {
    src: "/assets/image/gallery/gallery-17.jpeg",
    alt: "Sustainable agriculture",
    type: "image"
  },
  {
    src: "/assets/image/gallery/gallery-18.jpeg",
    alt: "CropGen technology",
    type: "image"
  },
  {
    src: "/assets/image/gallery/gallery-19.jpeg",
    alt: "Smart farming technology",
    type: "image"
  },
  {
    src: "/assets/image/gallery/gallery-20.mp4",
    alt: "Agricultural landscape",
    type: "video"
  },
  {
    src: "/assets/image/gallery/gallery-21.jpeg",
    alt: "CropGen agriculture",
    type: "image"
  },
  {
    src: "/assets/image/gallery/gallery-22.jpeg",
    alt: "Smart farming",
    type: "image"
  },
  {
    src: "/assets/image/gallery/gallery-23.jpeg",
    alt: "Crop monitoring",
    type: "image"
  },
  {
    src: "/assets/image/gallery/gallery-24.jpeg",
    alt: "Agricultural field",
    type: "image"
  },
  {
    src: "/assets/image/gallery/gallery-25.jpeg",
    alt: "Precision agriculture",
    type: "image"
  },
  {
    src: "/assets/image/gallery/gallery-26.jpeg",
    alt: "Farm analytics",
    type: "image"
  },
  {
    src: "/assets/image/gallery/gallery-27.jpeg",
    alt: "Sustainable agriculture",
    type: "image"
  },
  {
    src: "/assets/image/gallery/gallery-28.jpeg",
    alt: "CropGen technology",
    type: "image"
  },
  {
    src: "/assets/image/gallery/gallery-29.jpeg",
    alt: "Smart farming technology",
    type: "image"
  },
  {
    src: "/assets/image/gallery/gallery-30.jpeg",
    alt: "Agricultural landscape",
    type: "image"
  },
  {
    src: "/assets/image/gallery/gallery-31.jpeg",
    alt: "CropGen agriculture",
    type: "image"
  },
  {
    src: "/assets/image/gallery/gallery-32.jpeg",
    alt: "Smart farming",
    type: "image"
  },
  {
    src: "/assets/image/gallery/gallery-33.jpeg",
    alt: "Crop monitoring",
    type: "image"
  },
  {
    src: "/assets/image/gallery/gallery-34.jpeg",
    alt: "Agricultural field",
    type: "image"
  },
  {
    src: "/assets/image/gallery/gallery-35.jpeg",
    alt: "Precision agriculture",
    type: "image"
  },
  {
    src: "/assets/image/gallery/gallery-36.jpeg",
    alt: "Farm analytics",
    type: "image"
  },
  {
    src: "/assets/image/gallery/gallery-37.jpeg",
    alt: "Farm analytics",
    type: "image"
  },
  {
    src: "/assets/image/gallery/gallery-38.jpeg",
    alt: "Farm analytics",
    type: "image"
  }
];

export default function GalleryPage() {
  return (
    <main className="gallery-page">

      {/* =================================
          HERO
      ================================= */}

      <section className="gallery-hero">

        <div className="gallery-hero-overlay"></div>

        <div className="gallery-hero-content">

          <div className="gallery-hero-outline">
            CropGen
          </div>

          <h1>
            CropGen
            <br />
            Gallery
          </h1>

          <p>
            Explore moments from smart farming,
            <br className="gallery-desktop-break" />
            crop monitoring and agricultural innovation.
          </p>

        </div>

      </section>


      {/* =================================
          BREADCRUMB
      ================================= */}

      <div className="gallery-container">

        <div className="gallery-breadcrumb">

          <Link href="/">
            Home
          </Link>

          <span>›</span>

          <span>Gallery</span>

        </div>


        {/* =================================
            GALLERY HEADER
        ================================= */}

        <section className="gallery-heading">

          <h2>Explore Our Gallery</h2>

          <div className="gallery-heading-line"></div>

          <p>
            A visual collection of CropGen&apos;s journey,
            technology and the future of agriculture.
          </p>

        </section>


        {/* =================================
            MASONRY GALLERY
        ================================= */}

        <section className="gallery-grid">

          {galleryMedia.map((media, index) => {

            // Automatically detect video files
            const isVideo = media.src.toLowerCase().endsWith(".mp4");

            return (
              <div
                className={`gallery-item ${
                  isVideo ? "gallery-video-item" : ""
                }`}
                key={media.src}
              >

                {isVideo ? (
                  <video
                    src={media.src}
                    controls
                    preload="metadata"
                    playsInline
                  />
                ) : (
                  <img
                    src={media.src}
                    alt={media.alt}
                    loading={index < 4 ? "eager" : "lazy"}
                  />
                )}

                {/* Overlay */}
                <div className="gallery-image-overlay">
                  <span>
                    {isVideo ? "▶ CropGen Video" : "CropGen"}
                  </span>
                </div>

              </div>
            );
          })}

        </section>

      </div>

    </main>
  );
}