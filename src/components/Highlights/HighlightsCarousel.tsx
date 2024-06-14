import * as React from 'react';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselDots, type CarouselApi } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

export default function HighlightsCarousel(props: any) {
	const [api, setApi] = React.useState<CarouselApi>();
	const [current, setCurrent] = React.useState(0);
	const [count, setCount] = React.useState(0);

	React.useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on('select', () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	React.useEffect(() => {
		if (!api) {
			return;
		}

		const videos: HTMLVideoElement[] = document.querySelectorAll('.highlights .carousel video') as unknown as HTMLVideoElement[];

		videos.forEach((video, index) => {
			video.pause()
		})

		videos.forEach((video, index) => {
			if (video.getAttribute('data-highlight-video') === current.toString()) video.play();

			video.addEventListener('ended', event => {
				if (api.canScrollNext()) api.scrollNext();
				else api.scrollPrev();
			});
		});
	}, [current]);

	return (
		<Carousel className='w-full' setApi={setApi}>
			<CarouselContent className='min-h-[80vh]'>
				<CarouselItem className='basis-[92%] relative'>
					<div className='p-1 h-full'>
						<Card className='border-none bg-black rounded-lg h-full'>
							<CardContent className='flex flex-col p-12 gap-4 rounded-lg absolute top-2 left-4 z-10'>{props.chip}</CardContent>
							{props.chipMedia}
						</Card>
					</div>
				</CarouselItem>
				<CarouselItem className='basis-[92%] relative'>
					<div className='p-1 h-full'>
						<Card className='border-none bg-black rounded-lg h-full'>
							<CardContent className='flex flex-col p-12 gap-4 rounded-lg absolute top-2 left-4 z-10'>{props.titanium}</CardContent>
							{props.titaniumMedia}
						</Card>
					</div>
				</CarouselItem>
				<CarouselItem className='basis-[92%] relative'>
					<div className='p-1 h-full'>
						<Card className='border-none rounded-lg h-full'>
							<CardContent className='flex flex-col p-12 gap-4 rounded-lg absolute top-2 left-4 z-10'>{props.zoom}</CardContent>
							{props.zoomMedia}
						</Card>
					</div>
				</CarouselItem>
				<CarouselItem className='basis-[92%] relative'>
					<div className='p-1 h-full'>
						<Card className='border-none rounded-lg h-full'>
							<CardContent className='flex flex-col p-12 gap-4 rounded-lg absolute top-2 left-4 z-10'>{props.action}</CardContent>
							{props.actionMedia}
						</Card>
					</div>
				</CarouselItem>
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
			<CarouselDots />
		</Carousel>
	);
}
