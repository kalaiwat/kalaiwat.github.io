function openNav() {
  document.getElementById("toExpand").style.transition = ".5s";
    document.getElementById("back").style.width = "100%";
    document.getElementById("toExpand").style.width = "200px";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("toExpand").style.transition = ".25s";
    document.getElementById("back").style.width = "0%";
    document.getElementById("toExpand").style.width = "0%";

    resetAll();
  }

  let WikiOpen = false;

  function toggleWiki() {
    WikiOpen = !WikiOpen;
    if (WikiOpen) {
    document.getElementById("wiki_dropdown").style.height = (40*4).toString().concat("px");
    }
    else {
    document.getElementById("wiki_dropdown").style.height = "0px";
    }
  }

  let AboutOpen = false;

  function toggleAbout() {
    AboutOpen = !AboutOpen;
    if (AboutOpen) {
    document.getElementById("about_dropdown").style.height = "80px";
    }
    else {
    document.getElementById("about_dropdown").style.height = "0px";
    }
  }

  let VideosOpen = false;

  function toggleVideos() {
    VideosOpen = !VideosOpen;
    if (VideosOpen) {
    document.getElementById("videos_dropdown").style.height = "80px";
    }
    else {
    document.getElementById("videos_dropdown").style.height = "0px";
    }
  }

  let ProjectsOpen = false;

  function toggleProjects() {
    ProjectsOpen = !ProjectsOpen;
    if (ProjectsOpen) {
    document.getElementById("projects_dropdown").style.height = "80px";
    }
    else {
    document.getElementById("projects_dropdown").style.height = "0px";
    }
  }

  let LeetCodeOpen = false;

  function toggleLeetCode() {
    LeetCodeOpen = !LeetCodeOpen;
    if (LeetCodeOpen) {
    document.getElementById("leetcode_dropdown").style.height = "90px";
    }
    else {
    document.getElementById("leetcode_dropdown").style.height = "0px";
    }
  }

  function resetAll() {
    if (WikiOpen)
      toggleWiki();
    if (AboutOpen)
      toggleAbout();
    if (VideosOpen)
      toggleVideos();
    if (ProjectsOpen)
      toggleProjects();
    if (LeetCodeOpen)
      toggleLeetCode();
  }

  function openInNewTab() {
    window.open("https://swimcloud.com/", '_blank').focus();
  }