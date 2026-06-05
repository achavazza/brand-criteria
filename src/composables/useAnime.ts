import { animate } from 'animejs'

export function useAnime() {
  function fadeIn(element: string | HTMLElement, delay = 0) {
    return animate(element, {
      opacity: [0, 1],
      translateY: [8, 0],
      duration: 600,
      delay,
      easing: 'easeOutCubic'
    })
  }

  function fadeOut(element: string | HTMLElement) {
    return animate(element, {
      opacity: [1, 0],
      translateY: [0, 8],
      duration: 300,
      easing: 'easeInCubic'
    })
  }

  function scaleIn(element: string | HTMLElement, delay = 0) {
    return animate(element, {
      scale: [0.95, 1],
      opacity: [0, 1],
      duration: 500,
      delay,
      easing: 'easeOutCubic'
    })
  }

  function staggerFade(elements: string, delay = 50) {
    return animate(elements, {
      opacity: [0, 1],
      translateY: [12, 0],
      duration: 400,
      delay: function(_t: any, i: number) { return i * delay; },
      easing: 'easeOutCubic'
    })
  }

  function panelTransition(element: string | HTMLElement, direction: 'left' | 'right' = 'right') {
    const x = direction === 'right' ? [30, 0] : [-30, 0]
    return animate(element, {
      opacity: [0, 1],
      translateX: x,
      duration: 500,
      easing: 'easeOutCubic'
    })
  }

  return {
    fadeIn,
    fadeOut,
    scaleIn,
    staggerFade,
    panelTransition
  }
}
