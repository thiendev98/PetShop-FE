import "./style.css"
import React from "react"
import 'font-awesome/css/font-awesome.min.css'
import GridSystem from './GridSystem';
import Header1 from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

export default class BlogPage extends React.Component {
    constructor(props) {
        super(props);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onMouseEnterListArticlesNews1 = this.onMouseEnterListArticlesNews1.bind(this);
        this.onMouseLeaveListArticlesNews2 = this.onMouseLeaveListArticlesNews2.bind(this);
        this.state = {
            page: "BlogPage",
            rotateZImage: 0,
            widthofScreen: window.innerWidth,
            typePost: "",
            hoverListArticlesNews1: new Array(this.props.cellArticlesNews1.length).fill(false),
            ratioImageInListArticlesNews1: new Array(this.props.cellArticlesNews1.length).fill(1.0),
            hoverListArticlesNews2: new Array(this.props.cellArticlesNews2.length).fill(false),
            ratioImageInListArticlesNews2: new Array(this.props.cellArticlesNews2.length).fill(1.0),
        };
    }

    onMouseEnter = (typeMenu) => {
        switch (typeMenu) {
            case "PersonContact":
                this.setState({ hoverPersonContact: true });
                break;
            case "PersonScheduling":
                this.setState({ hoverPersonScheduling: true });
                break;
            default:
                break;
        }
    }

    onMouseLeave = (typeMenu) => {
        switch (typeMenu) {
            case "PersonContact":
                this.setState({ hoverPersonContact: false });
                break;
            case "PersonScheduling":
                this.setState({ hoverPersonScheduling: false });
                break;
            default:
                break;
        }
    }




    onMouseEnterListArticlesNews2 = (index) => {
        // Make a shallow copy of the items
        let hoverListArticlesNews2 = this.state.hoverListArticlesNews2;
        hoverListArticlesNews2[index] = true
        this.setState({
            hoverListArticlesNews2: hoverListArticlesNews2
        });
    }
    onMouseEnterListArticlesNews1 = (index) => {
        // Make a shallow copy of the items
        let hoverListArticlesNew1 = this.state.hoverListArticlesNews1;
        hoverListArticlesNew1[index] = true
        this.setState({
            hoverListArticlesNews1: hoverListArticlesNew1
        });
    }

    onMouseLeaveListArticlesNews2 = (index) => {
        // Make a shallow copy of the items
        let hoverListArticlesNew2 = this.state.hoverListArticlesNews2;
        hoverListArticlesNew2[index] = false;
        this.setState({
            hoverListArticlesNews2: hoverListArticlesNew2
        });
    }
    onMouseLeaveListArticlesNews1 = (index) => {
        // Make a shallow copy of the items
        let hoverListArticlesNew1 = this.state.hoverListArticlesNews1;
        hoverListArticlesNew1[index] = false;
        this.setState({
            hoverListArticlesNews1: hoverListArticlesNew1
        });
    }






    componentDidMount = () => {


        this.changesizeListArticlesNews2 = setInterval(() => {
            let scaleImageinList = 0.01 + Math.random() * 0.0025; // We want random number from 0.01 to 0.0125
            let ratioImageInListArticlesNew2 = this.state.ratioImageInListArticlesNews2;
            for (let i = 0; i < this.props.cellArticlesNews.length; i++) {
                if (this.state.hoverListArticlesNew2[i])
                    ratioImageInListArticlesNew2[i] = Math.min(ratioImageInListArticlesNew2[i] + scaleImageinList, 1.05)
                else
                    ratioImageInListArticlesNew2[i] = Math.max(ratioImageInListArticlesNew2[i] - scaleImageinList, 1.0)
            }
            this.setState({
                ratioImageInListArticlesNews2: ratioImageInListArticlesNew2
            });
        }, 100)

        this.changesizeListArticlesNews1 = setInterval(() => {
            let scaleImageinList = 0.01 + Math.random() * 0.0025; // We want random number from 0.01 to 0.0125
            let ratioImageInListArticlesNew1 = this.state.ratioImageInListArticlesNews1;
            for (let i = 0; i < this.props.cellArticlesNews.length; i++) {
                if (this.state.hoverListArticlesNews1[i])
                    ratioImageInListArticlesNew1[i] = Math.min(ratioImageInListArticlesNew1[i] + scaleImageinList, 1.05)
                else
                    ratioImageInListArticlesNew1[i] = Math.max(ratioImageInListArticlesNew1[i] - scaleImageinList, 1.0)
            }
            this.setState({
                ratioImageInListArticlesNews1: ratioImageInListArticlesNew1
            });
        }, 100)



    }

