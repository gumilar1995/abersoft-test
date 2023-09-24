import Image from "next/image";
import style from "./style.module.css";

export default function FooterSection() {
  return (
    <footer className={style.container}>
      <div className={style.details}>
        <div className={style.detail}>
          <h6 className="font-bold text-lg">Our Services</h6>
          <p>App Development</p>
          <p>Websites</p>
          <p>UI/UX Design</p>
          <p>Ongoing Consultation</p>
        </div>
        <div className={style.detail}>
          <h6 className="font-bold text-lg">Documents</h6>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className={style.detail}>
          <h6 className="font-bold text-lg">Inhouse</h6>
          <p>Haunted House AR</p>
          <p>Abersoft Blog</p>
          <p>Work with us</p>
        </div>
        <div className={style.detail}>
          <h6 className="font-bold text-lg">Address</h6>
          <p>Kometvägen 3 183 33 TÄBY Stockholm, Sweden</p>
          <p>Kampung Yadika Regency Blok H Nomer 4 Pasuruan, Indonesia</p>
        </div>
      </div>
      <div className={style.logo}>
        <Image
          src="/images/logo.png"
          alt="footer-logo"
          priority
          fill
          sizes="100%"
        />
      </div>
    </footer>
  );
}
