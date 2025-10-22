"use client";

import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";

const categories = ["All", "2024"];

const gallery24Images = [
  { src: "/playerBoysImg.jpeg", alt: "Boys team celebrating goal" },
  { src: "/playerGirlsImg.jpeg", alt: "Girls team in action" },
  { src: "/playerBoysImg.jpeg", alt: "Boys team celebrating goal" },
  { src: "/playerGirlsImg.jpeg", alt: "Girls team in action" },
  { src: "/playerBoysImg.jpeg", alt: "Boys team celebrating goal" },
  { src: "/playerGirlsImg.jpeg", alt: "Girls team in action" },
  { src: "/playerBoysImg.jpeg", alt: "Boys team celebrating goal" },
  { src: "/playerGirlsImg.jpeg", alt: "Girls team in action" },
  { src: "/playerBoysImg.jpeg", alt: "Boys team celebrating goal" },
  { src: "/playerGirlsImg.jpeg", alt: "Girls team in action" },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages =
    selectedCategory === "All" ? gallery24Images : gallery24Images;

  return (
    <main className="min-h-screen bg-[#0B1E4A]/95">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("/gallery-hero.jpeg")` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1E4A]/95 via-[#0B1E4A]/80 to-[#0B1E4A]/60" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Media Gallery
            </h1>
            <p className="text-lg md:text-xl text-[#F58220] max-w-2xl mx-auto">
              Relive the exciting moments from Moi Cup 2024
            </p>
          </div>
        </div>
      </section>

      {/* Category Selector */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="min-w-[100px]"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    fill
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No images found in this category
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Gallery;
