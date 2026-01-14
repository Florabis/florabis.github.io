---
title: Officials
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const high_gov = [
  {
    avatar: 'https://cdn.discordapp.com/avatars/689236385798160496/f76143de9f10632c90a01fb33f2e94d4.webp',
    name: 'Cesarrr505',
    title: 'Soberante'
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/1407814555811446865/1aa4c04be31eb445b546202d0e9550a2.webp',
    name: 'OldEraStory',
    title: 'Alcaldesa Mayor'
  },  
  {
    avatar: 'https://cdn.discordapp.com/avatars/1236136879796129903/5eb166418cf108990b1a0a5947e15bcc.webp',
    name: 'RealityTheory_',
    title: 'Royal Advisor'
  }
]

const council_members = [
  {
    avatar: 'https://cdn.discordapp.com/avatars/1407814555811446865/1aa4c04be31eb445b546202d0e9550a2.webp',
    name: 'OldEraStory',
    title: 'Economy & Finance'
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/450908675457024001/586019f0bc4648a106294f13827b5f01.webp',
    name: 'borito185',
    title: 'Agriculture & Resources'
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/1082576656952201281/3935839bd0df8ebbc432a01b64230317.webp',
    name: 'BrainGoesBinted',
    title: 'Defense & Security'
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/1062287168535539743/a_87705fbfcc6093247266d335617d2290.webp',
    name: 'korbyr',
    title: 'Population & Settlement'
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/743919936400916550/62b4c43fc504b80674f166ba995d7543.webp',
    name: 'NocturnalDaedra',
    title: 'Law & Justice'
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/306502140640100363/fe7ad5b2c18272dc0be301bf58b78ce2.webp',
    name: 'NicoWhatever',
    title: 'Work & Infrastructure'
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/511266488930533396/a6f7dce66da8ff1190969b6430d96016.webp',
    name: 'spicon17',
    title: 'Mining & Natural Resources'
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/1324424429849153648/976741fe5e44d78068e3d782f2a0d011.webp',
    name: 'demobottle12',
    title: 'Culture & Heritage'
  }
].sort((a, b) =>
  a.title.localeCompare(b.title)
)

</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Government Officials
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="high_gov" />
  <VPTeamPageSection>
    <template #title>Councilors</template>
    <template #members>
      <VPTeamMembers size="small" :members="council_members" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
