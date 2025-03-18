let friends = [];

const FriendService = {
  addFriend: (name) => {
    friends.push({ id: Date.now(), name });
  },
  removeFriend: (id) => {
    friends = friends.filter((friend) => friend.id !== id);
  },
  updateFriend: (id, newName) => {
    friends = friends.map((friend) =>
      friend.id === id ? { ...friend, name: newName } : friend
    );
  },
  getFriends: () => {
    return friends;
  },
};

export default FriendService;