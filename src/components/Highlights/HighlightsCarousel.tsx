import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselDots } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import Autoplay from 'embla-carousel-autoplay';

export default function PortfolioCarousel(props: any) {
	return (
		<Carousel className='w-full'>
			<CarouselContent>
				<CarouselItem className='basis-[92%] relative'>
					<div className='p-1 h-full'>
						<Card className='border-none bg-black rounded-lg h-full'>
							<CardContent className='flex flex-col p-12 gap-4 rounded-lg absolute top-2 left-4 z-10'>{props.chip}</CardContent>
							{props.chipImage}
						</Card>
					</div>
				</CarouselItem>
				<CarouselItem className='basis-[92%] relative'>
					<div className='p-1 h-full'>
						<Card className='border-none bg-black rounded-lg h-full'>
							<CardContent className='flex flex-col p-12 gap-4 rounded-lg absolute top-2 left-4 z-10'>{props.titanium}</CardContent>
							{props.titaniumImage}
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
