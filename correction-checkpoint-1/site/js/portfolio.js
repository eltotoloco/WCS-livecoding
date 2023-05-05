const avatarImg = document.querySelector("#avatar");
// let isFirstAvatar = true;
avatarImg.addEventListener("click", function () {
    // if(isFirstAvatar){
    //     avatarImg.src = "image/avatar-bis.png";
    //     isFirstAvatar = false;
    // }else{
    //     avatarImg.src = "image/avatar.svg";
    //     isFirstAvatar = true;
    // }
    avatarImg.src = "image/avatar-bis.png";
});

const modifyNameAndColor = document.querySelector("#modifyNameAndColor");
modifyNameAndColor.addEventListener("click", function () {
    const color = prompt("Your color");
    const nameElement = document.querySelector("#name");
    nameElement.innerHTML = prompt("Your name");
    nameElement.style.color = "white";
    // const description = document.querySelector(".presentation .description.pink-bg");
    // description.style.backgroundColor = color;
    const pinkBgElements = document.querySelectorAll(".pink-bg");
    const toColorElements = document.querySelectorAll(".pink-text, a");
    // for (let i = 0; i < pinkBgElements.length; i++) {
    //     const element = pinkBgElements[i];
    //     element.style.backgroundColor = color;
    // }
    // for (let i = 0; i < pinkTextElements.length; i++) {
    //     const element = pinkTextElements[i];
    //     element.style.color = color;
    // }
    pinkBgElements.forEach(pinkElement => pinkElement.style.backgroundColor = color);
    toColorElements.forEach(element => element.style.color = color);
});

const modifySkillsButton = document.querySelector("#modifySkills");

const devSkills = ["VsCode","Python","Java"];

modifySkillsButton.addEventListener("click", function(){
    const skills = document.querySelectorAll("#front-dev-tools li");
    skills.forEach(function(skill, index){
        skill.innerHTML = devSkills[index];
    })
});

const addSkillButton = document.querySelector("#addSkill");
addSkillButton.addEventListener("click",function(){
    const newSKill = document.querySelector("#newSkill");
    const backTools = document.querySelector("#back-dev-tools");
    const newItem = document.createElement("li");
    newItem.innerHTML = newSKill.value;
    backTools.append(newItem);
    newSKill.value = "";
});
