import { React } from "react";
import NavbarSimple from "./navBarDark";
import { Avatar } from "@material-tailwind/react";
import image from "../assets/imgs/homepgBg.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import HomeCard from "./HomeCards";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const StoryPg = () => {
    return (
        <>
            <NavbarSimple />
            <div id="PgContainer " className="m-[8rem]">
                <div id="Head">
                    <div
                        id="StoryTitle"
                        className=" font-poppins text-[3rem] text-center  font-bold"
                    >
                        Whatever title of the story is or the description which
                        describes the story
                    </div>
                    <div
                        id="PublishingDetails"
                        className=" font-poppins flex text-[1rem]  justify-center gap-2 my-[4rem]"
                    >
                        <Avatar
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="avatar"
                        />
                        <div id="Details">
                            <div id="PublisherName" className="font-semibold">
                                Jhon Doe
                            </div>
                            <div
                                id="PublishingDate "
                                className=" text-[0.8rem]"
                            >
                                23/07/23
                            </div>
                        </div>
                    </div>
                </div>
                <div id="StoryContainer">
                    <img src={image} alt="StoryBg" />
                    <div
                        id="Story"
                        className="font-poppins text-[1.2rem] text-center my-[3rem] "
                    >
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                        consequat massa quis enim. Donec pede justo, fringilla
                        vel, aliquet nec, vulputate eget, arcu. In enim justo,
                        rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
                        dictum felis eu pede mollis pretium. Integer tincidunt.
                        Cras dapibus. Vivamus elementum semper nisi. Aenean
                        vulputate eleifend tellus. Aenean leo ligula, porttitor
                        eu, consequat vitae, eleifend ac, enim. Aliquam lorem
                        ante, dapibus in, viverra quis, feugiat a, tellus.
                        Phasellus viverra nulla ut metus varius laoreet. Quisque
                        rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                        augue. Curabitur ullamcorper ultricies nisi. Nam eget
                        dui. Etiam rhoncus. Maecenas tempus, tellus eget
                        condimentum rhoncus, sem quam semper libero, sit amet
                        adipiscing sem neque sed ipsum. Nam quam nunc, blandit
                        vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec
                        odio et ante tincidunt tempus. Donec vitae sapien ut
                        libero venenatis faucibus. Nullam quis ante. Etiam sit
                        amet orci eget eros faucibus tincidunt. Duis leo. Sed
                        fringilla mauris sit amet nibh. Donec sodales sagittis
                        magna. Sed consequat, leo eget bibendum sodales, augue
                        velit cursus nunc, Lorem, ipsum dolor sit amet
                        consectetur adipisicing elit. Excepturi molestiae
                        provident, modi quidem maxime ducimus debitis blanditiis
                        itaque tempora ab, dignissimos cumque natus sapiente,
                        amet maiores dolorum? Corporis, ratione velit.
                        Reiciendis sapiente et dolores eius delectus maxime
                        consequatur in eum aspernatur labore, neque laboriosam
                        dignissimos voluptatum, consequuntur voluptate quasi
                        laborum quisquam possimus dolor laudantium tenetur
                        totam! Ip odio voluptatum temporibus. Maiores, et!
                        Accusantium minus esse totam odit nihil dolores
                        dignissimos veniam optio corrupti cumque eligendi amet
                        ducimus voluptate nulla aliquam magnam dicta
                        necessitatibus obcaecati ut iste, quas libero sed ab
                        saepe? Maiores? Corporis reiciendis illo, aspernatur
                        exercitationem cupiditate iure, perferendis commodi
                        quaerat enim fugiat, soluta ut repudiandae officiis quae
                        laborum quasi ratione at veritatis voluptas quia quidem
                        placeat suscipit architecto labore? Iusto! Rerum nulla
                        corrupti suscipit quam ab! Voluptas minus quae
                        necessitatibus maxime molestias reprehenderit possimus
                        fugit labore totam. Maxime, delectus eaque temporibus
                        animi vitae praesentium veniam sequi fuga quisquam,
                        veniam quae perspiciatis perferendis iste iusto dolorum
                        quis? Aliquid vitae praesentium eos iure reiciendis!
                        Fugit placeat iuidem nihil voluptate itaque quo harum
                        eaque! estiae facere sapiente, omnis id quisquam
                        officiis maiores? Quam omnis maiores eius quae
                        blanditiis et minima sequi numquam adipisci. Lorem ipsum
                        dolor, sit amet consectetur adipisicing elit.
                        Temporibus, dignissimos magni nam amet doloremque
                        perferendis ducimus, obcaecati pariatur laborum saepe
                        natus nulla consectetur blanditiis voluptates iusto
                        quod. Amet, non sequi?Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Sapiente, illum eum
                        pariatur numquam consectetur eos debitis? Repellat
                        aspernatur, ea illo porro facere ipsum magnam esse
                        eligendi, error ducimus exercitationem quasi. Fugiat,
                        doloremque alias eveniet consequuntur perferendis
                        tempora quos libero voluptate, consectetur laborum illo
                        maxime aliquid suscipit rerum pariatur maiores sint,
                        esse vel sed saepe quam. Suscipit esse soluta nostrum
                        et. Sint, quidem eos. Natus earum perspiciatis iste
                        repudiandae eos consequuntur consequatur ut aliquam!
                        Quibusdam quia quas impedit aspernatur, neque numquam,
                        rem laudantium cum laborum cupiditate quasi voluptates
                        dolorem sit minima. Optio ad cumque ut suscipit error.
                        Id ad eum reiciendis debitis! Possimus quis odit
                        deleniti consequatur itaque, perferendis, vel, nam
                        accusamus eius impedit totam. Illo accusantium vel totam
                        libero provident. Sequi ratione blanditiis neque
                        reiciendis. Repellendus saepe hic natus eum inventore ea
                        eaque quas? Incidunt, molestiae ipsa corporis est quia
                        sit blanditiis similique dicta. Iusto fuga corrupti
                        doloremque voluptatem dolor? Architecto exercitationem
                        magni praesentium doloremque! Provident quia reiciendis
                        eligendi pariatur debitis! Voluptatem deserunt,
                        distinctio autem obcaecati nostrum laudantium alias
                        perferendis explicabo in vitae quod quis aut dicta sequi
                        labore molestias. Placeat dolorem debitis, ipsam
                        eligendi expedita aliquam inventore alias iure quod hic
                        harum nulla deleniti architecto vitae! Necessitatibus
                        minima voluptatum ipsam qui similique expedita aliquid
                        omnis atque. At, ex nisi. Qui a facilis aperiam eveniet
                        vitae nam blanditiis explicabo, nobis aut, adipisci
                        repellendus? Doloremque atque aperiam vero aspernatur
                        dolorum ab, asperiores obcaecati excepturi error
                        officiis doloribus non modi explicabo illum? Distinctio
                        deleniti autem sit vero voluptatem vitae libero beatae.
                        Illum aut deleniti repudiandae officia earum ex, dolorem
                        delectus enim, rerum quod aspernatur animi accusamus
                        recusandae culpa esse error illo distinctio? Tempora
                        omnis incidunt cum animi impedit similique, nulla sequi,
                        dolorum magnam sit soluta eius reiciendis perspiciatis
                        asperiores temporibus vel doloremque neque iusto ea!
                        Magnam vitae dolore id, voluptates tenetur voluptatibus.
                    </div>
                </div>
            </div>
            <div id="ReadMore" className="m-[1rem]">
                <div id="text" className="text-gray-700 my-4 mx-[4rem]">
                    Read More --
                </div>{" "}
                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    // autoPlay={true}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    // dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px my-4"
                    partialVisbile
                    className="flex gap-10"
                >
                    <HomeCard />
                    <HomeCard />
                    <HomeCard />
                    <HomeCard />
                    <HomeCard />
                    <HomeCard />
                    <HomeCard />
                </Carousel>
            </div>
        </>
    );
};

export default StoryPg;
