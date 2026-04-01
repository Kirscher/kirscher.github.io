// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Publications in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "news",
          description: "Latest updates on research, publications, and academic activities.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-data-science-and-artificial-intelligence-workshop-may-2025",
        
          title: "Data Science and Artificial Intelligence Workshop (May 2025)",
        
        description: "Presentation at the Data Science and AI Workshop, ICube Laboratory, Strasbourg.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/dsai-workshop-icube/";
          
        },
      },{id: "news-started-phd-at-the-university-of-strasbourg",
          title: 'Started PhD at the University of Strasbourg',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1/";
            },},{id: "news-paper-accepted-at-miccai-2025",
          title: 'Paper accepted at MICCAI 2025',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-1st-place-at-miccai-2025-curvas-pdacvi-challenge",
          title: '1st Place at MICCAI 2025 CURVAS-PDACVI Challenge',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3/";
            },},{id: "news-awarded-the-cnrs-gdr-iasis-doctoral-mobility-grant",
          title: 'Awarded the CNRS GdR IASIS Doctoral Mobility Grant',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_4/";
            },},{id: "news-visiting-phd-researcher-at-dkfz-heidelberg",
          title: 'Visiting PhD Researcher at DKFZ Heidelberg',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_5/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%72%69%73%74%61%6E.%6B%69%72%73%63%68%65%72@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Kirscher", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/tristan-k-", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=jDwOJN4AAAAJ", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://huggingface.co/Kirscher", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
