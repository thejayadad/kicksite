import FeaturedItemSection from '@/components/FeaturedItemSection'
import GallerySection from '@/components/GallerySection'
import HeroSection from '@/components/HeroSection'
import ProductSection from '@/components/ProductSection'
import TestimonialSection from '@/components/TestimonialSection'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedItemSection />
      <ProductSection />
      <TestimonialSection />
      <GallerySection />
      homePage
    </main>
  )
}
