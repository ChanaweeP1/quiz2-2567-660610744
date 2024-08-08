// You can define interfaces for all React components here.
export interface PostOwnnerProps{
    fullname: string;
    studentid: number;
}
export interface CommentProps{
    userImagePath : string;
    username : string;
    commentText : string;
    likeNum : number;
    replies : [];
}
// Do not forget to export properly.

interface ReplyProps {
    userImagePath : string;
    username : string;
    commentText : string;
    likeNum : number;
}
export type { ReplyProps };
