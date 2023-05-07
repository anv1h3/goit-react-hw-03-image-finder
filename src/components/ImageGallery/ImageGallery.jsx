import css from './ImageGallery.module.css'

export const ImageGallery = ({children, onClick}) => {
  return <ul className={css.ImageGallery} onClick={onClick}>{children}</ul>;
}
