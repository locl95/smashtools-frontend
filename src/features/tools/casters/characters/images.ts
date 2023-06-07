import bayonettaPortrait from '../../../../assets/characters/portraits/bayonetta.png';
import bowserPortrait from '../../../../assets/characters/portraits/bowser.png';
import banjoKazooiePortrait from '../../../../assets/characters/portraits/banjo_and_kazooie.png';
import bowserJrPortrait from '../../../../assets/characters/portraits/bowser_jr.png';
import bylethPortrait from '../../../../assets/characters/portraits/byleth.png';
import captainFalconPortrait from '../../../../assets/characters/portraits/captain_falcon.png';
import chromPortrait from '../../../../assets/characters/portraits/chrom.png';
import cloudPortrait from '../../../../assets/characters/portraits/cloud.png';
import corrinPortrait from '../../../../assets/characters/portraits/corrin.png';
import daisyPortrait from '../../../../assets/characters/portraits/daisy.png';
import darkPitPortrait from '../../../../assets/characters/portraits/dark_pit.png';
import darkSamusPortrait from '../../../../assets/characters/portraits/dark_samus.png';
import diddyKongPortrait from '../../../../assets/characters/portraits/diddy_kong.png';
import donkeyKongPortrait from '../../../../assets/characters/portraits/donkey_kong.png';
import drMarioPortrait from '../../../../assets/characters/portraits/dr_mario.png';
import duckHuntPortrait from '../../../../assets/characters/portraits/duck_hunt.png';
import falcoPortrait from '../../../../assets/characters/portraits/falco.png';
import foxPortrait from '../../../../assets/characters/portraits/fox.png';
import ganondorfPortrait from '../../../../assets/characters/portraits/ganondorf.png';
import greninjaPortrait from '../../../../assets/characters/portraits/greninja.png';
import heroPortrait from '../../../../assets/characters/portraits/hero.png';
import iceClimbersPortrait from '../../../../assets/characters/portraits/ice_climbers.png';
import ikePortrait from '../../../../assets/characters/portraits/ike.png';
import incineroarPortrait from '../../../../assets/characters/portraits/incineroar.png';
import inklingPortrait from '../../../../assets/characters/portraits/inkling.png';
import isabellePortrait from '../../../../assets/characters/portraits/isabelle.png';
import jigglypuffPortrait from '../../../../assets/characters/portraits/jigglypuff.png';
import jokerPortrait from '../../../../assets/characters/portraits/joker.png';
import kazuyaPortrait from '../../../../assets/characters/portraits/kazuya.png';
import kenPortrait from '../../../../assets/characters/portraits/ken.png';
import kingDededePortrait from '../../../../assets/characters/portraits/king_dedede.png';
import kingKRoolPortrait from '../../../../assets/characters/portraits/king_k_rool.png';
import kirbyPortrait from '../../../../assets/characters/portraits/kirby.png';
import linkPortrait from '../../../../assets/characters/portraits/link.png';
import littleMacPortrait from '../../../../assets/characters/portraits/little_mac.png';
import lucarioPortrait from '../../../../assets/characters/portraits/lucario.png';
import lucasPortrait from '../../../../assets/characters/portraits/lucas.png';
import lucinaPortrait from '../../../../assets/characters/portraits/lucina.png';
import luigiPortrait from '../../../../assets/characters/portraits/luigi.png';
import marioPortrait from '../../../../assets/characters/portraits/mario.png';
import marthPortrait from '../../../../assets/characters/portraits/marth.png';
import megaManPortrait from '../../../../assets/characters/portraits/mega_man.png';
import metaKnightPortrait from '../../../../assets/characters/portraits/meta_knight.png';
import mewtwoPortrait from '../../../../assets/characters/portraits/mewtwo.png';
import miiBrawlerPortrait from '../../../../assets/characters/portraits/mii_brawler.png';
import miiGunnerPortrait from '../../../../assets/characters/portraits/mii_gunner.png';
import miiSwordfighterPortrait from '../../../../assets/characters/portraits/mii_swordfighter.png';
import minminPortrait from '../../../../assets/characters/portraits/minmin.png';
import mrGameAndWatchPortrait from '../../../../assets/characters/portraits/mr_game_and_watch.png';
import mythraPortrait from '../../../../assets/characters/portraits/mythra.png';
import nessPortrait from '../../../../assets/characters/portraits/ness.png';
import olimarPortrait from '../../../../assets/characters/portraits/olimar.png';
import pacManPortrait from '../../../../assets/characters/portraits/pac_man.png';
import palutenaPortrait from '../../../../assets/characters/portraits/palutena.png';
import peachPortrait from '../../../../assets/characters/portraits/peach.png';
import pichuPortrait from '../../../../assets/characters/portraits/pichu.png';
import pikachuPortrait from '../../../../assets/characters/portraits/pikachu.png';
import piranhaPlantPortrait from '../../../../assets/characters/portraits/piranha_plant.png';
import pitPortrait from '../../../../assets/characters/portraits/pit.png';
import squirtlePortrait from '../../../assets/characters/portraits/pt_squirtle.png';
import ivysaurPortrait from '../../../assets/characters/portraits/pt_ivysaur.png';
import charizardPortrait from '../../../assets/characters/portraits/pt_charizard.png';
import pyraPortrait from '../../../../assets/characters/portraits/pyra.png';
import richterPortrait from '../../../../assets/characters/portraits/richter.png';
import ridleyPortrait from '../../../../assets/characters/portraits/ridley.png';
import robPortrait from '../../../../assets/characters/portraits/rob.png';
import robinPortrait from '../../../../assets/characters/portraits/robin.png';
import rosalinaAndLumaPortrait from '../../../../assets/characters/portraits/rosalina_and_luma.png';
import royPortrait from '../../../../assets/characters/portraits/roy.png';
import ryuPortrait from '../../../../assets/characters/portraits/ryu.png';
import samusPortrait from '../../../../assets/characters/portraits/samus.png';
import sephirothPortrait from '../../../../assets/characters/portraits/sephiroth.png';
import sheikPortrait from '../../../../assets/characters/portraits/sheik.png';
import shulkPortrait from '../../../../assets/characters/portraits/shulk.png';
import simonPortrait from '../../../../assets/characters/portraits/simon.png';
import snakePortrait from '../../../../assets/characters/portraits/snake.png';
import sonicPortrait from '../../../../assets/characters/portraits/sonic.png';
import soraPortrait from '../../../../assets/characters/portraits/sora.png';
import terryPortrait from '../../../../assets/characters/portraits/terry.png';
import stevePortrait from '../../../../assets/characters/portraits/steve.png';
import toonLinkPortrait from '../../../../assets/characters/portraits/toon_link.png';
import villagerPortrait from '../../../../assets/characters/portraits/villager.png';
import warioPortrait from '../../../../assets/characters/portraits/wario.png';
import wiiFitTrainerPortrait from '../../../../assets/characters/portraits/wii_fit_trainer.png';
import wolfPortrait from '../../../../assets/characters/portraits/wolf.png';
import yoshiPortrait from '../../../../assets/characters/portraits/yoshi.png';
import youngLinkPortrait from '../../../../assets/characters/portraits/young_link.png';
import zeldaPortrait from '../../../../assets/characters/portraits/zelda.png';
import zeroSuitSamusPortrait from '../../../../assets/characters/portraits/zero_suit_samus.png';


