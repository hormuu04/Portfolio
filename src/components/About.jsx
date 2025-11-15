import { Calendar, MapPin, Mail, Phone } from 'lucide-react'

const About = () => {
  const personalInfo = [
    { icon: <Calendar size={20} />, label: 'Birthday', value: 'January 1, 1995' },
    { icon: <MapPin size={20} />, label: 'Location', value: 'Bangkok, Thailand' },
    { icon: <Mail size={20} />, label: 'Email', value: 'hello@phulaport.com' },
    { icon: <Phone size={20} />, label: 'Phone', value: '+66 123 456 789' },
  ]

  const experiences = [
    {
      year: '2023 - Present',
      title: 'Senior Full Stack Developer',
      company: 'Tech Company',
      description: 'Leading development of web applications using React, Node.js, and cloud technologies.'
    },
    {
      year: '2021 - 2023',
      title: 'Frontend Developer',
      company: 'Digital Agency',
      description: 'Built responsive user interfaces and implemented modern web design patterns.'
    },
    {
      year: '2020 - 2021',
      title: 'Junior Developer',
      company: 'Startup',
      description: 'Developed features for web applications and collaborated with cross-functional teams.'
    },
  ]

  return (
    <section id="about" className="flex justify-center items-center py-16 px-4">
      <div className="bg-[#181818] rounded-2xl shadow-lg max-w-4xl w-full p-8 md:p-12">
        <h2 className="text-3xl font-bold text-primary-600 text-center mb-6">About Me</h2>
        <p className="text-white text-base md:text-lg leading-relaxed text-center md:text-left">
        สวัสดีครับผม นายอัมรินทร์ รัตรสาร ปัจจุบันกำลังศึกษาชั้นมัธยมศึกษาปีที่ 6 เเผนการเรียน วิทยาศาสตร์ - คณิตศาสตร์ (คอมพิวเตอร์) ที่โรงเรียนมัธยมวัดสิงห์ หากย้อนกลับไปในช่วงประถม จุดเริ่มต้นที่ทำให้ผมสนใจด้านเทคโนโลยีเริ่มมาจากการเล่นเกมเเละการประกอบคอมพิวเตอร์ ตรงจุดนั้นทำให้ผมชื่นชอบเกี่ยวกับคอมพิวเตอร์เเละเทคโนโลยีเป็นอย่างมาก ทำให้ผมตั้งเป้าหมาย ตรงจุดนั้นทำให้ผมชื่นชอบเกี่ยวกับคอมพิวเตอร์เเละเทคโนโลยีเป็นอย่างมาก ทำให้ผมตั้งเป้าหมาย ว่าจะอยากเข้าศึกษาต่อในสาขาเกี่ยวกับคอมพิวเตอร์ให้ได้ครับ
        </p>
      </div>
    </section>
  )
}

export default About 