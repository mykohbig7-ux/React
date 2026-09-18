import Comment from "./Comment";

const comments = [
    {
        name: '석쌤',
        comment: '안녕하세요, 석쌤입니다!',
    },
    {
        name: '아이바오',
        comment: '안녕하세요, 슈바오엄마 아이바오입니다!',
    },
    {
        name: '러바오',
        comment: '안녕하세요, 슈바오아빠 러바오입니다!',
    },
]

function CommentList(props) {
    return (
        // map 기본형
        <div>
            {comments.map((comment) => {
                return(
                    <Comment  name={comment.name} comment={comment.comment}/>
                );
            })}
        </div>

        //map 축약형
        // <div>
        //     {comments.map((item) => (
        //         <Comment  name={item.name} comment={item.comment}/>
        //     ))}
        // </div>
    );
}

export default CommentList;