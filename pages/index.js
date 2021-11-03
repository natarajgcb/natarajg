import Head from 'next/head'
import Image from 'next/image'
import { MNGPage, MNGContainer, MNGNav, MNGNavLink } from '../components/MNGLayout'
import {
  MNGBOLD,
  MNGTitle,
  MNGH1,
  MNGH2,
  MNGH3,
  MNGBody,
  MNGFootP,
  MNGHindiHeading,
  MNGHindiTitle,
  MNGLandLaunchpad,
  MNGHummingbirdSpacer
} from '../components/MNGType'

export default function Home() {
  const mngprops = {
    meta: {
      title: "Master Nataraj G Healing & Art Practice",
      description: "How do we live abundantly as our highest and truest selves?"
    },
    og: {
      title: "Master Nataraj G Healing & Art Practice",
      description: "How do we live abundantly as our highest and truest selves?",
      image: "/img/gauralok.png"
    }
  };

  return (
    <>
      <MNGPage meta={mngprops.meta} og={mngprops.og}>
        <Image mt="mngr.17" width={600} height={900}
          src="/img/MasterNatarajGHome.jpg"
          alt="Photograph of Master Nataraj G"
          title="Master Nataraj G" />

        <MNGHindiHeading hindiText="गुरु नटराज जी" engText="MASTER NATARAJ G" />

        <MNGHindiTitle hindiText="मुक्ति की कला" engText="The Art of Liberation" />

        <MNGBody textAlign="center">How do we live abundantly as our truest and highest selves?</MNGBody>
      </MNGPage>
    </>
  )
}
