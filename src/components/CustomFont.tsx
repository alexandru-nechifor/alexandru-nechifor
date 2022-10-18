import { Global } from '@mantine/core';

//@ts-ignore
import dancingScript from '../assets/fonts/DancingScript.ttf';

export function CustomFonts() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Dancing Script',
            src: `url('${dancingScript}')`,
            fontWeight: 700,
            fontStyle: 'normal',
          },
        },
      ]}
    />
  );
}
