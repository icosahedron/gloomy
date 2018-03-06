import { HEALTH_POOL } from '../HEALTH_POOL';
import { PERK } from '../PERK';
import { RACE } from '../RACE';
import ID from './ID';

export default {
  [ID.BRUTE]: {
    id: ID.BRUTE,
    name: 'Brute',
    color: '#71d0e4',
    race: RACE.INOX,
    handSize: 10,
    hp: HEALTH_POOL.LARGE,
    starter: true,
    perks: [
      PERK.REMOVE2_NEG1,
      PERK.REPLACE1_NEG1_WITH1_POS1,
      PERK.ADD2_POS1,
      PERK.ADD2_POS1,
      PERK.ADD1_POS3,
      PERK.ADD3_ROLLING_PUSH1,
      PERK.ADD3_ROLLING_PUSH1,
      PERK.ADD2_ROLLING_PIERCE3,
      PERK.ADD1_ROLLING_STUN,
      PERK.ADD1_ROLLING_STUN,
      PERK.ADD1_ROLLING_DISARM_AND_ADD1_ROLLING_MUDDLE,
      PERK.ADD1_ROLLING_TARGET,
      PERK.ADD1_ROLLING_TARGET,
      PERK.ADD1_POS1_SHIELD1,
      PERK.IGNORE_NEGATIVE_ITEM_EFFECTS_AND_ADD1_POS1,
    ],
  },
  [ID.CRAGHEART]: {
    id: ID.CRAGHEART,
    name: 'Cragheart',
    color: '#b0bd44',
    race: RACE.SAVVAS,
    handSize: 11,
    hp: HEALTH_POOL.LARGE,
    starter: true,
    perks: [
      PERK.REMOVE4_POS0,
      PERK.REPLACE1_NEG1_WITH1_POS1,
      PERK.REPLACE1_NEG1_WITH1_POS1,
      PERK.REPLACE1_NEG1_WITH1_POS1,
      PERK.ADD1_NEG2_AND2_POS2,
      PERK.ADD1_POS1_IMMOBILIZE,
      PERK.ADD1_POS1_IMMOBILIZE,
      PERK.ADD1_POS2_MUDDLE,
      PERK.ADD1_POS2_MUDDLE,
      PERK.ADD2_ROLLING_PUSH2,
      PERK.ADD2_ROLLING_EARTH,
      PERK.ADD2_ROLLING_EARTH,
      PERK.ADD2_ROLLING_AIR,
      PERK.IGNORE_NEGATIVE_ITEM_EFFECTS,
      PERK.IGNORE_NEGATIVE_SCENARIO_EFFECTS,
    ],
  },
  [ID.MINDTHIEF]: {
    id: ID.MINDTHIEF,
    name: 'Mindthief',
    color: '#7b96cb',
    race: RACE.VERMLING,
    handSize: 10,
    hp: HEALTH_POOL.SMALL,
    starter: true,
    perks: [
      PERK.REMOVE2_NEG1,
      PERK.REMOVE2_NEG1,
      PERK.REMOVE4_POS0,
      PERK.REPLACE2_POS1_WITH2_POS2,
      PERK.REPLACE1_NEG2_WITH1_POS0,
      PERK.ADD1_POS2_ICE,
      PERK.ADD1_POS2_ICE,
      PERK.ADD2_ROLLING_POS1,
      PERK.ADD2_ROLLING_POS1,
      PERK.ADD3_ROLLING_PULL1,
      PERK.ADD3_ROLLING_MUDDLE,
      PERK.ADD2_ROLLING_IMMOBILIZE,
      PERK.ADD1_ROLLING_STUN,
      PERK.ADD1_ROLLING_DISARM_AND_ADD1_ROLLING_MUDDLE,
      PERK.IGNORE_NEGATIVE_SCENARIO_EFFECTS,
    ],
  },
  [ID.SCOUNDREL]: {
    id: ID.SCOUNDREL,
    name: 'Scoundrel',
    color: '#8ec74d',
    race: RACE.HUMAN,
    handSize: 9,
    hp: HEALTH_POOL.MEDIUM,
    starter: true,
    perks: [
      PERK.REMOVE2_NEG1,
      PERK.REMOVE2_NEG1,
      PERK.REMOVE4_POS0,
      PERK.REPLACE1_NEG2_WITH1_POS0,
      PERK.REPLACE1_NEG1_WITH1_POS1,
      PERK.REPLACE1_POS0_WITH1_POS2,
      PERK.REPLACE1_POS0_WITH1_POS2,
      PERK.ADD2_ROLLING_POS1,
      PERK.ADD2_ROLLING_POS1,
      PERK.ADD2_ROLLING_PIERCE3,
      PERK.ADD2_ROLLING_POISON,
      PERK.ADD2_ROLLING_POISON,
      PERK.ADD2_ROLLING_MUDDLE,
      PERK.ADD1_ROLLING_INVISIBLE,
      PERK.IGNORE_NEGATIVE_SCENARIO_EFFECTS,
    ],
  },
  [ID.SPELLWEAVER]: {
    id: ID.SPELLWEAVER,
    name: 'Spellweaver',
    color: '#a984bb',
    race: RACE.ORCHID,
    handSize: 8,
    hp: HEALTH_POOL.SMALL,
    starter: true,
    perks: [
      PERK.REMOVE4_POS0,
      PERK.REPLACE1_NEG1_WITH1_POS1,
      PERK.REPLACE1_NEG1_WITH1_POS1,
      PERK.ADD2_POS1,
      PERK.ADD2_POS1,
      PERK.ADD1_POS0_STUN,
      PERK.ADD1_POS1_WOUND,
      PERK.ADD1_POS1_IMMOBILIZE,
      PERK.ADD1_POS1_CURSE,
      PERK.ADD1_POS2_FIRE,
      PERK.ADD1_POS2_FIRE,
      PERK.ADD1_POS2_ICE,
      PERK.ADD1_POS2_ICE,
      PERK.ADD1_ROLLING_EARTH_AND_ADD1_ROLLING_AIR,
      PERK.ADD1_ROLLING_LIGHT_AND_ADD1_ROLLING_DARK,
    ],
  },
  [ID.TINKERER]: {
    id: ID.TINKERER,
    name: 'Tinkerer',
    color: '#baa187',
    race: RACE.QUATRYL,
    handSize: 12,
    hp: HEALTH_POOL.MEDIUM,
    starter: true,
    perks: [
      PERK.REMOVE2_NEG1,
      PERK.REMOVE2_NEG1,
      PERK.REPLACE1_NEG2_WITH1_POS0,
      PERK.ADD2_POS1,
      PERK.ADD1_POS3,
      PERK.ADD2_ROLLING_FIRE,
      PERK.ADD3_ROLLING_MUDDLE,
      PERK.ADD1_POS1_WOUND,
      PERK.ADD1_POS1_WOUND,
      PERK.ADD1_POS1_IMMOBILIZE,
      PERK.ADD1_POS1_IMMOBILIZE,
      PERK.ADD1_POS1_HEAL2,
      PERK.ADD1_POS1_HEAL2,
      PERK.ADD1_POS0_TARGET,
      PERK.IGNORE_NEGATIVE_SCENARIO_EFFECTS,
    ],
  },
  // lightning
  [ID.BERSERKER]: {
    id: ID.BERSERKER,
    name: 'Berserker',
    color: '#dd654f',
    race: RACE.INOX,
    handSize: 10,
    hp: HEALTH_POOL.LARGE,
    perks: [
      PERK.REMOVE2_NEG1,
      PERK.REMOVE4_POS0,
      PERK.REPLACE1_NEG1_WITH1_POS1,
      PERK.REPLACE1_NEG1_WITH1_POS1,
      PERK.REPLACE1_POS0_WITH1_ROLLING_POS2,
      PERK.REPLACE1_POS0_WITH1_ROLLING_POS2,
      PERK.ADD2_ROLLING_WOUND,
      PERK.ADD2_ROLLING_WOUND,
      PERK.ADD1_ROLLING_STUN,
      PERK.ADD1_ROLLING_STUN,
      PERK.ADD1_ROLLING_POS1_DISARM,
      PERK.ADD2_ROLLING_HEAL1,
      PERK.ADD1_POS2_FIRE,
      PERK.ADD1_POS2_FIRE,
      PERK.IGNORE_NEGATIVE_ITEM_EFFECTS,
    ],
  },
  // wings
  [ID.BEAST_TYRANT]: {
    id: ID.BEAST_TYRANT,
    name: 'Beast Tyrant',
    color: '#c1917f',
    race: RACE.VERMLING,
    handSize: 10,
    hp: HEALTH_POOL.SMALL,
    perks: [
      PERK.REMOVE2_NEG1,
      PERK.REPLACE1_NEG1_WITH1_POS1,
      PERK.REPLACE1_NEG1_WITH1_POS1,
      PERK.REPLACE1_NEG1_WITH1_POS1,
      PERK.REPLACE1_POS0_WITH1_POS2,
      PERK.REPLACE1_POS0_WITH1_POS2,
      PERK.ADD1_POS1_WOUND,
      PERK.ADD1_POS1_WOUND,
      PERK.ADD1_POS1_IMMOBILIZE,
      PERK.ADD1_POS1_IMMOBILIZE,
      PERK.ADD2_ROLLING_HEAL1,
      PERK.ADD2_ROLLING_HEAL1,
      PERK.ADD2_ROLLING_HEAL1,
      PERK.ADD2_ROLLING_EARTH,
      PERK.IGNORE_NEGATIVE_SCENARIO_EFFECTS,
    ],
  },
  // gasmask
  [ID.DOOMSTALKER]: {
    id: ID.DOOMSTALKER,
    name: 'Doomstalker',
    color: '#5dc6dc',
    race: RACE.ORCHID,
    handSize: 12,
    hp: HEALTH_POOL.MEDIUM,
    perks: [
      PERK.REMOVE2_NEG1,
      PERK.REMOVE2_NEG1,
      PERK.REPLACE2_POS0_WITH2_POS2,
      PERK.REPLACE2_POS0_WITH2_POS2,
      PERK.REPLACE2_POS0_WITH2_POS2,
      PERK.ADD2_ROLLING_POS1,
      PERK.ADD2_ROLLING_POS1,
      PERK.ADD1_POS2_MUDDLE,
      PERK.ADD1_POS1_POISON,
      PERK.ADD1_POS1_WOUND,
      PERK.ADD1_POS1_IMMOBILIZE,
      PERK.ADD1_POS0_STUN,
      PERK.ADD1_ROLLING_TARGET,
      PERK.ADD1_ROLLING_TARGET,
      PERK.IGNORE_NEGATIVE_SCENARIO_EFFECTS,
    ],
  },
  // illuminati
  [ID.ELEMENTALIST]: {
    id: ID.ELEMENTALIST,
    name: 'Elementalist',
    color: '#a7a8a7',
    race: RACE.SAVVAS,
    handSize: 10,
    hp: HEALTH_POOL.SMALL,
    perks: [
      PERK.REMOVE2_NEG1,
      PERK.REMOVE2_NEG1,
      PERK.REPLACE1_NEG1_WITH1_POS1,
      PERK.REPLACE1_POS0_WITH1_POS2,
      PERK.REPLACE1_POS0_WITH1_POS2,
      PERK.ADD3_POS0_FIRE,
      PERK.ADD3_POS0_ICE,
      PERK.ADD3_POS0_AIR,
      PERK.ADD3_POS0_EARTH,
      PERK.REPLACE2_POS0_WITH1_POS0_FIRE_AND1_POS0_EARTH,
      PERK.REPLACE2_POS0_WITH1_POS0_ICE_AND1_POS0_AIR,
      PERK.ADD2_POS1_PUSH1,
      PERK.ADD1_POS1_WOUND,
      PERK.ADD1_POS1_STUN,
      PERK.ADD1_POS0_TARGET,
    ],
  },
  // eclipse
  [ID.NIGHTSHROUD]: {
    id: ID.NIGHTSHROUD,
    name: 'Nightshroud',
    color: '#7b7cbb',
    race: RACE.AESTHER,
    handSize: 9,
    hp: HEALTH_POOL.MEDIUM,
    perks: [
      PERK.REMOVE2_NEG1,
      PERK.REMOVE2_NEG1,
      PERK.REMOVE4_POS0,
      PERK.ADD1_NEG1_DARK,
      PERK.ADD1_NEG1_DARK,
      PERK.REPLACE1_NEG1_DARK_WITH1_POS1_DARK,
      PERK.REPLACE1_NEG1_DARK_WITH1_POS1_DARK,
      PERK.ADD1_POS1_INVISIBLE,
      PERK.ADD1_POS1_INVISIBLE,
      PERK.ADD3_ROLLING_MUDDLE,
      PERK.ADD3_ROLLING_MUDDLE,
      PERK.ADD2_ROLLING_HEAL1,
      PERK.ADD2_ROLLING_CURSE,
      PERK.ADD1_ROLLING_TARGET,
      PERK.IGNORE_NEGATIVE_SCENARIO_EFFECTS_AND_ADD2_POS1,
    ],
  },
  // squid
  [ID.PLAGUEHERALD]: {
    id: ID.PLAGUEHERALD,
    name: 'Plagueherald',
    color: '#67c6b9',
    race: RACE.HARROWER,
    handSize: 11,
    hp: HEALTH_POOL.SMALL,
    perks: [
      PERK.REPLACE1_NEG2_WITH1_POS0,
      PERK.REPLACE1_NEG1_WITH1_POS1,
      PERK.REPLACE1_NEG1_WITH1_POS1,
      PERK.REPLACE1_POS0_WITH1_POS2,
      PERK.REPLACE1_POS0_WITH1_POS2,
      PERK.ADD2_POS1,
      PERK.ADD1_POS1_AIR,
      PERK.ADD1_POS1_AIR,
      PERK.ADD1_POS1_AIR,
      PERK.ADD3_ROLLING_POISON,
      PERK.ADD2_ROLLING_CURSE,
      PERK.ADD2_ROLLING_IMMOBILIZE,
      PERK.ADD1_ROLLING_STUN,
      PERK.ADD1_ROLLING_STUN,
      PERK.IGNORE_NEGATIVE_SCENARIO_EFFECTS_AND_ADD1_POS1,
    ],
  },
  // spears
  [ID.QUARTERMASTER]: {
    id: ID.QUARTERMASTER,
    name: 'Quartermaster',
    color: '#e39534',
    race: RACE.VALRATH,
    handSize: 9,
    hp: HEALTH_POOL.LARGE,
    perks: [
      PERK.REMOVE2_NEG1,
      PERK.REMOVE2_NEG1,
      PERK.REMOVE4_POS0,
      PERK.REPLACE1_POS0_WITH1_POS2,
      PERK.ADD2_ROLLING_POS1,
      PERK.ADD2_ROLLING_POS1,
      PERK.ADD3_ROLLING_MUDDLE,
      PERK.ADD2_ROLLING_PIERCE3,
      PERK.ADD1_ROLLING_STUN,
      PERK.ADD1_ROLLING_TARGET,
      PERK.ADD1_POS0_REFRESH_ITEM,
      PERK.ADD1_POS0_REFRESH_ITEM,
      PERK.ADD1_POS0_REFRESH_ITEM,
      PERK.IGNORE_NEGATIVE_ITEM_EFFECTS_AND_ADD2_POS1,
    ],
  },
  // saw
  [ID.SAWBONE]: {
    id: ID.SAWBONE,
    name: 'Sawbone',
    color: '#f0efe4',
    race: RACE.HUMAN,
    handSize: 10,
    hp: HEALTH_POOL.MEDIUM,
    perks: [
      PERK.REMOVE2_NEG1,
      PERK.REMOVE2_NEG1,
      PERK.REMOVE4_POS0,
      PERK.REPLACE1_POS0_WITH1_POS2,
      PERK.REPLACE1_POS0_WITH1_POS2,
      PERK.ADD1_ROLLING_POS2,
      PERK.ADD1_ROLLING_POS2,
      PERK.ADD1_POS1_IMMOBILIZE,
      PERK.ADD1_POS1_IMMOBILIZE,
      PERK.ADD2_ROLLING_WOUND,
      PERK.ADD2_ROLLING_WOUND,
      PERK.ADD1_ROLLING_STUN,
      PERK.ADD1_ROLLING_HEAL3,
      PERK.ADD1_ROLLING_HEAL3,
      PERK.ADD1_POS0_REFRESH_ITEM,
    ],
  },
  // sunburst
  [ID.SUNKEEPER]: {
    id: ID.SUNKEEPER,
    name: 'Sunkeeper',
    color: '#f7db89',
    race: RACE.VALRATH,
    handSize: 11,
    hp: HEALTH_POOL.LARGE,
    perks: [
      PERK.REMOVE2_NEG1,
      PERK.REMOVE2_NEG1,
      PERK.REMOVE4_POS0,
      PERK.REPLACE1_NEG2_WITH1_POS0,
      PERK.REPLACE1_POS0_WITH1_POS2,
      PERK.ADD2_ROLLING_POS1,
      PERK.ADD2_ROLLING_POS1,
      PERK.ADD2_ROLLING_HEAL1,
      PERK.ADD2_ROLLING_HEAL1,
      PERK.ADD1_ROLLING_STUN,
      PERK.ADD2_ROLLING_LIGHT,
      PERK.ADD2_ROLLING_LIGHT,
      PERK.ADD2_ROLLING_SHIELD1,
      PERK.IGNORE_NEGATIVE_ITEM_EFFECTS_AND_ADD2_POS1,
      PERK.IGNORE_NEGATIVE_SCENARIO_EFFECTS,
    ],
  },
  // bard
  [ID.SOOTHSINGER]: {
    id: ID.SOOTHSINGER,
    name: 'Soothsinger',
    color: '#e3766e',
    race: RACE.QUATRYL,
    handSize: 9,
    hp: HEALTH_POOL.SMALL,
    perks: [
      PERK.REMOVE2_NEG1,
      PERK.REMOVE2_NEG1,
      PERK.REMOVE1_NEG2,
      PERK.REPLACE2_POS1_WITH1_POS4,
      PERK.REPLACE2_POS1_WITH1_POS4,
      PERK.REPLACE1_POS0_WITH1_POS1_IMMOBILIZE,
      PERK.REPLACE1_POS0_WITH1_POS1_DISARM,
      PERK.REPLACE1_POS0_WITH1_POS2_WOUND,
      PERK.REPLACE1_POS0_WITH1_POS2_POISON,
      PERK.REPLACE1_POS0_WITH1_POS2_CURSE,
      PERK.REPLACE1_POS0_WITH1_POS3_MUDDLE,
      PERK.REPLACE1_NEG1_WITH1_POS0_STUN,
      PERK.ADD3_ROLLING_POS1,
      PERK.ADD2_ROLLING_CURSE,
      PERK.ADD2_ROLLING_CURSE,
    ],
  },
  // spiral
  [ID.SUMMONER]: {
    id: ID.SUMMONER,
    name: 'Summoner',
    color: '#d35d8e',
    race: RACE.AESTHER,
    handSize: 9,
    hp: HEALTH_POOL.MEDIUM,
    perks: [
      PERK.REMOVE2_NEG1,
      PERK.REPLACE1_NEG2_WITH1_POS0,
      PERK.REPLACE1_NEG1_WITH1_POS1,
      PERK.REPLACE1_NEG1_WITH1_POS1,
      PERK.REPLACE1_NEG1_WITH1_POS1,
      PERK.ADD1_POS2,
      PERK.ADD1_POS2,
      PERK.ADD2_ROLLING_WOUND,
      PERK.ADD2_ROLLING_POISON,
      PERK.ADD2_ROLLING_HEAL1,
      PERK.ADD2_ROLLING_HEAL1,
      PERK.ADD2_ROLLING_HEAL1,
      PERK.ADD1_ROLLING_FIRE_AND_ADD1_ROLLING_AIR,
      PERK.ADD1_ROLLING_DARK_AND_ADD1_ROLLING_EARTH,
      PERK.IGNORE_NEGATIVE_SCENARIO_EFFECTS_AND_ADD2_POS1,
    ],
  },
};