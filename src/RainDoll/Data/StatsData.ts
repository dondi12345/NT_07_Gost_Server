export enum StatsTierType {
    Tier0 = 0,
    Tier1 = 1,
    Tier2 = 2,
    Tier3 = 3,
    Tier4 = 4,
}

export class CharacterStats {
    HP: StatsTierType;
    ATK: StatsTierType;
    DEF: StatsTierType;
    DEX: StatsTierType;
    LUK: StatsTierType;
}