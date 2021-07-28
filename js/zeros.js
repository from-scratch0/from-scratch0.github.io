window.addEventListener('DOMContentLoaded', () => {
    // darkmode
  
    // sidebar
    ;(() => {
      let toggle = true
      const sidebar = document.querySelector('.sidebar')
      const sidebarButton = document.querySelector('.sidebar__button')
      sidebarButton && sidebarButton.addEventListener('click', function() {
        toggle
          ? sidebar.classList.add('sidebar--expend')
          : sidebar.classList.remove('sidebar--expend')
        toggle
          ? sidebarButton.classList.add('sidebar__button--expend')
          : sidebarButton.classList.remove('sidebar__button--expend')
        toggle = !toggle
      })
    })()
  })
  