// TO DO 
//
// Make a thing that does all the things that you want to do 
//
//
// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
//
//
// I should really be studying for my midterm
//
//
function scrollOnePost() {
  const posts = document.querySelectorAll('shreddit-post');
  if (posts.length === 0) return;

  const firstPost = posts[0];
  const postHeight = firstPost.getBoundingClientRect().height;

  window.scrollBy({
    top: postHeight,
    behavior: 'smooth'
  });
}

console.log("Is this fucking thing working or what");
scrollOnePost();
