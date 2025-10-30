import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

export default {
  plugins: [
    autoprefixer,
    cssnano({ 
      preset: ['default', {
        discardComments: {
          removeAll: true,
        },
        minifySelectors: true,
        minifyParams: true
      }]
    })
  ],
};
