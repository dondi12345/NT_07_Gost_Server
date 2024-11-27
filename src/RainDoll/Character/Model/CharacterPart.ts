import { ElementalStats } from "../../Data/ElementalStats";
import { RateType } from "../../Data/RateData";
import { CharacterStats, StatsTierType } from "../../Data/StatsData";

export class CharacterPart{
    Index : string;
}

export enum CharacterPartType{
    None = 0,

    Head = 1,
    Body = 2,
    Eye = 3,
    Helmet = 4,
    Weapon = 5,
    Additional = 6,

    Decore_Head = 101,
    Decore_Body = 102,
    Decore_Helmet = 104,
    Decore_Weapon = 105,
    Decore_Additional = 106,
}

export class CharacterPartData{
    Index : string;
    Type : CharacterPartType;
    Stats: CharacterStats;
    Elemental : ElementalStats;
    Rate : RateType;
    CharacterPartRate : CharacterPartRate[];
    ChilIndex : string[];
}

export class CharacterPartRate{
    Type : CharacterPartType;
    Rate : RateType;
}