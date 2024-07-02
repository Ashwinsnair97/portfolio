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
        before: [
            {
                header: "TOOL INFO",
                description: (<>
                    <p>Recipe Simulator enables the user to make changes to the raws components going into the recipe of a finished good or make changes to a raws component directly in the portfolio and simulate to see the effects on the raws carbon emissions. </p></>)
            },
            {
                header: "THE NEED",
                description: (<>
                    <p>The <span className="font-bold">formulation team</span>  at Mars Pet Nutrition NA did not have a method to quantify the impact on <span className="font-bold">carbon emissions</span>  that they can potentially drive through <span className="font-bold">ingredient changes</span>  in recipes. </p></>)
            },
            {
                header: "THE SOLUTION",
                description: (<>
                    <p>The Pawprint Recipe Footprint Modeler is a web app what-if scenario simulator that <span className="font-bold">estimates GHG emission impact</span> across the MARS PNNA portfolio when <span className="font-bold">a change is made in a recipe</span> of a product. The solution utilizes the same data foundation created for the Pawprint Sustainability report.</p></>)
            },
            {
                header: "How does it help business in MARS?",
                description: (<>
                    <p>Specific opportunities to <span className="font-bold">reduce raws emissions</span> are identified by formulators through the Pawprint report, who then utilize this tool to <span className="font-bold">substitute high emission ingredients</span> with potential lower emission ones and simulate based on <span className="font-bold">forecasted demand</span> the <span className="font-bold">resultant GHG emissions</span>. This enables creation of better Climate Action Plans.</p></>)
            },
        ],
        after: [
            {
                header: "Design- Driven Decisions",
                description: (
                    <>
                        <p>FILTERS SCREEN :</p>
                        <ul>
                            <li>Grouping of filters= The major pain point from the user base was the presence of a lot of options on the first page itself.  It was clearly pointing in the direction of going through the Hick’s Law checklist. So the ways to deal with were as follows: </li>
                            <ol>
                                <li>Try to reduce the number of options</li>
                                <li>Find a way to hide items</li>
                                <li>If you can’t go with any of the above, try to put all the options in an easily skimmable order and make sure the items are familiar.

                                    As you can see, we went ahead with the third one, as it was the only option that was most suitable as per the requirements from the user. We narrowed down all the filters and put them in separate buckets for better decision making. </li>
                            </ol>

                            <li>Nudge= Since the user base for this tool was mostly an elder age group (50+ age) who is majorly accustomed to the Excel and Power BI, introducing something that is entirely different in terms of look and feel, could have proven to be a drastic dip in usage, engagement and retention. To solve this problem, we introduced <span className="font-bold">Hotspots</span>- a minimalist UX element that is designed to capture a user’s attention without being intrusive or annoying. We wanted to give subtle hints/ signifiers (small cues or context changes) that can affect user’s decisions.</li>
                        </ul>
                        <p>SIMULATION SCREEN :</p>
                        <ul>
                            <li>Validation Rules= To reduce the friction and an extra manual effort of going through all the steps and then getting an error to let the user know about the incorrect values entered, we used the Anchoring Bias- Users rely heavily on the first piece of information they see.
                                It is useful to increase the perceived value. </li>
                            <li>Disclaimer in Simulation Page= Before the users click on Run Simulation to see the impact, we take a kind of double confirmation from them to check if they did make changes in the recipe (which is mandatory to do for at least one recipe). This is pertaining to the <span className="font-bold">reactance</span>- a UX principle, psychology related to user behavior, where people tend to react indifferently when they are taken away from their choices or range of options. But we also kept in mind that it doesn’t incline towards dark pattern. </li>
                        </ul>
                        <p>IMPACT SCREEN :</p>
                        <ul>
                            <li>Color coded accordions= The tree/ hierarchy chart and the cards showing the impact for the respective sections as used in the filters, have the same colors, hence incorporating <span className="font-bold">‘Law of Similarity’</span>- users perceive relationship between the elements that look similar. This helps the users to connect the related elements and their insights quickly without much of a mental hassle. It also considers another UX principle as well which is <span className="font-bold">‘Discoverability’</span>- The ease with which users can discover the features of the tool. It means that the user can extract the knowledge they need of the product by looking at it. If the key elements to take action are well presented then discoverability is good.  </li>
                            <li>Floating Action Buttons= We have provided the users with numerous options as download excel, download the slides in Powerpoint and save the simulation results and metrics. Since one of the use cases involve multi selection, we kept a FAB at the mid bottom of the screen, for displaying the selected filters. </li>
                        </ul>
                    </>
                )

            },
            {
                header: "Other UI/ UX incorporations:",
                description: (
                    <>
                        <ul>
                            <li>Tutorials at the top left corner of each page= We adopted <span className="font-bold">‘Priming’</span> as previous stimuli influence user’s decisions, by giving subtle visual or verbal suggestions in the form of tutorials (containing a guide to use the tool throughout, which is a collection of the steps, screenshots and GIFs), helping users recall specific information, influencing how they respond. Priming works by activating an association or representation in users short- term memory just before another stimulus or task is introduced. </li>
                            <li>Validation Rules= To reduce the <span className="font-bold">‘Cognitive Load’</span>- total amount of mental effort that is required to complete a task, or basically the processing power needed by the users to interact with a product, we gave the validation rules for the user to go through, before proceeding into the next steps, hence reducing the friction in terms of the overall experience. </li>
                            <li>UOM in headers= We provided the units of measurement in the table headers to give  a better sense of the information to the users- this is was a part of the feedback survey that we did on current sets of users and also a bunch of non-users (Please note that this survey was possible as we had the luxury of time!). </li>
                            <li>Loader Comments= Since a huge amount of data is responsible for the functioning of this tool, it takes time to load the screens. So, we introduced fun facts about the brand and the tool, to make the wait time not dip the user’s attention, hence increasing the engagement and the retention of the users. </li>
                        </ul>
                    </>
                )

            },
        ],
        imgs: ["/imgs/recipe/1.png", "/imgs/recipe/2.png", "/imgs/recipe/3.png", "/imgs/recipe/4.png", "/imgs/recipe/5.png", "/imgs/recipe/6.png", "/imgs/recipe/7.png"],
    },

    "sop_cockpit": {
        id: "sop_cockpit",
        title: "S&OP Cockpit",
        imageList: false,
        before: [
            {
                header: "OVERVIEW",
                description: (
                    <>
                        <p>A user- friendly reporting interface to track Global Food metrics with automated consolidation of manual inputs to find difficulties in validating sales impacting KPIs and helping the Mars senior management teams align, manage and deploy business strategy across the functions.</p>

                    </>
                )

            },
            {
                header: "Proposed Solution",
                description: (
                    <>
                        <p>Reporting Pages:</p>
                        <ul>
                            <li>Intelligent findings panel- highlighting the KPIs’ deviation against target values</li>
                            <li>On click KPI details breakdown</li>
                            <li>Dynamic arrangement of KPIs along with newly added ones</li>
                            <li>Objectives as new section</li>
                            <li>All KPIs visible at a time on a same page without any manual scroll</li>
                            <li>KPI search functionality</li>
                        </ul>
                        <p>Admin Page:</p>
                        <ul>
                            <li>Intelligent findings panel- highlighting the KPIs’ deviation against target values</li>
                            <li>Create/ Modify/ Delete KPIs (single or multi-select) functionality</li>
                            <li>Ability to change KPI names</li>
                            <li>Manage user access to the application</li>
                            <li>Change user roles without deleting the user details multiple times</li>
                            <li>Extract excel data for all KPIs</li>
                            <li>Extract data for active user details</li>
                            <li>Download PPT in graphical format</li>
                            <li>View all escalation cards across each segment</li>
                        </ul>
                    </>
                )

            },
            {
                header: "Non Functional Requirements",
                description: (
                    <>
                        <ul>
                            <li>Increase responsiveness of the tool</li>
                            <li>Enhancement of the user experience</li>
                            <li>Adaptability on mobile devices</li>
                        </ul>
                    </>
                )

            },
        ],
        after: [{
            header: "Pain points addressed",
            description: (
                <>
                    <ul>
                        <li><span className="font-bold"> User Interaction and Experience:</span> Redesigned the tool to optimize user flows by leveraging cutting- edge design principles to elevate overall user experience of the tool.</li>
                        <li><span className="font-bold"> Mobile device adaptability:</span> Accommodating different screen resolutions and aspect ratios by modularised code base and adaptive design.</li>
                        <li><span className="font-bold"> Tool Responsiveness:</span> By implementing various enhancements on the frontend and backend part, tool’s response time reduced from 40 seconds to 7 seconds.</li>
                    </ul>
                </>
            )

        },
        {
            header: "UI/ UX principles to enable better consumption",
            description: (
                <>
                    <ul>
                        <li><span className="font-bold"> User Centric Design:</span> Design and structure of the tool to be highly intuitive for the user needs</li>
                        <li><span className="font-bold"> Visual Hierarchy:</span> Clear structure including separation between sections to ensure an intuitive interface</li>
                        <li><span className="font-bold"> Minimalism with a purpose:</span> High emphasis on decluttering and simplifying the user interface for better user experience</li>
                        <li><span className="font-bold"> Consistent Design Language:</span> Consistency in colors, typography and layouts fostering familiarity</li>
                    </ul>
                </>
            )

        },

        ],
        imgs: ["/imgs/sop_cockpit/1.png", "/imgs/sop_cockpit/2.png", "/imgs/sop_cockpit/3.png", "/imgs/sop_cockpit/4.png", "/imgs/sop_cockpit/5.png"],

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
                    <p className="flex">To view the full case study, click here <Link className="self-center mx-6" href={"https://docs.google.com/presentation/d/1OKFnNw2jx95yZi7JwrLX_LwNrF4yg3NQdvlP1B0Gfg0/edit?usp=sharing"} rel="noopener noreferrer" target="_blank"> <FaGoogleDrive className="text-black" /></Link></p>
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
                    <p className="flex">To view the full case study, click here <Link className="self-center mx-6" href={"https://curiouscreator.notion.site/Revamping-POCKET-App-85ffeb988e48416788c1e5d0590f59c7"} rel="noopener noreferrer" target="_blank"> <SiNotion className="text-black" /></Link></p>
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
                <p className="flex">To view the full case study, click here <Link className="self-center mx-6" href={"https://medium.com/@katiyarsakshi1/legalise-mobile-app-ui-ux-case-study-82e701804f9e"} rel="noopener noreferrer" target="_blank"> <FaMedium className="text-black" /></Link></p>
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
        imageList: true,
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