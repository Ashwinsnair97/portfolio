import { FaDribbble } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { FaGoogleDrive } from "react-icons/fa";
import { SiNotion } from "react-icons/si";





export const cards = [

    {
        url: "/imgs/grid_imgs/Cover_image_1.png",
        url2: "/imgs/grid_imgs/Hover_image_1.png",
        next: "/imgs/next_imgs/Cover_image_1.png",
        next2: "/imgs/next_imgs/Hover_image_1.png",
        link: "/projects/contract_commitments",
        title: "contract_commitments",
        overview: true,
        id: 2,
    },
    {
        url: "../imgs/grid_imgs/Cover_image_2.png",
        url2: "/imgs/grid_imgs/Hover_image_2.png",
        next: "/imgs/next_imgs/Cover_image_2.png",
        next2: "/imgs/next_imgs/Hover_image_2.png",
        link: "/projects/recipe",
        title: "recipe",
        overview: true,
        id: 3,
    },
    {
        url: "../imgs/grid_imgs/Cover_image_3.png",
        url2: "/imgs/grid_imgs/Hover_image_3.png",
        next: "/imgs/next_imgs/Cover_image_3.png",
        next2: "/imgs/next_imgs/Hover_image_3.png",
        link: "/projects/sop_cockpit",
        title: "sop_cockpit",
        overview: true,
        id: 4,
    },
    {
        url: "/imgs/grid_imgs/Cover_image_4.png",
        url2: "/imgs/grid_imgs/Hover_image_4.png",
        next: "/imgs/next_imgs/Cover_image_4.png",
        next2: "/imgs/next_imgs/Hover_image_4.png",
        link: "/projects/ott",
        title: "ott",
        overview: true,
        id: 5,
    },
    {
        url: "/imgs/grid_imgs/Cover_image_5.png",
        url2: "/imgs/grid_imgs/Hover_image_5.png",
        next: "/imgs/next_imgs/Cover_image_5.png",
        next2: "/imgs/next_imgs/Hover_image_5.png",
        link: "/projects/pocket",
        overview: true,
        title: "pocket",
        id: 6,
    },
    {
        url: "/imgs/grid_imgs/Cover_image_6.png",
        url2: "/imgs/grid_imgs/Hover_image_6.png",
        next: "/imgs/next_imgs/Cover_image_6.png",
        next2: "/imgs/next_imgs/Hover_image_6.png",
        link: "/projects/legalise",
        title: "legalise",
        overview: true,
        id: 1,
    },
    {
        url: "/imgs/grid_imgs/Cover_image_7.png",
        url2: "/imgs/grid_imgs/Hover_image_7.png",
        next: "/imgs/next_imgs/Cover_image_7.png",
        next2: "/imgs/next_imgs/Hover_image_7.png",
        link: "/projects/msm",
        title: "msm",
        overview: false,
        id: 7,
    },
    {
        url: "/imgs/grid_imgs/Cover_image_8.png",
        url2: "/imgs/grid_imgs/Hover_image_8.png",
        next: "/imgs/next_imgs/Cover_image_8.png",
        next2: "/imgs/next_imgs/Hover_image_8.png",
        link: "/projects/rc",
        title: "rc",
        overview: false,
        id: 8,
    },
    {
        url: "/imgs/grid_imgs/Cover_image_9.png",
        url2: "/imgs/grid_imgs/Hover_image_9.png",
        next: "/imgs/next_imgs/Cover_image_9.png",
        next2: "/imgs/next_imgs/Hover_image_9.png",
        link: "/projects/system_health",
        title: "system_health",
        overview: false,
        id: 9,
    },
    {
        url: "/imgs/grid_imgs/Cover_image_10.png",
        url2: "/imgs/grid_imgs/Hover_image_10.png",
        next: "/imgs/next_imgs/Cover_image_10.png",
        next2: "/imgs/next_imgs/Hover_image_10.png",
        link: "/projects/mesh_hub",
        title: "mesh_hub",
        overview: false,
        id: 10,
    },
];


