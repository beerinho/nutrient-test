import Service from '@ember/service';
import PSPDFKit from '@nutrient-sdk/viewer';

export default class NutrientService extends Service {
  hasPreloaded = false;

  get config() {
    const toolbarItems = [
      'sidebar-annotations',
      'pager',
      'pan',
      'zoom-out',
      'zoom-in',
      'zoom-mode',
      'spacer',
      'responsive',
      'ink',
      'ink-eraser',
      'text',
      'line',
      'arrow',
      'ellipse',
      'image',
    ].map((type) => {
      if (type === 'responsive') {
        return {
          type: 'responsive-group',
          id: 'my-group',
          mediaQueries: ['(max-width: 991px)'],
        };
      }
      const obj = { type };
      if (
        [
          // 'ink',
          // 'ink-eraser',
          'text',
          'line',
          'arrow',
          'ellipse',
          'image',
          // 'document-editor',
          'print',
        ].includes(type)
      ) {
        obj.responsiveGroup = 'my-group';
      }
      if (['zoom-mode'].includes(type)) {
        obj.mediaQueries = ['(min-width: 768px)'];
      }
      return obj;
    });

    return {
      toolbarItems,
      baseUrl: location.protocol + '//' + location.host + '/assets/',
    };
  }

  preloadWorker() {
    if (this.hasPreloaded) {
      return;
    }
    try {
      if (
        Object.getOwnPropertyDescriptor(PSPDFKit.Options, 'SIGNATURE_SAVE_MODE')
          .writable
      ) {
        PSPDFKit.Options.SIGNATURE_SAVE_MODE = PSPDFKit.SignatureSaveMode.NEVER;
      }
      const worker = PSPDFKit.preloadWorker(this.config);
      this.hasPreloaded = true;
      return worker;
    } catch (error) {
      console.error(error);
      console.error('C');
      console.error('H');
      console.error('U');
      console.error('N');
      console.error('K');
      console.error('E');
      console.error('R');
      console.error('R');
      console.error('O');
      console.error('R');
      console.error('test', /loading chunk \d* failed./i.test(error.message));
      if (/loading chunk \d* failed./i.test(error.message)) {
        this.preloadWorker();
      }
    }
  }
}
