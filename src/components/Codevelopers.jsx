import { codevelopers } from "../helper/data"

const Codevelopers = () => {


    return(
        <div>
            <ul>
                {codevelopers.map(({avatar, name, title, quote}) => {
                    
                })}
            </ul>
        </div>
    )
}

export default Codevelopers