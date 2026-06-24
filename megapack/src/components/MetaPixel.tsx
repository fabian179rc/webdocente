import React, { useEffect, createElement } from 'react';
const PIXEL_ID = '1313826143661679';
declare global {
  interface Window {
    fbq?: any;
    _fbq?: any;
  }
}
export function MetaPixel() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    // Avoid double-initialization
    if (window.fbq) return;
    /* Meta Pixel base code (robust script injection) */
    const n: any = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    window.fbq = n;
    if (!window._fbq) window._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = '2.0';
    n.queue = [];
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    (document.head || document.body).appendChild(script);
    window.fbq('init', PIXEL_ID);
    window.fbq('track', 'PageView');
    /* <noscript> fallback */
    const noscript = document.createElement('noscript');
    const img = document.createElement('img');
    img.height = 1;
    img.width = 1;
    img.style.display = 'none';
    img.src = `https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`;
    noscript.appendChild(img);
    document.body.appendChild(noscript);
  }, []);
  return null;
}