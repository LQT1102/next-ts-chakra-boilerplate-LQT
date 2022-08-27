import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,

}

// 3. extend the theme
const theme = extendTheme({ 
  config,
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: (props : any) => {
        return {
          fontWeight: 'bold',
        }
      }
    }}
 })

export default theme