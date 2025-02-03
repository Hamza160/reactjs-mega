import { createPortal } from "react-dom"

const PopupContent = ({copied}:{copied:boolean}) => {
    const targetElement = document.querySelector('#popup-content')
    if (!targetElement) return null
    return createPortal(
        <section>
            {copied && (
                <div style={{position:'absolute', bottom:'3rem'}}>Copied to Clipboard</div>
            )}
        </section>, 
        targetElement
    )
}

export default PopupContent