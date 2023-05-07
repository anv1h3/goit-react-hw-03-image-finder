import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { getPictures } from 'servises/getPictures';
import { Modal } from './Modal/Modal'
import {Button} from './Button/Button'

export class App extends Component {
  state = {
    request: '',
    pictures: [],
    isLoading: false,
    isModalShown: false,
    choosedPicture: '',
    page: 1,
    totalHits: 0,
  };

  createRequest = ({ inputValue }) => {
    this.setState({ request: inputValue.trim(), page:1, pictures: []});
  };

  handleClick = ({ page, pictures }) => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  showModal = () => {
    this.setState({ isModalShown: true });
  };

  closeModal = () => {
    this.setState({ isModalShown: false, choosedPicture: '' });
  };

  choosePicture = ({ target }) => {
    if (target.src) {
      this.setState({ choosedPicture: target.alt });
      this.showModal();
    }
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.request !== this.state.request ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true });
      getPictures(this.state.request, this.state.page)
        .then(response => response.json())
        .then(data => 
          this.setState(prevState=>({ pictures: [...prevState.pictures, ...data.hits], totalHits: data.totalHits }))
        )
        .catch(error => this.setState({ error }))
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar createRequest={this.createRequest} />
        {this.state.isLoading && <Loader />}
        <ImageGallery onClick={this.choosePicture}>
          <ImageGalleryItem
            request={this.state.request}
            pictures={this.state.pictures}
            isLoading={this.state.isLoading}
            totalHits={this.state.totalHits}
            page={this.state.page}
          />
        </ImageGallery>
        {this.state.pictures &&
          this.state.page !== Math.ceil(this.state.totalHits / 12) &&
          this.state.pictures.length >= 12 && (
            <Button handleClick={this.handleClick} />
          )}
        {this.state.isModalShown && (
          <Modal
            closeModal={this.closeModal}
            choosedPicture={this.state.choosedPicture}
          />
        )}
      </div>
    );
  }
};
