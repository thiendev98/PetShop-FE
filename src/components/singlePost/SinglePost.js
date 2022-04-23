import "./../style.css"
import "./singlePost.css"
import React from "react"

import Sidebar from "../sidebar/Sidebar";
export default class SinglePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="post0">
               
                <div className="singlePost" >
                    <div className="singlePostWrapper" >
                        <div className="testZoom">
                            <div>
                                <img src="https://assets.website-files.com/611a94f7245a41e60e0ce4e3/611afadf790dc2a997dde426_image-6-blog-veterinary-x-template.jpg" alt="" className="singlePostImg" />
                            </div>
                        </div>
                        <h1 className="singlePostTitle">
                            Dog toys: How to pick the best and the safest
                            <div className="singlePostEdit">
                                <i className="singlePostIcon far fa-edit"> </i>
                                <i className="singlePostIcon far fa-trash-alt"> </i>
                            </div>
                        </h1>
                        <div className="singlePostInfo">
                            <span className="singlePostAuthur">Authur: <b>Rebecca Edwards</b></span>
                            <span className="singlePostDate">February 18, 2019</span>
                        </div>
                        <br />
                        <br />
                        <p className="singlePostDesc">
                            For dogs and other pets, toys are not a luxury, but a necessity.
                            Toys are important to your dog’s well-being.
                            Toys help fight boredom when you have to leave your dog at home, and provide comfort when they’re feeling nervous. Toys can even help prevent your dog from developing certain problem behaviors.
                        </p>
                        <br /><br />
                        <p className="singlePostDesc1">
                            Although cats can be pretty picky about toys, dogs are often more than willing to play with any object they can get their paws on. That means you'll need to be particularly careful when monitoring
                            your dog's playtime to prevent any "unscheduled" activities.
                        </p>
                        <br /><br />
                        <p className="singlePostDescCap">
                            Ensure safety
                        </p>
                        <br /><br />
                        <p className="singlePostDesc1">
                            Many factors contribute to the safety or danger of a toy, and a number of them depend upon your dog's size, activity level and preferences. Another thing to consider is the environment where your dog spends their time.
                            Although we can't guarantee the safety of any specific toy, we can offer the following guidelines.
                        </p>
                        <br /><br />
                        <p className="singlePostDesc1">
                            The things that are usually most attractive to dogs are often the very things that are the most dangerous. Dog-proof your home by removing string, ribbon, rubber bands, children's toys, pantyhose and other inedible items that could be swallowed.
                        </p>

                        <br /><br />
                        <p className="singlePostDesc1">
                            Be sure to buy toys of appropriate size for your dog. Toys that are too small can easily be swallowed or become lodged in your dog's throat.
                        </p>

                        <br /><br />
                        <p className="singlePostDesc1">
                            Supervise your dog's play with squeaky toys: your dog may feel that they must find and destroy the source of the squeaking, which means they could ingest it if left unwatched.
                        </p>

                        <br /><br />
                        <p className="singlePostDesc1">
                            Avoid or alter any toys that aren't "dog-proof" by removing ribbons, strings, eyes or other parts that could be chewed off and ingested. Discard toys when they start to break into pieces or are torn.
                            Check labels on stuffed toys to see that they are labeled as safe for children under three years of age and that they don't contain any dangerous fillings.
                            Problem fillings include nutshells and polystyrene beads, but even "safe" stuffings aren't truly digestible. Remember that soft toys are not indestructible, but some are sturdier than others. Soft toys should be machine washable.
                        </p>
                        <br /><br />
                        <p className="singlePostDescCap">
                            Recommended toys
                        </p>
                        <br /><br />
                        <p className="singlePostDescCap1">
                            Active toys
                        </p>
                        <br /><br />
                        <p className="singlePostDesc1">
                            Hard rubber toys such as Nylabone® and Kong®-type products come in many shapes and sizes and are fun for chewing and carrying around. For dogs that like tug-of-war and chewing on interesting textures, rope and woven toys are usually available in a "bone" shape with knotted ends.
                        </p>
                        <br /><br />
                        <p className="singlePostDesc1">
                            Tennis balls make great dog toys for fetching, but don’t stand up to chewing very well.
                            Discard any tennis balls that have been chewed through, as they can pose a choking hazard to your pet.
                        </p>
                        <br /><br />
                        <p className="singlePostDescCap1">
                            Distraction toys
                        </p>

                        <br /><br />
                        <p className="singlePostDesc1">
                            Kong®-type toys, especially when filled with broken-up treats, can keep a puppy or dog busy for hours. (If your veterinarian says your dog can eat peanut butter, make sure it is not sweetened with xylitol—which is toxic to dogs—and add some to the crushed-up treats for a tastier, and busier, snack!)
                        </p>

                        <br /><br />
                        <p className="singlePostDesc1">
                            "Busy-box" or "feeder" toys are large rubber shapes that can be filled with treats. By moving the cube around with their nose, mouth and paws, your dog can get to the goodies. Many dogs who tend to eat their food too quickly benefit from being fed through a feeder-style toy.
                        </p>
                        <br /><br />
                        <p className="singlePostDescCap1">
                            Comfort toys
                        </p>

                        <br /><br />
                        <p className="singlePostDesc1">
                            Soft stuffed toys are good for several purposes, but they aren't appropriate for all dogs. Here are a few tips for choosing the right stuffed toy:
                        </p>
                        <br /><br />
                        <p className="singlePostDesc2">
                            &#10066;&nbsp;Soft stuffed toys are good for several purposes, but they aren't appropriate for all dogs. Here are a few tips for choosing the right stuffed toy:
                        </p>
                        <br /> <br />
                        <p className="singlePostDesc2">
                            &#10066;&nbsp;Soft stuffed toys are good for several purposes, but they aren't appropriate for all dogs. Here are a few tips for choosing the right stuffed toy:
                        </p>
                        <br /><br />
                        <p className="singlePostDesc1">
                            Dirty laundry, such as an old t-shirt, pillowcase, towel or blanket, can be very comforting to a dog, especially if the item smells like you! Be forewarned that the item could be destroyed by industrious fluffing, carrying and nosing.
                        </p>
                    </div>
                    
                </div>
                <Sidebar />
               
            </div>
        );
    }
};
