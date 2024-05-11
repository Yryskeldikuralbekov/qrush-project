import axios from 'axios';
import i18n from '../../../i18n';

export const instance = axios.create({
  baseURL: 'https://qrush.pp.ua/api/',
});
instance.interceptors.request.use(
  config => {
    console.log('Starting Request:', config);
    const locale = i18n.language;
    config.headers['Accept-Language'] = locale;
    return config;
  },
  error => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    console.log('Response:', response);
    return response;
  },
  error => {
    console.error('Response Error:', error);
    return Promise.reject(error);
  }
);
export const QRUSHAPI = {
  getHomePage() {
    return instance.get('v1/pages/main/');
  },
  getFaqPage() {
    return instance.get('v1/pages/faq/');
  },
  getMusicCourcePage() {
    return instance.get('v2/mc/music_courses/');
  },
  getRehearsalFirstBasePage() {
    return instance.get('v2/rb/rehearsal_base/');
  },
  getNewsPage() {
    return instance.get('v1/content/news/');
  },
  getSoundRecordingPage() {
    return instance.get('v2/srs/sound_recording_studio/');
  },
  getPages() {
    return instance.get('v1/pages/pages');
  },
  getTrustUsCelebrities() {
    return instance.get('v1/content/trust_us/');
  },
  getAdverts() {
    return instance.get('v1/pages/adverts/');
  },
  getShopCards() {
    return instance.get('v1/content/shop/');
  },
  getAboutUsArtist() {
    return instance.get('v1/content/team/');
  },

  getVideos() {
    return instance.get('v1/content/video/');
  },
  getGallery() {
    return instance.get('v1/content/gallery/');
  },
  getGalleryImages() {
    return instance.get('v1/content/gallery/');
  },
  getVideos() {
    return instance.get('/v1/content/video/');
  },
};
