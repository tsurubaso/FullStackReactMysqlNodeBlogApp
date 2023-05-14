import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://picsum.photos/600/400" alt="" />
        <div className="user">
          <img src="https://picsum.photos/600/400" alt="" />
          <div className="info">
            <span>John</span>
            <p>posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo amet ex a impedit deserunt qui, ea voluptatum non perferendis, quia sed maxime, minus commodi ratione nam dignissimos excepturi dolor quos cum autem aut error quis? Minima, dicta. Odio, iste veniam? Enim consequuntur iusto quis? Quasi esse exercitationem laborum amet obcaecati nam aspernatur numquam ducimus suscipit. Officia, praesentium, vel doloremque repellat deserunt culpa rerum magni nam voluptates expedita quas atque omnis totam. Blanditiis hic quam beatae, iste vero aperiam est voluptates consectetur? Quidem perspiciatis sed nihil qui esse! Tenetur, pariatur id quis eos similique quos voluptatum eligendi, repellendus quaerat inventore ratione asperiores! Deleniti earum incidunt dolorum at animi eaque voluptatibus, itaque facilis sed fugiat praesentium veritatis temporibus, voluptate nisi dolores ipsam similique accusamus ut iste nam nesciunt! Inventore vel deserunt minus a optio fugiat, soluta aspernatur illum sit exercitationem porro temporibus et accusamus deleniti harum animi officia aliquid ratione veritatis illo quia omnis error fuga. Dignissimos numquam quod aliquam corporis dolore, nihil reiciendis dolor, eos explicabo omnis ipsam minus facere tempora impedit ad. Doloremque quo labore aliquid ipsum harum nulla beatae explicabo debitis, minus neque officia deleniti vel eligendi laudantium doloribus eos assumenda ut amet modi atque eveniet rem porro in ducimus! Eligendi, vel dolorum quaerat voluptas porro molestiae nostrum ullam exercitationem atque harum at accusamus rem sequi excepturi inventore labore laborum. Minima error illum illo excepturi repellat adipisci nam, maiores ut perspiciatis, ex atque repellendus omnis labore, et debitis quia dolorem consequatur corrupti harum maxime. Perspiciatis, sapiente reprehenderit saepe tempore rerum laudantium officia harum illo totam vero quae similique enim quasi tenetur accusantium voluptas dolore odit nihil earum perferendis et vitae quis! Qui saepe ex iste mollitia explicabo delectus quidem architecto esse tempore fugiat sapiente a ut laboriosam odit repellat rem assumenda, ab fugit nesciunt repudiandae. Accusamus odio veniam nulla.

      </p>
      </div>
      <div className="menu">Menu</div>
    </div>
  );
};

export default Single;
