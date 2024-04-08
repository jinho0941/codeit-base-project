// 진호, 호민님 작성 페이지
import { useParams } from 'react-router-dom'

const PostIdPage = () => {
  const params = useParams()
  const postId = params.postId

  console.log(postId)

  return <div>post id page</div>
}

export default PostIdPage
