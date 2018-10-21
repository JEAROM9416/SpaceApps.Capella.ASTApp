declare namespace ASTSpaceApps {
    class Animal {
        ssid: string;
        scientificName: string;
        description: string;
        specie: SpecieEnum;
        characteristics: Characteristics;


        constructor(ssid: string, 
            scientificName: string,
            description: string,
            specie: SpecieEnum,
            characteristics: Characteristics);
    }

}