import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import MobileImage from "../../public/image-product-mobile.jpg";
import DesktopImage from "../../public/image-product-desktop.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Product-card</title>

        <meta name="Product-card" content="Product-card" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className="product">
          <div>
            <Image
              className="img1"
              src={MobileImage}
              height={400}
              width={400}
              alt="Desktop image"
            />
            <Image
              className="img2"
              src={DesktopImage}
              height={300}
              width={450}
              alt="Desktop image"
            />
          </div>

          <div className="product__content">
            <div className="flex start">
              <p className="product__category">Perfume</p>
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
                <span>$149.99</span>
              </p>
              <p className="product__original-price">
                <s>$169.99</s>
              </p>
            </div>
            <button className="button" data-icon="shopping-cart">
              Add to Cart
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
