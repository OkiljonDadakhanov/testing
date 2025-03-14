"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Calendar, ImageIcon, X } from "lucide-react";
import Image from "next/image";

// Gallery image type
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  year: string;
  category: string;
  description: string;
}

// Sample gallery data
const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/images/gallery/opening2.jpg",
    alt: "Opening Ceremony 2023",
    year: "2023",
    category: "Ceremonies",
    description:
      "A grand outdoor event with an elegant setup around a central water feature, attended by participants from 45 countries under a beautifully lit evening sky",
  },
  {
    id: 2,
    src: "/images/gallery/last.JPG",
    alt: "Engaged Audience",
    year: "2023",
    category: "Competition",
    description:
      "Participants, dressed in traditional and formal attire, eagerly watching the event, clapping, and showing enthusiasm for the performances and speeches.",
  },
  {
    id: 3,
    src: "/images/gallery/national.JPG",
    alt: "Cultural Performance by Young Musicians",
    year: "2023",
    category: "Ceremonies",
    description: " A group of students in formal school uniforms playing traditional instruments, showcasing their musical skills in a well-lit indoor setting.",
  },
  {
    id: 4,
    src: "/images/gallery/national2.jpg",
    alt: "Theatrical Folk Dance",
    year: "2023",
    category: "Cultural",
    description: "Performers dressed in historical and cultural outfits reenacting a traditional dance on stage, accompanied by live music and an artistic backdrop.",
  },
  {
    id: 5,
    src: "/images/gallery/closing22.JPG",
    alt: "Joyful Celebration",
    year: "2023",
    category: "Teams",
    description: "A lively nighttime scene where children and adults join hands in a celebratory dance, moving in unison under the open sky, embracing the festive spirit.",
  },
  {
    id: 6,
    src: "/images/gallery/organization.JPG",
    alt: "Official Speech & International Representation",
    year: "2023",
    category: "Organization",
    description: "A distinguished speaker addresses the audience from a podium adorned with an official emblem, symbolizing leadership and unity. Behind him, an interpreter stands ready, emphasizing the event’s global reach. Flags from multiple countries, held by participants in formal attire, highlight the diversity and international collaboration within the organization.",
  },
 
];

// Available years and categories for filtering
const years = ["All", "2023"];
const categories = [
  "All",
  "Ceremonies",
  "Competition",
  "Cultural",
  "Teams",
  "Organization",
];

export default function GalleryPage() {
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Filter images based on selected year and category
  const filteredImages = galleryImages.filter(
    (image) =>
      (selectedYear === "All" || image.year === selectedYear) &&
      (selectedCategory === "All" || image.category === selectedCategory)
  );

  return (
    <section className="relative w-full bg-gradient-to-b from-[#011c2c] to-[#012e40]">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 -translate-x-1/2 translate-y-1/2 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="absolute right-0 bottom-0 translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 py-20 sm:px-6 lg:px-8">
        {/* Gallery Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-emerald-500/20 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20"
          >
            Photo Gallery
          </Badge>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            ARBIChO Gallery
          </h1>
          <p className="mt-6 text-lg leading-8 text-emerald-100/80">
            Explore moments from past ARBIChO events, capturing the spirit of
            international collaboration and scientific excellence
          </p>
        </div>

        {/* Filters */}
        <div className="mx-auto max-w-6xl mb-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-emerald-400" />
              <h2 className="text-xl font-semibold text-white">
                Filter by Year
              </h2>
            </div>
            <Tabs defaultValue="All" className="w-full sm:w-auto">
              <TabsList className="bg-emerald-900/30 border border-emerald-800/20">
                {years.map((year) => (
                  <TabsTrigger
                    key={year}
                    value={year}
                    onClick={() => setSelectedYear(year)}
                    className="data-[state=active]:bg-emerald-500 data-[state=active]:text-emerald-950"
                  >
                    {year}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between mt-8">
            <div className="flex items-center gap-3">
              <ImageIcon className="h-5 w-5 text-emerald-400" />
              <h2 className="text-xl font-semibold text-white">
                Filter by Category
              </h2>
            </div>
            <Tabs defaultValue="All" className="w-full sm:w-auto">
              <TabsList className="bg-emerald-900/30 border border-emerald-800/20 flex flex-wrap h-auto">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    onClick={() => setSelectedCategory(category)}
                    className="data-[state=active]:bg-emerald-500 data-[state=active]:text-emerald-950"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mx-auto max-w-6xl">
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image) => (
                <Card
                  key={image.id}
                  className="group relative border-emerald-800/20 bg-emerald-900/10 backdrop-blur overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white font-medium">{image.alt}</p>
                      <p className="text-emerald-100/80 text-sm">
                        {image.year}
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-emerald-500/10 group-hover:ring-emerald-500/30 transition-all duration-300" />
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-emerald-100/80 text-lg">
                No images found matching your filters.
              </p>
              <Button
                variant="outline"
                className="mt-4 border-emerald-400/50 text-emerald-100 hover:bg-emerald-950/50 hover:text-emerald-50"
                onClick={() => {
                  setSelectedYear("All");
                  setSelectedCategory("All");
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>

        {/* Image Viewer Dialog */}
        <Dialog
          open={!!selectedImage}
          onOpenChange={(open) => !open && setSelectedImage(null)}
        >
          <DialogContent className="max-w-4xl bg-emerald-950/95 border-emerald-800/20 text-emerald-100">
            <DialogHeader>
              <DialogTitle className="text-emerald-100">
                {selectedImage?.alt}
              </DialogTitle>
              <DialogDescription className="text-emerald-100/70">
                {selectedImage?.year} | {selectedImage?.category}
              </DialogDescription>
            </DialogHeader>
            <div className="relative aspect-video w-full overflow-hidden rounded-md">
              {selectedImage && (
                <Image
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
              )}
            </div>
            <p className="text-emerald-100/80">{selectedImage?.description}</p>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4 text-emerald-100/70 hover:text-emerald-100 hover:bg-emerald-900/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