interface CharacterImages {
  [key: string]: string;
}

export const images: CharacterImages = {
  bayonetta: bayonettaPortrait,
  banjo_and_kazooie: banjoKazooiePortrait,
  bowser: bowserPortrait,
  bowser_jr: bowserJrPortrait,
  byleth: bylethPortrait,
  captain_falcon: captainFalconPortrait,
  chrom: chromPortrait,
  cloud: cloudPortrait,
  corrin: corrinPortrait,
  daisy: daisyPortrait,
  dark_pit: darkPitPortrait,
  dark_samus: darkSamusPortrait,
  diddy_kong: diddyKongPortrait,
  donkey_kong: donkeyKongPortrait,
  dr_mario: drMarioPortrait,
  duck_hunt: duckHuntPortrait,
  falco: falcoPortrait,
  fox: foxPortrait,
  ganondorf: ganondorfPortrait,
  greninja: greninjaPortrait,
  hero: heroPortrait,
  ice_climbers: iceClimbersPortrait,
  ike: ikePortrait,
  incineroar: incineroarPortrait,
  inkling: inklingPortrait,
  isabelle: isabellePortrait,
  jigglypuff: jigglypuffPortrait,
  joker: jokerPortrait,
  kazuya: kazuyaPortrait,
  ken: kenPortrait,
  king_dedede: kingDededePortrait,
  king_k_rool: kingKRoolPortrait,
  kirby: kirbyPortrait,
  link: linkPortrait,
  little_mac: littleMacPortrait,
  lucario: lucarioPortrait,
  lucas: lucasPortrait,
  lucina: lucinaPortrait,
  luigi: luigiPortrait,
  mario: marioPortrait,
  marth: marthPortrait,
  mega_man: megaManPortrait,
  meta_knight: metaKnightPortrait,
  mewtwo: mewtwoPortrait,
  mii_brawler: miiBrawlerPortrait,
  mii_gunner: miiGunnerPortrait,
  mii_swordfighter: miiSwordfighterPortrait,
  minmin: minminPortrait,
  mr_game_and_watch: mrGameAndWatchPortrait,
  mythra: mythraPortrait,
  ness: nessPortrait,
  olimar: olimarPortrait,
  pac_man: pacManPortrait,
  palutena: palutenaPortrait,
  peach: peachPortrait,
  pichu: pichuPortrait,
  pikachu: pikachuPortrait,
  piranha_plant: piranhaPlantPortrait,
  pit: pitPortrait,
  pyra: pyraPortrait,
  richter: richterPortrait,
  ridley: ridleyPortrait,
  rob: robPortrait,
  robin: robinPortrait,
  rosalina_and_luma: rosalinaAndLumaPortrait,
  roy: royPortrait,
  ryu: ryuPortrait,
  samus: samusPortrait,
  sephiroth: sephirothPortrait,
  sheik: sheikPortrait,
  shulk: shulkPortrait,
  simon: simonPortrait,
  snake: snakePortrait,
  sonic: sonicPortrait,
  sora: soraPortrait,
  steve: stevePortrait,
  terry: terryPortrait,
  toon_link: toonLinkPortrait,
  villager: villagerPortrait,
  wario: warioPortrait,
  wii_fit_trainer: wiiFitTrainerPortrait,
  wolf: wolfPortrait,
  yoshi: yoshiPortrait,
  young_link: youngLinkPortrait,
  zelda: zeldaPortrait,
  zero_suit_samus: zeroSuitSamusPortrait,
};