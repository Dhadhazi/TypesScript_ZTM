import { UserForm } from "./views/UserForm";

console.log(document.getElementById("root"));

const userForm = new UserForm(document.getElementById("root"));

userForm.render();
