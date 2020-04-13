import '@spectrum-web-components/theme';
import '@spectrum-web-components/button';

// Uncomment me and the styles work...
// document.querySelector('sp-theme').color = 'light';


/**
 * Thinking about how things work and the issues I've seen in the
 * past, it looks like it might have to do with the way that 
 * `@spectrum-web-components/theme` does an `export * from './theme.js';`
 * other bundlers have had various issues with this in the past...
 */