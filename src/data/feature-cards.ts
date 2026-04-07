import * as fs from "node:fs";
import * as path from "node:path";
import yaml from "js-yaml";

export interface FeatureCardYaml {
  title: string;
  image: string;
  description: string;
  flavor: string;
  color: string;
}

export interface FeatureSectionYaml {
  title: string;
  bannerBase: string;
  banner: string;
  cardBase: string;
  cards: FeatureCardYaml[];
}

export interface FeatureCardsData {
  sections: FeatureSectionYaml[];
}

const featureCardsPath = path.resolve("src/data/feature-cards.yaml");
export const featureCards = yaml.load(fs.readFileSync(featureCardsPath, "utf8")) as FeatureCardsData;
