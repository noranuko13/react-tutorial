import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslation from './resources/locales/en/translation.json'

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
    },
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })
  .then()
