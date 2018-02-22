class PostApi {
  //Get user feed for Feed
  static getAllPosts() {
    return fetch('https://dev-selfiegram.consumertrack.com/users/1/feed').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  //Get users for Discover
  static getAllUsers() {
    return fetch('https://dev-selfiegram.consumertrack.com/users').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  //Get user info and posts for Profile using userId url param
  static getProfilePosts(userId) {
    return fetch(`https://dev-selfiegram.consumertrack.com/users/${userId}`).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  //Create new post from Post page user input
  static createPost({ caption, photo_url }) {
    const details = { caption, photo_url }

    //Put data into proper 'x-www-form-urlencoded' form
    const formBody = Object.keys(details).map(key=>
      encodeURIComponent(key)+'='+encodeURIComponent(details[key]));

    const request = new Request('https://dev-selfiegram.consumertrack.com/users/1/posts', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded'
      }),
      body: formBody.join('&')
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  //Combined for like and unlike
  static likeUnlikePost(post) {
    let request;

    //Check which API method to use
    if (post.is_liked) {
      request = new Request(`https://dev-selfiegram.consumertrack.com/users/1/posts/${post.id}/likes`, {
        method: 'DELETE',
      });
    } else {
      request = new Request(`https://dev-selfiegram.consumertrack.com/users/1/posts/${post.id}/likes`, {
        method: 'POST',
      });
    }

    //Update post right away to prevent waiting for a data reload to display
    return fetch(request).then(response => {
      let newPost = Object.assign({}, post);
      if (post.is_liked) {
        newPost.is_liked = false;
        newPost.likes_count--;
      } else {
        newPost.is_liked = true;
        newPost.likes_count++;
      }
      return newPost;
    }).catch(error => {
      return error;
    });
  }
}

export default PostApi;
