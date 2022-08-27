import lang from './public/locales/vi/lang.json'

interface MyResources {
  lang: typeof lang
}

declare module 'react-i18next' {
    interface Resources extends MyResources {}
  }