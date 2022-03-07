const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput([username, email, password, re_password]);
  // if (username.value === "") {
  //   showerror(username, "กรุณาป้อนชื่อผู้ใช้งาน");
  // } else {
  //   showsuccess(username);
  // }

  if (!validateEmail(email.value.trim())) {
    showerror(email, "อีเมล์ไม่ถูกต้อง");
  } else {
    showsuccess(email);
  }
  checkPassword(password, re_password);
  checkInputLenght(username, 5, 10);
  checkInputLenght(password, 5, 12);
});

//function
/*แสดงข้อความถ้าerror*/
const showerror = (input, message) => {
  const formControl = input.parentElement; //ย้ายไปทำงานที่ตัวแม่
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
};
/*แสดงข้อความถ้าsuccess*/
const showsuccess = (input) => {
  const formControl = input.parentElement; //ย้ายไปทำงานที่ตัวแม่
  formControl.className = "form-control success";
};
/*ตรวจสอบความถูกต้องอีเมล์ */
const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
/*เช็คข้อมูลในฟอร์ม ว่าได้ป้อนไหม */
const checkInput = (inputArray) => {
  inputArray.forEach((input) => {
    if (input.value.trim() === "") {
      showerror(input, `กรุณาป้อน ${getInputCase(input)}`);
    } else {
      showsuccess(input);
    }
  });
};
/*เปลี่ยนข้อความตรงerror ให้ตัวหน้าตัวใหญ่และด้านหลังตัวเล็ก */
const getInputCase = (input) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};
const checkPassword = (password1, password2) => {
  if (password1.value !== password2.value) {
    showerror(password2, "รหัสไม่ตรงกัน");
  }
};
/*checkความยาว */
const checkInputLenght = (input, min, max) => {
  if (input.value.length <= min) {
    showerror(input, `${getInputCase(input)} มากว่า ${min} ตัวอักษร`);
  } else if (input.value.length > max) {
    showerror(input, `${getInputCase(input)} ไม่เกิน ${max} ตัวอักษร`);
  } else {
    showsuccess(input);
  }
};
