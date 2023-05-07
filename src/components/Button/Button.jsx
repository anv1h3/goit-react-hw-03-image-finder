
import css from './Button.module.css'

export const Button = ({handleClick}) => {
    return (
    <div className={css.loadMoreContainer}>
        <button onClick={handleClick} className={css.loadMore} type="button">
          Load more
        </button>
      </div>
    );
}