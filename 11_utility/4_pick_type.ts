interface Post<T>{
    title : T;
    content : string;
    createdAt : Date;
}


// Pick : 객체에서 입력하고 싶은 프로퍼티만 고를수 있다.
function createPost(post : Pick<Post<string>,'title' | 'content'>,){
    return {
        ...post,
        createdAt : new Date(),
    }
}



createPost({
    title : '요즘 개발자 취업 어떤가요?',
    content: '나이 상관 있나요 ?',
});