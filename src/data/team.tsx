import Image from "next/image";
import TeamImages from "@/assets/team";
import { Member } from "src/types";

export const team: Member[] = [
  {
    avatar: (
      <Image
        src={TeamImages.ErinFelisImage}
        alt='ErinFelis'
        objectFit='cover'
        className='rounded-3xl'
        layout='fill'
        placeholder='blur'
      />
    ),
    fullName: "Erin Felis",
    title: "Artist",
    links: [
      {
        url: "https://www.instagram.com/erin.felis/",
        label: "instagram",
      },
    ],
  },
  {
    avatar: (
      <Image
        src={TeamImages.AlexsandraOtmahovaImage}
        alt='AlexsandraOtmahova'
        objectFit='cover'
        className='rounded-3xl'
        layout='fill'
        placeholder='blur'
      />
    ),
    fullName: "Alexsandra Otmahova",
    title: "Artist",
    links: [
      {
        url: "https://instagram.com/klu.arty?utm_medium=copy_link",
        label: "instagram",
      },
    ],
  },
  {
    avatar: (
      <Image
        src={TeamImages.TatianaBiryukovaImage}
        alt='TatianaBiryukova'
        objectFit='cover'
        className='rounded-3xl'
        layout='fill'
        placeholder='blur'
      />
    ),
    fullName: "Tatiana Biryukova",
    title: "Artist",
    links: [
      {
        url: "https://instagram.com/tanisia_art?utm_medium=copy_link",
        label: "instagram",
      },
    ],
  },
  {
    avatar: (
      <Image
        src={TeamImages.AnnKharchenkoImage}
        alt='AnnKharchenko'
        objectFit='cover'
        className='rounded-3xl'
        layout='fill'
        placeholder='blur'
      />
    ),
    fullName: "Ann Kharchenko",
    title: "PR Agent",
    links: [
      {
        url: "https://instagram.com/kharchenko_anny",
        label: "instagram",
      },
    ],
  },
  {
    avatar: (
      <Image
        src={TeamImages.ViktoriiaAbramovychImage}
        alt='Viktoriia Abramovych'
        objectFit='cover'
        className='rounded-3xl'
        layout='fill'
        placeholder='blur'
      />
    ),
    fullName: "Viktoriia Abramovych",
    title: "Artist consultant, SMM",
    links: [
      {
        url: "https://www.instagram.com/miss_avl/",
        label: "instagram",
      },
    ],
  },
  {
    avatar: (
      <Image
        src={TeamImages.JohnMevisImage}
        alt='JohnMevis'
        objectFit='cover'
        className='rounded-3xl'
        layout='fill'
        placeholder='blur'
      />
    ),
    fullName: "John Mevis",
    title: "UI / UX Designer",
    links: [
      {
        url: "https://www.instagram.com/john.mevis/",
        label: "instagram",
      },
    ],
  },
  {
    avatar: (
      <Image
        src={TeamImages.IhorLutzImage}
        alt='IhorLutz'
        objectFit='cover'
        className='rounded-3xl'
        layout='fill'
        placeholder='blur'
      />
    ),
    fullName: "Ihor Lutz",
    title: "Lead graphic designer",
    links: [
      {
        url: "https://www.instagram.com/ihor.lutz/",
        label: "instagram",
      },
    ],
  },
  {
    avatar: (
      <Image
        src={TeamImages.OleksandrShkuropatImage}
        alt='OleksandrShkuropat'
        objectFit='cover'
        className='rounded-3xl'
        layout='fill'
        placeholder='blur'
      />
    ),
    fullName: "Oleksandr Shkuropat",
    title: "Marketing manager",
    links: [
      {
        url: "https://www.instagram.com/showtimesanya/",
        label: "instagram",
      },
    ],
  },
  {
    avatar: (
      <Image
        src={TeamImages.DanielChermanImage}
        alt='DanielCherman'
        objectFit='cover'
        className='rounded-3xl'
        layout='fill'
        placeholder='blur'
      />
    ),
    fullName: "Daniel Cherman",
    title: "Head of Development & Integration. Co-founder CGT group",
    links: [
      {
        url: "https://instagram.com/cherman.daniel?utm_medium=copy_link",
        label: "instagram",
      },
    ],
  },
  {
    avatar: (
      <Image
        src={TeamImages.ArtemTrubiloImage}
        alt='ArtemTrubilo'
        objectFit='cover'
        className='rounded-3xl'
        layout='fill'
        placeholder='blur'
      />
    ),
    fullName: "Artem Trubilo",
    title: "Co-founder CGT group",
    links: [
      {
        url: "https://instagram.com/artemtrubylo?utm_medium=copy_link",
        label: "instagram",
      },
    ],
  },
  {
    avatar: (
      <Image
        src={TeamImages.ArtemGolubImage}
        alt='ArtemGolub'
        objectFit='cover'
        className='rounded-3xl'
        layout='fill'
        placeholder='blur'
      />
    ),
    fullName: "Artem Golub",
    title: "Co-founder",
    links: [
      {
        url: "https://www.instagram.com/art.inlbs/",
        label: "instagram",
      },
    ],
  },
  {
    avatar: (
      <Image
        src={TeamImages.ArtyrBershImage}
        alt='ArtyrBersh'
        objectFit='cover'
        className='rounded-3xl'
        layout='fill'
        placeholder='blur'
      />
    ),
    fullName: "Artyr Bersh",
    title: "Co-founder",
    links: [
      {
        url: "https://www.instagram.com/artyr_bersh/",
        label: "instagram",
      },
    ],
  },
];
