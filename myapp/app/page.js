import FeaturedItemSection from '@/components/FeaturedItemSection'
import GallerySection from '@/components/GallerySection'
import HeroSection from '@/components/HeroSection'
import Newsletter from '@/components/NewsLetter'
import ProductSection from '@/components/ProductSection'
import TestimonialSection from '@/components/TestimonialSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedItemSection />
      <ProductSection />
      <TestimonialSection />
      <GallerySection />
      <Newsletter />
    </main>
  )
}
