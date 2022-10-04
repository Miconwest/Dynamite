
  function displaySkill() {
    document.getElementById("vip").style.display="block";
    document.getElementById("espn").style.display="none";
    document.getElementById("wing").style.display="none";
  }
  function displayExperience() {
    document.getElementById("espn").style.display="block";
    document.getElementById("vip").style.display="none";
    document.getElementById("wing").style.display="none";
  }
  function displayEducation() {
    document.getElementById("wing").style.display="block";
    document.getElementById("espn").style.display="none";
    document.getElementById("vip").style.display="none";
  }
  var cancel;
  cancel = document.getElementById("vip");
  cancelEx = document.getElementById("espn");
  cancelEdu = document.getElementById("wing");

  function removeSkill() {
    cancel.remove()
  }
  function removeExperience(){
    cancelEx.remove()
  }
  function removeEducation(){
    cancelEdu.remove()
  }

  var sideMenu = document.getElementById("mobile_nav");
  function openMenu() {
    sideMenu.style.right = "0";
  }
  function closeMenu() {
    sideMenu.style.right = "-200px";
  }
