document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger")
    const navLinks = document.querySelector(".nav-links")

    if (hamburger) {
      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active")
      })
    }
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        if (navLinks.classList.contains("active")) {
          navLinks.classList.remove("active")
        }
  
        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          })
        }
      })
    })
      const tabButtons = document.querySelectorAll(".tab-btn")
    const tabPanes = document.querySelectorAll(".tab-pane")
  
    tabButtons.forEach((button) => {
      button.addEventListener("click", function () {
        tabButtons.forEach((btn) => btn.classList.remove("active"))
        tabPanes.forEach((pane) => pane.classList.remove("active"))
          this.classList.add("active")
          const tabId = this.getAttribute("data-tab")
        document.getElementById(`tab-${tabId}`).classList.add("active")
      })
    })
      const enrollmentForm = document.getElementById("enrollment-form")
    const formSuccess = document.getElementById("form-success")
  
    if (enrollmentForm) {
      enrollmentForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const phone = document.getElementById("phone").value
        const background = document.getElementById("background").value
  
        if (!name || !email || !phone || !background) {
          alert("Please fill in all required fields.")
          return
        }
        enrollmentForm.style.display = "none"
        formSuccess.classList.remove("hidden")
          enrollmentForm.reset()
      })
    }
      const revealElements = document.querySelectorAll(".objectives-list li, .audience-item, .career-item")
  
    function checkScroll() {
      const triggerBottom = window.innerHeight * 0.8
  
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        if (elementTop < triggerBottom) {
          element.style.opacity = "1"
          element.style.transform = "translateY(0)"
        }
      })
    }
    revealElements.forEach((element) => {
      element.style.opacity = "0"
      element.style.transform = "translateY(20px)"
      element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
    })
    window.addEventListener("load", checkScroll)
    window.addEventListener("scroll", checkScroll)
  })
  
  