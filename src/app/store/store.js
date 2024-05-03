import { create } from 'zustand';
import { QRUSHAPI } from '../../shared/API/api/api';

export const useZustandStore = create(set => ({
  homePageData: [],
  faqData: [],
  soundRecordingData: [],
  newsData: [],
  trustUs: [],
  celebrities: [],
  adverts1: [],
  adverts2: [],
  shopCards: [],
  rehearsalBaseData: [],
  musicCourceData: [],
  aboutUsArtist: [],
  aboutUsTeam: [],
  galleryImages: [],
  videos: [],
  getHomePage: async () => {
    try {
      const response = await QRUSHAPI.getHomePage();
      set({ homePageData: response.data.results });
    } catch (error) {
      console.error('Ошибка при получении страницы', error);
    }
  },
  getFaqPage: async () => {
    try {
      const response = await QRUSHAPI.getFaqPage();
      set({ faqData: response.data.results });
    } catch (error) {
      console.error('Ошибка при получении страницы', error);
    }
  },
  getMusicCourcePage: async () => {
    try {
      const response = await QRUSHAPI.getMusicCourcePage();
      set({ musicCourceData: response.data.results });
    } catch (error) {
      console.error('Ошибка при получении страницы', error);
    }
  },
  getSoundRecordingStudioPage: async () => {
    try {
      const response = await QRUSHAPI.getSoundRecordingPage();
      set({ soundRecordingData: response.data.results[0] });
    } catch (error) {
      console.error('Ошибка при получении страницы', error);
    }
  },
  getNewsPage: async () => {
    try {
      const response = await QRUSHAPI.getNewsPage();
      set({ newsData: response.data.results });
    } catch (error) {
      console.error('Ошибка при получении страницы', error);
    }
  },
  getTrustUsMainSection: async () => {
    try {
      const response = await QRUSHAPI.getTrustUsMainSection();
      set({ trustUs: response.data.results[0] });
    } catch (error) {
      console.error('Ошибка при получении страницы', error);
    }
  },
  getTrustUsCelebrities: async () => {
    try {
      const response = await QRUSHAPI.getTrustUsCelebrities();
      set({ celebrities: response.data.results });
    } catch (error) {
      console.error('Ошибка при получении страницы', error);
    }
  },
  getAdverts: async () => {
    try {
      const response = await QRUSHAPI.getAdverts();
      set({ adverts1: response.data.results[0] });
      set({ adverts2: response.data.results[1] });
    } catch (error) {
      console.error('Ошибка при получении страницы', error);
    }
  },
  getShopCards: async () => {
    try {
      const response = await QRUSHAPI.getShopCards();
      set({ shopCards: response.data.results });
    } catch (error) {
      console.error('Ошибка при получении страницы', error);
    }
  },
  getRehearsalFirstBasePage: async () => {
    try {
      const response = await QRUSHAPI.getRehearsalFirstBasePage();
      set({ rehearsalBaseData: response.data.results });
    } catch (error) {
      console.error('Ошибка при получении страницы', error);
    }
  },
  getAboutUsArtist: async () => {
    try {
      const response = await QRUSHAPI.getAboutUsArtist();
      console.log(response);
      set({ aboutUsArtist: response.data.results });
    } catch (error) {
      console.error('Ошибка при получении артистов', error);
    }
  },
  getAboutUsTeam: async () => {
    try {
      const response = await QRUSHAPI.getAboutUsTeam();
      console.log(response);
      set({ aboutUsTeam: response.data.results });
    } catch (error) {
      console.error('Ошибка при получении текстов', error);
    }
  },
  getGalleryImage: async () => {
    try {
      const response = await QRUSHAPI.getGalleryImages();
      console.log(response.data);
      set({ galleryImages: response.data });
    } catch (error) {
      console.error('Ошибка при получении галереи', error);
    }
  },
  getVideos: async () => {
    try {
      const response = await QRUSHAPI.getVideos();
      console.log(response);
      set({ videos: response.data });
    } catch (error) {
      console.error('error videos', error);
    }
  },
}));
