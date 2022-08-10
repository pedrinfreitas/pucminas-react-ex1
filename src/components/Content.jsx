import "../styles/content.scss";
import imagem from "../assets/default-img.png";

export function Content() {
  return (
    <section className="content">
      <div className="content__box">
        <img src={imagem} alt="" width={250} />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
          veritatis repudiandae tempora voluptate, vel dolore enim, magni ex
          vero sint similique ad iusto obcaecati qui voluptatum, ut aliquam
          libero minima.S
        </p>
      </div>
      <div className="content__box">
        <img src={imagem} alt="" width={250} />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
          veritatis repudiandae tempora voluptate, vel dolore enim, magni ex
          vero sint similique ad iusto obcaecati qui voluptatum, ut aliquam
          libero minima.S
        </p>
      </div>
      <div className="content__box">
        <img src={imagem} alt="" width={250} />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
          veritatis repudiandae tempora voluptate, vel dolore enim, magni ex
          vero sint similique ad iusto obcaecati qui voluptatum, ut aliquam
          libero minima.S
        </p>
      </div>
    </section>
  );
}
