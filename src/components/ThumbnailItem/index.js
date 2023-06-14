// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imagesList, clickThumbNailItem, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imagesList

  const onClickThumbnailItem = () => {
    clickThumbNailItem(id)
  }

  const activeImageBtnClassName = isActive ? 'opacity' : 'no-opacity'

  return (
    <li>
      <button type="button" onClick={onClickThumbnailItem} className="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={activeImageBtnClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
