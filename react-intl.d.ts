import lang from './public/locales/vi/lang.json'

interface MyResources {
    lang: typeof lang
  }
  
  declare module 'react-intl' {
      interface MessageIds extends MyResources {}
    }