
import Image from "next/image";
import HeroImage from "../../../public/images/HeroImage.png";

export default function HeroSection() {
  return (
    <section className="flex items-center">
      <div className="grid w-full max-w-7xl items-center gap-12 md:grid-cols-2">

        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-purple sm:text-5xl lg:text-6xl">
            Welcome to Farié
          </h1>
          <p className="mt-4 text-lg text-purple sm:text-xl lg:text-2xl">
            Discover the beauty of nature with our handcrafted products.
          </p>
          <a
            href="#"
            className="mt-6 inline-block rounded bg-[#793C96] px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-plum"
          >
            Shop Now
          </a>
        </div>

        <div className="flex justify-center md:justify-end">
          <Image
            src={HeroImage}
            alt="Hero Image"
            width={500}
            height={500}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}

