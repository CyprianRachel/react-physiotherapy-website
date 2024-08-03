export const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" }); // przewijanie do samej góry, natychmiastowo
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
