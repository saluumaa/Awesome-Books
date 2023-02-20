const navList = document.querySelectorAll('.nav-link-one');
const navAdd = document.querySelectorAll('.nav-link-two');
const navContact = document.querySelectorAll('.nav-link-three');
const List = document.querySelector('.list');
const Add = document.querySelector('.add');
const Contact = document.querySelector('.contact');

export default function navigation() {
  navList.forEach((element) => {
    element.addEventListener('click', () => {
      List.classList.remove('hidden');
      Add.classList.remove('active');
      Contact.classList.remove('active');
    });
  });

  navAdd.forEach((element) => {
    element.addEventListener('click', () => {
      List.classList.add('hidden');
      Add.classList.add('active');
      Contact.classList.remove('active');
    });
  });

  navContact.forEach((element) => {
    element.addEventListener('click', () => {
      List.classList.add('hidden');
      Add.classList.remove('active');
      Contact.classList.add('active');
    });
  });
}

navigation();
