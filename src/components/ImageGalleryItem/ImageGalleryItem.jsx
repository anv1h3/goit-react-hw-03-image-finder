import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem =props=> {
    return (
      <>
        {props.pictures &&
          props.pictures.map(picture => {
            return (
              <li key={picture.id} className={css.ImageGalleryItem}>
                <img
                  className={css.ImageGalleryItemImage}
                  src={picture.webformatURL}
                  alt={picture.largeImageURL}
                />
              </li>
            );
          })}
        {props.pictures.length === 0 && props.request && props.isLoading===false &&(
          <p
            className={css.p}
          >{`за запитом "${props.request}" нічого не знайдено!`}</p>
        )}
      </>
    );
  }