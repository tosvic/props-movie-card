import "./HuluCard.css";

import pix from "../../assets/Images/anyone.jpg";
import pix1 from "../../assets/Images/bee.jpg";
import pix2 from "../../assets/Images/oppen.jpg";
import pix3 from "../../assets/Images/sapceman.jpg";
import pix4 from "../../assets/Images/boy.jpg";



function HuluCard(props) {
  const movies = [
    {
      image: pix,
      desc: "Love, Thriller . Movie (2024)",
    },

    {
      image: pix1,
      desc: "Action, Thriller . Movie (2024)",
    },

    {
      image: pix2,
      desc: "Drama, Thriller . Movie (2024)",
    },

    {
      image: pix3,
      desc: "Adventure, Thriller . Movie (2024)",
    },
    {
      image: pix4,
      desc: "Drama, Thriller . Movie (2024)",
    },
  ];



  return (
    <>
      <div className="container">
        <h1>Tosvic Movies</h1>

        <div className="move"></div>

        <h1 className="pop">Popular</h1>
        <div className="main-card">
            
          {movies.map((list) => (
            <div className="card">
                <img src={list.image} />
                <p>{list.desc}</p>
            </div>
          ))}

        </div>
      </div>
    </>
  );
}

export default HuluCard;
