export default () => {
  document.querySelectorAll('.recent-post-content img,.article-entry img').forEach(img => {
    let outer = img.outerHTML
    let imgSrc = img.src
    let imgAlt = img.alt
    img.outerHTML = `<a class="fancy-link" href="${imgSrc}" data-fancybox="group" data-caption="${imgAlt}">${outer}<div class="img-alt">${imgAlt}</div></a>`
  })
}