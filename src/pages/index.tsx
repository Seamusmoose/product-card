import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import DesktopImage from "../../public/image-product-desktop.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Product-card</title>
        <meta name="Product-card" content="Product-card" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="base flex center">
        <div className="container flex">
          <div>
            <Image
              src={DesktopImage}
              height={450}
              width={300}
              alt="Desktop image"
            />
          </div>
          <div className="flex col center pad-32">
            <div className="flex start">
              <h2>Perfume</h2>
            </div>
            <h1>Gabrielle Essence Eau De Parfum A floral</h1>
            <p>
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL
            </p>
            <div className="flex gap center">
              <h3>$149.99</h3>
              <h4>$169.99</h4>
            </div>
            <button className="button">
              <span className="cart">Add to Cart</span>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
