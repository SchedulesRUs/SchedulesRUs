import { useState, useEffect } from "react";

export default function createNewUser({ newUser }) {
  async function createNewUser(newUser) {
    try {
      const response = await fetch(
        "www.themealdb.com/api/json/v1/1/lookup.phphttps://c13e-142-110-39-187.ngrok-free.app/user#TZHBTsMwDIbP5SlMhdRWjIQhDmjLKiHgwoFOggvHLEnXVG1aEldQTXt3mnQTnGI7v7/Yf9jlc/H08bl9gQrbJr9g8xGxSnE5nRFrFXIQFbdO4SYesLx5iMOFw7FRPop2nRzh4KOo5XavzQpu1z49eh09Cxk9QZlvmBnC6h7BWbGJK8TerSgV0tSOiKYbZNlwq4joWspr/kMbvXO0/hqUHekdWZLlKSGtNqR2cT69FYD/2Dn4QSiFRyGUc4CVgtf34g26Xa0EwrfGCmJfKUIh9vKrVHZiaJXBjNhp5jEtByNQdybN4BCIkybxayQZ8ZalCeutyhO4DnTi0Gqz1+WY/qEXMBipSm2UXMB9NkkTRkNXtg7MY7aeDTsvwejs1OSc/5Zf/user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...newUser }),
        },
      );
      const data = await response.json();
    } catch (error) {}
  }

  useEffect(() => {
    fetchMealIdeas(newUser);
  }, [newUser]);
}
