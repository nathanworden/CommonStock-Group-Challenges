// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

//= require popper
//= require turbolinks
//= require bootstrap
import 'bootstrap'

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

document.addEventListener("DOMContentLoaded", event => {
  // $('.groups').on('click',  event => {
  //   event.target.classList.toggle('turnItPink')
  // });

  let groups = document.querySelector('#groups');
  groups.addEventListener("click", event => {
    let groupList = document.getElementById('groupList');
    let groupsArrow = document.getElementById('groupsArrow');
    if (groupList.style.display === 'block') {
      groupList.style.display = 'none';
      groupsArrow.classList.remove('arrow-down');
      groupsArrow.classList.add('arrow-right');
    } else {
      groupList.style.display = 'block';
      groupsArrow.classList.remove('arrow-right');
      groupsArrow.classList.add('arrow-down');
    }
  })

  let dms = document.querySelector('#dms');
  dms.addEventListener("click", event => {
    let people = document.getElementById('people');
    let dmsArrow = document.getElementById('dms-arrow');
    if (people.style.display === 'block') {
      people.style.display = 'none';
      dmsArrow.classList.remove('arrow-down');
      dms.querySelector('#dms-arrow').classList.add('arrow-right');
    } else {
      people.style.display = 'block';
      dmsArrow.classList.remove('arrow-right');
      dmsArrow.classList.add('arrow-down');
    }
  });

  let groupList = document.getElementById('groupList');
  let chatbox = document.getElementById('chatbox');
  groupList.addEventListener('click', event => {
    console.log(event.target);
    console.log(chatbox.style.display);
    if (!chatbox.style.display) {
      chatbox.style.display = "block";
    } else {
      chatbox.style.display = "none";
    }
  });

  let tyler = document.getElementById('tyler-lastovich');
  tyler.addEventListener('click', event => {
    console.log(event.target);
    console.log(chatbox.style.display);
    if (!chatbox.style.display || chatbox.style.display === "none") {
      chatbox.style.display = "block";
    } else {
      chatbox.style.display = "none";
    }
  });
});