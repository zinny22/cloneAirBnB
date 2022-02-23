import React from 'react';
import { Grid, Text, Input } from '../elements';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';
import { actionCreators as postActions } from '../redux/modules/post';
import person from "../person.png"
import styled from 'styled-components';


const CommentList = ({home_id}, props) => {
    // 해당 포스트의 댓글 정보
    const dispatch = useDispatch();
    const comment = useSelector((store) => store.post.comment);
    const user = useSelector((store) => store.user.user);
    // const uploading = useSelector((store) => store.user.uploading);
    // {comment ? comment.homes.home_name : ""}
    React.useEffect(() => {
    
      dispatch(userActions.loginCheckDB());
      dispatch(postActions.getCommentDB(home_id))
      return;
    }, []);
    return (
      <React.Fragment>
        <Grid padding="2vh 0 0">
          {comment ? comment.map((c, idx) => {
            // if (user.user_nick === c.user_nick)
              return <CommentItem key={idx} {...c} isMe />;
            // else return <CommentItem key={idx} {...c} />;
          }) : ""}
        </Grid>
      </React.Fragment>
    );
  };
  export default CommentList;


  const CommentItem = (props) => {
    const { user_nick, comment, updatedAt, isMe, commentId } = props;
    const dispatch = useDispatch();
  
    const [isEdit, setIsEdit] = React.useState(false);
    const [edComment, setEdComment] = React.useState(comment);
  
    // 댓글 삭제
    const delComment = () => {
      dispatch(postActions.delCommentAPI(commentId));
    };
  
    // 댓글 수정 시작
    const editComment = () => {
      setIsEdit(true);
    };
  
    // 댓글 수정 완료
    const completeEdit = () => {
      dispatch(postActions.editCommentAPI(commentId, edComment));
  
      setIsEdit(false);
    };
  
    if (isMe)
      // 내가 쓴 댓글일 경우
      return (
        <>
          <Grid is_flex margin="1px 0px 20px 0px ">
            <Grid is_flex width="11rem">
                <img src={person} alt="user_image" style={{width:"50px", height:"50px", margin:"0px 10px 0px 0px"}}/>
                <Text bold>{user_nick}</Text>
            </Grid>
            <Grid is_flex margin="0px 4px">
              {/* <Text margin="0px">{transformDate(updatedAt)}</Text> */}
            </Grid>
            <Grid is_flex width="10rem" height="1.5rem">
              <Button
                margin="1px"
                border_radius="1rem"
                _onClick={() => {
                  editComment();
                }}
            >
            수정
            </Button>
            <Button
            margin="1px"
            border_radius="1rem"
            _onClick={() => {
                delComment();
            }}
            >
            삭제
            </Button>
            </Grid>
          </Grid>
          <Comment>
          <Text margin="0px">{comment}</Text>
          </Comment>
          {isEdit ? (
            <Grid is_flex margin="1px 0">
              <Grid padding="5px">
                <Input
                  value={edComment}
                  _onChange={(e) => {
                    setEdComment(e.target.value);
                  }}
                />
              </Grid>
              <Grid width="5rem">
                <Button
                  _onClick={() => {
                    completeEdit();
                  }}
                  border_radius="5px"
                  margin="0 2px"
                >
                  {/* <AiOutlineEnter size={20} /> */}
                </Button>
              </Grid>
            </Grid>
          ) : (
            ''
          )}
        </>
      );
    else {
      // 다른 사람이 작성한 댓글일 경우
      return (
        <Grid is_flex>
          <Grid width="8.5rem">
            <Text bold>{user_nick}</Text>
          </Grid>
          <Grid is_flex margin="0px 4px">
            <Text margin="0px">{comment}</Text>
            {/* <Text margin="0px">{transformDate(updatedAt)}</Text> */}
          </Grid>
        </Grid>
      );
    }
  };
  
const Comment = styled.div`
    margin : 16px;
`

const Button =styled.button`
    border-radius: 40px;
    border: 1px solid rgb(235,235,235);
    background-color:rgb(235,235,235) ;
    padding:10px;
    color: rgb(34,34,34);
    font-size: 15px;
    right: 2px;
`
const WButton =styled.button`
    border-radius: 40px;
    border: 1px solid rgb(235,235,235);
    background-color: rgb(235,235,235);
    margin-left : 10px;
    padding: 10px;
    width : 100px;
    color: rgb(34,34,34);
    font-size: 15px;
    right: 2px;
`

  CommentItem.defaultProps = {
    commentId: 'test123',
    comment: '좋은 상품이네요',
    postId: '123',
    user_nick: '혜진님은 다이어트중',
    userId: 'user12345',
    createdAt: '2022-02-12T15:40:03.201Z',
    updatedAt: '2022-02-12T15:40:03.201Z',
  };