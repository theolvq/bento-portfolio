import { cubicOut } from 'svelte/easing';
import type { TransitionConfig } from 'svelte/transition';

type Direction = 'top' | 'right' | 'bottom' | 'left' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

interface FlyAndFadeParams {
    direction?: Direction;
    duration?: number;
    delay?: number;
}

export function flyAndFade(
    node: Element,
    {
        direction = 'left',
        duration = 600,
        delay = 0
    }: FlyAndFadeParams = {}
): TransitionConfig {
    const directions: Record<Direction, { x: number; y: number }> = {
        top: { x: 0, y: -100 },
        right: { x: 100, y: 0 },
        bottom: { x: 0, y: 100 },
        left: { x: -100, y: 0 },
        'top-left': { x: -100, y: -100 },
        'top-right': { x: 100, y: -100 },
        'bottom-left': { x: -100, y: 100 },
        'bottom-right': { x: 100, y: 100 }
    };

    const { x, y } = directions[direction];

    return {
        delay,
        duration,
        css: (t: number) => {
            const eased = cubicOut(t);
            return `
                opacity: ${eased};
                transform: translate(${(1 - eased) * x}px, ${(1 - eased) * y}px);
            `;
        }
    };
} 