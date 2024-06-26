import { FaDribbble } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";





export const cards = [

    {
        url: "/imgs/Cover_image_1.png",
        url2: "/imgs/Hover_image_1.png",
        link: "/projects/contract_commitments",
        title: "contract_commitments",
        id: 2,
    },
    {
        url: "../imgs/Cover_image_2.png",
        url2: "/imgs/Hover_image_2.png",
        link: "/projects/recipe",
        title: "recipe",
        id: 3,
    },
    {
        url: "../imgs/Cover_image_3.png",
        url2: "/imgs/Hover_image_3.png",
        link: "/projects/sop_cockpit",
        title: "sop_cockpit",
        id: 4,
    },
    {
        url: "/imgs/Cover_image_4.png",
        url2: "/imgs/Hover_image_4.png",
        link: "/projects/project4",
        title: "Title 5",
        id: 5,
    },
    {
        url: "/imgs/Cover_image_5.png",
        url2: "/imgs/Hover_image_5.png",
        link: "/projects/project5",
        title: "Title 6",
        id: 6,
    },
    {
        url: "/imgs/Cover_image_6.png",
        url2: "/imgs/Hover_image_6.png",
        link: "/projects/project6",
        title: "Title 1",
        id: 1,
    },
];

export const projects =
{
    "contract_commitments": {
        id: "contract_commitments",
        title: "Contract Commitments Dashboard",
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

}