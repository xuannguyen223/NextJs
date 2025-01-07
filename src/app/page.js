import Image from "next/image";
import HeaderHome from "./(pages)/component/HeaderHome";
import { getAllProducts } from "./(pages)/action/productServices";
import Link from "next/link";

export default async function Home() {
  const arrProduct = await getAllProducts("");
  console.log("arrProduct: ", arrProduct);

  // hình default sẽ hiển thị khi image từ api bị lỗi
  const placeholderImgage = "https://i.pravatar.cc?u=0";

  const isValidImageUrl = (imageUrl) => {
    return (
      (imageUrl.startsWith("https://") && imageUrl.endsWith(".png")) ||
      imageUrl.endsWith(".jpg")
    );
  };

  return (
    <>
      {/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-indigo-400 text-3xl">
          Hello World! <i className="fab fa-apple"></i>{" "}
        </h1>
        co the Config them trong next.config.js
        <Image
          src={"https://apistore.cybersoft.edu.vn/images/vans-black-black.png"}
          width={300}
          height={300}
          alt=""
          crossOrigin="anonymous"
        />
      </div> */}
      {/* <div><HeaderHome /></div> */}
      <h1 className="text-center text-2xl text-indigo-400 py-8 font-semibold">
        SHOE SHOP
      </h1>
      <div className="grid grid-cols-3 gap-3">
        {arrProduct.map((item) => {
          const imageUrl = item.image.trimEnd(); // xóa khoảng trắng của url

          /* kiểm tra url của image có hợp lệ không */
          const isValidURL = isValidImageUrl(imageUrl);

          return (
            <div key={item.id} className="border border-gray-500">
              <Image
                src={isValidURL ? imageUrl : placeholderImgage}
                width={300}
                height={300}
                alt={item.name}
                crossOrigin="anonymous"
                // onError={} // khi dung phai dung vs use client, chi dung khi ko can toi uu SEO => neu can => xu ly tay
              />
              <p className="text-center capitalize font-bold py-2">
                {item.name}
              </p>
              <Link
                className="bg-orange-200 text-center py-3 block"
                href={`detail/${item.id}`}
              >
                See Detail
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

// Cach 2: sua lai ham Home de dung async await
// const Home = async () => {}
// export default Home
