
// Watch keyup event
document.addEventListener('keyup', function(e) {
  const key = document.querySelector('.key')
  const keycode = document.querySelector('.keycode')

  key.textContent = e.key || ''
  keycode.textContent = e.which || e.keyCode

  // Handle space case
  if (keycode.textContent == 32) {
    key.textContent = "Space"
  }

  if (key.textContent === '') {
    key.classList.add('hide')
  } else {
    key.classList.remove('hide')
  }
})

function createHtml() {
  const html = `
    <div class="content">
      <div class="keycode">Type something!</div>
      <div class="key hide"></div>
    </div>
  `
  document.body.innerHTML = html
}

createHtml()
