/* eslint-disable no-undef */
const {
  Build,
  connection,
  signupQuery,
  loginQuery,
  getUserDataQ,
  addUserPictureQ,
  getUserPictureQ,
  PostQuery,
  getPostsQ,
  updatePostQ,
  deletePostQ,
  add,
  update,
  remove,
  checkVote,
  count,
  addCommentQ,
  getComments,
  deleteCommentQ,
  addFriendsQ,
  getFriend,
  removeFriendQ,
  getMyFriendsQ,
} = require('../src/database');

const obj = {
  email: 'alaaAhmade@gmail.com',
  password: 'alaa123456',
  username: 'alaaahmade',
  firstName: 'Alaa',
  lastName: 'ahmad',
  phone: '1234564567',
  photo: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&w=1000&q=80',
  title: 'testing post',
  content: 'testing content post',
  imageUrl: this.photo,
  id: 1,
};

beforeAll(() => Build());
afterAll(() => connection.end());

describe('testing Auth Queries', () => {
  test('signupQuery should return Array of Objects', (done) => {
    signupQuery(obj).then((data) => {
      expect(Array.isArray(data.rows)).toBe(true);
      expect(200);
      expect(typeof data.rows[0]).toBe('object');
      expect(data.rows[0].email).toBe((obj.email));
      done();
    }).catch((error) => {
      done(error);
    });
  });

  test('loginQuery should return Array of Objects', (done) => {
    loginQuery(obj).then((data) => {
      expect(Array.isArray(data.rows)).toBe(true);
      expect(200);
      expect(typeof data.rows[0]).toBe('object');
      expect(data.rows[0].password).toBe((obj.password));
      done();
    }).catch((error) => {
      done(error);
    });
  });

  test('getUserDataQ should return Array of Objects', (done) => {
    getUserDataQ(1).then((data) => {
      expect(Array.isArray(data.rows)).toBe(true);
      expect(200);
      expect(typeof data.rows[0]).toBe('object');
      expect(data.rows[0].username).toBe((obj.username));
      done();
    }).catch((error) => {
      done(error);
    });
  });

  test('addUserPictureQ should return Array of Objects', (done) => {
    addUserPictureQ({ userId: 1, url: obj.photo }).then((data) => {
      expect(Array.isArray(data.rows)).toBe(true);
      expect(200);
      expect(typeof data.rows[0]).toBe('object');
      expect(data.rows[0].photo).toBe((obj.photo));
      done();
    }).catch((error) => {
      done(error);
    });
  });

  test('getUserPictureQ should return Array of Objects', (done) => {
    getUserPictureQ(1).then((data) => {
      expect(Array.isArray(data.rows)).toBe(true);
      expect(200);
      expect(typeof data.rows[0]).toBe('object');
      expect(data.rows[0].photo).toBe((obj.photo));
      done();
    }).catch((error) => {
      done(error);
    });
  });
});

describe('testing posts Queries', () => {
  test('PostQuery should return Array of Objects', (done) => {
    PostQuery(obj).then((data) => {
      expect(Array.isArray(data.rows)).toBe(true);
      expect(200);
      expect(typeof data.rows[0]).toBe('object');
      expect(data.rows[0].imageUrl).toBe((obj.imageUrl));
      done();
    }).catch((error) => {
      done(error);
    });
  });

  test('getPostsQ should return Array of Objects', (done) => {
    getPostsQ().then((data) => {
      expect(Array.isArray(data.rows)).toBe(true);
      expect(200);
      expect(typeof data.rows[0]).toBe('object');
      expect(data.rows[0].imageUrl).toBe((obj.imageUrl));
      done();
    }).catch((error) => {
      done(error);
    });
  });

  test('updatePostQ should return Array of Objects', (done) => {
    updatePostQ({
      postId: 1,
      title: 'test 2',
      content: 'test content 2',
      imageUrl: obj.imageUrl,
    }).then((data) => {
      expect(Array.isArray(data.rows)).toBe(true);
      expect(200);
      expect(typeof data.rows[0]).toBe('object');
      expect(data.rows[0].imageUrl).toBe((obj.imageUrl));
      done();
    }).catch((error) => {
      done(error);
    });
  });
});

