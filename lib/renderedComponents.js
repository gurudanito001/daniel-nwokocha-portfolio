import Col from 'react-bootstrap/Col'
import Link from 'next/link'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel'
import Date from '../components/date'

export const renderCategoryBlogPosts = (category, props) => {
    let count = 0;
    return props.allPostsData.map(postData => {
        if (postData.category.includes(category) && count < 5) {
            if (count === 0) {
                count += 1;
                return (
                    <div className="py-1" key={postData.id}>
                        <figure>
                            <Image src={`/images/${postData.image}`} className="img img-fluid" />
                        </figure>
                        <figcaption>
                            <h5 className="d-inline mr-3">
                                <Link href={`/posts/${postData.id}`}>
                                    <a className={`${props.theme === "dark" ? 'text-light' : 'text-dark'}`}>{postData.title} -</a>
                                </Link>
                            </h5> 
                            <div className="d-inline font-weight-normal small">
                                <em><Date dateString={postData.date} /></em>
                            </div>
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
                            <div className="font-weight-normal small">
                                <em><Date dateString={postData.date} /></em>
                            </div>
                        </Col>
                    </Row >
                )
            }
        }
    })
}

export const renderBlogPosts = (allPostsData, startNum, theme) => {
    let count = startNum;
    return allPostsData.map(postData =>{
        count += 1
        if( count - startNum <= 5 && allPostsData[count-1] ){
            return(
                <Row key={allPostsData[count - 1].id}>
                    <Col xs={3}>
                        <figure>
                            <Image src={`/images/${allPostsData[count - 1].image}`} className="img img-fluid"/>
                        </figure>
                    </Col>
                    <Col xs={9}>
                        <figcaption className="h6">
                            <Link href={`/posts/${allPostsData[count - 1].id}`}>
                                <a className={`${theme ? 'text-light' : 'text-dark'}`}>{allPostsData[count - 1].title}</a>
                            </Link>
                        </figcaption>
                        <div className="font-weight-normal small">
                            <em><Date dateString={allPostsData[count - 1].date} /></em>
                        </div>
                    </Col>
                </Row>
            )
        }
    })
}

export const carouselItems = (images, projectName, screenSize)=>{
    return images[projectName].map(imageUrl =>{
        if(imageUrl.includes(screenSize)){
            return(
                <Carousel.Item key={imageUrl}>
                    <Image src={`/images/${imageUrl}`} className="img img-fluid" style={{ maxHeight: "500px" }} />
                </Carousel.Item>
            )
        }
    })
}