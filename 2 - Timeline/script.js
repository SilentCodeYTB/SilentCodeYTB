let timelineCards = document.querySelectorAll(".timeline-card");

timelineCards.forEach(function (timelineCard) {
  let observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        timelineCard.classList.add("fix");
      } else {
        timelineCard.classList.remove("fix");
      }
    });
  });
  observer.observe(timelineCard);
});
