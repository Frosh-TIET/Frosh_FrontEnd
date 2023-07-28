const cards = document.querySelectorAll('.card');

cards.forEach((card, index) => {
  card.addEventListener('mouseenter', () => {
    cards.forEach((siblingCard, siblingIndex) => {
      if (siblingIndex !== index) {
        siblingCard.querySelector('.card__background').style.filter =
          'brightness(0.5) saturate(0) contrast(1.2) blur(20px)';
      }
    });
  });

  card.addEventListener('mouseleave', () => {
    cards.forEach((siblingCard) => {
      siblingCard.querySelector('.card__background').style.filter = 'none';
    });
  });
});



