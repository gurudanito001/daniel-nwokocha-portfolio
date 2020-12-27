import Col from 'react-bootstrap/Col'
import Link from 'next/link'

export const renderCategoryBlogPosts = (category, allPostsData) => {
    let count = 0;
    return allPostsData.map(postData => {
        if (postData.category.includes(category) && count < 12) {
            if (count === 0) {
                count += 1;
                return (
                    <Col xs={12} md={8} key={postData.id}>
                        <div className="border-bottom py-1">
                            <figure className="jumbotron mb-2 py-4 px-3">
                                <h4>This is the Latest {category} Story</h4>
                            </figure>
                            <figcaption>
                                <h5>
                                    <Link href={`/posts/${postData.id}`}>
                                        <a className="text-dark">{postData.title}</a>
                                    </Link>
                                </h5>
                            </figcaption>
                        </div>
                    </Col>
                )
            } else {
                count += 1;
                return (
                    <Col xs={12} md={4} key={postData.id}>
                        <div className="border-bottom py-1" key={postData.id}>
                            <figure className="jumbotron mb-2 py-4 px-3">
                                <h5>This is another {category} Story</h5>
                            </figure>
                            <figcaption>
                                <h6>
                                    <Link href={`/posts/${postData.id}`}>
                                        <a className="text-dark">{postData.title}</a>
                                    </Link>
                                </h6>
                            </figcaption>
                        </div>
                    </Col>
                )
            }
        }
    })
}