import { useState, useEffect } from 'react';
import { ReactNotifications } from 'react-notifications-component';
import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import {
  notificationDataInfo,
  notificationDataError,
} from 'services/notificationData';

import { getImages, normalizeImages } from 'services/api';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

const App = () => {
  const [request, setRequest] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalImages, setTotalImages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!request) return;

    const fetchData = async () => {
      setLoading(true);
      setError('');
      try {
        const getImage = await getImages(request, page);
        const normalizedImages = normalizeImages(getImage.hits);

        if (getImage.hits.length === 0) {
          Store.addNotification(notificationDataError());
        }

        setImages(state => [...state, ...normalizedImages]);
        setTotalImages(getImage.totalHits);
      } catch (error) {
        setError('Something went wrong');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [request, page]);

  const getRequest = searchRequest => {
    if (searchRequest === request) {
      Store.addNotification(notificationDataInfo());

      return;
    }
    setRequest(searchRequest);
    setImages([]);
    setPage(1);
  };

  const loadMoreBntHandler = () => {
    setPage(state => state + 1);
  };
  const showLoadMore = images.length !== totalImages && !loading;

  return (
    <div className="App">
      <ReactNotifications />
      <Searchbar onSubmit={getRequest} />
      {images.length > 0 && <ImageGallery images={images} />}
      {showLoadMore && <Button onClick={loadMoreBntHandler} />}
      {loading && <Loader />}
      {error && <p>{error}</p>}
    </div>
  );
};

export default App;
