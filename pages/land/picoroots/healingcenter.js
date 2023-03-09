import Link from 'next/link'
import {
  Flex, Box, Text, Center, Image, Link as ChakraLink,
  List, ListItem, ListIcon, UnorderedList, Icon
} from '@chakra-ui/react'
import { MNGButton } from '../../../components/MNGButton'
import { MNGPage, MNGNote } from '../../../components/MNGLayout'
import {
  MNGTitle,
  MNGH1,
  MNGH2,
  MNGH3,
  MNGBody,
  MNGFootP,
  MNGCalloutP,
  MNGHindiHeading,
  MNGHindiTitle,
  MNGHummingbirdSpacer
} from '../../../components/MNGType'
import { RiPlantFill } from 'react-icons/ri'
import { FaFistRaised } from 'react-icons/fa'

export default function YogaPico() {
  const mngprops = {
    meta: {
      title: "Healing Center Community Campaign * Master Nataraj G",
      description: "Join the Community Campaign to remove harmful Eddie's Liquor from the Pico Neighborhood and build a Healing Center in its place."
    },
    og: {
      title: "Healing Center Community Campaign * Master Nataraj G",
      description: "Join the Community Campaign to remove harmful Eddie's Liquor from the Pico Neighborhood and build a Healing Center in its place.",
      image: "/img/land/picoroots/ThursCall.1.2022.04.21.jpg"
    }
  };

  return (
    <MNGPage meta={mngprops.meta} og={mngprops.og}>
      <Image mt="mngr.17" width="100%"
        src="/img/land/picoroots/ThursCall.1.2022.04.21.jpg"
        alt="Current action: participate in the Thursday organizing call"
        title="Current action: participate in the Thursday organizing call" />

      <MNGH1 mt="mngr.44">
        Healing Center Community Campaign
      </MNGH1>

      <MNGFootP>
        Published 21 Apr 2022
      </MNGFootP>

      <MNGBody>
        Welcome to the community-based campaign to remove harmful Eddie&#39;s Liquor and its staff from the Pico Neighborhood and build a Healing Center in its place. This campaign is a response to the violent and illegal forced eviction of the Pico Roots Revolutionary Garden and its community. This violent, illegal eviction included the loss of more than half of the living plants and soil cultivated over nine months at the garden by a community of upwards of 50 local residents. Staff at Eddie&#39;s Liquor also physically assaulted local community healer and artist, Master Nataraj G, who sought a peaceful resolution to the conflict.
        <br/><br/>
        Pico Roots Revolutionary Garden represents a peaceful movement rooted on occupied Tongva land in the lovely Pico Neighborhood of Santa Monica that provides a path to a New World of Peace, Love, Joy, Balance and Gratitude through re-building our connection with Mother Earth to live in alignment with our environment, all people and all beings by growing our own food. Healthier, safer, more resilient during a global health crisis (Covid and related pandemics of mental illness and various forms of violence) and looming environmental collapse. Folks experiencing the ongoing systemic violence of racism, colonization, capitalism and consumerism harming our People and our Planet need better alternatives to take charge of their health, housing, food access and transportation.
        <br/><br/>
        Jump to:<br/>
         - What happened and why is it harmful, violent and illegal? (Overview + Details + Case)<br/>
         - What can we do about it? (Demands / Campaign)<br/>
         - How do we get involved? (Actions)<br/>
        <br/>
        On Sunday afternoon, 3 April 2022, Prince Sahib Singh of Eddie&#39;s Liquor located at the corner of 20th and Pico Blvd in the Pico neighborhood of Santa Monica on occupied Tongva land physically assaulted peaceful community Healer & Artist, Master Nataraj G. The assault took place in front of the Pico Roots Revolutionary Garden also at the corner of 20th and Pico. Singh and Praveen (pictured in the red, gray and black striped shirt) threatened to shut down and destroy the garden that day, claiming that Master Nataraj G and the Pico Roots community were trespassing. This could not be further from the truth due to the fact that the garden had been in operation for nine months serving the community with more than ten local residents including Master Nataraj G visiting the garden daily to take care of the plants, soil and space. This was only possible due to an agreement made with Singh and Praveen as well as an amenable relationship between them and the entire Pico Roots community to be able to operate the garden on a daily basis for nine months.

      </MNGBody>

      <MNGNote>
        <MNGH3>
          Take Action!
        </MNGH3>
        <MNGBody>
          <Icon as={FaFistRaised} /> Join calls. Thurs. 5pm. link link info
          <br/><br/>
          <Icon as={FaFistRaised} /> Spread the word and actions: share video, petitions, this page and more. The more local organizations you share with, the better.
          <br/><br/>
          <Icon as={FaFistRaised} /> Show up for actions.
          <br/><br/>
          <Icon as={FaFistRaised} /> Sign up for updates. (join email list)
        </MNGBody>
      </MNGNote>

      <MNGFootP>
        Published 2 Apr 2022; Updated 16 Apr 2022
      </MNGFootP>

      <MNGBody>
        Pico Roots Revolutionary Garden was a Community Garden and Urban Farm located at the corner of 20th Street and Pico Avenue in the lovely Pico Neighborhood of Santa Monica, California on occupied Tongva land (<a href="https://goo.gl/maps/w91urxADWXNq1zhe8" target="_blank" rel="noreferrer">map</a>) from July 2021 to April 2022. We grew healthy, better-than-organic, natural living foods using sustainable, regenerative gardening practices charged with biofield and energetic healing practices that result in fresh, tasty, nourishing food that improves the health of the soil, the health of our neighborhood and our entire Mother Earth.
      </MNGBody>

      <MNGH2>Building a New World of Peace, Love, Joy, Balance and Gratitude Together</MNGH2>

      <MNGBody>
        We shared all food freely with neighbors and visitors to the garden, many of whom are food insecure, housing insecure and in need of holistic healthcare that addresses mental, emotional, spiritual and physical wellbeing. As our garden was located next to a liquor store, across the street from a Burger King and between two half-way homes, many neighbors expressed gratitude for a healthy alternative to food and drink that are harmful, addictive and often the only food options for local residents of lower socio-economic standing, experiencing the ongoing systemic violence of racism, colonization, capitalism and consumerism harming our People and our Planet.
        <br/><br/>
        The Pico Roots Revolutionary Garden community continues to serve as a space for anyone and everyone to rebuild their relationship with Mother Earth, get involved in taking care of Her and experiencing how She abundantly takes care of us. We believe that no one can own the land just as no one can own the air, water or sunshine. We are here to take care of these free and abundant life-giving gifts so that we may all thrive and prosper in balance with the universe and one another. We invite all beings to honor their sense of belonging with the Earth, with plants, animals and people, and with the Spiritual Energies that connect us all at Pico Roots Revolutionary Garden. This is an affordable, practical, easily accessible way for all people to revolutionize our individual, collective and planetary health and wellbeing while enjoying fresh, tasty food and spreading Peace and Love.
        <br/><br/>
        The Pico Roots Revolutionary Garden is a partnership of many dedicated community members and organizations residing in Santa Monica and Venice. Please <a href="mailto:one@natarajg.space?subject=PicoRoots" rel="noreferrer" target="_blank">email Master Nataraj G</a> or <a href="https://matrix.to/#/#picoroots:matrix.org" target="_blank" rel="noreferrer">join our secure chat room</a> to connect, organize and grow the garden with us.
        <br/><br/>
        The Pico Roots Revolutionary Garden is also aligned and in solidarity with numerous international organizations and movements to radically change our ways of life such that we are all individually and collectively far healthier while ensuring Mother Earth, our home, is well taken care of. Some of these organizations and movements include: #savesoil with Sadhguru, The United Nations and the Isha Foundation; Fridays for Future with youth activist leader Greta Thunberg; Breaking Boundaries with climate scientist Johan Rockström; Green New Deal with Alexandria Ocasio-Cortez, Naomi Klein and Jeremy Rifkin; Movements for Indigenous Sovereignty and Black Liberation with the Climate Justice Alliance and our local Indigenous Native and Black Elders.
        <br/><br/>
        We honor the Tongva, Chumash and neighboring Indigenous lands we are on (the Los Angeles basin region) and share our Energy to take care of and grow the Pico Roots Revolutionary Garden so we may all live in Abundance, aligned with our Highest and Truest Infinite Self, for a New World rooted in the Divine Energies of Peace, Love, Joy, Balance and Gratitude.
      </MNGBody>

      <MNGH2>
        Get Involved
      </MNGH2>
      <MNGBody>
        Following are a few ways that you are invited to get involved with the Pico Roots Revolutionary Garden community. Please <a href="mailto:one@natarajg.space?subject=PicoRoots" rel="noreferrer" target="_blank">email Master Nataraj G</a> or <a href="https://matrix.to/#/#picoroots:matrix.org" target="_blank" rel="noreferrer">join our secure chat room</a> to connect, ask questions and build together.
      </MNGBody>
      <List spacing={2}>
        <ListItem>
          <ListIcon as={RiPlantFill} color="green.500" />
          Gardening: planting, watering, harvesting, composting daily at Pico Roots or learning how to grow your own food at home or other properties you may belong to.
        </ListItem>
        <ListItem>
          <ListIcon as={RiPlantFill} color="green.500" />
          Food: harvesting, cooking and serving food with the community, especially those in need of healthy, nourishing, uplifting food options.
        </ListItem>
        <ListItem>
          <ListIcon as={RiPlantFill} color="green.500" />
          Building: we recently received a microgrant from the City of Santa Monica to build two new beds at Pico Roots Revolutionary Garden and will be physically making space and working with wood and other materials at the garden together.
        </ListItem>
        <ListItem>
          <ListIcon as={RiPlantFill} color="green.500" />
          Solar Energy: we have partnered with local solar energy experts, farmers and food artisans to craft the Pico Roots Flower Power Solar Cart to be able to share the garden&#39;s bounty and clean, renewable solar energy with our community. Join us in crafting and building this revolutionary renewable energy platform to sustainably connect us all.
        </ListItem>
        <ListItem>
          <ListIcon as={RiPlantFill} color="green.500" />
          Education: helping with film production on our Master Gardening series of videos to share education, training and guidance on how to grow your own food using healthy regenerative practices. We need folks that love filmmaking: photographers, cinematographers, editors, producers, sound specialists and community builders.
        </ListItem>
        <ListItem>
          <ListIcon as={RiPlantFill} color="green.500" />
          Storytelling: the garden and the community have many stories to tell that are revolutionizing the way we relate to the land and to one another for a far more Peaceful, Loving, Joyful, Balanced and Grateful way of life. Join in helping gather and share these stories to inspire and include others.
        </ListItem>
        <ListItem>
          <ListIcon as={RiPlantFill} color="green.500" />
          Community Organizing: building relationships with community to spread the benefits of living healthy, aligned with our Mother Earth and in harmony with one another.
        </ListItem>
        <ListItem>
          <ListIcon as={RiPlantFill} color="green.500" />
          Policy Change: working with legislative groups to craft and enact policies that will encourage more people to grow their own food, live healthier lives aligned with Mother Earth in harmony with neighbors. We have recently been involved in classifying Santa Monica as an Urban Agricultural Incentive Zone (UAIZ) which will grant property owners tax breaks and other incentives for growing food at their properties.
        </ListItem>
        <ListItem>
          <ListIcon as={RiPlantFill} color="green.500" />
          Painting: many community members are artists that enjoy painting. We are creating a community painting and organizing to create a community mural honoring the land and the revolutionary movement at Pico Roots Revolutionary Garden.
        </ListItem>
        <ListItem>
          <ListIcon as={RiPlantFill} color="green.500" />
          Music: many community members are musicians and we will be setting up a performance space at Pico Roots Revolutionary Garden for local musicians to share music with the community.
        </ListItem>
        <ListItem>
          <ListIcon as={RiPlantFill} color="green.500" />
          Art: many community members are artists and we will be setting up an art gallery and events at Pico Roots Revolutionary Garden to share art with the community.
        </ListItem>
      </List>

      <MNGBody>
        Please <a href="https://matrix.to/#/#picoroots:matrix.org" target="_blank" rel="noreferrer">join our secure chat room</a> or <a href="mailto:one@natarajg.space?subject=PicoRoots" rel="noreferrer" target="_blank">email Master Nataraj G</a> if you have any questions about the Pico Roots Revolutionary Garden.
      </MNGBody>

      <MNGHummingbirdSpacer />

    </MNGPage>
  )
}
