/**
 * Class In Generic
 */

class Pagination<Data,Message>{
    data: Data[] = [];
    message?:Message;
    lastFetchedAt?:Date;
}


const pgData = new Pagination<number,string>();
pgData.data;
pgData.message;
pgData.lastFetchedAt;


class Pagination2<Data,Message>{
    data: Data[] = [];
    message?:Message;
    lastFetchedAt?:Date;

    constructor(data : Data[],messege? : Message,lastFetchedAt? : Date){ 
        this.data = data;
        this.message = messege;
        this.lastFetchedAt = lastFetchedAt;
    }
}

const pagination2 = new Pagination2<number,string>([123,456]);
pagination2.data;
pagination2.message;
pagination2.lastFetchedAt;


class DefaultGeneric<T = boolean>{
    data : T[] =[];
    // constructor(data : T[]){
    //     this.data = data;
    // }
}    


const defaultGeneric = new DefaultGeneric();
defaultGeneric.data;
