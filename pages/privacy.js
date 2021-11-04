import Link from 'next/link'
import {
  Center, Image, Link as ChakraLink
} from '@chakra-ui/react'
import { MNGButton } from '../components/MNGButton'
import { MNGPage } from '../components/MNGLayout'
import {
  MNGH1,
  MNGBody,
  MNGHindiTitle,
  MNGHummingbirdSpacer
} from '../components/MNGType'
import {
  MNGWordsOfLove,
  MNGWordsOfLoveText,
  MNGWordsOfLoveFace
} from '../components/MNGWordsOfLove'

export default function Privacy() {
  const mngprops = {
    meta: {
      title: "Privacy * Master Nataraj G",
      description: "Privacy Policy for the Master Nataraj G Healing and Art Practice: 50-50. We do not collect any information or cookies from you. Anything we ask from you, we share with you about us in kind, 50-50, building an equal relationship."
    },
    og: {
      title: "Privacy * Master Nataraj G",
      description: "Privacy Policy for the Master Nataraj G Healing and Art Practice: 50-50. We do not collect any information or cookies from you. Anything we ask from you, we share with you about us in kind, 50-50, building an equal relationship.",
      image: "/img/stubs/MNGPrivacy.jpg"
    }
  };

  return (
    <MNGPage meta={mngprops.meta} og={mngprops.og}>
      <Image mt="mngr.17" mb="mngr.44" width="100%"
        src="/img/stubs/MNGPrivacy.jpg"
        alt="Master Nataraj G Privacy Policy"
        title="Master Nataraj G Privacy Policy" />

      <MNGH1>Privacy Policy: 50-50</MNGH1>

      <MNGBody>
        We are here to take care of your privacy, security, safety and health. We do not collect any information or cookies from you. Anything we ask from you, we share with you about us in kind, 50-50, building an equal relationship. For example, your email address. Your email address comes to us via our donations and payment processors if you choose to share a donation or payment with us. In a 50-50 exchange, here is our email address: <a href="mailto:one@natarajg.space?subject=MNG%20Privacy">one@natarajg.space</a>. Drop us a line!

        <br/><br/>If you choose to practice Yoga with us in a one-on-one capacity, we act as personal health practitioners for you and will share more detailed HIPAA-Compliant privacy policies with you. We hold your privacy, security, safety and health with care in the highest confidence to ensure you can be as open and honest with us about your needs, desires and experiences.

        <br/><br/>We use only the highest security, end-to-end encrypted communication platforms, having left behind providers such as Google and Zoom, who have been caught compromising the privacy of their community.

        <br/><br/>Our donation and payments are privately and securely handled by GiveForms and Stripe. You can see their Privacy Policies <ChakraLink as={Link} href="https://www.giveforms.com/privacy" target="_blank">here (GiveForms)</ChakraLink> and <ChakraLink as={Link} href="https://stripe.com/privacy" target="_blank">here (Stripe)</ChakraLink>.

        <br/><br/>Questions? Requests? Please <a href="mailto:one@natarajg.space?subject=MNG%20Privacy">send Master Nataraj G a note</a>.
      </MNGBody>

      <MNGHummingbirdSpacer />

    </MNGPage>
  )
}
