/**
 * Visiblity property
 */


class PropertyTestParent{
    publicProperty = 'public property';
    protected protectedPropery = 'protected property';
    private privateProperty = 'private property';
test(){
    this.privateProperty;
    this.protectedPropery;
    this.publicProperty;
}


}


class PropertyTestChild extends PropertyTestParent{
    
    test(){
        // this.privateProperty;
        this.protectedPropery;
        this.publicProperty;
    }
}

const instance = new PropertyTestParent();

instance.publicProperty;
