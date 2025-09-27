import React, { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, MapPin, Calendar } from "lucide-react";

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null); // index in displayedImages
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [showAll, setShowAll] = useState<boolean>(false);

  const categories = [
    { key: "all", label: "All Images" },
    { key: "3D", label: "3D Designs" },
    { key: "bedroom", label: "Bed Room" },
    { key: "livingroom", label: "Living Room" },
    { key: "kitchen", label: "Kitchen" },
  ];

  // master images array (combine every group); ensure unique ids and correct category keys
  const allImages = [
    // regular galleryImages
    { id: 1, src: "https://vishwaswamiinteriors.com/1", category: "bedroom", title: "Cozy Bedroom", location: "Pune", date: "2024-05-01" },
    { id: 2, src: "https://vishwaswamiinteriors.com/2", category: "commercial", title: "Office Fitout", location: "Mumbai", date: "2024-06-12" },
    { id: 3, src: "https://vishwaswamiinteriors.com/3", category: "bedroom", title: "Minimal Bedroom", location: "Pune", date: "2024-07-02" },
    { id: 4, src: "https://vishwaswamiinteriors.com/4", category: "residential", title: "Residential Project", location: "Nashik", date: "2024-03-20" },
    { id: 5, src: "https://vishwaswamiinteriors.com/5", category: "commercial", title: "Retail Interior", location: "Mumbai", date: "2023-12-10" },
    { id: 6, src: "https://vishwaswamiinteriors.com/6", category: "farmhouse", title: "Farmhouse Design", location: "Lonavla", date: "2024-02-15" },
    { id: 7, src: "https://vishwaswamiinteriors.com/7", category: "amenities", title: "Gym Area", location: "Pune", date: "2024-01-09" },
    { id: 8, src: "https://vishwaswamiinteriors.com/8", category: "amenities", title: "Club House", location: "Pune", date: "2024-01-10" },
    { id: 9, src: "https://vishwaswamiinteriors.com/9", category: "construction", title: "Construction Phase", location: "Mumbai", date: "2023-11-05" },
    { id: 10, src: "https://vishwaswamiinteriors.com/10", category: "construction", title: "Site Work", location: "Mumbai", date: "2023-11-06" },
    { id: 11, src: "https://vishwaswamiinteriors.com/11", category: "amenities", title: "Pool Area", location: "Pune", date: "2024-04-03" },
    { id: 12, src: "https://vishwaswamiinteriors.com/12", category: "residential", title: "Residence", location: "Nashik", date: "2024-03-21" },

    // 3D images
    { id: 13, src: "https://vishwaswamiinteriors.com/23", category: "3D", title: "3D Living Concept", location: "Concept", date: "2024-08-01" },
    { id: 14, src: "https://vishwaswamiinteriors.com/28", category: "3D", title: "3D Kitchen Render", location: "Concept", date: "2024-08-02" },
    { id: 15, src: "https://vishwaswamiinteriors.com/25", category: "3D", title: "3D Bedroom Render", location: "Concept", date: "2024-08-03" },
    { id: 16, src: "https://vishwaswamiinteriors.com/29", category: "3D", title: "3D Exterior", location: "Concept", date: "2024-08-04" },
    { id: 17, src: "https://vishwaswamiinteriors.com/30", category: "3D", title: "3D Study Render", location: "Concept", date: "2024-08-05" },

    // bedroom-specific (example images — replace URLs/titles as needed)
    { id: 18, src: "https://vishwaswamiinteriors.com/31", category: "bedroom", title: "Master Bedroom", location: "Pune", date: "2024-09-01" },
    { id: 19, src: "https://vishwaswamiinteriors.com/32", category: "bedroom", title: "Kids Bedroom", location: "Pune", date: "2024-09-02" },

    // living room-specific
    { id: 20, src: "https://vishwaswamiinteriors.com/33", category: "livingroom", title: "Spacious Living", location: "Mumbai", date: "2024-09-03" },
    { id: 21, src: "https://vishwaswamiinteriors.com/34", category: "livingroom", title: "Contemporary Living", location: "Mumbai", date: "2024-09-04" },

    // kitchen-specific
    { id: 22, src: "https://vishwaswamiinteriors.com/35", category: "kitchen", title: "Modular Kitchen", location: "Pune", date: "2024-09-05" },
    { id: 23, src: "https://vishwaswamiinteriors.com/36", category: "kitchen", title: "Open Kitchen", location: "Pune", date: "2024-09-06" },
  ];

  // filter depending on activeCategory
  const filteredImages = allImages.filter(
    (img) => activeCategory === "all" || img.category === activeCategory
  );

  // show only first 8 unless showAll is true
  const visibleCount = 8;
  const displayedImages = showAll ? filteredImages : filteredImages.slice(0, visibleCount);

  // clear selection when category changes
  useEffect(() => {
    setSelectedImage(null);
    setShowAll(false); // reset showAll when switching category
  }, [activeCategory]);

  // if lightbox is open while we switch to a smaller slice, ensure index is valid
  useEffect(() => {
    if (selectedImage !== null && selectedImage >= displayedImages.length) {
      setSelectedImage(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayedImages.length]);

  const openLightbox = (index: number) => {
    // index is the index in displayedImages
    setSelectedImage(index);
  };
  const closeLightbox = () => setSelectedImage(null);

  const nextImage = () => {
    if (selectedImage === null || displayedImages.length === 0) return;
    setSelectedImage((selectedImage + 1) % displayedImages.length);
  };

  const prevImage = () => {
    if (selectedImage === null || displayedImages.length === 0) return;
    setSelectedImage(
      selectedImage === 0 ? displayedImages.length - 1 : selectedImage - 1
    );
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section>
        <div id="project" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">Featured Works</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">Projects You May Love</h1>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-semibold transition-all duration-300 rounded-md ${
                  activeCategory === category.key
                    ? "bg-[#004B55] text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
                }`}
                aria-pressed={activeCategory === category.key}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredImages.length === 0 ? (
            <p className="text-center text-gray-500">No images found for this category.</p>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {displayedImages.map((image, index) => (
                  <div
                    key={image.id}
                    className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={image.src}
                      alt={image.title ?? `Project ${image.id}`}
                      className="w-full h-48 sm:h-56 md:h-64 lg:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <h3 className="font-semibold text-sm md:text-base truncate">{image.title}</h3>
                        <p className="text-xs flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {image.location}
                        </p>
                        <p className="text-xs flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {image.date}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Show more / Show less */}
              {filteredImages.length > visibleCount && (
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={() => setShowAll((prev) => !prev)}
                    className="px-6 py-3 bg-[#004B55] text-white rounded-md shadow hover:bg-[#00393d] transition-colors"
                    aria-expanded={showAll}
                  >
                    {showAll ? "Show Less" : `Show All Images (${filteredImages.length})`}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && displayedImages.length > 0 && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full w-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <img
              src={displayedImages[selectedImage].src}
              alt={displayedImages[selectedImage].title ?? `Project ${displayedImages[selectedImage].id}`}
              className="mx-auto max-w-full max-h-[80vh] object-contain rounded-lg"
            />

            <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
              <h3 className="font-bold text-lg md:text-xl mb-1 truncate">{displayedImages[selectedImage].title}</h3>
              <p className="flex items-center mb-1 text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                {displayedImages[selectedImage].location}
              </p>
              <p className="flex items-center text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                {displayedImages[selectedImage].date}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
