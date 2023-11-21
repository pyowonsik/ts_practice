class BaseCache<T>{
    data : T[] = [];
}

class StringCache extends BaseCache<string>{};

const stringCache = new StringCache();

stringCache.data;

class GenericChild<T,Message> extends BaseCache<T>{
    message? : Message;
    constructor (message? : Message){
        super();
        this.message = message;
    }
}

const genericChild = new GenericChild<string,string>('error');
genericChild.data;
genericChild.message;