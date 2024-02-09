import styles from "@/styles/gallery.module.scss";
import Link from "next/link";
import { useState, useEffect } from 'react';

export default function Gallery() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('gallery')) {
      setGallery(JSON.parse(localStorage.getItem('gallery') || ''))
    }
  }, []);

  const clearLocalStorage = () => {
    localStorage.removeItem('gallery');
    setGallery([]);
  };

  return (
    <div className={styles.Gallery}>
      <nav className={styles.navGal}>
        <h1 className={styles.textGal}>Your images</h1>
      </nav>
      <div className={styles.galleryGal}>
      {gallery.map(picture =>(
        <img className={styles.imgGal} src={picture} alt={picture} key={picture} />
      ))}
      <button className={styles.btnGal} onClick={clearLocalStorage}>Clear Gallery</button>
      </div>
      <footer className={styles.footerGal}>
           <Link className={styles.FootBtn1Gal} href="/">Homepage</Link>
           <Link className={styles.FootBtn2Gal} href="generate">Generate</Link>
        </footer>
    </div>
  )
};