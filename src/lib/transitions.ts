import { cubicOut } from 'svelte/easing';
import type { TransitionConfig } from 'svelte/transition';

type Direction =
	| 'top'
	| 'right'
	| 'bottom'
	| 'left'
	| 'top-left'
	| 'top-right'
	| 'bottom-left'
	| 'bottom-right';

interface FlyAndFadeParams {
	direction?: Direction;
	duration?: number;
	delay?: number;
}

export function flyAndFade(
	node: Element,
	{ direction = 'left', duration = 600, delay = 0 }: FlyAndFadeParams = {}
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

type FlyAndScaleParams = {
	y?: number;
	x?: number;
	start?: number;
	duration?: number;
};

export const flyAndScale = (
	node: Element,
	params: FlyAndScaleParams = { y: -8, x: 0, start: 0.95, duration: 150 }
): TransitionConfig => {
	const style = getComputedStyle(node);
	const transform = style.transform === 'none' ? '' : style.transform;

	const scaleConversion = (valueA: number, scaleA: [number, number], scaleB: [number, number]) => {
		const [minA, maxA] = scaleA;
		const [minB, maxB] = scaleB;

		const percentage = (valueA - minA) / (maxA - minA);
		const valueB = percentage * (maxB - minB) + minB;

		return valueB;
	};

	const styleToString = (style: Record<string, number | string | undefined>): string => {
		return Object.keys(style).reduce((str, key) => {
			if (style[key] === undefined) return str;
			return str + `${key}:${style[key]};`;
		}, '');
	};

	return {
		duration: params.duration ?? 200,
		delay: 0,
		css: (t) => {
			const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0]);
			const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0]);
			const scale = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1]);

			return styleToString({
				transform: `${transform} translate3d(${x}px, ${y}px, 0) scale(${scale})`,
				opacity: t
			});
		},
		easing: cubicOut
	};
};
