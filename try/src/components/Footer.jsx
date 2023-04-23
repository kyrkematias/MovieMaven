import React from "react";
import styles from "../assets/styles/footer.module.css";

const Footer = () => {
  return (
    <div>
      <div className={styles.footerContainer}>
        <div className={styles.footerDesc}>
          <p>
            Creado y desarrollado por <strong>Martín Matías</strong> - Todos los
            derechos reservados
          </p>
        </div>

        <div className={styles.socialContainer}>
          <a href="" className={styles.socials}>
            <i className="fa-brands fa-square-facebook" />
          </a>
          <a href="" className={styles.socials}>
            <i className="fa-brands fa-linkedin" />
          </a>
          <a href="" className={styles.socials}>
            <i className="fa-brands fa-square-github" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
