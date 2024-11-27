import { enumUtils } from "../../../Util/EnumUtils";
import { ElementalStats } from "../../Data/ElementalStats";
import { RateType } from "../../Data/RateData";
import { StatsTierType } from "../../Data/StatsData";
import { characterPartData } from "../Config/CharacterPartCf";
import { CharacterPartType } from "../Model/CharacterPart";

var list : any[] = []
for (let index = 0; index < characterPartData.length; index++) {
    const element = characterPartData[index];
    var data = {};
    data["Index"] = element.Index;
    data["Type"] = enumUtils.ToString(CharacterPartType, element.Type);
    data["HP"] = enumUtils.ToString(StatsTierType, element.Stats.HP);
    data["ATK"] = enumUtils.ToString(StatsTierType, element.Stats.ATK);
    data["DEF"] = enumUtils.ToString(StatsTierType, element.Stats.DEF);
    data["DEX"] = enumUtils.ToString(StatsTierType, element.Stats.DEX);
    data["LUK"] = enumUtils.ToString(StatsTierType, element.Stats.LUK);
    data["Rate"] = enumUtils.ToString(RateType, element.Rate);
    data["Elemental"] = enumUtils.ToString(ElementalStats, element.Elemental);
    data["CharacterPartRate"] = JSON.stringify(element.CharacterPartRate);
    data["ChilIndex"] = JSON.stringify(element.ChilIndex);
    list.push(data);
}

console.log(JSON.stringify(list));