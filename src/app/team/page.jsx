"use client"
import React from "react";
import Image from 'next/image';

const teamMembers = [
  {
    name: "William Soerjadjaja",
    role: "CEO",
    description:
      "Seorang pengusaha Indonesia yang menjadi terkenal karena suksesnya membangun PT Astra Internasional, sebuah perusahaan besar di Indonesia.",
    imageSrc:
      "https://assets.kompasiana.com/statics/crawl/552a3b9d6ea834cb598b4567.jpeg?t=o&v=325",
  },
  {
    name: "Tjia Kian Tie",
    role: "Co-Founder",
    description:
      "Saudara kandung: William Soerjadjaja. Organisasi didirikan: Astra International, Astra Motor.",
    imageSrc:
      "https://assets-global.website-files.com/61af270884f7a0580d35618e/64eda18f34eac793266078ca_307_peresmian-pabrik-gaya-motor.jpg",
  },
  {
    name: "Liem Peng Hong",
    role: "Board Member",
    description: "Organization founded: Astra International.",
    imageSrc:
      "https://i1.rgstatic.net/ii/profile.image/888792697278472-1588916100551_Q512/Liem-Hong.jpg",
  },
];

const commissioners = [
  {
    name: "PRIJONO SUGIARTO",
    position: ["PRESIDENT KOMISARIS", "priSugiarto@mail.com"],
    imageSrc:
      "https://www.astra.co.id/Public/Images/profil/BOC/2023/ASTRA-BOC-NEW-PRIJONO-SUGIARTO.jpg",
  },
  {
    name: "SRI INDRASTUTI HADIPUTRANTO",
    position: ["KOMISARIS INDEPENDENT", "Srihadi@mail.com"],
    imageSrc:
      "https://www.astra.co.id/Public/Images/profil/BOC/2023/ASTRA-BOC-NEW-SRIINDRASTUTI.jpg",
  },
  {
    name: "BAMBANG PERMADI SOEMANTI BRODJONEGORO",
    position: ["KOMISARIS INDEPENDENT", "Bambang@mail.com"],
    imageSrc:
      "https://www.astra.co.id/Public/Images/profil/BOC/2023/ASTRA-BOC-NEW-BAMBANG-PERMADI.jpg",
  },
  {
    name: "APINONT SUCHEWABORIPONT",
    position: ["KOMISARIS INDEPENDENT", "suchewa@mail.com"],
    imageSrc:
      "https://www.astra.co.id/Public/Images/profil/BOC/2023/ASTRA-BOC-NEW-Apinont-Suchewaboripont.jpg",
  },
  {
    name: "MULIAMAN DARMANSYAH HADAD",
    position: ["KOMISARIS INDEPENDENT", "darmansyah@mail.com"],
    imageSrc:
      "https://www.astra.co.id/Public/Images/profil/BOC/2023/ASTRA-BOC-NEW-Muliaman.png",
  },
  {
    name: "ANTONY JHON LIDDEL NIGHTINGALE",
    position: ["KOMISARIS", "AntonyLiddel@mail.com"],
    imageSrc:
      "https://www.astra.co.id/Public/Images/profil/BOC/2023/ASTRA-BOC-NEW-ANTONY-JOHN-LIDDEL.jpg",
  },
  {
    name: "BENJAMIN WILLIAM KESWICK",
    position: ["KOMISARIS", "williamkeswick@mail.com"],
    imageSrc:
      "https://www.astra.co.id/Public/Images/profil/BOC/2023/ASTRA-BOC-NEW-BENJAMIN-WILLIAM-KESWICK.jpg",
  },
  {
    name: "JHON RAYMOND WITT",
    position: ["KOMISARIS", "Jhonray@mail.com"],
    imageSrc:
      "https://www.astra.co.id/Public/Images/profil/BOC/2023/ASTRA-BOC-NEW-JOHN-RAYMOND-WITT.jpg",
  },
  {
    name: "STEPHEN PATRICK GORE",
    position: ["KOMISARIS", "patrick@mail.com"],
    imageSrc:
      "https://www.astra.co.id/Public/Images/profil/BOC/2023/ASTRA-BOC-NEW-S-P.jpg",
  },
  {
    name: "BENJAMIN HERREDENT BRICKS",
    position: ["KOMISARIS", "Herbricks@mail.com"],
    imageSrc:
      "https://www.astra.co.id/Public/Images/profil/BOC/2023/ASTRA-BOC-NEW-BEN-BIRKS.jpg",
  },
];

export default function Team() {
  return (
    <div className="max-w-screen-2xl mx-auto text-center py-10 min-h-[calc(100vh-16rem)]">
      <h1 className="text-3xl font-semibold mb-6 text-sky-700">Our Team</h1>
      <p className="mb-10 font-semibold">
        Segenap para pendiri Astra Internasional Tbk
      </p>
      <div className=" xl:flex grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-cols-auto m-auto md:flex-row justify-around">
        {teamMembers.map((member) => (
          <div key={member.name} className="max-w-xs mx-3 my-3">
            <Image
              className="w-40 h-40 object-cover rounded-full mx-auto" width={500} height={500}
              src={member.imageSrc}
              alt={member.name}
              style={{ borderWidth: 3, borderColor: "white" }} 
            />
            <h3 className="text-xl font-bold mt-4 text-sky-700">
              {member.name}
            </h3>
            <p className="text-gray-600">{member.role}</p>
            <p className="text-sm mt-2">{member.description}</p>
          </div>
        ))}
      </div>
      <Image src="https://www.astra.co.id/Public/Images/2023_BOC_rev.jpg"
      className='w-full'
      alt="komisaris" width={1000} height={1000} />
      <br />
      <br />
      <h1 className=" pb-5 font-bold text-2xl text-center text-sky-700 underline">
        DEWAN KOMISARIS ASTRA
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {commissioners.map((commissioner, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={commissioner.imageSrc}
              alt={commissioner.name}
              className="w-64 h-64 object-cover"  width={500} height={500}
            />
            <p className="mt-2 text-sm font-semibold">{commissioner.name}</p>
            <div className="text-xs text-gray-500 text-center">
              {commissioner.position.map((role, roleIndex) => (
                <p key={roleIndex}>{role}</p> 
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
