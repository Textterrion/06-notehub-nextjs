import css from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
        <div className={css.wrap}>
          <p>Developer: Textterrion</p>
          <p>
            Contact us:&ensp;
            <Link href="mailto:textterrion@gmail.com">
              textterrion@gmail.com
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

