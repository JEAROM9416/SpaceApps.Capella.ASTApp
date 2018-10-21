declare namespace ASTSpaceApps {
    class Characteristics {
        //ATRIBUTES
        animal: Animal;
        geography: Geography;
        sickness: Array<Sickness>;

        //CONSTRUCTOR
        constructor(animal: Animal,
            geography: Geography);

        //Sets the posible sickness
        setSickness(sickness: Array<Sickness>)

    }
}