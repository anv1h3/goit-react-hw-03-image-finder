import { Component } from 'react';
import css from './Searchbar.module.css'

export class Searchbar extends Component {
    state={
    inputValue: ""
    }

    handleChange = ({ target }) => {
        this.setState ({
          inputValue: target.value,
        });
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.createRequest({ inputValue: this.state.inputValue });
        this.setState({ inputValue: "" });
}
    render() {
        return (
          <header className={css.searchbar}>
            <form className={css.SearchForm} onSubmit={this.onSubmit}>
              <button type="submit" className={css.SearchFormButton}>
                <span className="button-label">Search</span>
              </button>
              <input
                className={css.SearchFormInput}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                onChange={this.handleChange}
                value={this.state.inputValue}
              />
            </form>
          </header>
        );
    }
}