    componentWillUnmount = () => {

        clearInterval(this.changesizeListArticlesNews2);
        clearInterval(this.changesizeListArticlesNews1);

    }

    render() {
       

        return (
            <div className="blog">
                {this.props.typeBlogs !== "" &&
                    <div id="blogpage">
                        {this.props.typeBlogs}

                    </div>}

                {this.props.typeBlogs === "" &&
                    <div id="blogpage">
                        .
                        <Header1 />
                        <div id="blog_content">


                            <div id="blog_content1">

                                <div id="list-articles-news-info1">
                                    <div id="list-articles-news-info-wrapper1">
                                        <div id="list-articles-news-info-title1">
                                            <div id="list-articles-news-info-title-text1">
                                                Latest news
                                            </div>
                                        </div>
                                        <div id="grid-articles-news-info">
                                            <GridSystem colCount={1} md={12} xs={12} sm={12} lg={4} >
                                                {this.props.cellArticlesNews1.length > 0 ?
                                                    this.props.cellArticlesNews1.map((ariticlesNews, index) =>
                                                        <div
                                                            id="grid-articles-news-info-cell1"
                                                            key={index}
                                                            onMouseEnter={() => this.onMouseEnterListArticlesNews1(index)}
                                                            onMouseLeave={() => this.onMouseLeaveListArticlesNews1(index)}
                                                            onClick={() => {
                                                                this.props.selectPage("SinglePost", "");

                                                            }}
                                                        >
                                                            <div id="grid-articles-news-info-cell-bg">
                                                                <img
                                                                    src={ariticlesNews.img}
                                                                    alt=""
                                                                    id="grid-articles-news-info-cell-image"
                                                                    style={{
                                                                        transform: "scale3d(" + this.state.ratioImageInListArticlesNews1[index].toString()
                                                                            + ", " + this.state.ratioImageInListArticlesNews1[index].toString() + ", 1.0)"
                                                                    }}
                                                                />

                                                                <div id="grid-articles-news-info-cell-tag">
                                                                    {ariticlesNews.tag}
                                                                </div>
                                                            </div>

                                                            <div id="grid-articles-news-info-cell-content">
                                                                <div
                                                                    id="grid-articles-news-info-cell-title1"
                                                                    style={{
                                                                        color: "rgb(" + String(4100 * this.state.ratioImageInListArticlesNews1[index] - 4056)
                                                                            + ", " + String(1600 * this.state.ratioImageInListArticlesNews1[index] - 1563) + ", "
                                                                            + String(1220 * this.state.ratioImageInListArticlesNews1[index] - 1184) + ")"
                                                                    }}
                                                                >
                                                                    {ariticlesNews.title}
                                                                </div>

                                                                <div id="grid-articles-news-info-cell-detail">
                                                                    <div id="grid-articles-news-info-cell-detail-click">
                                                                        <div id="grid-articles-news-info-cell-detail-click-text">
                                                                            Read more
                                                                        </div>

                                                                        <div
                                                                            id="grid-articles-news-info-cell-detail-click-direction"
                                                                            style={{
                                                                                transform: "translate3d("
                                                                                    + String(120 * this.state.ratioImageInListArticlesNews1[index] - 120)
                                                                                    + "px, 0px, 0px)"
                                                                            }}
                                                                        >
                                                                            &#10140;
                                                                        </div>
                                                                    </div>

                                                                    <div id="grid-articles-news-info-cell-detail-date">
                                                                        {ariticlesNews.day}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>)
                                                    : [<p>No news are found.</p>]}
                                            </GridSystem>
                                        </div>
                                    </div>
                                </div>
                                <Sidebar />
                            </div>

                        </div>

                        <div id="list-articles-news-info">
                            <div id="list-articles-news-info-wrapper">
                                <div id="list-articles-news-info-title">
                                    <div id="list-articles-news-info-title-text">
                                        Our articles &#38; news
                                    </div>

                                    <div
                                        id="list-articles-news-info-title-btn"
                                        onClick={() => {
                                            this.props.selectPage("BlogPage");
                                            this.props.updateBlogsRender("");
                                        }}
                                    >
                                        Browse all articles
                                    </div>
                                </div>

                                <div id="grid-articles-news-info">
                                    <GridSystem colCount={3} md={12} xs={12} sm={12} lg={4} >
                                        {this.props.cellArticlesNews2.length > 0 ?
                                            this.props.cellArticlesNews2.map((ariticlesNews, index) =>
                                                <div
                                                    id="grid-articles-news-info-cell"
                                                    key={index}
                                                    onMouseEnter={() => this.onMouseEnterListArticlesNews2(index)}
                                                    onMouseLeave={() => this.onMouseLeaveListArticlesNews2(index)}
                                                    onClick={() => {
                                                        this.props.selectPage("SinglePost");
                                                        this.props.updateBlogsRender(ariticlesNews.key);
                                                    }}
                                                >
                                                    <div id="grid-articles-news-info-cell-bg">
                                                        <img className="news_img"
                                                            src={ariticlesNews.img}
                                                            alt=""
                                                            id="grid-articles-news-info-cell-image"
                                                            style={{
                                                                transform: "scale3d(" + this.state.ratioImageInListArticlesNews2[index].toString()
                                                                    + ", " + this.state.ratioImageInListArticlesNews2[index].toString() + ", 1.0)"
                                                            }}
                                                        />

                                                        <div id="grid-articles-news-info-cell-tag">
                                                            {ariticlesNews.tag}
                                                        </div>
                                                    </div>

                                                    <div id="grid-articles-news-info-cell-content">
                                                        <div
                                                            id="grid-articles-news-info-cell-title"
                                                            style={{
                                                                color: "rgb(" + String(4100 * this.state.ratioImageInListArticlesNews2[index] - 4056)
                                                                    + ", " + String(1600 * this.state.ratioImageInListArticlesNews2[index] - 1563) + ", "
                                                                    + String(1220 * this.state.ratioImageInListArticlesNews2[index] - 1184) + ")"
                                                            }}
                                                        >
                                                            {ariticlesNews.title}
                                                        </div>

                                                        <div id="grid-articles-news-info-cell-detail">
                                                            <div id="grid-articles-news-info-cell-detail-click">
                                                                <div id="grid-articles-news-info-cell-detail-click-text">
                                                                    Read more
                                                                </div>

                                                                <div
                                                                    id="grid-articles-news-info-cell-detail-click-direction"
                                                                    style={{
                                                                        transform: "translate3d("
                                                                            + String(120 * this.state.ratioImageInListArticlesNews2[index] - 120)
                                                                            + "px, 0px, 0px)"
                                                                    }}
                                                                >
                                                                    &#10140;
                                                                </div>
                                                            </div>

                                                            <div id="grid-articles-news-info-cell-detail-date">
                                                                {ariticlesNews.day}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>)
                                            : [<p>No news are found.</p>]}
                                    </GridSystem>
                                </div>
                            </div>
                        </div>
                    </div>
                }

            </div>

        );
    }

};
