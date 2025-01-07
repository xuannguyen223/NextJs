import React from "react";
import { getAllProducts } from "../action/productServices";
import Link from "next/link";

// render metaData
export const metadata = {
  title: "Shoe Shop | Home",
  description:
    "Welcome to Shoe Shop! The best place to buy high-quality shoes online.",
  keywords: ["shoes", "shoe shop", "online shopping", "footwear"],
  openGraph: {
    title: "Shoe Shop",
    description:
      "Browse our latest collection of shoes. Trendy, comfortable, and affordable!",
    url: "https://next-js-rho-gray.vercel.app/",
    images: [
      {
        url: "https://apistore.cybersoft.edu.vn/images/van-old-school.png",
        width: 800,
        height: 600,
        alt: "Shoe Shop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shoe Shop",
    description: "Find the perfect pair of shoes for any occasion.",
    images: ["https://yourwebsite.com/twitter-image.jpg"],
  },
  jsonLD: {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Shoe Shop",
    url: "https://yourwebsite.com",
    description:
      "Welcome to Shoe Shop! The best place to buy high-quality shoes online.",
    image: "https://yourwebsite.com/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Shoe Street",
      addressLocality: "Shoe City",
      addressRegion: "SC",
      postalCode: "12345",
      addressCountry: "US",
    },
    telephone: "+1-800-555-5555",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "10:00",
        closes: "16:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/shoeshop",
      "https://www.instagram.com/shoeshop",
      "https://twitter.com/shoeshop",
    ],
  },
};

const page = async (props) => {
  const keyword = props.searchParams.keyword || "";
  const res = await getAllProducts(keyword);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {res.map((item) => {
            return (
              <Link href={`/detail/${item.id}`} className="group">
                <img src={item.image} />
                <h3 className="mt-4 text-sm text-gray-700">{item.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  ${item.price}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
