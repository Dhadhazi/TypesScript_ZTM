import { UserList } from "./views/UserList";
import { Collection } from "./models/Collection";
import { UserProps, User } from "./models/User";
import { UserShow } from "./views/UserShow";

const users = new Collection(
  "http://localhost:3000/users",
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

users.on("change", () => {
  const root = document.getElementById("root");

  if (root) {
    console.log(users);
    new UserList(root, users).render();
  } else {
    throw new Error("Cannot fetch user list");
  }
});

users.fetch();
