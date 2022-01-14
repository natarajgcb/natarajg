import Link from 'next/link'
import {
  Flex, Box, Text, Center, Image, Link as ChakraLink
} from '@chakra-ui/react'
import { MNGButton } from '../components/MNGButton'
import { MNGPage } from '../components/MNGLayout'
import {
  MNGH2,
  MNGH1,
  MNGH3,
  MNGBody,
  MNGHummingbirdSpacer
} from '../components/MNGType'

export default function PartnerSurvey() {
  const mngprops = {
    meta: {
      title: "Partner Survey * Master Nataraj G",
      description: "A brief survey that poses a few questions to deeply consider as we partner to end climate change and avert the annihilation of humanity."
    },
    og: {
      title: "Partner Survey * Master Nataraj G",
      description: "A brief survey that poses a few questions to deeply consider as we partner to end climate change and avert the annihilation of humanity.",
      image: "/img/partnersurvey/MNGPartnerSurvey.jpg"
    }
  };

  return (
    <MNGPage meta={mngprops.meta} og={mngprops.og}>

      <Image mt="mngr.17" mb="mngr.27" width="100%"
        src="/img/partnersurvey/MNGPartnerSurvey.jpg"
        alt="Photograph of Lovely Long Yellow Flower Petals on an open Sky Blue Background"
        title="Photograph of Lovely Long Yellow Flower Petals on an open Sky Blue Background" />

      <MNGH1>Partnering on Climate Change</MNGH1>

      <MNGBody>
        Please complete this brief survey that poses a few questions to deeply consider as we partner to end climate change and avert the annihilation of humanity.
      </MNGBody>
      <MNGBody>
        Your responses are sent to you and private to team members only.
      </MNGBody>

      <Center>
        <MNGButton href="https://0snvky636ri.typeform.com/to/QfMvDJOy">OPEN PARTNER SURVEY</MNGButton>
      </Center>

      <MNGH2>
        Master Nataraj G’s Survey Responses
      </MNGH2>
      <MNGBody>
        13 Jan 2022 via <a href="https://0snvky636ri.typeform.com/to/QfMvDJOy" rel="noreferrer" target="_blank">Typeform</a>
      </MNGBody>

      <MNGH3>
        1 What are your name, preferred pronouns and email address?
      </MNGH3>
      <MNGBody>
        Master Nataraj G, we/they/them, one@natarajg.space
      </MNGBody>

      <MNGH3>
        2 On who&apos;s land do you reside?
      </MNGH3>
      <MNGBody>
        Tongva and Chumash
      </MNGBody>

      <MNGH3>
        3 What does &quot;partner&quot; mean to you? How do you expect your partners to treat you and how do you intend to treat your partners?
      </MNGH3>
      <MNGBody>
        It implies an open, honest, 50-50 relationship where both parties are equal partners in caring for one another and any shared intentions, goals, visions and creative activity (work). For the partnership relationship to flourish with Peace, Love, Joy, Balance and Gratitude, individual intentions, goals, visions and creative activity must be openly shared and respectfully held by all partners as all partners give and take to find common ground, shared commitments and a shared vision. One shared vision may accommodate many individual visions, and, in practice, may be required to do so depending on the individuals involved.
      </MNGBody>
      <MNGBody>
        To effectively, openly and honestly share to be able to build together, we must communicate. At a base level, we intend to communicate honestly, respectfully and regularly with partners and expect that they do the same with us. If partners commit to this, they will self-heal and self-represent: when something is done within the partnership that is not working for any partner, they will speak up and the partnership will make changes. If ever any partner feels unable to self-represent, the partnership is not in a state of balance where energy is being shared 50-50. We intend to make changes to our perspectives and behaviors when this balance is lost and expect our partners to do the same.
      </MNGBody>

      <MNGH3>
        4 How do you ground and advance your practice of combating climate change? Are there any communities, elders or movements that you are actively part of and carrying forward?
      </MNGH3>
      <MNGBody>
        We are Tongva and are part of the thousands of generations of Indigenous People that have been fighting to protect and preserve Sovereignty and the inherent sacredness of all life with our Mother Earth. We are blessed to operate under the guidance and leadership of Tongva Elder Grandmother Gloria Arellanes.
      </MNGBody>
      <MNGBody>
        We operate in solidarity with the global movement for a Just Transition which we were introduced to by our partners at the Climate Justice Alliance as part of the Protecting Mother Earth 2018 conference sponsored by the Indigenous Environmental Network, the Nisqually Indian Tribe and Indigenous Climate Action.
      </MNGBody>
      <MNGBody>
        We are in alignment with the Emergent Strategy Ideation Institute and the magic that is adrienne maree brown.
      </MNGBody>
      <MNGBody>
        Our Master Nataraj G Healing & Art Practice has many revolutionary Elders, community members and students that span the arts and organizing: revolutionary musicians, filmmakers, spiritual leaders, scholars, educators and activists. Through our beloved community, we have connected with leading Climate Change experts such as Naomi Klein, Jeremy Rifkin and Alexandria Ocasio-Cortez. Please see details at: https://natarajg.space
      </MNGBody>

      <MNGH3>
        5 How do you think about and practice founding, designing, developing and operating an organization based on technology? Are there certain frameworks or practices you use to guide and organize your work?
      </MNGH3>
      <MNGBody>
        Given 20+ years of experience and training in software design and engineering across numerous industries and at varying levels of scale from local pilots and prototypes to international platforms used by millions of people, we think very broadly about technology, its role in organizations and the impact technology has on society and culture.
      </MNGBody>
      <MNGBody>
        Technology is on a steady march of becoming smaller, smarter, cheaper and more accessible (Moore&apos;s Law). It is systemic: the very fabric of our communications, economy and culture. We have to be very conscientious about how technology is designed, developed and deployed because its effects are so widespread and entangled with so many aspects of our day-to-day lives. For violent systemic injustices like racism and climate destruction that have been woven into our communications, economy and culture, technology can provide compelling solutions that quickly meet the needs of many being harmed.
      </MNGBody>
      <MNGBody>
        We have to be very aware of the motivations behind technology and the ways in which technology has reinforced or created more violence in the very systems it was designed to &quot;help.&quot; With this understanding, we can ensure our technological advances are grounded in a solid understanding of exactly how technology can increase or decrease violence in our world so that we make conscious decisions to design, develop and deploy technology that reduces violence and ends climate catastrophe.
      </MNGBody>
      <MNGBody>
        This requires radical thinking and visioning. We are guided by the writings of Arundhati Roy on the militaristic roots of modern-day technology sitting in people&apos;s pockets and the destructive neoliberal socioeconomic framework that pushes Silicon Valley and other new companies to claim vehemently how they are going to &quot;save the planet&quot; and &quot;serve people&quot; while they end up doing the exact opposite as huge amounts of carbon and resources go to waste on serving rich white people tacos via automated robots.
      </MNGBody>
      <MNGBody>
        On an operational level, we employ Agile and Lean Startup software design and engineering principles and practices spearheaded by entrepreneurial leaders such as Eric Ries. We also build community with and rely heavily on Open Source Software developers that power the world&apos;s top technology organizations and needs. The ecosystem is vast, but if you have further questions, please feel free to reach us at our email shared above.
      </MNGBody>

      <MNGH3>
        6 How do you intend to practice including all voices, especially those most impacted by climate change, in collectively making decisions and directing resources to effectively end climate change?
      </MNGH3>
      <MNGBody>
        By partnering directly with the people that are most impacted by climate change and often left out of discussions about &quot;solutions&quot; -- folks we often refer to as, The People.  We will also implement proven inclusive community-driven decision-making, design, development, deployment and assessment strategies
      </MNGBody>
      <MNGBody>
        We have six years of experience in doing this with our work on Decolonize Daily and building community around the project.  In particular, we connected with the Climate Justice Alliance -- an organization specifically created by and for frontline communities and organizations most impacted by climate change to establish a new center of gravity and formidable force in the climate movement.  Climate Justice Alliance has adopted the, Jemez Principles for Democratic Organizing (1996), which we are aligned with.
      </MNGBody>
      <MNGBody>
        We intend to partner more deeply with the Climate Justice Alliance and build more partnerships with groups in the climate movement based on our Vision, Values and the Jemez Principles for Democratic Organizing.
      </MNGBody>
      <MNGBody>
        Through our experience with Non-Profits, NGOs, Conscious Tech Startups, Decolonize Daily and independent organizing, we have become very creative in using and distributing resources, funding and blessings shared with us while effectively offering our own energy, labor and creations. This allows us to direct resources aligned with our organizing partners and shared principles so that the greatest good is done to end systemic injustice and climate catastrophe. We must further this work so that resources are directed away from those abusing The People and The Planet while directing resources toward those taking care of The People and The Planet.
      </MNGBody>

      <MNGH3>
        7 How do you intend to radically transition away from the business-as-usual colonial, consumerist, corporate structures and mindsets that have led to societal, humanitarian and climate collapse so that we may transition toward revolutionary loving, regenerative and cooperative structures and mindsets that restore deep harmony in each being living in alignment with our Mother Earth?
      </MNGH3>
      <MNGBody>
        We have transformed our selves through rigorous spiritual practice to find the roots of colonialism, consumerism and corporate structures and mindsets within us. This has been a painful process that has taken numerous years and will continue though we have become skilled enough that the pain is transformed directly into learning that we are grateful for. This process has been crystallized into a Healing & Art Practice that we lead allowing us to continue to heal, change and build our New World rooted in the Divine Energies of Peace, Love, Joy, Balance and Gratitude. On a daily basis, we are greeted with radical and revolutionary visions of this New World as well as others who share the same level of commitment, devotion and dedication to caring for our sacred Mother Earth, Our Selves, Our Plant and Animal Relatives, All Future Generations and All Beings.
      </MNGBody>
      <MNGBody>
        It is through this lifetime commitment and the community that continues to grow around it that enables us to see beyond the confines of business-as-usual colonial, consumerist, capitalist structures and mindsets that have led to societal, humanitarian and climate collapse so that we may clearly envision and transition toward revolutionary loving, regenerative and cooperative structures and mindsets that restore deep harmony in each being living in alignment with our Mother Earth.
      </MNGBody>

      <MNGH3>
        8 How do you intend to educate and empower people, especially those that deny climate change or have consciously or unconsciously tied their existence, livelihood and self-worth to extractive colonialist industries, to learn the facts of climate science and make mental, emotional and behavioral changes that may incur significant cost?
      </MNGH3>
      <MNGBody>
        We intend to educate and empower others, especially those resistant to the reality of climate change and the overwhelming evidence of the factors causing it, by educating ourselves, partnering with educational experts and building peaceful, mutually beneficial partnerships with folks that are resistant.
      </MNGBody>
      <MNGBody>
        Educating ourselves means reading, writing and maintaining critically engaged discussions with leading experts on all matters related to climate change and the intersectional systemic violence bound up with it. In particular, we need to focus on the ever-evolving challenges and solutions that are part of an extremely complex climate catastrophe so that we are sharing the best possible education we can with our community. A key part of this is partnering with those that have already dedicated lifetimes of effort on this extremely complex challenge, not being afraid to say we do not have a solution and deferring to others so that we ensure progress on the shared goal is always being made.
      </MNGBody>
      <MNGBody>
        Building peaceful, mutually beneficial partnerships with folks that are resistant to change, resistant to truth or actively trying to harm others and the planet is very important and very difficult to do. As the world becomes more and more politically polarized while the catastrophic end of humanity looms ever closer, we see the need for a radical change in everything we do grow more and more pressing. It&apos;s like a pressure cooker getting ready to blow. We must ensure that when the temperature gets too high, there are release valves to let off steam instead of experiencing the cooker explode in a violent, bloody revolution and/or war. We have seen it happen in the past and want to ensure it does not happen now. However, without finding some sort of common ground with those that refuse to change and continue to cause harm to others and the planet, it will be very difficult to avoid significant conflict. It seems that life on Earth itself would be enough common ground to radically change, but the proceedings at COP26 in late 2021 show us otherwise. There is a significant difference between saying we will do something and accepting full responsibility for that thing and actually doing it.
      </MNGBody>
      <MNGBody>
        The question of who&apos;s responsibility it is to take care of the Earth and its people is another open question that needs to be addressed for people that may be attaching themselves to their jobs, their work, their country, their gender, their roles in relationship to others and their bank balances. What we see happening is that these false attachments give people a sense that they are somehow separate from living off of the abundance that Mother Earth provides and thereby connected to all beings here. If they pollute and assume that because of their reduced self-image and reduced self-worth, they are somehow exempt from caring for the Earth and other people to ensure their own existence, they are sorely confused. By assuming it is the government&apos;s responsibility or the scientists or the technologists or the companies or anyone other than themselves, they are actually missing a crucial part of their infinite self-image, infinite self-worth and the power they have to change things.
      </MNGBody>
      <MNGBody>
        A simple example: it is the government&apos;s stated goal to ensure the safety and security of their people. They have failed and continue to fail. It then falls on the people directly or companies. People and companies were not set up or designed to handle these things, so they also fail because they need to exert extra effort to cover for the failings of those they voted into office. So, instead of the solutions we need with everyone working together, we see everyone feeling like failures and unable to actually do anything exactly when we need it the most.
      </MNGBody>
      <MNGBody>
        In a situation like this, it is absolutely imperative that each individual, each government official and all companies simple accept they have failed. Reckon with it. Heal from this utter failure. COVID was a wake up call exactly for this: Mother Earth telling us to go to our rooms and think about what we&apos;ve done. Take care of our health, because we are sick and sickening. She&apos;s sick of it. She&apos;s sick of us. She will keep showing and telling us by delivering more outbreaks, more unpredictable, destructive weather and more death, disease, domination, delusion and dissonance until we get the message, shut everything down that is harmful, go and stay in our rooms and actually do the necessary work to heal, change and build anew. Until this is done, especially for folks that are attached to a world that no longer exists, we will not be able to move forward without extreme violence.
      </MNGBody>
      <MNGBody>
        If we cannot transition through this &quot;lockdown&quot; without crystal clear plans to make mental, emotional and behavioral changes that may incur significant cost -- mental, emotional and behavioral cost, all this actually has absolutely nothing to do with money -- we will not be able to avert the absolute annihilation of humanity by 2030. If anyone is alive at that point, they will be another species, humanity will be over.
      </MNGBody>
      <MNGBody>
        So, at present, the best approach is to aggressively empower those most actively beneficial for The People and The Planet while completely crippling those that choose to continue to harm The People and The Planet. This need not be painful or violent. Simply shift all resources: first those that are non-material such as thoughts, feelings and spiritual energy and then, second, material resources such as food, housing, healthcare and finally, money, away from those that are harming The People and The Planet and move them toward those that are healing The People and The Planet. With all the &quot;free time,&quot; those that are harmful will be completely consumed with only one thing: education. Educating themselves on shifting away from harmful violence and toward peaceful healing. Their lives will actually be infinitely better than before and they will feel it with their health improving, their dependences dropping and their relationships becoming fruitful, joyful, peaceful, loving, balanced and filled with gratitude. It may be difficult to &quot;sell them&quot; on this, which is why it will happen surreptitiously. They won&apos;t even know, they will simply be following along all the same stuff they have been and an intuition will dawn on them, they will &quot;wake up,&quot; and the changes will naturally unfold in their lives, resulting in a better world for us all.
      </MNGBody>
      <MNGBody>
        The reason this is inevitable is because there are far more Peaceful, Loving, Joyful, Balanced and Grateful beings committed to living in an absolute Heaven on Earth than there are those that are attached to death, disease, domination, delusion and dissonance. Even if people believe Heaven is elsewhere and they are free to trash our Mother Earth and her People, their souls demand living in peace here on Earth, however twisted their private perspective of peace may be.
      </MNGBody>
      <MNGBody>
        We are working to ensure they connect with their souls so their lives naturally move toward Peace. We look forward to our New World of Peace, Love, Joy, Balance and Gratitude.
      </MNGBody>

      <MNGH3>
        9 How do you intend to hold yourself, your communities, leaders and organizations accountable for their words and actions so that we can actually move forward with effective solutions instead of repeat the same mistakes over and over again?
      </MNGH3>
      <MNGBody>
        For ourselves: operating in alignment with a beloved community devoted to Peaceful, Loving, Joyful, Balanced and Grateful living. Being in constant open, honest communication with our beloved community and continuously growing our spiritual practice so more Truth is constantly illuminating within us until Truth is all there is.
      </MNGBody>
      <MNGBody>
        For our communities, leaders and organizations: once accountability is personally strongly established within, we need to consider what our communities, leaders or organizations are saying and doing and if they are in alignment with themselves and our shared intentions, values, visions and work. This requires a significant amount of quality communication and a lot of Trust, the basis of Love. We need to clearly communicate when we sense folks&apos; actions and words do not line up or we simply do not understand their actions and words. We need to do this within boundaries that honor our own need for care. We cannot overextend ourselves such that we expend so much energy on ensuring others are accountable that we are not able to take care of ourselves or our responsibilities or items we are accountable for. In these cases, once our limits are reached, we must have a mechanism in place within community where we can make it known that we do not agree with certain words and actions coming from a specific person so they are aware and have a chance to respond.
      </MNGBody>
      <MNGBody>
        Depending on the community, speaking up may or may not incur significant cost or consequences. This is where self-care comes into play. Ideally, we are operating in a safe space, but it is far from an ideal world. When seeking accountability from others, we need to be prepared for retaliation and harm directed our way. This can be mitigated by working with supportive community in cases of abuse where folks are regularly, repeatedly saying one thing and doing another that results in violations of shared principles, visions, values and harm to others.
      </MNGBody>
      <MNGBody>
        This is how we can avoid repeating the same things again and again -- stay educated and when we see our people falling into the same traps as before, be sure to make them aware in a safe way that respects them and protects us. Hopefully, they realize their error or have a reasonable explanation that allows the relationship to change and grow while gaining support from community to remain accountable.
      </MNGBody>
      <MNGBody>
        If they continue operating outside of any accountability for harmful actions even after being made aware of their actions, we have evidence to share with community for further support and resolution to end the harm and take care of those that feel it is ok to not be held accountable by folks they are harming so they are prevented from leveling further harm.
      </MNGBody>

      <MNGHummingbirdSpacer />

    </MNGPage>
  )
}
