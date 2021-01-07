import Col from 'react-bootstrap/Col'
import Link from 'next/link'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'

export const renderCategoryBlogPosts = (category, props) => {
    let count = 0;
    return props.allPostsData.map(postData => {
        if (postData.category.includes(category) && count < 5) {
            if (count === 0) {
                count += 1;
                return (
                    <div className="py-1" key={postData.id}>
                        <figure>
                            <Image src={`/images/Blogpost-thumb.jpg`} className="img img-fluid" />
                        </figure>
                        <figcaption>
                            <h5>
                                <Link href={`/posts/${postData.id}`}>
                                    <a className={`${props.theme === "dark" ? 'text-light' : 'text-dark'}`}>{postData.title}</a>
                                </Link>
                            </h5>
                        </figcaption>
                    </div>
                )
            } else {
                count += 1;
                return (
                    <Row key={postData.id} >
                        <Col xs={4}>
                            <figure>
                                <Image src={`/images/Blogpost-thumb.jpg`} className="img img-fluid" />
                            </figure>
                        </Col>
                        <Col xs={8} className="pl-0">
                            <figcaption className="h6">
                                <Link href={`/posts/${postData.id}`}>
                                    <a className={`${props.theme === "dark" ? 'text-light' : 'text-dark'}`}>{postData.title}</a>
                                </Link>
                            </figcaption>
                        </Col>
                    </Row >
                )
            }
        }
    })
}