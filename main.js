const btn_changeTheme = document.getElementById('changeTheme')

btn_changeTheme.addEventListener('click', () => {
  document.body.classList.toggle('lighmode')
})