export const projects =
{
    "": {
        id: "",
        title: "Contract Commitments Dashboard",
        imageList: true,
        before: [],
        after: [],
        imgs: [],

    },
    "contract_commitments": {
        id: "contract_commitments",
        title: "Contract Commitments Dashboard",
        imageList: false,
        before: [
            {
                header: "TOOL INFO",
                description: (<>
                    <p>The Contract Commitments Dashboard is an advanced analytical tool designed to identify and outline significant risks related to materials, their suppliers, purchase groups, and sites. It features comprehensive views that highlight material demand over specific periods, associated contracts, and risk identification. The tool facilitates proactive risk mitigation strategies, ensuring informed decision-making and enhanced supply chain management</p></>)
            },
            {
                header: "OVERVIEW",
                description: (
                    <>
                        <p>
                            In the MVP phase, the Contract Commitments Dashboard used by commercial team to identify potential risks and streamline contract management by:
                        </p>
                        <ul>
                            <li>Identifying Contract Risks</li>
                            <li>Tracking Supplier Performance</li>
                            <li>Assistance with Contract Negotiation</li>
                            <li>Personalized visualization for different personas</li>
                        </ul>
                        <p>
                            Being part of this innovative project has been invaluable for my growth as a professional.

                        </p>
                        <p>
                            The dashboard has approximately 50 unique users with around 15 active daily users. Commercial team makes supplier retention decisions and contract renewals based on supplier performance insights. This growth necessitated significant improvements in the dashboard's usability, signaling the end of the MVP phase.
                        </p>
                        <p>
                            We had to ensure consistency, scalability, and sustainability across various elements, such as modals, buttons, and different page approaches. We embarked on developing a robust design system, collaborating closely to create fully auto-layout components. Occasionally, we had to "detach" components, even though we preferred not to.
                        </p>
                        <p>
                            When discussing design systems, inspirations like Polaris, Carbon, or Atlassian often come to mind. We drew inspiration from these systems, adapting elements such as naming conventions, structure, and color systems to suit our needs. Our goal was to use the design system to enhance efficiency and tailor it to our unique requirements.
                        </p>
                    </>
                )

            },
        ],
        after: [
            {
                header: "Unlocking value for the commercial team",
                description: (
                    <>
                        <p>
                       <span className="font-bold"> User Flow:</span> Elevating the user journey with meticulous attention to detail, creating a crafted experience that offers customized flows for streamlined interaction and comprehension.
                        </p>
                        <p>
                       <span className="font-bold"> Intuitiveness: </span> Enhancing usability by simplifying navigation through an intuitive layout, ensuring a seamless and user-friendly experience.
                        </p>
                        <p>
                       <span className="font-bold"> Report Responsiveness: </span> Improving operational efficiency by reducing wait times, ensuring prompt responses to user actions, and delivering timely and accurate reports.
                        </p>
                    </>
                )

            },
            {
                header: "Proposed Solution",
                description: (
                    <>
                        <ul>
                            <li>To redesign and redefine the user journey to be highly intuitive, ensuring that users seamlessly adapt to the functionalities while maintaining high engagement levels. This involves crafting an experience that is not only easy to navigate but also encourages users to explore and utilize the full potential of the dashboard's capabilities. Through user-centered design principles and a focus on simplicity, the revamped user journey will foster increased adoption and sustained user engagement.</li>
                            <li>Implemented numerous dynamic, user-customizable visual elements and personalized threshold settings, allowing users to tailor reports to their unique requirements. This enhancement optimized the dashboard for individual needs, significantly improving the overall user experience.</li>
                            <li>Developed and integrated an option for users to set preferences for the aforementioned customizations, ensuring that all favorite settings are automatically applied upon subsequent logins. This feature enhances user satisfaction by providing a personalized and seamless experience each time they access the dashboard</li>
                            <li>Introduced the capability for users to download analysis reports and data based on their specific interactions, including applied filters. This feature ensures that users can easily obtain customized reports reflecting their unique workflow and data preferences</li>
                        </ul>
                    </>
                )

            },
        ],
        imgs: ["/imgs/contract_commitment/1.png", "/imgs/contract_commitment/2.png", "/imgs/contract_commitment/3.png", "/imgs/contract_commitment/4.png", "/imgs/contract_commitment/5.png"],

    },

    "recipe": {
        id: "recipe",
        title: "Recipe Simulator",
        imageList: false,
        before: [],
        after: [],
        description: (<>
            <p>Very nice recipe. There is a homely feel to it!</p></>),
        imgs: ["/imgs/recipe/1.png", "/imgs/recipe/2.png", "/imgs/recipe/3.png", "/imgs/recipe/4.png", "/imgs/recipe/5.png", "/imgs/recipe/6.png", "/imgs/recipe/7.png"],
        overview: (
            <>
                <p>
                    Yummmmmmyyyy
                </p>
                {/* <ul style={{ listStyleType: 'disc' }}>
                    <li>Identifying Contract Risks</li>
                    <li>Tracking Supplier Performance</li>
                    <li>Assistance with Contract Negotiation</li>
                    <li>Personalized visualization for different personas</li>
                </ul>
                <p>
                    Being part of this innovative project has been invaluable for my growth as a professional.

                </p>
                <p>
                    The dashboard has approximately 50 unique users with around 15 active daily users. Commercial team makes supplier retention decisions and contract renewals based on supplier performance insights. This growth necessitated significant improvements in the dashboard's usability, signaling the end of the MVP phase.
                </p>
                <p>
                    We had to ensure consistency, scalability, and sustainability across various elements, such as modals, buttons, and different page approaches. We embarked on developing a robust design system, collaborating closely to create fully auto-layout components. Occasionally, we had to "detach" components, even though we preferred not to.
                </p>
                <p>
                    When discussing design systems, inspirations like Polaris, Carbon, or Atlassian often come to mind. We drew inspiration from these systems, adapting elements such as naming conventions, structure, and color systems to suit our needs. Our goal was to use the design system to enhance efficiency and tailor it to our unique requirements.
                </p> */}
            </>
        ),
    },

    "sop_cockpit": {
        id: "sop_cockpit",
        title: "S&OP Cockpit",
        imageList: false,
        before: [],
        after: [],
        description: (<>
            <p>This also should be good. I guess?</p></>),
        imgs: ["/imgs/sop_cockpit/1.png", "/imgs/sop_cockpit/2.png", "/imgs/sop_cockpit/3.png", "/imgs/sop_cockpit/4.png", "/imgs/sop_cockpit/5.png"],
        overview: (
            <>
                <p>
                    lets see what to put here
                </p>
                {/* <ul style={{ listStyleType: 'disc' }}>
                    <li>Identifying Contract Risks</li>
                    <li>Tracking Supplier Performance</li>
                    <li>Assistance with Contract Negotiation</li>
                    <li>Personalized visualization for different personas</li>
                </ul>
                <p>
                    Being part of this innovative project has been invaluable for my growth as a professional.

                </p>
                <p>
                    The dashboard has approximately 50 unique users with around 15 active daily users. Commercial team makes supplier retention decisions and contract renewals based on supplier performance insights. This growth necessitated significant improvements in the dashboard's usability, signaling the end of the MVP phase.
                </p>
                <p>
                    We had to ensure consistency, scalability, and sustainability across various elements, such as modals, buttons, and different page approaches. We embarked on developing a robust design system, collaborating closely to create fully auto-layout components. Occasionally, we had to "detach" components, even though we preferred not to.
                </p>
                <p>
                    When discussing design systems, inspirations like Polaris, Carbon, or Atlassian often come to mind. We drew inspiration from these systems, adapting elements such as naming conventions, structure, and color systems to suit our needs. Our goal was to use the design system to enhance efficiency and tailor it to our unique requirements.
                </p> */}
            </>
        ),
    },
    "ott": {
        id: "ott",
        title: "Contract Commitments Dashboard",
        imageList: false,
        before: [
            {
                header: "OVERVIEW",
                description: (<>
                    <p>As the digital revolution continues to reshape how we consume media, over-the-top (OTT) platforms have become a staple in delivering diverse content ranging from TV shows to movies. However, the user experience (UX) of these platforms is often tailored to younger, tech-savvy users, potentially alienating older adults who may find the interface and functionalities challenging to navigate. This case study focuses on designing a sub-product within an OTT platform specifically catering to the 40+ population, ensuring it is user-friendly, accessible, and engaging for older and less tech-savvy individuals.</p></>)
            },
            {
                header: "CASE STUDY",
                description: (<>
                    <p className="flex">To view the full case study, click here <Link className="self-center mx-6" href={"https://docs.google.com/presentation/d/1OKFnNw2jx95yZi7JwrLX_LwNrF4yg3NQdvlP1B0Gfg0/edit?usp=sharing"}  rel="noopener noreferrer" target="_blank"> <FaGoogleDrive className="text-black"/></Link></p>
                    </>)
            },
        ],
        after: [],
        imgs: ["/imgs/ott/1.png", "/imgs/ott/2.png", "/imgs/ott/3.png"],

    },
    "pocket": {
        id: "pocket",
        title: "Contract Commitments Dashboard",
        imageList: false,
        before: [
            {
                header: "OVERVIEW",
                description: (<>
                    <p>Pocket is a widely used application that enables users to save articles, videos, and various types of content for later viewing. Despite its popularity and utility, the current user interface of Pocket has become outdated, leading to a less optimal user experience. This case study delves into the process of redesigning the Pocket application to create a more modern, efficient, and user-friendly interface. By exploring the steps taken in the redesign process, this case study aims to highlight the methods and strategies employed to revamp Pocket, making it more intuitive and enjoyable for its users.</p></>)
            },
            {
                header: "CASE STUDY",
                description: (<>
                    <p className="flex">To view the full case study, click here <Link className="self-center mx-6" href={"https://curiouscreator.notion.site/Revamping-POCKET-App-85ffeb988e48416788c1e5d0590f59c7"}  rel="noopener noreferrer" target="_blank"> <SiNotion className="text-black"/></Link></p>
                    </>)
            },
        ],
        after: [],
        imgs: ["/imgs/pocket/1.png", "/imgs/pocket/2.png", "/imgs/pocket/3.png", "/imgs/pocket/4.png"],

    },
    "legalise": {
        id: "legalise",
        title: "Contract Commitments Dashboard",
        imageList: false,
        before: [{
            header: "OVERVIEW",
            description: (<>
                <p>Navigating the complexities of legal documents can be daunting, especially for individuals unfamiliar with legal jargon and procedures. Traditionally, one would consult a legal expert to review and understand these documents before signing. This often involves booking appointments, visiting law firms, and enduring a time-consuming and cumbersome process.</p>
                <p>This case study explores the development of a digital solution aimed at simplifying the review of legal documents. The product assists users in comparing major aspects of their documents against standard templates, enabling them to evaluate key elements without immediate expert consultation. By leveraging technology, the solution aims to provide a more efficient, hassle-free way for users to understand and verify their legal documents, ultimately bridging the gap between legal expertise and user accessibility.</p></>)
        },
        {
            header: "CASE STUDY",
            description: (<>
                <p className="flex">To view the full case study, click here <Link className="self-center mx-6" href={"https://medium.com/@katiyarsakshi1/legalise-mobile-app-ui-ux-case-study-82e701804f9e"}  rel="noopener noreferrer" target="_blank"> <FaMedium className="text-black"/></Link></p>
                </>)
        },],
        after: [],
        imgs: ["/imgs/legalise/1.png", "/imgs/legalise/2.png", "/imgs/legalise/3.png", "/imgs/legalise/4.png"],

    },
    "msm": {
        id: "msm",
        title: "Contract Commitments Dashboard",
        imageList: true,
        before: [],
        after: [],
        imgs: ["/imgs/msm/1.png", "/imgs/msm/2.png", "/imgs/msm/3.png", "/imgs/msm/4.png", "/imgs/msm/5.png", "/imgs/msm/6.png", "/imgs/msm/7.png", "/imgs/msm/8.png"],

    },
    "rc": {
        id: "rc",
        title: "Contract Commitments Dashboard",
        imageList: false,
        before: [],
        after: [],
        imgs: ["/imgs/rc/1.png", "/imgs/rc/2.png", "/imgs/rc/3.png", "/imgs/rc/4.png"],

    },
    "system_health": {
        id: "system_health",
        title: "Contract Commitments Dashboard",
        imageList: true,
        before: [],
        after: [],
        imgs: ["/imgs/system_health/1.png", "/imgs/system_health/2.png", "/imgs/system_health/3.png", "/imgs/system_health/4.png"],

    },
    "mesh_hub": {
        id: "mesh_hub",
        title: "Contract Commitments Dashboard",
        imageList: true,
        before: [],
        after: [],
        imgs: ["/imgs/mesh_hub/1.png", "/imgs/mesh_hub/2.png", "/imgs/mesh_hub/3.png", "/imgs/mesh_hub/4.png"],

    },

}