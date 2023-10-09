import { useLocation} from "react-router-dom"
import { Button } from "./ButtonStyled"

const ButtonPage = ({button}) => {
  const location =useLocation()
    
  return (
    <Button>
        {button}
    </Button>
  )
}

export default ButtonPage