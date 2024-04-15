let transitionspd = .5;
let tablinkheight = 40;

let docCount = 1;
let aboutCount = 1;
let projectCount = 3;

function openNav() {
  document.getElementById("toExpand").style.transition = transitionspd.toString().concat("s");
  document.getElementById("back").style.width = "100%";
  document.getElementById("toExpand").style.width = "50%";
}

function closeNav() {
  document.getElementById("toExpand").style.transition = transitionspd.toString().concat("s");
  document.getElementById("back").style.width = "0%";
  document.getElementById("toExpand").style.width = "0%";

  resetAll();
}

let DocsOpen = false;

function toggleDocs() {
  DocsOpen = !DocsOpen;
  if (DocsOpen) {
  document.getElementById("docs_dropdown").style.height = (tablinkheight*docCount).toString().concat("px");
  }
  else {
  document.getElementById("docs_dropdown").style.height = "0px";
  }
}

let AboutOpen = false;

function toggleAbout() {
  AboutOpen = !AboutOpen;
  if (AboutOpen) {
  document.getElementById("about_dropdown").style.height = (tablinkheight*aboutCount).toString().concat("px");
  }
  else {
  document.getElementById("about_dropdown").style.height = "0px";
  }
}

// let VideosOpen = false;

// function toggleVideos() {
//   VideosOpen = !VideosOpen;
//   if (VideosOpen) {
//   document.getElementById("videos_dropdown").style.height = "80px";
//   }
//   else {
//   document.getElementById("videos_dropdown").style.height = "0px";
//   }
// }

let ProjectsOpen = false;

function toggleProjects() {
  ProjectsOpen = !ProjectsOpen;
  if (ProjectsOpen) {
  document.getElementById("projects_dropdown").style.height = (tablinkheight*projectCount).toString().concat("px");
  }
  else {
  document.getElementById("projects_dropdown").style.height = "0px";
  }
}

// let LeetCodeOpen = false;

// function toggleLeetCode() {
//   LeetCodeOpen = !LeetCodeOpen;
//   if (LeetCodeOpen) {
//   document.getElementById("leetcode_dropdown").style.height = "90px";
//   }
//   else {
//   document.getElementById("leetcode_dropdown").style.height = "0px";
//   }
// }

function resetAll() {
  if (DocsOpen)
    toggleDocs();
  if (AboutOpen)
    toggleAbout();
  // if (VideosOpen)
  //   toggleVideos();
  if (ProjectsOpen)
    toggleProjects();
  // if (LeetCodeOpen)
  //   toggleLeetCode();
}

function openInNewTab(url) {
  window.open(url, '_blank').focus();
}