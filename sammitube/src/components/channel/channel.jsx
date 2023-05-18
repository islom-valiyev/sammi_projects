import { Link, useParams, } from "react-router-dom"
import { Button } from "@mui/material"
const Channel = () => {
  const {id} = useParams()
  console.log(id);
  return (
    <Link to={'/'}>
      <Button>
        main
      </Button>
    </Link>
  )
}

export default Channel
