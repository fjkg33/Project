import "./Icons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DogFootprints from '../img/icons-개발자국.png'
import Dog from '../img/icons8-강아지.png'
import Cat from '../img/icons8-cat.png'
import Rabbit from '../img/icons8-rabbit.png'
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  return (
    <div className="Icon-wrapper">
      <div className="loginIcon-left">
          <img src={DogFootprints}/>
          <img src={Dog}/>
          <img src={Cat}/>
          <img src={Rabbit}/>
      </div>
      <div className="loginIcon-right">
            <div className='Icon-won'>
            <FontAwesomeIcon icon={faHome} size='2x'   className='icon' />
            </div>
      </div>
    </div>
  );
}