import type { ImageMetadata } from 'astro';
import msmeImg from '../../images/msme.webp';
import nsicImg from '../../images/nsic.webp';
import mnreImg from '../../images/sathyamev-jayathe.webp';

export interface CertificationItem {
  name: string;
  image: ImageMetadata;
  alt: string;
}

export interface CertificationsData {
  subtitle: string;
  title: string;
  items: CertificationItem[];
}

export const certificationsData: CertificationsData = {
  subtitle: "Our commitment to quality is underscored by",
  title: "Our certifications",

  items: [
    {
      name: "MSME",
      image: msmeImg,
      alt: "MSME Government of India certification"
    },
    {
      name: "NSIC",
      image: nsicImg,
      alt: "NSIC certification"
    },
    {
      name: "MNRE",
      image: mnreImg,
      alt: "Ministry of New and Renewable Energy certification"
    }
  ]
};