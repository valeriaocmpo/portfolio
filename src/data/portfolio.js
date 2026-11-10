// ============================================================
// Portfolio Data — Diana Ocampo
// ============================================================

export const projects = [
  {
    id: "casamexico",
    tag: "Casa Mexico",
    title: "Casa Mexico",
    subtitle: "Website Redesign",
    shortDesc:
      "A redesign of the website for Casa Mexico, a family-run Mexican restaurant with three locations in Ottawa. I rebuilt the site around what diners actually come for: the menu, the hours and a fast way to order.",
    image: "/img/CM_home.png",
    imageFallbackLabel: "Casa Mexico redesigned home page with the location picker",
    overview:
      "Casa Mexico runs three restaurants across Ottawa, and each one has its own menu, prices and hours. The original website didn't make that easy to navigate. Diners had to pick a branch before seeing anything useful, and the information they came for (what's on the menu, when it's open, how to order) was buried below large photos and promotions.\n\nI wanted a site that answers those questions within seconds, on a phone, for whichever Casa is closest to you.",
    role: "I owned this project end to end as the sole designer: user interviews, an audit of the existing site, low-fidelity testing, visual design and building the final site in HTML, CSS and JavaScript.",
    sections: [
      {
        heading: "User Interviews",
        body: "I interviewed 4 Ottawa residents who eat out or order takeout regularly. Their answers were remarkably consistent:\n\n• All 4 look restaurants up on their phone, and all 4 go looking for the menu first. Half also need the opening hours.\n• 3 of 4 plan meals around dietary needs, and one told me they gave up on a restaurant and ordered elsewhere because the menu had no dietary filters.\n• Ordering habits split evenly: half pick up takeout, usually by calling the restaurant, and half order through delivery apps.\n• Their biggest frustrations were hours, locations and contact details that were hard to find, and no clear way to make a reservation.",
      },
      {
        heading: "A Look at the Original Site",
        body: "The original site leads with a full-screen photo and a slogan, and the locations section asks visitors to choose a branch before they can see a menu. Hours, phone numbers and ordering options sit deeper in each page.\n\nThe content was all there, but it was arranged around the brand instead of around the tasks people came to complete.",
        images: [
          { src: "/img/CM_original_home.jpg", alt: "Original Casa Mexico home page with a full-screen photo hero" },
          { src: "/img/CM_original_locations.jpg", alt: "Original Casa Mexico locations section with three photo cards" },
        ],
      },
      {
        heading: "Low-Fidelity Testing",
        body: "I tested low-fidelity wireframes before moving to visual design. The feedback was direct:\n\n• Choosing a branch up front took so long that one participant said they wanted to leave the site.\n• An \"All locations\" button made people think there were more than three Casas.\n• The delivery options were too far down the page, so participants had to scroll to find them.\n• The call button on the menu page was too far down too.\n\nEvery one of these pointed to the same fix: stop making people work before they get value, and put the actions they came for at the top.",
      },
      {
        heading: "The Redesign",
        subSections: [
          {
            name: "Choose your Casa, once",
            body: "Instead of blocking the page, a location picker on the home page shows all three Casas with today's hours at a glance. The choice is remembered on every page, so the menu, prices, hours and call button always follow your Casa. Taco Tuesday moved into a slim banner at the top, where it no longer competes with the menu.",
            images: [{ src: "/img/CM_home.png", alt: "Redesigned home page with the Choose your Casa picker" }],
          },
          {
            name: "A menu built for ordering",
            body: "The menu opens with today's hours and three ways to order: call for pickup, Uber Eats or SkipTheDishes. Dishes are grouped into tabs, tagged as Vegan, Vegetarian or Spicy, and a dietary filter narrows the list in one tap. This answers the frustration I heard most often in interviews.",
            images: [{ src: "/img/CM_menu.png", alt: "Redesigned menu page with order buttons, category tabs and a dietary filter" }],
          },
          {
            name: "Locations and hours",
            body: "Each Casa gets a card with its address, whether it's open today, its full weekly hours and a phone number to order pickup or book a table. Reservations happen by phone, so the site now says that clearly instead of leaving people to guess.",
            images: [{ src: "/img/CM_locations.png", alt: "Redesigned locations page with hours and phone numbers for each Casa" }],
          },
        ],
      },
    ],
    conclusion:
      "This project reminded me how much a site's structure decides its usability. Most of the original content was fine; it was simply in the wrong order for the people using it. Talking to diners and testing early made the priorities obvious: menu, hours and ordering come first.\n\nNext, I'd run usability tests on the final design with the same tasks, such as finding today's hours or a vegetarian dish, to measure how much faster they've become. I'd also explore online reservations, since a phone call is currently the only way to book a table.",
  },
  {
    id: "algonquingo",
    featured: true,
    tag: "Algonquin College",
    title: "Algonquin GO",
    subtitle: "Case Study",
    banner: "First runner-up - Algonquin Tech Showcase",
    shortDesc:
      "A campus safety app for Algonquin College students and staff. A 14-week group project where I had the opportunity to lead the design team to create an app that connects users with security services anytime, anywhere on campus.",
    image: "/img/algonquingoapp.png",
    imageFallbackLabel: "Algonquin GO mobile app main screen",
    overview:
      "Students at Algonquin College experience ongoing difficulties navigation around campus and accessing campus safety services due to fragmented information. While a campus safety app already existed, it suffered from low awareness, outdated design, and limited functionality—resulting in minimal student adoption and trust. As a result, safety resources remained difficult to access in critical moments, leaving students without reliable, real-time support when they need it most. There was a clear need for a modern, intuitive, and widely adopted solution that not only improved accessibility to emergency services but also rebuilt student confidence through proactive safety features and clear communication.",
    role: "I worked as the Design Lead within a cross-functional team of student designers and developers. I was responsible for guiding the UX/UI direction, facilitating design decisions, and ensuring consistency across the product while collaborating closely with developers and clients.",
    sections: [
      {
        heading: "User Interviews & Personas",
        body: "Personas were created based on user research conducted through in-person interviews and an online form shared in Algonquin student social media groups. Questions helped define user needs and gauge familiarity with the existing campus safety app.\n\n(Disclaimer: although the app is intended for students, faculty and staff, only student users were interviewed during this phase.)",
      },
      {
        heading: "Product Research",
        body: "During competitive research we discovered that the majority of campus safety mobile apps, including the existing Algonquin Mobile Safety app, were created by the same company and looked nearly identical, with only minor colour differences. Features such as Campus Maps and Safety Toolbox were simply links to the college website, causing user confusion and poor UX.\n\nOur team had a clear opportunity: improve the outdated UI and build intuitive safety features natively in the app rather than relying on external links.",
      },
      {
        heading: "Information Architecture",
        body: "After defining user needs and evaluating competitors, we built the Information Architecture for the app. \n\n In the beginning, we created a rough IA based on our brainstorming  and initial feature ideas.\n\n We looked at the main problems we wanted to solve, which were campus navigation, safety reporting, emergency support, and campus events.  From there, we grouped features into logical sections so the app would feel simple and intuitive for students.",
      },
      {
        heading: "Wireframes",
        body: "Using Figma Make, we constructed wireframes to map userflows and overall layout. \n\n Once the wireframes were solid, the team transitioned to Figma Design to build high-fidelity prototypes from scratch using our design system.",
      },
      {
        heading: "High-Fidelity Prototypes",
        subSections: [
          {
            name: "Wayfinder",
            body: "Our solution to campus navigation offered two input modes: (1) manual entry of a starting point and destination, guided by directional cards; and (2) QR code scanning pasted around campus to set a starting point, with the destination set manually (Phase 2). \n\n Due to technical limitations from the development side, we were not able to have a map or get the live location of the user for phase 1",
            images: [
              { src: "/img/Wayfinder.png", alt: "Wayfinder screens" },
              // { src: "/img/wayfinder2.png", alt: "Wayfinder screen 2" },
            ],
          },
          {
            name: "Reports",
            body: "Users can submit safety incidents and lost-item reports by completing a form that routes directly to the admin portal, keeping the workflow fast and intuitive.",
            images: [
              { src: "/img/Reports copy.png", alt: "Reports screens" },
              // { src: "/img/reports2.png", alt: "Reports screen 2" },
            ],
          },
          {
            name: "Events",
            body: "An Events feature requested by the client for user retention. Students can sign up to campus events created by the security department, keeping the community engaged with safety initiatives.",
            images: [
              { src: "/img/Events.png", alt: "Events screens" },
              // { src: "/img/events2.png", alt: "Eventsscreen 2" },
            ],
          },
        ],
      },
      {
        heading: "Usability testing and improvements",
        body: "The high-fidelity prototype was tested with 7 primary users, achieving a success rate of 89%. \n\n The task with the lowest success rate was making an SOS call with 3 out of 7 users failing the task because thy did not know the SOS button was long-press. Additionally, some users expressed their concerns about the lack of a map and wished it was more engaging. \n\n We improved our design and UX based on this feedback. \n\n",
        subSections: [
          {
            body: "1. We added extra visual cues to let the user know the SOS button is long press, before the only hint they had was the coloured progress bar.",
            images: [
              { src: "/img/SOS_b&a.png", alt: "SOS button before and after" },
              // { src: "/img/SOS2.png", alt: "SOS button version 2" },
            ],
          },
          {
            body: "2. To make the wayfinder screen more engaging, we added an Amenitites list with some of the most pupular places in campus, and a Saved places feature so users can have quick access to their most frequented places",
            images: [
              { src: "/img/Wayfinder_b&a.png", alt: "wayfinder before and after" },
              // { src: "/img/wayfinderpre2.png", alt: "wayfinder version 1" },
              // { src: "/img/wayfinderafter1.png", alt: "wayfinder version 2" },
              // { src: "/img/wayfinderafter2.png", alt: "wayfinder version 2" },
            ],
          },
        ],
      },
    ],
    figmaEmbed:
      "https://embed.figma.com/proto/DD9noUgYJr70k4diic9xgR/Algonquin-GO-Design-and-prototyping?page-id=1%3A2&node-id=2275-3629&viewport=1395%2C956%2C0.2&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2258%3A1909&embed-host=sharehttps://embed.figma.com/proto/DD9noUgYJr70k4diic9xgR/Algonquin-GO-Design-and-prototyping?page-id=1%3A2&node-id=2275-3629&viewport=1395%2C956%2C0.2&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2258%3A1909&embed-host=share",
    conclusion:
      "Even though the design team faced multiple contraints on this project, such as the  lack of a map with live location, we were able to overcome these road blocks by thinking outside the box while keeping the users as our top priority.",
  },
  {
    id: "algonquingoadmin",
    tag: "Algonquin College",
    title: "Algonquin GO",
    subtitle: "Case Study",
    shortDesc:
      "A web platform created for security management at Algonquin College to monitor and respond to safety incidents reported through the Algonquin GO mobile app.",
    image: "/img/adminport.png",
    imageFallbackLabel: "Algonquin GO admin portal",
    overview:
      "Following our initial client meeting for the capstone project, we identified the need to expand beyond a mobile app and develop an administrative portal. \n\n The main problem with the previous admin portal was the clutter and innecesary features that reduced the efficiency during emergency situations",
    role: "I worked as the Design Lead within a cross-functional team of student designers and developers. I was responsible for guiding the UX/UI direction, facilitating design decisions, and ensuring consistency across the product while collaborating closely with developers and clients.",
    sections: [
      {
        heading: "User Interviews & Personas",
        body: "We interviewed the Head of Security as our secondary persona, as she indicated that she is the sole person currently managing the existing portal. \n\n During the interview, we explored how safety issues are managed and monitored across campus, along with her experience and pain points using the current platform. We also asked about responsibility and continuity, specifically who manages the system in her absence. We gathered useful insights that guided our next steps.",
      },
      {
        heading: "A glance to the current portal",
        body: "During one of our client meetings, she was very kind to show us the portal she was using at the time. This was particularly helpful because it gave us a clear understanding of the existing user flow and we were able to identify some key features for her as well as others that just created clutter and were not very useful.",
      },
      {
        heading: "Information Architecture",
        body: "A great part of the new admin portal was based off the previous one, this was to ensure a smooth transition between platforms. \n\n We kept the names of the most used features and improved the usability. At the same time, we reduced unnecessary clutter to provide quicker, more intuitive access to key tasks.",
      },
      {
        heading: "Wireframes",
        body: "Similarly to the app, we created the initial wireframes with Figma make to get an even more clear visual guidance, we had to iterate multiple times to get an enhanced user flow.",
      },
      {
        heading: "High-Fidelity Prototypes",
        subSections: [
          {
            name: "Dashboard / Communications",
            body: "On Dashboard is where the user can monitor general statistics about the app such as the number of incidents reported and active users. \n\n Communications is where the emergency alerts (fire alarms, evacuation, weather alerts, etc) are sent",
            images: [
              { src: "/img/Dashboard_comms.png", alt: "Dashboard and communications screens" },
              // { src: "/img/communications1.png", alt: "Communications page" },
              // { src: "/img/communications2.png", alt: "Communications page" },
              // { src: "/img/communications3.png", alt: "Communications page" },
            ],
          },
          {
            name: "Reports / Navigation",
            body: "On the reports tab, the admin can monitor and manage the reports submitted through the Algonquin GO app, the report details show the information the primary user entered on the app. The admin can check these details and mark the report as resolved, the app will show this update. \n\n On the Navigation tab, the user can manage the college's rooms information, in case there is room number changes, it can easily be updated to keep the information up to date on the app.",
            images: [
              { src: "/img/Reports_navigation.png", alt: "Reports and navigation page" },
              // { src: "/img/reportsadmin2.png", alt: "Reports page" },
              // { src: "/img/emergency.png", alt: "Emergency page" },
            ],
          },
          {
            name: "Events",
            body: "FInally, the Events feature was a request from the client to have a higher user retention, on that tab the admin can create different kinds of  security-related events such as workshops or scavenger hunts",
            images: [
              { src: "/img/Admin_events.png", alt: "Navigation page" },
            //   { src: "/img/eventsadmin1.png", alt: "Events page admin" },
            //   { src: "/img/eventsadmin2.png", alt: "Events page admin" },
            //   { src: "/img/eventsadmin3.png", alt: "Events page admin" },
            ],
          },
        ],
      },
      {
        heading: "Usability testing and improvements",
        body: "The usability testing for the admin portal was a complete success; however while testing, the client gave us feedback that improved the user experience and efficiency. \n\nThe most important change we implemented after testing was adding templates to send out emergency alerts. We added a dropdown menu with different alert types the user can choose from, after they choose one and depending on the alert, they will have to input the building the emergency is happening in and the alert message will fill out automatically.\n\nThis improvement significantly reduces the amount of time spent on this task, which is essential during critical situations.",
      },
    ],
    figmaEmbed:
      "https://embed.figma.com/proto/DD9noUgYJr70k4diic9xgR/Algonquin-GO-Design-and-prototyping?node-id=2471-4978&viewport=-847%2C-1648%2C0.26&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2471%3A4978&page-id=2%3A20&embed-host=share",
    conclusion:
      "Algonquin GO is the biggest project I have worked on until now, the admin portal was particularly challenging because we had to implement features that were important for the security department without adding much complexity to the user flows while also aligning to the features of the app. \n\nThrough this part of the project, I learned how to design for efficiency, especially in contexts where time is critical for the user.",
  },
  {
    id: "mentora",
    tag: "Personal Project",
    title: "Mentora",
    subtitle: "Case Study",
    ai: true,
    shortDesc:
      "A 10-week solo project creating an intuitive all-in-one tutoring app. Mentora is designed as a two-sided platform, allowing users to sign up as students or tutors, each with tailored workflows and interfaces.",
    image: "/img/mentora.png",
    imageFallbackLabel: "Mentora mobile app main screen",
    overview:
      "People seeking tutors often struggle with fitting tutoring sessions into their personal schedule, and tutors offering their services on digital platforms have to juggle multiple apps for shceduling, payments and online classes. \n\n Mentora is an all-in-one app where both students and tutors can focus on what is important to them without having to worry about the logistics",
    role: "Solo UX/UI Designer — responsible for the full design process from research and information architecture through to high-fidelity prototypes and usability testing.",
    sections: [
      {
        heading: "User Interviews & Personas",
        body: "For this project, I conducted user interviews with 7 users who had taken tutoring sessions and 5 users who had been tutors in the past. The goal of these interviews was getting to know their experiences with in-person and online tutoring. \n\n I created 1 persona for each kind of user by merging the most outstanding pain-points and goals from each interviewee.",
      },
      {
        heading: "Product research",
        body: "At this stage, I looked into other tutoring platforms and apps that had double workflows. My goal was to look into the strenghts and weaknesses of similar platforms while also getting ideas of how to craft an intuitive dual workflow app.",
      },
      {
        heading: "Information Architecture",
        body: "With insights in hand, I built the Information Architecture to serve as the backbone of the app. The IA adapts the user flow depending on whether someone is accessing the app as a student or a tutor, while keeping the experience clear and intuitive for both.",
      },
      {
        heading: "Low-fidelity wireframes",
        body: "Based on the intial IA, I quickly sketched the low fidelity prototypes to test the feasibility of the user flows. This helped imrpoving the usability by iterating on the IA. ",
      },
      {
        heading: "Wireframes",
        body: "Using Figma Make, I started iterating on the wireframes to improve the workflow. \n\n This was my first time working with Figma Make, which was a brand new tool at the time. During this stage, I refined my prompt skills while exploring the best ways to user Figma Make for my projects.",
      },
      {
        heading: "Design System",
        body: "For this project, I selected colours that communicated trust, calm and focus. I applied the colour palette consistently for both user flows.",
      },
      {
        heading: "High-Fidelity Prototypes",
        subSections: [
          {
            name: "Tutors / Dashboard",
            body: "Tutors is the main screen on the student's version, here students can browse for tutors, see their details and use the Smart Match feature, which is AI powered and allows them to input their personal schedule, the subject they need a tutor for and any additional details to find the perfect match for them in seconds. This solves the primary user's problem statement. \n\n For tutors, the main screen is Dashboard, here is where they see information that is relevant to them like their earnings, number of students, upcoming sessions and session requests; additionally, they have quick access to creating a new course.",
            images: [
              { src: "/img/Tutors_dashboard.png", alt: "Tutors and dashboard screens" },
              // { src: "/img/smartmatch.png", alt: "Smart Match feature" },
              // { src: "/img/tutordeets.png", alt: "Tutor details screen" },
              // { src: "/img/tutordashboard.png", alt: "Tutor dashboard" },
            ],
          },
          {
            name: "Dashboard / Courses",
            body: "Students track progress and analytics on the Dashboard with quick access to assignments and active sessions. Tutors manage their course catalogue on the Courses screen, creating, publishing, or saving courses as drafts.",
            images: [
              {
                src: "/img/Dashboard_courses.png",
                alt: "Student dashboard screen",
              },
              // { src: "/img/assignments.png", alt: "Assignments screen" },
              // { src: "/img/tutorcourses.png", alt: "Tutor courses" },
              // { src: "/img/createcourse.png", alt: "Create course form" },
            ],
          },
          {
            name: "My Courses / My Students",
            body: "Students view session details, activities, recordings, and study materials for each course, additionaly, they can message their tutor directly. Tutors mirror this on My Students, monitoring session completion and communicating with their learners.",
            images: [
              {
                src: "/img/Courses_students.png",
                alt: "My courses screen",
              },
              // { src: "/img/mycoursesdeets.png", alt: "Course details screen" },
              // { src: "/img/mycoursesmessage.png", alt: "Tutor message" },
              // { src: "/img/mystudents.png", alt: "My students screen" },
            ],
          },
        ],
      },
      {
        heading: "Usability Testing & Improvements",
        body: "The high-fidelity prototype was tested with 4 users across 6 tasks, achieving a 100% success rate. Despite the strong results, one improvement was identified: several users struggled to select days on the Smart Match form because only the small checkbox was clickable. The fix was expanding the entire frame as a clickable target — a small change with a meaningful UX impact.",
      },
    ],
    figmaEmbed:
      "https://embed.figma.com/proto/d76tRBtf4UAlHzkEovTkaS/Major-Project-Valeria?node-id=4933-2&p=f&viewport=582%2C-21%2C0.06&scaling=scale-down&content-scaling=fixed&starting-point-node-id=5451%3A1777&show-proto-sidebar=1&page-id=241%3A8805&embed-host=share",
    conclusion:
      "This was my first project working through the entire UX process and UI for a full app. \n\n Moreover, it was my first time working with Figma make. This brought multiple challenges, such as learning efficient prompting to get the most accurate result in less iterations.But the major challenge was detaching my creative vision from the generic Figma make design, I had to move beyond default components and predictable layouts, pushing myself to create a design that felt distinctive, intentional, and aligned with the product’s identity.Every challenge added new learning and experience.",
  },
  {
    id: "booknook",
    tag: "Personal Project",
    title: "Book Nook",
    subtitle: "Design",
    shortDesc:
      "Inspired by my love for reading, Book Nook was one of my first UI projects. Book Nook brings reading clubs to a digital environment allowing users to connect with other readers around the world, leaving reviews and linking their personal library to the platform.",
    image: "/img/booknook.png",
    imageFallbackLabel: "Book Nook mobile app home screen",
    overview:
      "Inspired by my love of reading, Book Nook was one of my first UI design projects. It brings reading clubs to a digital environment, allowing users to connect with readers around the world, leave reviews, and link their personal library to the platform.",
    role: "Solo UI Designer — focused on building a comprehensive design system from scratch and applying it across a full set of high-fidelity mobile screens.",
    sections: [
      {
        heading: "Low Fidelity",
        body: "Initially, I sketched a pretty basic idea of how I wanted the layout and workflow to be. This idea evolved as I progressed on the project.",
      },
      {
        heading: "Product research",
        body: "I researched existing apps for readers, looked into their workflows and studied user reviews to get a better understanding of their painpoints and needs",
      },
      {
        heading: "Design System",
        body: "The previous steps informed the design system, which went through many iterations of component styles before landing on a solid, consistent system in Figma.",
      },
      {
        heading: "Visual Design",
        subSections: [
          {
            name: "Home",
            body: "The home screen acts as a personalised feed showing trending book clubs and posts tailored to the user's preferences. A 'Streaks' feature encourages daily reading habits and supports engagement and retention.",
            images: [
              {
                src: "/img/BN_Home.png",
                alt: "Book Nook home screen",
              },
              // { src: "/img/clubdeets.png", alt: "Assignments screen" },
            ],
          },
          {
            name: "Clubs",
            body: "Users can browse, join, or create reading clubs and share them with friends. A dedicated 'My Clubs' tab keeps joined clubs easily accessible.",
            images: [
              {
                src: "/img/BN_clubs.png",
                alt: "Clubs screen",
              },
              // { src: "/img/myclubs.png", alt: "My clubs screen" },
              // { src: "/img/createclub.png", alt: "Create club screen" },
              // { src: "/img/clubcreateddeets.png", alt: "Club details screen" },
            ],
          },
          {
            name: "My Books",
            body: "A personal digital library organised into shelves: Currently Reading, Want to Read, and Completed. Users can also import libraries from other platforms to keep their collections synchronised when transitioning to Book Nook.",
            images: [
              {
                src: "/img/BN_mybooks.png",
                alt: "My books screen",
              },
              // { src: "/img/importing.png", alt: "Importing library" },
              // { src: "/img/libraryimported.png", alt: "Library imported" },
            ],
          },
        ],
      },
    ],
    figmaEmbed:
      "https://embed.figma.com/proto/GQWnAFzjfs9TRNp70Ou7w1/Booknook?node-id=1-1272&viewport=205%2C417%2C0.1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A1267&show-proto-sidebar=1&page-id=0%3A1&embed-host=share",
    conclusion:
      "Although this project didn’t involve a deep dive into the UX process, as my focus was on refining my Figma skills and building a design system from scratch, it still played an important role in my UI learning journey. \n\nIt was especially memorable because I got to work on a subject I’m passionate about, which made the entire design process both engaging and enjoyable.",
  },
];

export const skills = {
  design: {
    icon: "✦",
    title: "UX & UI Design",
    items: [
      "User Research & Analysis",
      "Information Architecture",
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "Usability Testing",
      "Heuristic Evaluation",
      "WCAG Accessibility",
    ],
  },
  tools: {
    icon: "◈",
    title: "Tools",
    items: [
      "Figma",
      "Stitch",
      "Adobe Illustrator",
      "Adobe InDesign",
      "Adobe Photoshop",
      "Framer",
      "AI prompting",
    ],
  },
  development: {
    icon: "⌥",
    title: "Development",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React Native",
      "Flutter",
      "Kotlin",
      "Swift",
      "SwiftUI",
    ],
  },
};

export const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/diana-ocampo" },
  { label: "GitHub", href: "https://github.com/ocam0026" },
];
