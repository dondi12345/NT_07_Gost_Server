import { ElementalStats } from "../../Data/ElementalStats";
import { RateType } from "../../Data/RateData";
import { StatsTierType } from "../../Data/StatsData";
import { CharacterPartData, CharacterPartType } from "../Model/CharacterPart";

export const characterPartData : CharacterPartData[] = [
    {
        Index: "BDY_001_001_00",
        Type: CharacterPartType.Body,
        Stats :{
            HP: StatsTierType.Tier1,
            ATK: StatsTierType.Tier0,
            DEF: StatsTierType.Tier1,
            DEX: StatsTierType.Tier0,
            LUK: StatsTierType.Tier0,
        },
        Elemental : ElementalStats.Neutral,
        Rate : RateType.Tier0,
        CharacterPartRate: [
            {Type : CharacterPartType.Decore_Body, Rate : RateType.Tier1},
        ],
        ChilIndex : ["BDD_001_001_01"],
    },
    {
        Index: "HED_001_001_00",
        Type: CharacterPartType.Head,
        Stats :{
            HP: StatsTierType.Tier0,
            ATK: StatsTierType.Tier0,
            DEF: StatsTierType.Tier1,
            DEX: StatsTierType.Tier1,
            LUK: StatsTierType.Tier0,
        },
        Elemental : ElementalStats.Neutral,
        Rate : RateType.Tier0,
        CharacterPartRate: [
            {Type : CharacterPartType.Eye, Rate : RateType.Tier0},
        ],
        ChilIndex: ["EYE_001_001_01", "EYE_001_001_02", "EYE_001_001_03", "EYE_001_001_04"],
    },
]