const certificates = [
  {
    title: " Arduino Explore IoT Kit Hackathon 2024 Zero waste of BCG Economy",
    image: "https://res.cloudinary.com/dke9vufkq/image/upload/Screenshot_24_vaaunp", 
    desc: "ผ่านเข้ารอบ 30 ทีม จาก 105 ทัมทั้วประเทศ ณ สถาบันเทคโนโลยีพระจอมเกล้าลาดคุณทหารลาดกระบัง",
  },
  {
    title: "เข้าร่วมการเเข่งขันหุ่นยนต์ Stem robotic ",
    image: "https://res.cloudinary.com/dke9vufkq/image/upload/Screenshot_359_vpq4ie",
    desc: "ได้รับรางวัลรองชนะเลิศอันดับ 2 ณ โรงเรียนมัธยมวัดสิงห์",
  },
  {
    title: "เข้าร่วมการเเข่งขันเขียนโปรเเกรม C/Python",
    image: "https://res.cloudinary.com/dke9vufkq/image/upload/459816d0-14e8-4c8d-835a-f0c9b267f4ce_xf3v1q",
    desc: "ได้รับรางวัลรองชนะเลิศอันดับ 2 ณ โรงเรียนมัธยมวัดสิงห์",
  },
  {
    title: "เข้าร่วมอบรมเชิงปฎิบัติการด้านเซนเซอร์ทางการเเพทย์",
    image: "https://res.cloudinary.com/dke9vufkq/image/upload/ef09d272-4919-479d-b989-e045c50ce5fe_1_supomy",
  },
  {
    title: "เข้าร่วมโครงการ GTC : Build Your Own AI ",
    image: "https://res.cloudinary.com/dke9vufkq/image/upload/Screenshot_2_mkpfo8",
  },
  {
    title: "ได้เข้าร่วมอบรมโครงการ Nartional software Contest หลักสูตร Python Programming",
    image: "https://res.cloudinary.com/dke9vufkq/image/upload/Screenshot_499_cwcxkr",
  },
  {
    title: "ได้เข้าผ่านการอบรม introduction to programming with python ",
    image: "https://res.cloudinary.com/dke9vufkq/image/upload/Screenshot_357_guvkoy",
  },
  {
    title: "ได้เข้าผ่านการอบรม Introduction to Artificial Intelligence in the Workplace ",
    image: "https://res.cloudinary.com/dke9vufkq/image/upload/Screenshot_18_ws6cef",
  },
  {
    title: "ได้เข้าผ่านการอบรม การปรับตัวเพื่อ Gen Ai เพื่อผลลัพธ์ที่ดีกว่า",
    image: "https://res.cloudinary.com/dke9vufkq/image/upload/certificate_51382_1213950-1213950-17492107822849_hjsnyc",
  },
];

export default function Certificate() {
  return (
    <section className="py-12 bg-black flex justify-center items-center">
      <div className="w-full max-w-4xl bg-[#18191A] rounded-2xl p-10 mx-4">
        <h2 className="text-3xl font-bold text-[#FA4616] text-center mb-10">Certificate</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center border-2 border-[#FA4616] rounded-xl bg-[#232323] p-6 min-h-[320px]"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-contain rounded-md mb-4 bg-[#2d2d2d]"
              />
              <h3 className="text-lg font-bold text-[#FA4616] mb-2 text-center">{cert.title}</h3>
              <p className="text-gray-200 text-center text-sm">{cert.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 