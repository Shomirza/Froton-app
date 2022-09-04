import "./Profile.css";
import Avatar from "./Avatar-PNG-Image.png";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";


function Profile() {
  return (
    <main>
      <div className="Container">
        <div className="ContainerTop">
          <div className="Left">
            <div className="avatarImage">
              <img src={Avatar} alt="Avatar" />
            </div>
            <div>
              <h3>Имя</h3>
              <p>Фамилия</p>
            </div>
          </div>
          <div className="Right">
              <div className="RightButton">
                <p>Перейти в чат</p>
                <h2><IoIcons.IoIosShareAlt /></h2>
              </div>
              <div className="RightButton">
                <p>Контакты</p>
                <h2><IoIcons.IoIosAdd /></h2>
              </div>
          </div>
        </div>
        <div className="Btn">
          <h1><MdIcons.MdDescription/></h1>
          <p>Description</p>
        </div>
        <div className="Btn">
          <h1><MdIcons.MdShare/></h1>
          <p>Other social webs</p>
        </div>
      </div>
    </main>
  );
}

export default Profile;
