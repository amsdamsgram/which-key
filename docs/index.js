// use var to make it compatible with Safari
var shiftIsDown = false
const shiftKeycode = 16

// Watch keyup event
document.addEventListener('keyup', function(e) {
  const key = document.querySelector('.key')
  const keycode = document.querySelector('.keycode')

  // Don't display shift keycode when another key is being pressed
  if (shiftIsDown && keycode === shiftKeycode) return;

  key.textContent = e.key || ''
  keycode.textContent = e.which || e.keyCode
})

// Watch if shift key is down
document.addEventListener('keydown', function(e) {
  const keycode = e.which || e.keyCode
  if (keycode === shiftKeycode) {
    shiftIsDown = true
  }
})

function createHtml() {
  const html = `
    <div class="content">
      <label class="key">Type something!</label>
      <label class="keycode"></label>
    </div>
  `
  document.body.innerHTML = html
}

createHtml()
