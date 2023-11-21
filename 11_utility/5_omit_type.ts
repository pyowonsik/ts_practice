interface Post {
    title : string,
    content : string,
    createdAt : Date;
}

// Omit : 객체에서 제외하고 싶은 프로퍼티만 제외시킬수 있다.
function createdPost(post : Omit<Post,'createdAt'>){
    return {
        ...post,
        createdAt : new Date(),
    }
}

createdPost({
    title : '가입인사',
    content : '안녕하세요.'
})

