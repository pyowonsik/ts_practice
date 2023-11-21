/**
 * Visiblity property
 */


class PropertyTestParent{
    public publicProperty = 'public property';          // 전역
    protected protectedPropery = 'protected property';  // 현재 또는 하위 클래스
    private privateProperty = 'private property';       // 현재 클래스
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

