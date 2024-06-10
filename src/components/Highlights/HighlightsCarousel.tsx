import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

export default function PortfolioCarousel() {
	return (
		<Carousel className='w-full max-w-xs'>
			<CarouselContent>
				<CarouselItem>
					<div className='p-1'>
						<Card>
							<CardContent className='flex aspect-square items-center justify-center p-6'>
								<span className='text-4xl font-semibold'>The New A17 Pro Chip</span>
							</CardContent>
						</Card>
					</div>
				</CarouselItem>
				<CarouselItem>
					<div className='p-1'>
						<Card>
							<CardContent className='flex aspect-square items-center justify-center p-6'>
								<span className='text-4xl font-semibold'>Forged in Titanium. Useless.</span>
							</CardContent>
						</Card>
					</div>
				</CarouselItem>
				<CarouselItem>
					<div className='p-1'>
						<Card>
							<CardContent className='flex aspect-square items-center justify-center p-6'>
								<span className='text-4xl font-semibold'>The Longest Optical Zoom on an iPhone</span>
							</CardContent>
						</Card>
					</div>
				</CarouselItem>
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}
