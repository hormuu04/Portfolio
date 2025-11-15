import { ArrowDown, Download, Mail } from 'lucide-react'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="flex items-center justify-center py-20 px-8 min-h-screen bg-black">
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 w-full max-w-7xl mx-auto">
        {/* Left: Name & Description */}
        <div className="flex-1 min-w-[280px]" data-aos="fade-right">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight whitespace-nowrap text-white animate__animated animate__flip">
            Amarin Ratarasarn
          </h1>
          <div className="mb-4 text-lg md:text-xl font-normal flex flex-wrap items-center">
            <span className="text-primary-600 font-semibold mr-2">คติประจำใจ</span>
            <span className="text-white">"อย่าหวังผลลัพธ์ที่ยิ่งใหญ่ถ้าใจยังพยายามเพียงครึ่งเดียว"</span>
          </div>
        </div>
        {/* Right: Profile Image */}
        <div className="flex-1 flex justify-center items-center" data-aos="fade-left">
          <img
            src="https://res.cloudinary.com/dke9vufkq/image/upload/v1748600239/e771c769-5f52-4423-ae6a-67771fd7ea90_1_1_vxn4ow.jpg"
            alt="Profile Photo"
            className="w-96 max-w-full rounded-2xl md:rounded-3xl border-4"
            style={{ borderColor: '#f05a28' }}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero 