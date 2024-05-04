import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://13.48.44.67/api/',
});

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