describe('testing votes Queries', () => {
  test('addVote Query should return Array of Objects', (done) => {
    add({ postId: 1, userId: 1, vote: 'down' }).then((data) => {
      expect(Array.isArray(data.rows)).toBe(true);
      expect(200);
      expect(typeof data.rows[0]).toBe('object');
      expect(data.rows[0].vote).toBe(('down'));
      done();
    }).catch((error) => {
      done(error);
    });
  });

  test('update Query should return Array of Objects', (done) => {
    update({ postId: 1, userId: 1, vote: 'down' }).then((data) => {
      expect(Array.isArray(data.rows)).toBe(true);
      expect(200);
      expect(typeof data.rows[0]).toBe('object');
      expect(data.rows[0].vote).toBe(('down'));
      done();
    }).catch((error) => {
      done(error);
    });
  });

  test('checkVote Query should return Array of Objects', (done) => {
    checkVote({ postId: 1, userId: 1 }).then((data) => {
      expect(Array.isArray(data.rows)).toBe(true);
      expect(200);
      expect(typeof data.rows[0]).toBe('object');
      expect(data.rows[0].vote).toBe(('down'));
      done();
    }).catch((error) => {
      done(error);
    });
  });

  test('count Query should return Array of Objects', (done) => {
    count({ postId: 1 }).then((data) => {
      expect(Array.isArray(data.rows)).toBe(true);
      expect(200);
      expect(typeof data.rows[0]).toBe('object');
      expect(data.rows[0].vote).toBe(('down'));
      done();
    }).catch((error) => {
      done(error);
    });
  });

  test('removeVote Query should return Array of Objects', (done) => {
    remove({ postId: 1, userId: 1 }).then((data) => {
      expect(Array.isArray(data.rows)).toBe(true);
      expect(200);
      expect(typeof data.rows[0]).toBe('object');
      expect(data.rows[0]['?column?']).toBe(('successfully'));
      done();
    }).catch((error) => {
      done(error);
    });
  });
});

describe('testing comments Queries', () => {
  test('addComment Query should return Array of Objects', (done) => {
    addCommentQ({ postId: 1, userId: 1, content: obj.content }).then((data) => {
      expect(Array.isArray(data.rows)).toBe(true);
      expect(200);
      expect(typeof data.rows[0]).toBe('object');
      expect(data.rows[0].content).toBe(obj.content);
      done();
    }).catch((error) => {
      done(error);
    });
  });

  test('getComments Query should return Array of Objects', (done) => {
    getComments({ postId: 1 }).then((data) => {
      expect(Array.isArray(data.rows)).toBe(true);
      expect(200);
      expect(typeof data.rows[0]).toBe('object');
      expect(data.rows[0].content).toBe(obj.content);
      done();
    }).catch((error) => {
      done(error);
    });
  });
});

describe('testing friends Queries', () => {
  test('addFriends Query should return Array of Objects', (done) => {
    addFriendsQ({ userId: 1, friendId: 1 }).then((data) => {
      expect(Array.isArray(data.rows)).toBe(true);
      expect(200);
      expect(typeof data.rows[0]).toBe('object');
      expect(data.rows[0].userid).toBe(1);
      done();
    }).catch((error) => {
      done(error);
    });
  });

  test('getFriend Query should return Array of Objects', (done) => {
    getFriend({ userId: 1, friendId: 1 }).then((data) => {
      expect(Array.isArray(data.rows)).toBe(true);
      expect(200);
      expect(typeof data.rows[0]).toBe('object');
      expect(data.rows[0].userid).toBe(1);
      done();
    }).catch((error) => {
      done(error);
    });
  });

  test('getMyFriends Query should return Array of Objects', (done) => {
    getMyFriendsQ(1).then((data) => {
      expect(Array.isArray(data.rows)).toBe(true);
      expect(200);
      expect(typeof data.rows[0]).toBe('object');
      expect(data.rows[0].username).toBe((obj.username));
      done();
    }).catch((error) => {
      done(error);
    });
  });

  test('removeFriend Query should return Array of Objects', (done) => {
    removeFriendQ({ userId: 1, friendId: 1 }).then((data) => {
      expect(Array.isArray(data.rows)).toBe(true);
      expect(200);
      expect(typeof data.rows[0]).toBe('object');
      expect(data.rows[0]['?column?']).toBe(('successfully'));
      done();
    }).catch((error) => {
      done(error);
    });
  });
});

describe('testing delete Queries', () => {
  test('deleteComment Query should return Array of Objects', (done) => {
    deleteCommentQ({ commentId: 1, userId: 1 }).then((data) => {
      expect(Array.isArray(data.rows)).toBe(true);
      expect(200);
      expect(typeof data.rows[0]).toBe('object');
      expect(data.rows[0]['?column?']).toBe(('successfully'));
      done();
    }).catch((error) => {
      done(error);
    });
  });

  test('deletePostQ should return Array of Objects', (done) => {
    deletePostQ({ postId: 1, userId: 1 }).then((data) => {
      expect(Array.isArray(data.rows)).toBe(true);
      expect(200);
      expect(typeof data.rows[0]).toBe('object');
      expect(data.rows[0]['?column?']).toBe(('successfully'));
      done();
    }).catch((error) => {
      done(error);
    });
  });
});
