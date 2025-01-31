import InvalidPassword from "./InvalidPassword"
import ValidPassword from "./ValidPassword"

const Password = ({isValid}:{isValid:boolean}) => {
  return isValid ? <ValidPassword/> : <InvalidPassword/>
}

export default Password