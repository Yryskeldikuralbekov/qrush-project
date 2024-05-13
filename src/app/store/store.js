import { create } from 'zustand';
import { QRUSHAPI } from '../../shared/API/api/api';

export const useZustandStore = create(set => ({
  homePageData: [],
  faqData: [],
  soundRecordingData: [],
  newsData: [],
  trustUs: [],
  pages: [],
  shopBg: [],
  celebrities: [],
  adverts: [],
  shopCards: [],
  rehearsalBaseData: [],
  musicCourceData: [],
  aboutUs: [],
  aboutUsArtist: [],
  galleryData: [],
  videos: [],
  aboutUsTeam: [],
  galleryImages: [],
  getHomePage: async () => {
    try {
      const response = await QRUSHAPI.getHomePage();
      set({ homePageData: response.data });
      console.log(QRUSHAPI.getHomePage());
    } catch (error) {
      console.error('Ошибка при получении страницы', error);
    }
  },
  getFaqPage: async () => {
    try {
      const response = await QRUSHAPI.getFaqPage();
      set({ faqData: response.data });
    } catch (error) {
      console.error('Ошибка при получении страницы', error);
    }
  },
  getMusicCourcePage: async () => {
    try {
      const response = await QRUSHAPI.getMusicCourcePage();
      set({ musicCourceData: response.data });
    } catch (error) {
      console.error('Ошибка при получении страницы', error);
    }
  },
  getSoundRecordingStudioPage: async () => {
    try {
      const response = await QRUSHAPI.getSoundRecordingPage();
      set({ soundRecordingData: response.data[0] });
    } catch (error) {
      console.error('Ошибка при получении страницы', error);
    }
  },
  getNewsPage: async () => {
    try {
      const response = await QRUSHAPI.getNewsPage();

      set({ newsData: response.data });
    } catch (error) {
      console.error('Ошибка при получении страницы', error);
    }
  },
  getPages: async () => {
    try {
      const response = await QRUSHAPI.getPages();
      set({ trustUs: response.data });
      set({ shopBg: response.data });
      set({ aboutUs: response.data });
      set({ pages: response.data });
    } catch (error) {
      console.error('Ошибка при получении страницы', error);
    }
  },
  getTrustUsCelebrities: async () => {
    try {
      const response = await QRUSHAPI.getTrustUsCelebrities();
      set({ celebrities: response.data });
    } catch (error) {
      console.error('Ошибка при получении страницы', error);
    }
  },
  getAdverts: async () => {
    try {
      const response = await QRUSHAPI.getAdverts();
      set({ adverts: response.data });
    } catch (error) {
      console.error('Ошибка при получении страницы', error);
    }
  },
  getShopCards: async () => {
    try {
      const response = await QRUSHAPI.getShopCards();
      set({ shopCards: response.data });
    } catch (error) {
      console.error('Ошибка при получении страницы', error);
    }
  },
  getRehearsalFirstBasePage: async () => {
    try {
      const response = await QRUSHAPI.getRehearsalFirstBasePage();
      set({ rehearsalBaseData: response.data });
    } catch (error) {
      console.error('Ошибка при получении страницы', error);
    }
  },
  getAboutUsArtist: async () => {
    try {
      const response = await QRUSHAPI.getAboutUsArtist();
      set({ aboutUsArtist: response.data });
    } catch (error) {
      console.error('Ошибка при получении артистов', error);
    }
  },

  getVideos: async () => {
    try {
      const response = await QRUSHAPI.getVideos();
      set({ videos: response.data });
    } catch (error) {
      console.error('Ошибка при получении видео', error);
    }
  },
  getGallery: async () => {
    try {
      const response = await QRUSHAPI.getGallery();
      set({ galleryData: response.data });
    } catch (error) {
      console.error('Ошибка при получении видео', error);
    }
  },
  getGalleryImage: async () => {
    try {
      const response = await QRUSHAPI.getGalleryImages();
      set({ galleryImages: response.data });
    } catch (error) {
      console.error('Ошибка при получении галереи', error);
    }
  },
}));
