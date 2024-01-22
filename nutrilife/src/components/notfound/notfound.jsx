const notfound = require("../../utils/nothfound.png")

const Notfound = () => {
    return(
        <div>
            <img src={notfound} alt="Not Found"></img>
            <h3>Please log in or add some recipes to see your favorites</h3>
        </div>
    )
}

export default Notfound;