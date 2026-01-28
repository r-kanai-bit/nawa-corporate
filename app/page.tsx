import Carousel from '@/components/Carousel'
import BackgroundSection from '@/components/BackgroundSection'
import Philosophy from '@/components/Philosophy'
import CompanyInfo from '@/components/CompanyInfo'
import Information from '@/components/Information'
import Business from '@/components/Business'
import CEO from '@/components/CEO'
import Works from '@/components/Works'
import Voice from '@/components/Voice'
import DocumentRequest from '@/components/DocumentRequest'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <>
      <Carousel />
    <BackgroundSection />
      <CompanyInfo />
      <Information />
      <Business />
      <CEO />
      <Works />
      <Voice />
      <DocumentRequest />
      <ContactForm />
    </>
  )
}
