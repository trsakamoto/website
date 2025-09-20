import React from "react";
import "../../styles/Blogs.scss";
import img1 from "../../static/blogs/img1.png";
import img2 from "../../static/blogs/img2.png";
import img3 from "../../static/blogs/img3.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

class Blogs extends React.Component {

    render() {

        const blogs = [
            {
              title: "Corinne Bailey Rae’s ‘Black Rainbows’ Live at UC San Diego",
              author: "Writing by Alexandra Citra | Photography by Keith Gong",
              image: img1, // Replace with the actual image path
              url: "https://trendmagazine.substack.com/p/corinne-bailey-raes-black-rainbows"
            },
            {
              title:"TRASHION: Fashion made from consumer waste",
              author: "By: Lina Mauk, Jialin Han, Sophia Bokovikova, Sarai Malk, and Quinn Sellers",
              image: img2, // Replace with the actual image path
              url: "https://trendmagazine.substack.com/p/trashion-fashion-made-from-consumer"
            },
            {
              title: "Muirstock: Javi Vera and Ravyn Lenae at Epstein Family Amphitheater",
              author: "By: Sydney McDonald",
              image: img3, // Replace with the actual image path
              url: "https://trendmagazine.substack.com/p/muirstock-javi-vera-and-ravyn-lenae"
            },
        ];

        return (
            <div className="blog-container">
                <div className="header">
                    <p className="landing"> Check out our latest blogs </p>
                    <button className="linkage" onClick={() => window.open('https://medium.com/@trenducsd', '_blank')}>
                            More blogs
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="11" height="11" fill="currentColor" class="arrow-icon">
                                <path d="M3.41 2H16V0H1a1 1 0 0 0-1 1v16h2V3.41l28.29 28.3 1.41-1.41z"/>
                            </svg>
                    </button>
                </div>
                <div className="blogs-container">
                {blogs.map((blog, index) => (
                    <div key={index} className="blog-card">
                        <LazyLoadImage
                            className="image-container"
                            src={blog.image}
                            alt={`Blog ${index}`}
                            onClick={() => window.open(blog.url, '_blank')} 
                            style={{ cursor: 'pointer' }} 
                        ></LazyLoadImage>
                        <div className="blog-details">
                            <p className="blog-title">{blog.title}
                            </p>
                            <p className="blog-author">{blog.author}</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        );
    }

}

export default Blogs;