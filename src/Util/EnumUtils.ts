class EnumUtils{
    ToString(kind:any ,value: any){
        return kind[value];
    }

    ParseString(kind:any ,value: string){
        const str: keyof typeof kind = value;
        return kind[str];
    }

    ToNumber(value: any){
        return value;
    }

    IsExist(kind: any, value: any){
        if (value in kind) {
            return true;
        }else{
            return false;
        }
    }

    GetMaxEnumValue(kind: any): number {
        let max = Number.MIN_VALUE;
        for (let key in kind) {
            if (typeof kind[key] === 'number') {
                max = Math.max(max, kind[key]);
            }
        }
        return max;
    }
}

export const enumUtils = new EnumUtils();