export enum MediaSize {
	LATOP = 1024,
	TABLET = 768,
	PHONE = 425
}

export const MediaQuery = {
	LAPTOP: `@media (max-width: ${MediaSize.LATOP}px)`,
	TABLET: `@media (max-width: ${MediaSize.TABLET}px)`,
	PHONE: `@media (max-width: ${MediaSize.PHONE}px)`
};
