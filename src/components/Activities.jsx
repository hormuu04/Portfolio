const activities = [
  {
    image: "https://res.cloudinary.com/dke9vufkq/image/upload/DSC03813_1_pyga4o",
    title: "เข้าการแข่งขัน Arduino Explore IoT Kit Hackathon 2024  Innovation to drive Zero Waste of BCG Economy",
    desc: "ได้ผ่านรับการคัดเลือกเป็นหนึ่งใน 30 ทีม จาก 105 ทีมทั่วประเทศ",
  },
  {
    image: "/c-python-competition.jpg",
    title: "เข้าร่วมการเเข่งขัน C/Python ",
    desc: "ได่รับรางวัลรองชนะเลิศอันดับ 2",
  },
  {
    image: "https://res.cloudinary.com/dke9vufkq/image/upload/455273043_1015761537002358_4452768284257268709_n_a1jsfl",
    title: "เข้าร่วมการเเข่งขัน stem robotic",
    desc: " ได่รับรางวัลรองชนะเลิศอันดับ 2 ",
  },
  {
    image: "https://res.cloudinary.com/dke9vufkq/image/upload/Screenshot_560_qcnr9k",
    title: "เข้าร่วมโครงการ GTC : Build Your Own AI",
    desc: "จัดโดย สถาบันเทคโนโลยีพระจอมเกล้าลาดคุณทหารลาดกระบัง ในรูปเเบบออนไลน์",
  },
  {
    image: "https://res.cloudinary.com/dke9vufkq/image/upload/458470864_122200480850068228_3034824866354309487_n_zcewzw",
    title: "เข้าร่วมอบรมเชิงปฎิบัติการด้านเซนเซอร์ทางการเเพทย์",
    desc: "จัดโดย มหาวิทยาลัยราชภัฏบ้านสมเด็จเจ้าพระยา ณ โรงเรียนมัธยมวัดสิงห์",
  },
  {
    image: "https://res.cloudinary.com/dke9vufkq/image/upload/494576536_3267820656690010_8561192630089083570_n_wrjzto",
    title: "เข้าร่วมงานเทคโนโลยีและนวัตกรรมของไทย Technomart 2023",
    desc: "เข้าร่วมงาน Technomart 2023 ที่จัดขึ้นที่ อิมแพ็ค เมืองทองธานี",
  },
];

export default function Activities() {
  return (
    <section className="py-12 bg-black flex justify-center items-center">
      <div className="w-full max-w-6xl bg-[#18191A] rounded-2xl p-10 mx-4">
        <h2 className="text-4xl font-bold text-[#FA4616] text-center mb-12">Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((act, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start border-2 border-[#FA4616] rounded-xl bg-[#232323] p-8 min-h-[220px]"
            >
              <img 
                src={act.image} 
                alt={act.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <h3 className="text-xl font-bold text-[#FA4616] mb-2">{act.title}</h3>
              <p className="text-gray-200">{act.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
