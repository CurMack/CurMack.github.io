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
          description: "My publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-service",
          title: "service",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/service/";
          },
        },{id: "news-our-paper-s2fusion-has-been-accepted-by-cvpr-2024-sparkles",
          title: 'Our paper S2Fusion has been accepted by CVPR 2024! :sparkles:',
          description: "",
          section: "News",},{id: "news-i-have-joined-vdi-in-24fall-as-a-cs-master-student",
          title: 'I have joined VDI in 24Fall as a CS Master student!',
          description: "",
          section: "News",},{id: "news-our-paper-human-x-has-been-accepted-by-iccv-2025-sparkles",
          title: 'Our paper Human-X has been accepted by ICCV 2025! :sparkles:',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%69%6B%79%32%30%32%34@%73%68%61%6E%67%68%61%69%74%65%63%68.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/CurMack", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/kaiyang-ji-1023aa2aa", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=PyTLiM8AAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/orcust66399", "_blank");
        },
      },{
        id: 'social-zotero',
        title: 'Zotero',
        section: 'Socials',
        handler: () => {
          window.open("https://www.zotero.org/curmack", "_blank");
        },
      },];
