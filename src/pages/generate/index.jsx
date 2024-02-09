import OpenAI from "openai"
import styles from "@/styles/Generate.module.scss";
import Link from "next/link";
import { useState } from "react";

export default function Generate() {
    const openai = new OpenAI({ apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY, dangerouslyAllowBrowser: true })
    const [userImage, setUserImage] = useState("")
    const [inputValue, setInputValue] = useState("")

    const onHandleDalle2 = async (e) => {
        e.preventDefault();
      
    const image = await openai.images.generate({ model: 'dall-e-2', prompt: inputValue, size: '1024x1024' })
      
    setUserImage(image.data[0].url)
    }
      
    const onHandleInputValue = (e) => setInputValue(e.target.value)


    const onHandleClick = () => {
      const localGallery = localStorage.getItem('gallery');

      const updateGallery = localGallery ? JSON.parse(localGallery) : [];

      localStorage.setItem('gallery', JSON.stringify([...updateGallery, userImage]));
    }
      

    return (
       <div className={styles.Generate}>
        <nav className={styles.GenNav}>
            <h1 className={styles.TextNav}>Generate image</h1>
            <img className={styles.GenIcon} width="50" height="50" 
            src="https://img.icons8.com/nolan/64/settings--v1.png" 
            alt="settings--v1"/>
        </nav>
        <form className={styles.Form} onSubmit={onHandleDalle2}>
         {
           userImage ? <img className={styles.FormImage} src={userImage} alt={inputValue} />
            : <img className={styles.FormPic} src={"/image/ai-image2.jpg"} alt="futuristic2" />
         }
          <ul className={styles.FormList}>
            <li className={styles.FBtn1}>
              <img width="35" height="35" src="https://img.icons8.com/nolan/64/export.png" alt="export"/> 
              <button className={styles.Btn1}>Export</button>
            </li>
            <li className={styles.FBtn2}>
              <img width="35" height="35" src="https://img.icons8.com/nolan/64/save.png" alt="save"/>
              <button className={styles.Btn2} onClick={onHandleClick}>Save in Gallery</button>
            </li>
            <li className={styles.FBtn3}>
              <img width="35" height="35" src="https://img.icons8.com/nolan/64/share.png" alt="share"/>
              <button className={styles.Btn3}>Share</button>
            </li>
          </ul>
          <input className={styles.FormText} type="text" value={inputValue} onChange={onHandleInputValue} />
          <input className={styles.FormGen} type="submit" value="Generate" />
        </form>
        <footer className={styles.Footer}>
           <Link className={styles.FootBtn1} href="/">Homepage</Link>
           <Link className={styles.FootBtn2} href="gallery">Gallery</Link>
        </footer>
       </div> 
    );
};