import React from 'react'

const Newsitem = (props) => {
    let {title,description,imgUrl,newsurl,source,author,date} = props;
    return (
        <div className="my-3">
            <div className="card">
                <div style={{display:"flex",justifyContent:"flex-end",position:"absolute",right:"0"}}>
                    <span class="badge rounded-pill bg-success">
                    {source}
                    </span>
                </div>
                <img src={imgUrl?imgUrl:'https://static.independent.co.uk/2021/11/15/16/newFile-8.jpg?width=1200&auto=webp&quality=75'} className="card-img-top" alt="..." style={{height: "220px"}}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}..</p>
                    <p className="card-text"><small className="text-muted">By {author ? author : "Unkown"} on {(new Date(date).toGMTString())}</small></p>
                    <a href={newsurl} target="_blank" className="btn btn-dark btn-sm">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default Newsitem
