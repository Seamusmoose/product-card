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
        
      </Head>
      <main className="base flex center">
        <article className="product flex">
          <Image
            className="product__img"
            src={DesktopImage}
            height={450}
            width={300}
            alt="Desktop image"
          />

          <div className="product__content flex col center pad-32">
            <div className="flex start">
              <p className="product__category">
                <h2>Perfume</h2>
              </p>
            </div>
            <h1 className="product__title">
              Gabrielle Essence Eau De Parfum A floral
            </h1>
            <p>
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL
            </p>
            <div className="flex-group flex gap center">
              <p className="product__price">
                <h3>$149.99</h3>
              </p>
              <p className="product__original-price">$169.99</p>
            </div>
            <button className="button">
              <span className="cart">Add to Cart</span>
            </button>
          </div>
        </article>
      </main>
    </>
  );
}
