import { useState } from 'react'
import { ExternalLink, Github, Eye } from 'lucide-react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'design', name: 'UI/UX Design' },
  ]

  const projects = [
    {
      title: 'HIWKHAO',
      description: 'โปรเจคนี้ผมตั้งใจพัฒนาขึ้นมาเพื่อท้าทายตัวเองในทำการเว็ปเเบบ full stack เว็ปนี้เป็นเว็ปไว้สำหรับการดูข้อมูลร้านอาหารบริเวณใกล้เคียง เเละ สามารถเพิ่มร้านอาหารของตัวเองได้สำหรับคนที่สมัครในส่วนของเจ้าของร้าน เว็ปนี้ผมพัฒนาโดยใช้ชุดเทคโนโลยี mern stack เเละ css ในการพัฒนา',
      image: 'https://res.cloudinary.com/dke9vufkq/image/upload/Screenshot_2025-11-12_133244_hzw0ua',
      alt: 'Weather App',
      link: 'https://hiw-khao.vercel.app/',
    },
    {
      title: 'Weather app',
      description: 'เว็บที่สามารถดูสภาพอากาศของทุกประเทศทั่วโลกได้ เเละสามารถดูความชื้นกับพยากรณ์อากาศล่วงหน้าได้ พัฒนาโดยใช้ HTML , CSS และใช้ JavaScript  ในการดึงข้อมูลจาก OpenWeather API เพื่อแสดงผล',
      image: 'https://res.cloudinary.com/dke9vufkq/image/upload/Screenshot_2025-11-12_132314_fhpqi7',
      alt: 'BMI Calculator App',
      link: 'https://hormuu04.github.io/Project/',
    },
    {
      title: 'BMI app',
      description: 'เป็นเว็ปสำหรับการตรวจสอบค่า Bmi โดยค่า Bmi จะช่วยบ่งบอกค่าสุขภาพของตัวเราว่าอยู่ไหนระดับไหน เเละมีคำเเนะนำในการดูเเลสุขภาพด้วย',
      image: 'https://res.cloudinary.com/dke9vufkq/image/upload/Screenshot_2025-11-12_132049_ezds8e',
      alt: 'Interactive School Map',
      link: 'https://hormuu04.github.io/Bmi-app/',
    },
    {
      title: 'Vocab week',
      description: 'เป็นเว็ปที่เราจะสามารถจำคำศัพท์เเละทวนคำศัพท์ ปกติเเล้วทุกอาทิตย์ผมจะมีการสอบศัพท์ผมเลยพัฒนาขึ้นมาเพื่อใช้ในการทวนคำศัพท์ให้ง่ายขึ้นเเเละมีการเเยกหมวด a-z ในเเต่ละ week',
      image: 'https://res.cloudinary.com/dke9vufkq/image/upload/Screenshot_2025-11-12_133819_wba1w0',
      alt: 'Interactive School Map',
      link: 'https://hormuu04.github.io/Vocab-week/',
    },
    {
      title: 'QRCODE SCAN',
      description: 'เป็นเว็ปที่ผมพัฒนามาเพื่อใช้ในการเเสกน qr code บนคอมพิวเตอร์เเละ qr code จะเเปลงเป็นลิ้งให้สามารถเข้าไปที่เว็ปได้เลย',
      image: 'https://res.cloudinary.com/dke9vufkq/image/upload/Screenshot_2025-11-12_130211_nrhjyv',
      alt: 'Interactive School Map',
      link: 'https://hormuu04.github.io/QRCODE-SCAN/',
    },
    {
      title: 'Dice-roll-game',
      description: 'เป็นเว็ปไซต์สำหรับการสุ่มทอยลูกเต๋าเพื่อใช้ในการเล่นเกมกับเพื่อนว่าใครจะเริ่มก่อน เเละ มีประวัติการทอยลูกเต๋าให้ดูด้วย',
      image: 'https://res.cloudinary.com/dke9vufkq/image/upload/Screenshot_2025-11-12_132226_fmirnb',
      alt: 'Interactive School Map',
      link: 'https://hormuu04.github.io/Dice-roll-game/',
    },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section className="py-16 bg-black flex justify-center items-center min-h-[80vh]">
      <div className="w-full max-w-6xl bg-[#18191A] rounded-2xl p-10 mx-4">
        <h2 className="text-4xl font-bold text-[#FA4616] text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center border-2 border-[#FA4616] rounded-xl bg-[#232323] p-6 min-h-[420px] transition-transform hover:scale-105"
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-48 object-contain rounded-md mb-6 bg-[#2d2d2d]"
                />
              ) : (
                <div className="w-full h-48 flex items-center justify-center rounded-md mb-6 bg-[#2d2d2d] text-white text-lg">
                  {project.alt}
                </div>
              )}
              <h3 className="text-2xl font-bold text-[#FA4616] mb-2 w-full text-left">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              <p className="text-gray-200 text-base w-full text-left">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 